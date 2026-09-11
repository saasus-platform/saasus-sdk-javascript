import {
  CreateEventBridgeEventParam,
  EventBridgeSettings,
  AwsRegion
} from '../../../src/generated/Integration';

const DEFAULT_ACCOUNT_ID = '267185063265';
const DEFAULT_REGION: AwsRegion = 'ap-northeast-1';

const getEnvWithDefault = (key: string, fallback: string): string => {
  const value = process.env[key];
  return value && value.length > 0 ? value : fallback;
};

export const getTestAwsAccountId = (): string =>
  getEnvWithDefault('TEST_AWS_ACCOUNT_ID', DEFAULT_ACCOUNT_ID);

export const getTestAwsRegion = (): AwsRegion => {
  const envRegion = process.env.TEST_AWS_REGION as AwsRegion | undefined;
  return envRegion || DEFAULT_REGION;
};

export const generateTestEventMessage = () => ({
  event_type: 'api_call',
  event_detail_type: 'create_user',
  message: JSON.stringify({
    id: Math.random().toString(36).substring(2),
    name: 'integration-e2e'
  })
});

export const createEventBridgeSettingsPayload = (): EventBridgeSettings => ({
  aws_account_id: getTestAwsAccountId(),
  aws_region: getTestAwsRegion()
});

export const createEventBridgeEventPayload = (): CreateEventBridgeEventParam => ({
  event_messages: [generateTestEventMessage()]
});
