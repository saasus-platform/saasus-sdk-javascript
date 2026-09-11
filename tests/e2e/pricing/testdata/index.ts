import * as fs from 'fs';
import * as path from 'path';

interface TestParams {
  metering_unit: {
    unit_name: string;
    display_name: string;
    description: string;
    aggregate_usage: string;
  };
  pricing_unit: {
    name: string;
    display_name: string;
    description: string;
    type: string;
    currency: string;
    unit_amount: number;
    recurring_interval: string;
  };
  pricing_menu: {
    name: string;
    display_name: string;
    description: string;
  };
  pricing_plan: {
    name: string;
    display_name: string;
    description: string;
  };
  tax_rate: {
    name: string;
    display_name: string;
    description: string;
    percentage: number;
    country: string;
    inclusive: boolean;
  };
}

let cachedParams: TestParams | null = null;

export const loadTestParams = (): TestParams => {
  if (cachedParams) {
    return cachedParams;
  }

  // Use path relative to project root
  const paramsPath = path.join(process.cwd(), 'tests/e2e/pricing/testdata/test_params.json');
  const data = fs.readFileSync(paramsPath, 'utf-8');
  cachedParams = JSON.parse(data);
  return cachedParams!;
};
