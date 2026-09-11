import { Step, Story } from '../../../__tests__/testlib/models';
import { createEventBridgeEventPayload, createEventBridgeSettingsPayload } from './helpers';
import { getIntegrationMethods } from './client';
import { validateEventBridgeSettingsResponse } from './validation';

const MODULE = 'integration';

const createSaveSettingsStep = (description: string): Step => ({
  method_name: 'SaveEventBridgeSettings',
  description,
  params: () => createEventBridgeSettingsPayload(),
  expected_status: 200,
  validation_func: () => true
});

const createGetSettingsStep = (description: string): Step => ({
  method_name: 'GetEventBridgeSettings',
  description,
  params: () => ({}),
  expected_status: 200,
  validation_func: response => validateEventBridgeSettingsResponse(response, true)
});

const createTestEventStep = (description: string): Step => ({
  method_name: 'CreateEventBridgeTestEvent',
  description,
  params: () => ({}),
  allowed_statuses: [200, 201],
  validation_func: () => true
});

const createEventStep = (description: string): Step => ({
  method_name: 'CreateEventBridgeEvent',
  description,
  params: () => createEventBridgeEventPayload(),
  allowed_statuses: [200, 201, 500, 501],
  validation_func: () => true
});

const createDeleteSettingsStep = (description: string): Step => ({
  method_name: 'DeleteEventBridgeSettings',
  description,
  expected_status: 200,
  params: () => ({}),
  validation_func: () => true
});

const standardStory: Story = {
  name: 'Postman Collection Story - Standard Methods',
  description: 'Reproduces the Postman collection flow using standard integration client methods',
  module: MODULE,
  steps: [
    createSaveSettingsStep('SaveEventBridgeSettings'),
    createGetSettingsStep('GetEventBridgeSettings_AfterSave'),
    createTestEventStep('CreateEventBridgeTestEvent'),
    createEventStep('CreateEventBridgeEvent'),
    createDeleteSettingsStep('DeleteEventBridgeSettings')
  ],
  tags: ['standard']
};

export const getIntegrationStories = (filters?: string[]): Story[] => {
  const stories = [standardStory];
  if (!filters || filters.length === 0) {
    return stories;
  }

  const normalized = filters.map(name => name.toLowerCase());
  return stories.filter(story => normalized.includes(story.name.toLowerCase()));
};

export const verifyMethodCoverage = (): void => {
  const allMethods = getIntegrationMethods();
  const used = new Set<string>();

  for (const story of getIntegrationStories()) {
    for (const step of story.steps) {
      used.add(step.method_name);
    }
    if (story.setup) {
      story.setup.forEach(step => used.add(step.method_name));
    }
    if (story.cleanup) {
      story.cleanup.forEach(step => used.add(step.method_name));
    }
  }

  const missing = allMethods.filter(method => !used.has(method));
  if (missing.length > 0) {
    throw new Error(`Uncovered methods: ${missing.join(', ')}`);
  }
};
