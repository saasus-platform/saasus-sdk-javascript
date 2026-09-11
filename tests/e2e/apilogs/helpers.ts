import { ApiLogs } from '../../../src/generated/ApiLog';

export interface ApiLogStoryVariables {
  api_log_id?: string;
  created_date?: string;
  created_at_unix?: number;
  created_at_iso?: string;
  cursor?: string;
}

const toIsoStringFromUnix = (unixTime: number): string => {
  return new Date(unixTime * 1000).toISOString();
};

export const createEmptyGetLogsParams = (): Record<string, never> => ({
  /* Intentionally empty. MethodExecutor will call client with no args. */
});

export const createGetLogsWithQueryParams = (
  vars: ApiLogStoryVariables
): [string, string, number | undefined, string | undefined] => {
  if (!vars.created_date) {
    throw new Error('created_date variable is not populated');
  }
  if (!vars.created_at_iso) {
    throw new Error('created_at variable is not populated');
  }
  return [vars.created_date, vars.created_at_iso, undefined, vars.cursor];
};

export const createGetLogParams = (
  vars: ApiLogStoryVariables
): [string] => {
  const apiLogId = vars.api_log_id;
  if (!apiLogId) {
    throw new Error('API log id is not available in shared state');
  }
  return [apiLogId];
};

export const extractApiLogVariables = (
  payload: ApiLogs,
  vars: ApiLogStoryVariables
): void => {
  const logs = payload?.api_logs;
  if (!Array.isArray(logs) || logs.length === 0) {
    throw new Error('ApiLogs payload does not include any api_logs entries');
  }

  const firstLog = logs[0];
  if (!firstLog?.api_log_id) {
    throw new Error('api_log_id is not present in the ApiLogs response');
  }

  vars.api_log_id = firstLog.api_log_id;
  vars.created_date = firstLog.created_date;
  vars.created_at_unix = firstLog.created_at;
  if (typeof firstLog.created_at === 'number') {
    vars.created_at_iso = toIsoStringFromUnix(firstLog.created_at);
  }
  if (payload.cursor) {
    vars.cursor = payload.cursor;
  }
};
