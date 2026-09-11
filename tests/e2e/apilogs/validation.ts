import { ApiLog, ApiLogs } from '../../../src/generated/ApiLog';

export const validateApiLogsList = (response: ApiLogs): boolean => {
  if (!response || !Array.isArray(response.api_logs)) {
    console.error('ApiLogs payload does not include api_logs array');
    return false;
  }
  if (response.api_logs.length === 0) {
    console.error('ApiLogs payload does not contain any log entries');
    return false;
  }
  return true;
};

export const validateApiLogEntry = (response: ApiLog): boolean => {
  if (!response || !response.api_log_id) {
    console.error('ApiLog payload is missing api_log_id');
    return false;
  }
  return true;
};
