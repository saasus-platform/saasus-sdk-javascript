import { Step, Story } from '../../../__tests__/testlib/models';
import { getCommunicationMethods } from './client';
import {
  buildCreateFeedbackCommentParams,
  buildCreateFeedbackParams,
  buildCreateVoteParams,
  buildDeleteFeedbackCommentParams,
  buildDeleteFeedbackParams,
  buildDeleteVoteParams,
  buildGetFeedbackCommentParams,
  buildGetFeedbackParams,
  buildGetFeedbacksParams,
  buildUpdateFeedbackCommentParams,
  buildUpdateFeedbackParams,
  buildUpdateFeedbackStatusParams,
  captureCommentState,
  captureFeedbackState,
  ensureCommunicationState,
  getTestUserId,
  resetCommunicationState
} from './helpers';
import {
  validateComment,
  validateCommentOrEmpty,
  validateDeleteResponse,
  validateFeedback,
  validateFeedbackList,
  validateFeedbackOrEmpty,
  validateVotes,
  validateVotesOrEmpty
} from './validation';

const MODULE = 'communication';
const STORY_NAME = 'Postman Collection Story - Standard Methods';

const getFeedbacksStep: Step = {
  method_name: 'GetFeedbacks',
  description: 'ListFeedbacks',
  params: () => buildGetFeedbacksParams(),
  expected_status: 200,
  validation_func: response => validateFeedbackList(response),
  state_update: (_response, vars) => {
    const state = ensureCommunicationState(vars);
    if (!state.userId) {
      state.userId = getTestUserId();
    }
  }
};

const createFeedbackStep: Step = {
  method_name: 'CreateFeedback',
  description: 'CreateFeedback',
  params: vars => buildCreateFeedbackParams(vars),
  expected_status: 201,
  validation_func: response => validateFeedback(response),
  state_update: (response, vars) => captureFeedbackState(response, vars)
};

const getFeedbackStep: Step = {
  method_name: 'GetFeedback',
  description: 'GetFeedback',
  params: vars => buildGetFeedbackParams(vars),
  expected_status: 200,
  validation_func: response => validateFeedback(response)
};

const updateFeedbackStep: Step = {
  method_name: 'UpdateFeedback',
  description: 'UpdateFeedback',
  params: vars => buildUpdateFeedbackParams(vars),
  expected_status: 200,
  validation_func: response => validateFeedbackOrEmpty(response)
};

const updateFeedbackStatusStep: Step = {
  method_name: 'UpdateFeedbackStatus',
  description: 'UpdateFeedbackStatus',
  params: vars => buildUpdateFeedbackStatusParams(vars),
  expected_status: 200,
  validation_func: response => validateFeedbackOrEmpty(response)
};

const createCommentStep: Step = {
  method_name: 'CreateFeedbackComment',
  description: 'CreateFeedbackComment',
  params: vars => buildCreateFeedbackCommentParams(vars),
  expected_status: 201,
  validation_func: response => validateComment(response),
  state_update: (response, vars) => captureCommentState(response, vars)
};

const getCommentStep: Step = {
  method_name: 'GetFeedbackComment',
  description: 'GetFeedbackComment',
  params: vars => buildGetFeedbackCommentParams(vars),
  expected_status: 200,
  validation_func: response => validateComment(response)
};

const updateCommentStep: Step = {
  method_name: 'UpdateFeedbackComment',
  description: 'UpdateFeedbackComment',
  params: vars => buildUpdateFeedbackCommentParams(vars),
  expected_status: 200,
  validation_func: response => validateCommentOrEmpty(response)
};

const createVoteStep: Step = {
  method_name: 'CreateVoteUser',
  description: 'CreateVoteUser',
  params: vars => buildCreateVoteParams(vars),
  expected_status: 201,
  validation_func: response => validateVotes(response)
};

const deleteVoteStep: Step = {
  method_name: 'DeleteVoteForFeedback',
  description: 'DeleteVoteForFeedback',
  params: vars => buildDeleteVoteParams(vars),
  expected_status: 200,
  validation_func: response => validateVotesOrEmpty(response)
};

const deleteCommentStep: Step = {
  method_name: 'DeleteFeedbackComment',
  description: 'DeleteFeedbackComment',
  params: vars => buildDeleteFeedbackCommentParams(vars),
  expected_status: 200,
  validation_func: response => validateDeleteResponse()
};

const deleteFeedbackStep: Step = {
  method_name: 'DeleteFeedback',
  description: 'DeleteFeedback',
  params: vars => buildDeleteFeedbackParams(vars),
  expected_status: 200,
  validation_func: response => validateDeleteResponse(),
  state_update: (_response, vars) => resetCommunicationState(vars)
};

const standardStory: Story = {
  name: STORY_NAME,
  description: 'Recreates the Go SDK Postman story with standard Communication API methods',
  module: MODULE,
  steps: [
    getFeedbacksStep,
    createFeedbackStep,
    getFeedbackStep,
    updateFeedbackStep,
    updateFeedbackStatusStep,
    createCommentStep,
    getCommentStep,
    updateCommentStep,
    createVoteStep,
    deleteVoteStep,
    deleteCommentStep,
    deleteFeedbackStep
  ],
  tags: ['standard']
};

export const getCommunicationStories = (filters?: string[]): Story[] => {
  const stories = [standardStory];
  if (!filters || filters.length === 0) {
    return stories;
  }
  const lower = filters.map(name => name.toLowerCase());
  return stories.filter(story => lower.includes(story.name.toLowerCase()));
};

export const verifyMethodCoverage = (): void => {
  const methods = getCommunicationMethods();
  const used = new Set<string>();
  for (const story of getCommunicationStories()) {
    for (const step of story.steps) {
      used.add(step.method_name);
    }
  }
  const missing = methods.filter(method => !used.has(method));
  if (missing.length > 0) {
    throw new Error(`The following methods are not covered by any story: ${missing.join(', ')}`);
  }
};
