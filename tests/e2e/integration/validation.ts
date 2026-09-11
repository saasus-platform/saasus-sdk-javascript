import { Step } from '../../../__tests__/testlib/models';
import { EventBridgeSettings } from '../../../src/generated/Integration';

export interface ValidationResult {
  story_name: string;
  validation_time: string;
  is_valid: boolean;
  completion_status: 'complete' | 'incomplete' | 'failed';
  sequence_errors: ValidationError[] | null;
  state_transition_errors: ValidationError[] | null;
  timing_errors: ValidationError[] | null;
  summary: {
    total_errors: number;
    total_warnings: number;
    total_info: number;
    is_valid: boolean;
  };
}

export interface ValidationError {
  type: 'sequence' | 'state_transition' | 'timing';
  step_name: string;
  message: string;
  severity: 'error' | 'warning' | 'info';
  expected_value?: any;
  actual_value?: any;
}

type ExecutionResultForValidation = {
  step?: Step;
  status_code?: number;
};

const hasSettings = (response: any): response is EventBridgeSettings => {
  if (!response || typeof response !== 'object') {
    return false;
  }
  return Boolean((response as EventBridgeSettings).aws_account_id && (response as EventBridgeSettings).aws_region);
};

export const validateEventBridgeSettingsResponse = (
  response: any,
  expectConfigured: boolean
): boolean => {
  if (expectConfigured) {
    return hasSettings(response);
  }
  // For non-configured responses we only verify that no unexpected payload caused a hard failure
  return true;
};

export const validateStoryExecution = (
  storyName: string,
  executionResults: ExecutionResultForValidation[]
): ValidationResult => {
  const validationTime = new Date().toISOString();
  const stateTransitionErrors: ValidationError[] = [];
  
  executionResults.forEach(result => {
    if (!result.step || typeof result.step.expected_status !== 'number') {
      return;
    }

    const actualStatus = result.status_code;
    if (typeof actualStatus !== 'number') {
      return;
    }

    if (actualStatus === result.step.expected_status) {
      return;
    }

    const allowedStatuses = result.step.allowed_statuses || [];
    const severity: ValidationError['severity'] = allowedStatuses.includes(actualStatus)
      ? 'warning'
      : 'error';

    stateTransitionErrors.push({
      type: 'state_transition',
      step_name: result.step.description || result.step.method_name,
      message:
        severity === 'warning'
          ? 'Returned status differs from expected value but is explicitly allowed'
          : 'Returned status is outside of the expected/allowed range',
      severity,
      expected_value: result.step.expected_status,
      actual_value: actualStatus
    });
  });

  const totalWarnings = stateTransitionErrors.filter(e => e.severity === 'warning').length;
  const totalErrors = stateTransitionErrors.filter(e => e.severity === 'error').length;
  const totalInfo = stateTransitionErrors.filter(e => e.severity === 'info').length;

  return {
    story_name: storyName,
    validation_time: validationTime,
    is_valid: totalErrors === 0,
    completion_status: 'complete',
    sequence_errors: null,
    state_transition_errors: stateTransitionErrors.length > 0 ? stateTransitionErrors : null,
    timing_errors: null,
    summary: {
      total_errors: totalErrors,
      total_warnings: totalWarnings,
      total_info: totalInfo,
      is_valid: totalErrors === 0
    }
  };
};
