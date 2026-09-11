import { IntegrationE2EClient } from './client';

export const ensureIntegrationTestPreconditions = async (client: IntegrationE2EClient): Promise<void> => {
  try {
    // Clean up any existing EventBridge settings before starting tests
    await client.DeleteEventBridgeSettings();
  } catch (error: any) {
    // Ignore 404 errors as settings might not exist
    if (error.response?.status !== 404) {
      console.warn('Failed to clean up EventBridge settings:', error.message);
    }
  }
};

export const cleanupIntegrationTestState = async (client: IntegrationE2EClient): Promise<void> => {
  try {
    // Clean up EventBridge settings after tests
    await client.DeleteEventBridgeSettings();
  } catch (error: any) {
    // Ignore 404 errors as settings might already be deleted
    if (error.response?.status !== 404) {
      console.warn('Failed to clean up EventBridge settings:', error.message);
    }
  }
};
