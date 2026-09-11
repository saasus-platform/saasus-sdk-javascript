import { Step, Story } from '../../../__tests__/testlib/models';
import { getBillingMethods } from './client';
import { createUpdateStripeInfoParams } from './helpers';
import { loadTestParams } from './testdata';
import {
  validateDeleteStripeInfo,
  validateStripeInfoResponse,
  validateUpdateStripeInfo
} from './validation';

const MODULE = 'billing';

// Load test params lazily
const getTestParams = () => loadTestParams();

const deleteStep = (name: string): Step => ({
  method_name: 'DeleteStripeInfo',
  description: name,
  params: {},
  expected_status: 200,
  validation_func: response => validateDeleteStripeInfo(response)
});

const updateStripeStep = (method: string): Step => ({
  method_name: method,
  description: 'Update Stripe connection',
  params: () => createUpdateStripeInfoParams(getTestParams().stripe_info.updateParams.secret_key),
  expected_status: 200,
  validation_func: response => validateUpdateStripeInfo(response)
});

const updateStripeWithBodyStep = (method: string): Step => ({
  method_name: method,
  description: 'Update Stripe connection with body',
  params: () => ({
    body: createUpdateStripeInfoParams(getTestParams().stripe_info.updateParams.secret_key)
  }),
  expected_status: 200,
  validation_func: response => validateUpdateStripeInfo(response)
});

const getStripeStep = (
  method: string,
  description: string,
  expectedRegistered: boolean,
  setSecret = false
): Step => ({
  method_name: method,
  description,
  params: {},
  expected_status: 200,
  validation_func: response => validateStripeInfoResponse(response, expectedRegistered),
  state_update: setSecret
    ? (_response, vars) => {
        // We don't need to update vars here anymore as we use TEST_PARAMS directly
        // but keeping the structure if needed for other dynamic vars
      }
    : undefined
});

const postmanStoryStandard: Story = {
  name: 'Postman Collection Story - Standard Methods',
  description: 'Reproduces the Postman collection flow using standard billing client methods',
  module: MODULE,
  steps: [
    getStripeStep('GetStripeInfo', 'Pre_GetStripeConnectionInformation', false, true),
    updateStripeStep('UpdateStripeInfo'),
    getStripeStep('GetStripeInfo', 'GetStripeConnectionInformation', true),
    deleteStep('DeleteStripeConnection'),
    getStripeStep('GetStripeInfo', 'Final_GetStripeConnectionInformation', false)
  ],
  tags: ['standard']
};

const postmanStoryStandardWithBody: Story = {
  name: 'Postman Collection Story - Standard Methods With Body',
  description: 'Standard methods that send request bodies',
  module: MODULE,
  steps: [
    getStripeStep('GetStripeInfo', 'Pre_GetStripeConnectionInformation', false, true),
    updateStripeWithBodyStep('UpdateStripeInfoWithBody'),
    getStripeStep('GetStripeInfo', 'GetStripeConnectionInformation', true),
    deleteStep('DeleteStripeConnection'),
    getStripeStep('GetStripeInfo', 'Final_GetStripeConnectionInformation', false)
  ],
  tags: ['standard', 'with-body']
};

export const getBillingStories = (filters?: string[]): Story[] => {
  const stories = [
    postmanStoryStandard,
    postmanStoryStandardWithBody
  ];

  if (!filters || filters.length === 0) {
    return stories;
  }

  const lower = filters.map(name => name.toLowerCase());
  return stories.filter(story => lower.includes(story.name.toLowerCase()));
};

export const verifyMethodCoverage = (): void => {
  const allMethods = getBillingMethods();
  const usedMethods = new Set<string>();

  const stories = getBillingStories();
  for (const story of stories) {
    for (const step of story.steps) {
      usedMethods.add(step.method_name);
    }
  }

  const missingMethods = allMethods.filter(method => !usedMethods.has(method));

  if (missingMethods.length > 0) {
    throw new Error(
      `The following methods are not covered by any story: ${missingMethods.join(', ')}`
    );
  }
};
