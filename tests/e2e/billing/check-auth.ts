import path from 'path';
import dotenv from 'dotenv';
import { createBillingE2EClient } from './client';

const loadEnv = (): void => {
  const envPath = path.resolve(process.cwd(), '.env');
  dotenv.config({ path: envPath });
};

async function checkBillingAuth(): Promise<void> {
  loadEnv();
  const client = createBillingE2EClient();

  try {
    const response = await client.GetStripeInfo();
    console.log('✅ Billing API authentication succeeded');
    console.log(`Status: ${response.status}`);
    console.log('Response data:', response.data);
  } catch (error: any) {
    console.error('❌ Billing API authentication failed');
    if (error.response) {
      console.error(`Status: ${error.response.status}`);
      console.error('Response data:', error.response.data);
    } else {
      console.error(error.message);
    }
    process.exitCode = 1;
  }
}

checkBillingAuth();
