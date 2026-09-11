import {
  Comment,
  CreateFeedbackCommentParam,
  CreateFeedbackParam,
  CreateVoteUserParam,
  Feedback,
  UpdateFeedbackCommentParam,
  UpdateFeedbackParam,
  UpdateFeedbackStatusParam
} from '../../../src/generated/Communication';

export interface CommunicationStoryState {
  feedbackId?: string;
  commentId?: string;
  userId?: string;
  feedbackTitle?: string;
}

const STATE_KEY = 'communication_story_state';
export const COMMUNICATION_TEST_TITLE_PREFIX = 'ts-sdk-e2e-feedback';

export const ensureCommunicationState = (vars: Record<string, any>): CommunicationStoryState => {
  if (!vars[STATE_KEY]) {
    vars[STATE_KEY] = {} as CommunicationStoryState;
  }
  return vars[STATE_KEY] as CommunicationStoryState;
};

export const getTestUserId = (): string =>
  process.env.TEST_USER_ID || '00000000-0000-0000-0000-000000000000';

export const createFeedbackPayload = (state: CommunicationStoryState): CreateFeedbackParam => {
  const userId = state.userId || getTestUserId();
  const title = `${COMMUNICATION_TEST_TITLE_PREFIX}-${new Date().toISOString()}`;

  state.userId = userId;
  state.feedbackTitle = title;

  return {
    user_id: userId,
    feedback_title: title,
    feedback_description: 'TypeScript SDK communication E2E feedback'
  };
};

export const createFeedbackCommentPayload = (): CreateFeedbackCommentParam => ({
  body: 'TypeScript SDK communication E2E comment'
});

export const updateFeedbackPayload = (): UpdateFeedbackParam => ({
  feedback_title: 'Updated feedback title from TS E2E',
  feedback_description: 'Updated feedback description from TS E2E'
});

export const updateFeedbackStatusPayload = (): UpdateFeedbackStatusParam => ({
  status: 1
});

export const updateFeedbackCommentPayload = (): UpdateFeedbackCommentParam => ({
  body: 'Updated TypeScript SDK communication E2E comment'
});

export const createVotePayload = (state: CommunicationStoryState): CreateVoteUserParam => ({
  user_id: state.userId || getTestUserId()
});

export const buildGetFeedbacksParams = (): Record<string, never> => ({});

export const buildCreateFeedbackParams = (
  vars: Record<string, any>
): CreateFeedbackParam => {
  const state = ensureCommunicationState(vars);
  return createFeedbackPayload(state);
};

export const buildGetFeedbackParams = (
  vars: Record<string, any>
): [string] => {
  const state = ensureCommunicationState(vars);
  if (!state.feedbackId) {
    throw new Error('feedbackId is not available in shared state');
  }
  return [state.feedbackId];
};

export const buildUpdateFeedbackParams = (
  vars: Record<string, any>
): [string, UpdateFeedbackParam] => {
  const state = ensureCommunicationState(vars);
  if (!state.feedbackId) {
    throw new Error('feedbackId is not available in shared state');
  }
  return [state.feedbackId, updateFeedbackPayload()];
};

export const buildUpdateFeedbackStatusParams = (
  vars: Record<string, any>
): [string, UpdateFeedbackStatusParam] => {
  const state = ensureCommunicationState(vars);
  if (!state.feedbackId) {
    throw new Error('feedbackId is not available in shared state');
  }
  return [state.feedbackId, updateFeedbackStatusPayload()];
};

export const buildCreateFeedbackCommentParams = (
  vars: Record<string, any>
): [string, CreateFeedbackCommentParam] => {
  const state = ensureCommunicationState(vars);
  if (!state.feedbackId) {
    throw new Error('feedbackId is not available in shared state');
  }
  return [state.feedbackId, createFeedbackCommentPayload()];
};

export const buildGetFeedbackCommentParams = (
  vars: Record<string, any>
): [string, string] => {
  const state = ensureCommunicationState(vars);
  if (!state.feedbackId || !state.commentId) {
    throw new Error('feedbackId or commentId is not available in shared state');
  }
  return [state.feedbackId, state.commentId];
};

export const buildUpdateFeedbackCommentParams = (
  vars: Record<string, any>
): [string, string, UpdateFeedbackCommentParam] => {
  const state = ensureCommunicationState(vars);
  if (!state.feedbackId || !state.commentId) {
    throw new Error('feedbackId or commentId is not available in shared state');
  }
  return [state.feedbackId, state.commentId, updateFeedbackCommentPayload()];
};

export const buildCreateVoteParams = (
  vars: Record<string, any>
): [string, CreateVoteUserParam] => {
  const state = ensureCommunicationState(vars);
  if (!state.feedbackId) {
    throw new Error('feedbackId is not available in shared state');
  }
  if (!state.userId) {
    state.userId = getTestUserId();
  }
  return [state.feedbackId, createVotePayload(state)];
};

export const buildDeleteVoteParams = (
  vars: Record<string, any>
): [string, string] => {
  const state = ensureCommunicationState(vars);
  if (!state.feedbackId) {
    throw new Error('feedbackId is not available in shared state');
  }
  return [state.feedbackId, state.userId || getTestUserId()];
};

export const buildDeleteFeedbackCommentParams = (
  vars: Record<string, any>
): [string, string] => buildGetFeedbackCommentParams(vars);

export const buildDeleteFeedbackParams = (
  vars: Record<string, any>
): [string] => buildGetFeedbackParams(vars);

export const captureFeedbackState = (payload: Feedback, vars: Record<string, any>): void => {
  const state = ensureCommunicationState(vars);
  if (!payload || !payload.id) {
    throw new Error('Feedback payload does not include id');
  }
  state.feedbackId = payload.id;
  if (payload.feedback_title) {
    state.feedbackTitle = payload.feedback_title;
  }
};

export const captureCommentState = (payload: Comment, vars: Record<string, any>): void => {
  const state = ensureCommunicationState(vars);
  if (!payload || !payload.id) {
    throw new Error('Comment payload does not include id');
  }
  state.commentId = payload.id;
};

export const resetCommunicationState = (vars: Record<string, any>): void => {
  const state = ensureCommunicationState(vars);
  state.feedbackId = undefined;
  state.commentId = undefined;
};
