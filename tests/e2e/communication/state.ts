import { Feedback } from '../../../src/generated/Communication';
import { CommunicationE2EClient } from './client';
import { COMMUNICATION_TEST_TITLE_PREFIX } from './helpers';

const isTestFeedback = (feedback: Feedback): boolean => {
  return (
    typeof feedback.feedback_title === 'string' &&
    feedback.feedback_title.startsWith(COMMUNICATION_TEST_TITLE_PREFIX)
  );
};

export const cleanupCommunicationTestArtifacts = async (
  client: CommunicationE2EClient
): Promise<void> => {
  const response = await client.GetFeedbacks();
  const feedbacks = response.data?.feedbacks || [];
  if (!Array.isArray(feedbacks)) {
    return;
  }

  for (const feedback of feedbacks) {
    if (!feedback?.id) {
      continue;
    }
    if (!isTestFeedback(feedback)) {
      continue;
    }
    try {
      await client.DeleteFeedback(feedback.id);
    } catch (error) {
      console.warn(`Failed to delete feedback ${feedback.id}: ${(error as Error).message}`);
    }
  }
};

export const ensureCommunicationTestPreconditions = async (
  client: CommunicationE2EClient
): Promise<void> => {
  await cleanupCommunicationTestArtifacts(client);
};
