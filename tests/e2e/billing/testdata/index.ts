import fs from 'fs';
import path from 'path';

export interface TestParams {
  stripe_info: {
    updateParams: {
      secret_key: string;
    };
  };
}

export const loadTestParams = (): TestParams => {
  const paramFile = path.join(__dirname, 'test_params.json');
  const data = fs.readFileSync(paramFile, 'utf-8');
  const params = JSON.parse(data) as TestParams;

  // Override with environment variable if present
  if (process.env.STRIPE_SECRET_KEY) {
    console.log('Overriding secret_key with STRIPE_SECRET_KEY env var');
    params.stripe_info.updateParams.secret_key = process.env.STRIPE_SECRET_KEY;
  } else {
    console.log('STRIPE_SECRET_KEY env var not found, using default');
  }

  return params;
};
