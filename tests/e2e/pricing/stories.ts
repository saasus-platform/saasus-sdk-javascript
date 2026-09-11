import { Step, Story } from '../../../__tests__/testlib/models';
import { getPricingMethods } from './client';
import {
  validateCreateMeteringUnitResponse,
  validateCreatePricingMenuResponse,
  validateCreatePricingPlanResponse,
  validateCreatePricingUnitResponse,
  validateCreateTaxRateResponse,
  validateDeleteResponse,
  validatePricingUnitsResponse,
  validateMeteringUnitsResponse,
  validatePricingMenuResponse,
  validatePricingMenusResponse,
  validatePricingPlanResponse,
  validatePricingPlansResponse,
  validatePricingUnitResponse,
  validateTaxRatesResponse,
  validateUpdatePricingMenuResponse,
  validateUpdatePricingPlanResponse,
  validateUpdatePricingPlansUsedResponse,
  validateUpdatePricingUnitResponse,
  validateUpdateTaxRateResponse
} from './validation';
import { 
  PricingStoryState, 
  ensureState, 
  requireStateValue, 
  uniqueName, 
  testData 
} from './helpers';

const MODULE = 'pricing';

const buildCreateMeteringUnitStep = (methodName: string, validation: (response: any) => boolean): Step => ({
  method_name: methodName,
  description: 'Create Metering Unit',
  params: vars => {
    const state = ensureState(vars);
    const payload = {
      unit_name: uniqueName(testData.metering_unit.unit_name),
      display_name: testData.metering_unit.display_name,
      description: testData.metering_unit.description,
      aggregate_usage: testData.metering_unit.aggregate_usage
    };
    state.meteringUnitName = payload.unit_name;
    return payload;
  },
  expected_status: 201,
  allowed_statuses: [200, 201],
  validation_func: validation,
  state_update: (response, vars) => {
    const state = ensureState(vars);
    if (typeof response?.id === 'string') {
      state.meteringUnitId = response.id;
    }
    if (typeof response?.unit_name === 'string') {
      state.meteringUnitName = response.unit_name;
    }
  }
});

const buildCreatePricingUnitStep = (methodName: string, validation: (response: any) => boolean): Step => ({
  method_name: methodName,
  description: 'Create Pricing Unit',
  params: vars => {
    const state = ensureState(vars);
    const payload = {
      name: uniqueName(testData.pricing_unit.name),
      display_name: testData.pricing_unit.display_name,
      description: testData.pricing_unit.description,
      type: testData.pricing_unit.type,
      currency: testData.pricing_unit.currency,
      unit_amount: testData.pricing_unit.unit_amount,
      recurring_interval: testData.pricing_unit.recurring_interval
    };
    state.pricingUnitName = payload.name;
    return payload;
  },
  expected_status: 201,
  allowed_statuses: [200, 201],
  validation_func: validation,
  state_update: (response, vars) => {
    const state = ensureState(vars);
    if (typeof response?.id === 'string') {
      state.pricingUnitId = response.id;
    }
    if (typeof response?.name === 'string') {
      state.pricingUnitName = response.name;
    }
  }
});

const buildCreatePricingMenuStep = (
  methodName: string,
  validation: (response: any) => boolean,
  options?: { unitStateKeys?: (keyof PricingStoryState)[] }
): Step => ({
  method_name: methodName,
  description: 'Create Pricing Menu',
  params: vars => {
    const state = ensureState(vars);
    const unitKeys = options?.unitStateKeys || ['pricingUnitId'];
    const unitIds = unitKeys.map(key => requireStateValue(state, key, 'pricing unit id'));
    const payload = {
      name: uniqueName(testData.pricing_menu.name),
      display_name: testData.pricing_menu.display_name,
      description: testData.pricing_menu.description,
      unit_ids: unitIds
    };
    state.pricingMenuName = payload.name;
    return payload;
  },
  expected_status: 201,
  allowed_statuses: [200, 201],
  validation_func: validation,
  state_update: (response, vars) => {
    const state = ensureState(vars);
    if (typeof response?.id === 'string') {
      state.pricingMenuId = response.id;
    }
    if (typeof response?.name === 'string') {
      state.pricingMenuName = response.name;
    }
  }
});

const buildCreateMenuDetachPricingUnitStep = (
  methodName: string,
  validation: (response: any) => boolean
): Step => ({
  method_name: methodName,
  description: 'Create Menu Detach Pricing Unit',
  params: () => {
    const payload = {
      name: uniqueName(testData.pricing_unit.name),
      display_name: `${testData.pricing_unit.display_name} (detach)`,
      description: `${testData.pricing_unit.description} (detach)`,
      type: testData.pricing_unit.type,
      currency: testData.pricing_unit.currency,
      unit_amount: testData.pricing_unit.unit_amount,
      recurring_interval: testData.pricing_unit.recurring_interval
    };
    return payload;
  },
  expected_status: 201,
  allowed_statuses: [200, 201],
  validation_func: validation,
  state_update: (response, vars) => {
    const state = ensureState(vars);
    if (typeof response?.id === 'string') {
      state.menuDetachPricingUnitId = response.id;
    }
    if (typeof response?.name === 'string') {
      state.menuDetachPricingUnitName = response.name;
    }
  }
});

const buildCreatePricingPlanStep = (methodName: string, validation: (response: any) => boolean): Step => ({
  method_name: methodName,
  description: 'Create Pricing Plan',
  params: vars => {
    const state = ensureState(vars);
    const menuId = requireStateValue(state, 'pricingMenuId', 'pricing menu id');
    const payload = {
      name: uniqueName(testData.pricing_plan.name),
      display_name: testData.pricing_plan.display_name,
      description: testData.pricing_plan.description,
      menu_ids: [menuId]
    };
    state.pricingPlanName = payload.name;
    return payload;
  },
  expected_status: 201,
  allowed_statuses: [200, 201],
  validation_func: validation,
  state_update: (response, vars) => {
    const state = ensureState(vars);
    if (typeof response?.id === 'string') {
      state.pricingPlanId = response.id;
    }
    if (typeof response?.name === 'string') {
      state.pricingPlanName = response.name;
    }
  }
});

const buildCreateTaxRateStep = (methodName: string, validation: (response: any) => boolean): Step => ({
  method_name: methodName,
  description: 'Create Tax Rate',
  params: vars => {
    const state = ensureState(vars);
    const payload = {
      name: uniqueName(testData.tax_rate.name),
      display_name: testData.tax_rate.display_name,
      description: testData.tax_rate.description,
      percentage: testData.tax_rate.percentage,
      country: testData.tax_rate.country,
      inclusive: testData.tax_rate.inclusive
    };
    state.taxRateName = payload.name;
    return payload;
  },
  expected_status: 201,
  allowed_statuses: [200, 201],
  validation_func: validation,
  state_update: (response, vars) => {
    const state = ensureState(vars);
    if (typeof response?.id === 'string') {
      state.taxRateId = response.id;
    }
    if (typeof response?.name === 'string') {
      state.taxRateName = response.name;
    }
  }
});

const buildCollectionStep = (
  methodName: string,
  description: string,
  validation: (response: any) => boolean
): Step => ({
  method_name: methodName,
  description,
  params: {},
  expected_status: 200,
  validation_func: validation
});

const buildGetPricingUnitStep = (methodName: string, validation: (response: any) => boolean): Step => ({
  method_name: methodName,
  description: 'Get Pricing Unit',
  params: vars => {
    const state = ensureState(vars);
    return [requireStateValue(state, 'pricingUnitId', 'pricing unit id')];
  },
  expected_status: 200,
  validation_func: validation
});

const buildGetPricingMenuStep = (methodName: string, validation: (response: any) => boolean): Step => ({
  method_name: methodName,
  description: 'Get Pricing Menu',
  params: vars => {
    const state = ensureState(vars);
    return [requireStateValue(state, 'pricingMenuId', 'pricing menu id')];
  },
  expected_status: 200,
  validation_func: validation
});

const buildGetPricingPlanStep = (methodName: string, validation: (response: any) => boolean): Step => ({
  method_name: methodName,
  description: 'Get Pricing Plan',
  params: vars => {
    const state = ensureState(vars);
    return [requireStateValue(state, 'pricingPlanId', 'pricing plan id')];
  },
  expected_status: 200,
  validation_func: validation
});


const buildDeleteStep = (
  methodName: string,
  description: string,
  parameterName: string,
  stateKey: keyof PricingStoryState,
  validation: (response: any) => boolean
): Step => ({
  method_name: methodName,
  description,
  params: vars => {
    const state = ensureState(vars);
    return [requireStateValue(state, stateKey, description)];
  },
  expected_status: 200,
  allowed_statuses: [200, 202, 204],
  validation_func: validation
});

const buildDeleteAllPricingDataStep = (
  methodName: string,
  validation: (response: any) => boolean
): Step => ({
  method_name: methodName,
  description: 'Delete all pricing resources',
  params: {},
  expected_status: 200,
  allowed_statuses: [200, 204],
  validation_func: validation
});

const buildUpdatePricingUnitStep = (methodName: string, validation: (response: any) => boolean): Step => ({
  method_name: methodName,
  description: 'Update Pricing Unit',
  params: vars => {
    const state = ensureState(vars);
    const name = requireStateValue(state, 'pricingUnitName', 'pricing unit name');
    const pricingUnitId = requireStateValue(state, 'pricingUnitId', 'pricing unit id');
    const payload = {
      name,
      display_name: `${testData.pricing_unit.display_name} (updated)`,
      description: `${testData.pricing_unit.description} (updated)`,
      type: testData.pricing_unit.type,
      currency: testData.pricing_unit.currency,
      unit_amount: testData.pricing_unit.unit_amount + 100,
      recurring_interval: testData.pricing_unit.recurring_interval
    };
    return [pricingUnitId, payload];
  },
  expected_status: 200,
  allowed_statuses: [200, 204],
  validation_func: validation
});

const buildUpdatePricingMenuStep = (
  methodName: string,
  validation: (response: any) => boolean,
  options?: { targetMenuKey?: keyof PricingStoryState; targetMenuNameKey?: keyof PricingStoryState; unitStateKeys?: (keyof PricingStoryState)[]; detachUnits?: boolean }
): Step => ({
  method_name: methodName,
  description: 'Update Pricing Menu',
  params: vars => {
    const state = ensureState(vars);
    const menuKey = options?.targetMenuKey || 'pricingMenuId';
    const menuNameKey = options?.targetMenuNameKey || 'pricingMenuName';
    const unitKeys = options?.unitStateKeys || ['pricingUnitId'];
    const name = requireStateValue(state, menuNameKey, 'pricing menu name');
    const unitIds = options?.detachUnits
      ? []
      : unitKeys.map(key => requireStateValue(state, key, 'pricing unit id'));
    const menuId = requireStateValue(state, menuKey, 'pricing menu id');
    const payload = {
      name,
      display_name: `${testData.pricing_menu.display_name} (updated)`,
      description: `${testData.pricing_menu.description} (updated)`,
      unit_ids: unitIds
    };
    return [menuId, payload];
  },
  expected_status: 200,
  allowed_statuses: [200, 204],
  validation_func: validation
});

const buildUpdatePricingPlanStep = (methodName: string, validation: (response: any) => boolean): Step => ({
  method_name: methodName,
  description: 'Update Pricing Plan',
  params: vars => {
    const state = ensureState(vars);
    const name = requireStateValue(state, 'pricingPlanName', 'pricing plan name');
    const planId = requireStateValue(state, 'pricingPlanId', 'pricing plan id');
    const payload = {
      name,
      display_name: `${testData.pricing_plan.display_name} (updated)`,
      description: `${testData.pricing_plan.description} (updated)`,
      menu_ids: [requireStateValue(state, 'pricingMenuId', 'pricing menu id')]
    };
    return [planId, payload];
  },
  expected_status: 200,
  allowed_statuses: [200, 204],
  validation_func: validation
});

const buildUpdatePricingPlansUsedStep = (methodName: string, validation: (response: any) => boolean): Step => ({
  method_name: methodName,
  description: 'Update Pricing Plans Used',
  params: vars => {
    const state = ensureState(vars);
    const payload = {
      plan_ids: [requireStateValue(state, 'pricingPlanId', 'pricing plan id')]
    };
    return [payload];
  },
  expected_status: 200,
  allowed_statuses: [200, 204, 501],
  validation_func: validation
});

const buildUpdateTaxRateStep = (methodName: string, validation: (response: any) => boolean): Step => ({
  method_name: methodName,
  description: 'Update Tax Rate',
  params: vars => {
    const state = ensureState(vars);
    const name = requireStateValue(state, 'taxRateName', 'tax rate name');
    const taxRateId = requireStateValue(state, 'taxRateId', 'tax rate id');
    const payload = {
      name,
      display_name: `${testData.tax_rate.display_name} (updated)`,
      description: `${testData.tax_rate.description} (updated)`,
      percentage: testData.tax_rate.percentage,
      country: testData.tax_rate.country,
      inclusive: testData.tax_rate.inclusive
    };
    return [taxRateId, payload];
  },
  expected_status: 200,
  allowed_statuses: [200, 204],
  validation_func: validation
});

const buildStandardFlowSteps = (): Step[] => {
  const methodNames = {
    createMeteringUnit: 'CreateMeteringUnit',
    getMeteringUnits: 'GetMeteringUnits',
    createPricingUnit: 'CreatePricingUnit',
    getPricingUnits: 'GetPricingUnits',
    getPricingUnit: 'GetPricingUnit',
    createPricingMenu: 'CreatePricingMenu',
    getPricingMenus: 'GetPricingMenus',
    getPricingMenu: 'GetPricingMenu',
    createTaxRate: 'CreateTaxRate',
    getTaxRates: 'GetTaxRates',
    updatePricingUnit: 'UpdatePricingUnit',
    updatePricingMenu: 'UpdatePricingMenu',
    updateTaxRate: 'UpdateTaxRate',
    deletePricingMenu: 'DeletePricingMenu',
    deletePricingUnit: 'DeletePricingUnit',
    deleteMeteringUnit: 'DeleteMeteringUnitById',
    deleteAllPricingData: 'DeleteAllPlansAndMenusAndUnitsAndMetersAndTaxRates'
  } as const;

  const validations = {
    createMeteringUnit: validateCreateMeteringUnitResponse,
    getMeteringUnits: validateMeteringUnitsResponse,
    createPricingUnit: validateCreatePricingUnitResponse,
    getPricingUnits: validatePricingUnitsResponse,
    getPricingUnit: validatePricingUnitResponse,
    createPricingMenu: validateCreatePricingMenuResponse,
    getPricingMenus: validatePricingMenusResponse,
    getPricingMenu: validatePricingMenuResponse,
    createTaxRate: validateCreateTaxRateResponse,
    getTaxRates: validateTaxRatesResponse,
    updatePricingUnit: validateUpdatePricingUnitResponse,
    updatePricingMenu: validateUpdatePricingMenuResponse,
    updateTaxRate: validateUpdateTaxRateResponse,
    delete: validateDeleteResponse
  } as const;

  return [
    buildCreateMeteringUnitStep(methodNames.createMeteringUnit, validations.createMeteringUnit),
    buildCollectionStep(methodNames.getMeteringUnits, 'Get Metering Units', validations.getMeteringUnits),
    buildCreatePricingUnitStep(methodNames.createPricingUnit, validations.createPricingUnit),
    buildUpdatePricingUnitStep(methodNames.updatePricingUnit, validations.updatePricingUnit),
    buildCollectionStep(methodNames.getPricingUnits, 'Get Pricing Units', validations.getPricingUnits),
    buildGetPricingUnitStep(methodNames.getPricingUnit, validations.getPricingUnit),
    buildCreateMenuDetachPricingUnitStep(methodNames.createPricingUnit, validations.createPricingUnit),
    buildCreatePricingMenuStep(methodNames.createPricingMenu, validations.createPricingMenu, {
      unitStateKeys: ['menuDetachPricingUnitId']
    }),
    buildCollectionStep(methodNames.getPricingMenus, 'Get Pricing Menus', validations.getPricingMenus),
    buildGetPricingMenuStep(methodNames.getPricingMenu, validations.getPricingMenu),
    buildCreateTaxRateStep(methodNames.createTaxRate, validations.createTaxRate),
    buildCollectionStep(methodNames.getTaxRates, 'Get Tax Rates', validations.getTaxRates),
    buildUpdatePricingMenuStep(methodNames.updatePricingMenu, validations.updatePricingMenu, {
      unitStateKeys: ['menuDetachPricingUnitId']
    }),
    buildUpdateTaxRateStep(methodNames.updateTaxRate, validations.updateTaxRate),
    buildDeleteStep(methodNames.deletePricingMenu, 'Delete Pricing Menu', 'menuId', 'pricingMenuId', validations.delete),
    buildDeleteStep(
      methodNames.deletePricingUnit,
      'Delete Pricing Unit',
      'pricingUnitId',
      'pricingUnitId',
      validations.delete
    ),
    buildDeleteStep(
      methodNames.deleteMeteringUnit,
      'Delete Metering Unit',
      'meteringUnitId',
      'meteringUnitId',
      validations.delete
    ),
    buildDeleteAllPricingDataStep(methodNames.deleteAllPricingData, validations.delete)
  ];
};

const buildAdditionalCoverageSteps = (): Step[] => {
  const validations = {
    createMeteringUnit: validateCreateMeteringUnitResponse,
    createPricingUnit: validateCreatePricingUnitResponse,
    createPricingMenu: validateCreatePricingMenuResponse,
    createPricingPlan: validateCreatePricingPlanResponse,
    createTaxRate: validateCreateTaxRateResponse,
    getPricingPlans: validatePricingPlansResponse,
    getPricingPlan: validatePricingPlanResponse,
    delete: validateDeleteResponse,
    updatePricingPlan: validateUpdatePricingPlanResponse,
    updatePlansUsed: validateUpdatePricingPlansUsedResponse,
    updateTaxRate: validateUpdateTaxRateResponse
  } as const;

  const methodNames = {
    createMeteringUnit: 'CreateMeteringUnit',
    createPricingUnit: 'CreatePricingUnit',
    createPricingMenu: 'CreatePricingMenu',
    createPricingPlan: 'CreatePricingPlan',
    createTaxRate: 'CreateTaxRate',
    getPricingPlans: 'GetPricingPlans',
    getPricingPlan: 'GetPricingPlan',
    updatePricingPlan: 'UpdatePricingPlan',
    updatePlansUsed: 'UpdatePricingPlansUsed',
    updateTaxRate: 'UpdateTaxRate',
    deletePricingPlan: 'DeletePricingPlan',
    deleteAllPricingData: 'DeleteAllPlansAndMenusAndUnitsAndMetersAndTaxRates'
  } as const;

  return [
    buildCreateMeteringUnitStep(methodNames.createMeteringUnit, validations.createMeteringUnit),
    buildCreatePricingUnitStep(methodNames.createPricingUnit, validations.createPricingUnit),
    buildCreatePricingMenuStep(methodNames.createPricingMenu, validations.createPricingMenu),
    buildCreatePricingPlanStep(methodNames.createPricingPlan, validations.createPricingPlan),
    buildCollectionStep(methodNames.getPricingPlans, 'Get Pricing Plans', validations.getPricingPlans),
    buildGetPricingPlanStep(methodNames.getPricingPlan, validations.getPricingPlan),
    buildUpdatePricingPlanStep(methodNames.updatePricingPlan, validations.updatePricingPlan),
    buildUpdatePricingPlansUsedStep(methodNames.updatePlansUsed, validations.updatePlansUsed),
    buildCreateTaxRateStep(methodNames.createTaxRate, validations.createTaxRate),
    buildUpdateTaxRateStep(methodNames.updateTaxRate, validations.updateTaxRate),
    buildDeleteStep(methodNames.deletePricingPlan, 'Delete Pricing Plan', 'planId', 'pricingPlanId', validations.delete),
    buildDeleteAllPricingDataStep(methodNames.deleteAllPricingData, validations.delete)
  ];
};

const postmanStoryStandard: Story = {
  name: 'Postman Collection Story - Standard Methods',
  description: 'Pricing flow using standard client methods',
  module: MODULE,
  steps: buildStandardFlowSteps(),
  tags: ['standard']
};

const additionalCoverageStandard: Story = {
  name: 'Additional Coverage Story - Standard Struct Methods',
  description: 'Exercises update endpoints using standard methods',
  module: MODULE,
  steps: buildAdditionalCoverageSteps(),
  tags: ['standard', 'additional-coverage']
};

export const getPricingStories = (filters?: string[]): Story[] => {
  const stories = [postmanStoryStandard, additionalCoverageStandard];

  if (!filters || filters.length === 0) {
    return stories;
  }

  const lower = filters.map(name => name.toLowerCase());
  return stories.filter(story => lower.includes(story.name.toLowerCase()));
};

export const verifyMethodCoverage = (): void => {
  const allMethods = getPricingMethods();
  const usedMethods = new Set<string>();

  for (const story of getPricingStories()) {
    for (const step of story.steps) {
      usedMethods.add(step.method_name);
    }
  }

  const missingMethods = allMethods.filter(method => !usedMethods.has(method));
  if (missingMethods.length > 0) {
    console.warn(
      `The following methods are not covered by any story: ${missingMethods.join(', ')}`
    );
  }
};
