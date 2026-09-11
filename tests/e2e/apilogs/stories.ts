import { Step, Story } from '../../../__tests__/testlib/models';
import { getApiLogMethods } from './client';
import {
  ApiLogStoryVariables,
  createEmptyGetLogsParams,
  createGetLogParams,
  createGetLogsWithQueryParams,
  extractApiLogVariables
} from './helpers';
import { validateApiLogEntry, validateApiLogsList } from './validation';

const MODULE = 'apilogapi';
const VAR_STATE_KEY = 'apilog_story_state';

const ensureState = (vars: Record<string, any>): ApiLogStoryVariables => {
  if (!vars[VAR_STATE_KEY]) {
    vars[VAR_STATE_KEY] = {} as ApiLogStoryVariables;
  }
  return vars[VAR_STATE_KEY] as ApiLogStoryVariables;
};

const createGetLogsStep = (
  method: string,
  description: string,
  options?: { captureState?: boolean; withQueryParams?: boolean }
): Step => ({
  method_name: method,
  description,
  params: vars => {
    if (options?.withQueryParams) {
      const state = ensureState(vars);
      return createGetLogsWithQueryParams(state);
    }
    return createEmptyGetLogsParams();
  },
  expected_status: 200,
  validation_func: response => validateApiLogsList(response),
  state_update: options?.captureState
    ? (response, vars) => {
        const state = ensureState(vars);
        extractApiLogVariables(response, state);
      }
    : undefined
});

const createGetLogStep = (method: string): Step => ({
  method_name: method,
  description: 'GetApiLog',
  params: vars => createGetLogParams(ensureState(vars)),
  expected_status: 200,
  validation_func: response => validateApiLogEntry(response)
});

const createStandardStory = (): Story => ({
  name: 'Postman Collection Story - Standard Methods',
  description: 'Reproduces the Postman collection flow using standard ApiLog client methods',
  module: MODULE,
  steps: [
    createGetLogsStep('GetLogs', 'Pre_GetApiLogs', { captureState: true }),
    createGetLogsStep('GetLogs', 'GetApiLogs'),
    createGetLogsStep('GetLogs', 'GetApiLogs With QueryParameters', { withQueryParams: true }),
    createGetLogStep('GetLog')
  ],
  tags: ['standard']
});

export const getApiLogStories = (filters?: string[]): Story[] => {
  const stories = [createStandardStory()];
  if (!filters || filters.length === 0) {
    return stories;
  }

  const lower = filters.map(name => name.toLowerCase());
  return stories.filter(story => lower.includes(story.name.toLowerCase()));
};

export const verifyMethodCoverage = (): void => {
  const allMethods = getApiLogMethods();
  const used = new Set<string>();

  for (const story of getApiLogStories()) {
    for (const step of story.steps) {
      used.add(step.method_name);
    }
  }

  const missing = allMethods.filter(method => !used.has(method));
  if (missing.length > 0) {
    throw new Error(`The following methods are not covered by any story: ${missing.join(', ')}`);
  }
};
