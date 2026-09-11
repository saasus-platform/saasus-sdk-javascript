const isRecord = (value: any): value is Record<string, any> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const hasNonEmptyString = (obj: Record<string, any>, key: string): boolean =>
  typeof obj[key] === 'string' && obj[key].trim().length > 0;

const hasNumber = (obj: Record<string, any>, key: string): boolean =>
  typeof obj[key] === 'number' && Number.isFinite(obj[key]);

const hasBoolean = (obj: Record<string, any>, key: string): boolean => typeof obj[key] === 'boolean';

const requireStrings = (candidate: any, fields: string[]): boolean =>
  isRecord(candidate) && fields.every(field => hasNonEmptyString(candidate, field));

const ensureArrayProperty = (
  container: any,
  keys: string[],
  validator: (item: any) => boolean
): boolean =>
  isRecord(container) && keys.some(key => Array.isArray(container[key]) && container[key].every(validator));

const ensureOptionalArray = (value: any, validator: (item: any) => boolean): boolean => {
  if (value === undefined) {
    return true;
  }
  return Array.isArray(value) && value.every(validator);
};

const ensurePricingUnit = (unit: any): boolean => {
  if (!requireStrings(unit, ['id', 'name', 'display_name', 'description', 'currency', 'type', 'recurring_interval'])) {
    return false;
  }
  if (!hasNumber(unit, 'unit_amount')) {
    return false;
  }
  if (unit && 'used' in unit && !hasBoolean(unit, 'used')) {
    return false;
  }
  return true;
};

const ensurePricingMenu = (menu: any): boolean => {
  if (!requireStrings(menu, ['id', 'name', 'display_name', 'description'])) {
    return false;
  }
  if (!ensureOptionalArray(menu.units, ensurePricingUnit)) {
    return false;
  }
  return true;
};

const ensurePricingPlan = (plan: any): boolean => {
  if (!requireStrings(plan, ['id', 'name', 'display_name', 'description'])) {
    return false;
  }
  if (!ensureOptionalArray(plan.pricing_menus, ensurePricingMenu)) {
    return false;
  }
  if (plan && 'used' in plan && !hasBoolean(plan, 'used')) {
    return false;
  }
  return true;
};

const ensureMeteringUnit = (unit: any): boolean => {
  if (!requireStrings(unit, ['id', 'unit_name', 'display_name', 'description'])) {
    return false;
  }
  if (unit && 'aggregate_usage' in unit && typeof unit.aggregate_usage !== 'string') {
    return false;
  }
  if (unit && 'used' in unit && !hasBoolean(unit, 'used')) {
    return false;
  }
  return true;
};

const ensureTaxRate = (tax: any): boolean => {
  if (!requireStrings(tax, ['id', 'name', 'display_name', 'description', 'country'])) {
    return false;
  }
  if (!hasNumber(tax, 'percentage')) {
    return false;
  }
  if (tax && 'inclusive' in tax && !hasBoolean(tax, 'inclusive')) {
    return false;
  }
  return true;
};

const isEmptyResponse = (response: any): boolean => {
  if (response === undefined || response === null || response === '') {
    return true;
  }
  if (isRecord(response)) {
    return Object.keys(response).length === 0;
  }
  return false;
};

export const validatePricingPlansResponse = (response: any): boolean =>
  ensureArrayProperty(response, ['pricing_plans'], ensurePricingPlan);

export const validatePricingPlanResponse = (response: any): boolean => {
  if (!ensurePricingPlan(response)) {
    return false;
  }
  return true;
};

export const validateCreatePricingPlanResponse = validatePricingPlanResponse;

export const validateDeleteResponse = (response: any): boolean => isEmptyResponse(response);

export const validatePricingMenusResponse = (response: any): boolean =>
  ensureArrayProperty(response, ['pricing_menus'], ensurePricingMenu);

export const validatePricingMenuResponse = (response: any): boolean => ensurePricingMenu(response);
export const validateCreatePricingMenuResponse = validatePricingMenuResponse;

export const validatePricingUnitsResponse = (response: any): boolean =>
  ensureArrayProperty(response, ['units', 'pricing_units'], ensurePricingUnit);

export const validatePricingUnitResponse = ensurePricingUnit;
export const validateCreatePricingUnitResponse = ensurePricingUnit;

export const validateMeteringUnitsResponse = (response: any): boolean =>
  ensureArrayProperty(response, ['units', 'metering_units'], ensureMeteringUnit);

export const validateCreateMeteringUnitResponse = ensureMeteringUnit;

export const validateTaxRatesResponse = (response: any): boolean =>
  ensureArrayProperty(response, ['tax_rates'], ensureTaxRate);

export const validateCreateTaxRateResponse = ensureTaxRate;

export const validateUpdatePricingUnitResponse = (response: any): boolean => isEmptyResponse(response);
export const validateUpdatePricingMenuResponse = (response: any): boolean => isEmptyResponse(response);
export const validateUpdatePricingPlanResponse = (response: any): boolean => isEmptyResponse(response);
export const validateUpdatePricingPlansUsedResponse = (response: any): boolean => isEmptyResponse(response);
export const validateUpdateTaxRateResponse = (response: any): boolean => isEmptyResponse(response);
