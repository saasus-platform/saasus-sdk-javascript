import { AxiosError } from 'axios';
import { AuthClient } from '../../../src/modules/auth-client';
import { BillingE2EClient } from './client';

const LOG_PREFIX = '[Billing E2E]';
const STRIPE_KEY_NOT_REGISTERED = 'stripe key is not registered';

const isAxiosError = (error: unknown): error is AxiosError => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'isAxiosError' in error &&
    (error as any).isAxiosError === true
  );
};

const isIgnorableTenantCleanupError = (error: AxiosError): boolean => {
  if (!error.response) {
    return false;
  }

  if (error.response.status === 400) {
    const message = String(error.response.data?.message || '').toLowerCase();
    return message.includes(STRIPE_KEY_NOT_REGISTERED);
  }

  return false;
};

const isIgnorableDeleteError = (error: AxiosError): boolean => {
  if (!error.response) {
    return false;
  }

  if (error.response.status === 404) {
    return true;
  }

  return false;
};

const cleanupTenantData = async (authClient: AuthClient): Promise<void> => {
  try {
    await authClient.tenantApi.deleteStripeTenantAndPricing();
    console.log(`${LOG_PREFIX} Deleted linked Stripe tenant/pricing data.`);
  } catch (error) {
    if (isAxiosError(error) && isIgnorableTenantCleanupError(error)) {
      console.log(`${LOG_PREFIX} No linked Stripe tenant/pricing data to delete.`);
      return;
    }
    throw error;
  }
};

const removeStripeInfo = async (client: BillingE2EClient): Promise<void> => {
  try {
    await client.DeleteStripeInfo();
    console.log(`${LOG_PREFIX} Removed existing Stripe connection info.`);
  } catch (error) {
    if (isAxiosError(error) && isIgnorableDeleteError(error)) {
      console.log(`${LOG_PREFIX} Stripe connection info already absent.`);
      return;
    }
    throw error;
  }
};

export const ensureStripeTestPreconditions = async (
  client: BillingE2EClient
): Promise<void> => {
  const authClient = new AuthClient();

  await cleanupTenantData(authClient);

  const currentInfo = await client.GetStripeInfo();
  if (!currentInfo.data?.is_registered) {
    return;
  }

  console.log(`${LOG_PREFIX} Stripe connection detected. Resetting before tests...`);
  await removeStripeInfo(client);

  const finalInfo = await client.GetStripeInfo();
  if (finalInfo.data?.is_registered) {
    throw new Error('Unable to reset Stripe connection before running tests.');
  }
};
