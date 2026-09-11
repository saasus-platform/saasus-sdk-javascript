export class StatusChecker {
  check(actualStatus: number, expectedStatus?: number, allowedStatuses?: number[]): boolean {
    if (allowedStatuses && allowedStatuses.length > 0) {
      return allowedStatuses.includes(actualStatus);
    }

    if (expectedStatus !== undefined) {
      return actualStatus === expectedStatus;
    }

    // Default: 2xx is success (including 200 and 201)
    return actualStatus >= 200 && actualStatus < 300;
  }

  getErrorMessage(actualStatus: number, expectedStatus?: number, allowedStatuses?: number[]): string {
    if (allowedStatuses && allowedStatuses.length > 0) {
      return `Expected status to be one of [${allowedStatuses.join(', ')}] but got ${actualStatus}`;
    }

    if (expectedStatus !== undefined) {
      return `Expected status ${expectedStatus} but got ${actualStatus}`;
    }

    return `Expected 2xx status but got ${actualStatus}`;
  }

  isSuccess(status: number): boolean {
    return status >= 200 && status < 300;
  }

  isClientError(status: number): boolean {
    return status >= 400 && status < 500;
  }

  isServerError(status: number): boolean {
    return status >= 500 && status < 600;
  }

  isRedirect(status: number): boolean {
    return status >= 300 && status < 400;
  }

  getStatusCategory(status: number): string {
    if (this.isSuccess(status)) return 'Success';
    if (this.isRedirect(status)) return 'Redirect';
    if (this.isClientError(status)) return 'Client Error';
    if (this.isServerError(status)) return 'Server Error';
    return 'Unknown';
  }
}
