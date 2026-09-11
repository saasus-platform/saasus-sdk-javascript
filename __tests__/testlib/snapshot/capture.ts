import { SDKReturnValue, HTTPResponseSnapshot, SDKMethodError } from './types';

export class ResponseCapture {
  captureResponse(response: any): SDKReturnValue {
    if (!response) {
      return {
        type: 'null',
        statusCode: 0,
        status: 'no response'
      };
    }

    const captured: SDKReturnValue = {
      type: typeof response === 'object' ? response.constructor?.name || 'Object' : typeof response,
      statusCode: this.extractStatusCode(response),
      status: this.extractStatus(response)
    };

    if (response.data) {
      captured.jsonData = this.sanitizeData(response.data);
    } else if (typeof response === 'object') {
      captured.jsonData = this.sanitizeData(response);
    }

    if (response.headers) {
      captured.headers = this.extractHeaders(response.headers);
    }

    if (response.config?.url) {
      captured.httpResponse = {
        statusCode: captured.statusCode,
        status: captured.status,
        headers: captured.headers || {},
        contentLength: JSON.stringify(captured.jsonData || {}).length,
        traceId: response.headers?.['x-trace-id']
      };
    }

    return captured;
  }

  captureError(error: any): SDKMethodError {
    return {
      type: error.constructor?.name || 'Error',
      message: error.message || String(error),
      details: error.response ? JSON.stringify(error.response.data) : undefined
    };
  }

  private extractStatusCode(response: any): number {
    if (response.status) return response.status;
    if (response.statusCode) return response.statusCode;
    if (response.httpResponse?.statusCode) return response.httpResponse.statusCode;
    return 200;
  }

  private extractStatus(response: any): string {
    if (response.statusText) return response.statusText;
    if (response.status) return `${response.status}`;
    return 'OK';
  }

  private extractHeaders(headers: any): Record<string, string> {
    if (!headers) return {};
    
    const result: Record<string, string> = {};
    
    if (typeof headers === 'object') {
      for (const [key, value] of Object.entries(headers)) {
        result[key.toLowerCase()] = String(value);
      }
    }
    
    return result;
  }

  private sanitizeData(data: any): any {
    if (data === null || data === undefined) return data;
    if (typeof data !== 'object') return data;
    if (Array.isArray(data)) return data.map(item => this.sanitizeData(item));

    const sanitized: any = {};
    for (const [key, value] of Object.entries(data)) {
      if (this.isSensitiveKey(key)) {
        sanitized[key] = '***MASKED***';
      } else {
        sanitized[key] = this.sanitizeData(value);
      }
    }
    return sanitized;
  }

  private isSensitiveKey(key: string): boolean {
    const sensitive = ['password', 'secret', 'token', 'key', 'authorization'];
    const lower = key.toLowerCase();
    return sensitive.some(s => lower.includes(s));
  }
}
