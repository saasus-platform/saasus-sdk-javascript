import { UpdateStripeInfoParam } from '../../../src/generated/Billing';

const DEFAULT_STRIPE_KEY = 'sk_test_example_key_for_testing';

export const getTestStripeKey = (): string => {
  return process.env.STRIPE_SECRET_KEY || DEFAULT_STRIPE_KEY;
};

export const createUpdateStripeInfoParams = (secret?: string): UpdateStripeInfoParam => ({
  secret_key: secret || getTestStripeKey()
});
