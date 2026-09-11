import { Config } from './config';
import { TestLogger } from './logger';
import { Step, StepResult } from './models';
import { StatusChecker } from './status-check';

export class MethodExecutor {
  private client: any;
  private config: Config;
  private logger: TestLogger;
  private statusChecker: StatusChecker;
  private variables: Record<string, any>;

  constructor(client: any, config: Config, logger: TestLogger) {
    this.client = client;
    this.config = config;
    this.logger = logger;
    this.statusChecker = new StatusChecker();
    this.variables = {};
  }

  async execute(step: Step): Promise<StepResult> {
    const startTime = Date.now();
    let success = true;
    let response: any = undefined;
    let error: Error | undefined = undefined;
    let statusCode: number | undefined = undefined;
    let resolvedParams: Record<string, any> | undefined;
    let params: any = {};

    // Handle skip
    if (step.skip) {
      return {
        step,
        success: true,
        response: undefined,
        status_code: undefined,
        execution_time: 0,
        timestamp: new Date(),
        skipped: true
      };
    }

    try {
      // Resolve parameters
      if (typeof step.params === 'function') {
        params = step.params(this.variables);
        if (params === undefined) params = {};
      } else {
        params = step.params || {};
      }

      resolvedParams = this.cloneParams(params);

      // Find method
      // The SDK structure might be client.apiName.methodName or just client.methodName
      // We need to support nested access if needed, but for now assuming flat or 1-level deep
      const methodParts = step.method_name.split('.');
      let context = this.client;
      let method: Function | undefined;

      if (methodParts.length === 1) {
        method = this.client[methodParts[0]];
      } else {
        for (let i = 0; i < methodParts.length - 1; i++) {
          context = context[methodParts[i]];
          if (!context) break;
        }
        if (context) {
          method = context[methodParts[methodParts.length - 1]];
        }
      }

      if (typeof method !== 'function') {
        throw new Error(`Method ${step.method_name} not found on client`);
      }

      // Execute method
      if (!this.config.dryRun || !step.skip_on_dry_run) {
        this.logger.logObject(`Request (${step.method_name})`, params, 'DEBUG');

        // Determine how to pass parameters:
        // - Array: spread as positional arguments
        // - null/undefined/empty object: no arguments
        // - Primitive (string, number, boolean): pass as single argument
        // - Object: pass as single argument (payload)
        let result;
        if (Array.isArray(params)) {
          result = await method.call(context, ...params);
        } else if (params === null || params === undefined || (typeof params === 'object' && Object.keys(params).length === 0)) {
          result = await method.call(context);
        } else {
          result = await method.call(context, params);
        }
        
        // Handle axios-like response structure if present
        if (result && result.status) {
            statusCode = result.status;
            response = result.data;
        } else {
            response = result;
            statusCode = 200; // Default to 200 if no status
        }

        this.logger.logObject(`Response (${step.method_name})`, response, 'DEBUG');

        // Store variable if requested
        if (step.store_as) {
          this.variables[step.store_as] = response;
        }

        // Update state if requested
        if (step.state_update) {
          await Promise.resolve(step.state_update(response, this.variables));
        }

        // Validation
        if (!this.statusChecker.check(statusCode!, step.expected_status, step.allowed_statuses)) {
          throw new Error(this.statusChecker.getErrorMessage(statusCode!, step.expected_status, step.allowed_statuses));
        }

        if (step.validation_func && !step.validation_func(response)) {
            throw new Error('Validation function returned false');
        }
      }
    } catch (e: any) {
      success = false;
      error = e;
      // Try to extract status code from error if possible (e.g. axios error)
      if (e.response && e.response.status) {
          statusCode = e.response.status;
          if (e.response.data !== undefined) {
            this.logger.logObject(
              `Error response (${step.method_name})`,
              e.response.data,
              'ERROR'
            );
          }
          
          // Check if this status was actually expected
          if (this.statusChecker.check(statusCode!, step.expected_status, step.allowed_statuses)) {
              success = true;
              error = undefined;
              response = e.response.data;
          }
          if (!success && e.response.data) {
            this.logger.logObject(
              `Error response (${step.method_name})`,
              e.response.data,
              'ERROR'
            );
          }
      } else {
        // Log non-axios errors
        this.logger.logObject(
          `Exception (${step.method_name})`,
          { message: e.message, stack: e.stack?.split('\n').slice(0, 3) },
          'ERROR'
        );
      }
    }

    const endTime = Date.now();
    const executionTime = (endTime - startTime) / 1000;

    return {
      step,
      success,
      response,
      raw_response: success ? (error ? (error as any).response : (statusCode === 200 && !response?.status ? { data: response, status: 200, headers: {} } : (response?.data ? { ...response } : { data: response, status: statusCode, headers: {} }))) : undefined,
      request_params: resolvedParams,
      status_code: statusCode,
      error,
      execution_time: executionTime,
      timestamp: new Date()
    };
  }

  clearVariables(): void {
    this.variables = {};
  }

  setVariables(vars: Record<string, any>): void {
    this.variables = { ...vars };
  }

  private cloneParams(params: any): any {
    if (params === null || params === undefined) {
      return {};
    }
    try {
      return JSON.parse(JSON.stringify(params));
    } catch (e) {
      if (Array.isArray(params)) {
        return [...params];
      }
      if (typeof params === 'object') {
        return { ...params };
      }
      return params;
    }
  }
}
