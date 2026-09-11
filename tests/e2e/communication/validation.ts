import { Comment, Feedback, Feedbacks, Votes } from '../../../src/generated/Communication';

export const validateFeedbackList = (payload: Feedbacks): boolean => {
  if (!payload || !Array.isArray(payload.feedbacks)) {
    console.error('Feedbacks payload does not include feedbacks array');
    return false;
  }
  return true;
};

export const validateFeedback = (payload: Feedback): boolean => {
  if (!payload) {
    console.error('Feedback payload is empty');
    return false;
  }
  if (!payload.id) {
    console.error('Feedback payload does not include id');
    return false;
  }
  if (!payload.feedback_title) {
    console.error('Feedback payload does not include feedback_title');
    return false;
  }
  if (!payload.feedback_description) {
    console.error('Feedback payload does not include feedback_description');
    return false;
  }
  if (!payload.user_id) {
    console.error('Feedback payload does not include user_id');
    return false;
  }
  return true;
};

export const validateFeedbackOrEmpty = (payload: Feedback | undefined): boolean => {
  if (!payload) {
    return true;
  }
  return validateFeedback(payload);
};

export const validateComment = (payload: Comment): boolean => {
  if (!payload) {
    console.error('Comment payload is empty');
    return false;
  }
  if (!payload.id) {
    console.error('Comment payload does not include id');
    return false;
  }
  if (!payload.body) {
    console.error('Comment payload does not include body');
    return false;
  }
  return true;
};

export const validateCommentOrEmpty = (payload: Comment | undefined): boolean => {
  if (!payload) {
    return true;
  }
  return validateComment(payload);
};

export const validateVotes = (payload: Votes): boolean => {
  if (!payload) {
    console.error('Votes payload is empty');
    return false;
  }
  if (typeof payload.count !== 'number') {
    console.error('Votes payload does not include count');
    return false;
  }
  return true;
};

export const validateVotesOrEmpty = (payload: Votes | undefined): boolean => {
  if (!payload) {
    return true;
  }
  return validateVotes(payload);
};

export const validateDeleteResponse = (): boolean => true;
