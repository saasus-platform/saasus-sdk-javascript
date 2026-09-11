export interface PricingStoryState {
  initialized?: boolean;
  meteringUnitId?: string;
  meteringUnitName?: string;
  pricingUnitId?: string;
  pricingUnitName?: string;
  menuDetachPricingUnitId?: string;
  pricingMenuId?: string;
  pricingMenuName?: string;
  cleanupPricingMenuId?: string;
  cleanupPricingMenuName?: string;
  pricingPlanId?: string;
  pricingPlanName?: string;
  taxRateId?: string;
  taxRateName?: string;
}

const STATE_KEY = 'pricing_story_state';
export const PRICING_E2E_PREFIX = 'ts-sdk-pricing-e2e';

export const ensureState = (vars: Record<string, any>): PricingStoryState => {
  if (!vars[STATE_KEY]) {
    vars[STATE_KEY] = {};
  }
  return vars[STATE_KEY] as PricingStoryState;
};

export const requireStateValue = <T>(
  state: PricingStoryState,
  key: keyof PricingStoryState,
  description: string
): T => {
  const value = state[key];
  if (!value) {
    throw new Error(`Missing ${description} in story state`);
  }
  return value as T;
};

export const uniqueName = (baseName: string): string => {
  const timestamp = Date.now();
  const randomSuffix = Math.floor(Math.random() * 10000);
  return `${baseName}_${timestamp}_${Math.floor(Math.random() * 10)}_${randomSuffix}`;
};

export const testData = {
  metering_unit: {
    unit_name: 'user_counts',
    display_name: 'ユーザ数',
    description: 'ユーザ数カウント用のメーター',
    aggregate_usage: 'max' as const
  },
  pricing_unit: {
    name: 'fixed-unit-name1',
    display_name: '固定ユニット1',
    description: '固定ユニットdescription1',
    type: 'fixed' as const,
    currency: 'JPY',
    unit_amount: 300,
    recurring_interval: 'month' as const
  },
  pricing_menu: {
    name: 'fixed-menu_name',
    display_name: '固定UNITメニュー',
    description: 'メニューdescription'
  },
  pricing_plan: {
    name: 'plan_name',
    display_name: 'サンプルプラン',
    description: 'プランdescription'
  },
  tax_rate: {
    name: 'tax_rate_name',
    display_name: '消費税',
    description: '日本の消費税',
    percentage: 10,
    country: 'JP',
    inclusive: false
  }
};
