[saasus-sdk](../README.md) / Pricing/api

# Module: Pricing/api

## Table of contents

### Enumerations

- [AggregateUsage](../enums/Pricing_api.AggregateUsage.md)
- [Currency](../enums/Pricing_api.Currency.md)
- [RecurringInterval](../enums/Pricing_api.RecurringInterval.md)
- [UnitType](../enums/Pricing_api.UnitType.md)
- [UpdateMeteringUnitTimestampCountMethod](../enums/Pricing_api.UpdateMeteringUnitTimestampCountMethod.md)

### Classes

- [ErrorApi](../classes/Pricing_api.ErrorApi.md)
- [MeteringApi](../classes/Pricing_api.MeteringApi.md)
- [PricingMenusApi](../classes/Pricing_api.PricingMenusApi.md)
- [PricingPlansApi](../classes/Pricing_api.PricingPlansApi.md)
- [PricingUnitsApi](../classes/Pricing_api.PricingUnitsApi.md)
- [TaxRateApi](../classes/Pricing_api.TaxRateApi.md)

### Interfaces

- [MeteringUnitCount](../interfaces/Pricing_api.MeteringUnitCount.md)
- [MeteringUnitDateCount](../interfaces/Pricing_api.MeteringUnitDateCount.md)
- [MeteringUnitDateCounts](../interfaces/Pricing_api.MeteringUnitDateCounts.md)
- [MeteringUnitDatePeriodCounts](../interfaces/Pricing_api.MeteringUnitDatePeriodCounts.md)
- [MeteringUnitMonthCount](../interfaces/Pricing_api.MeteringUnitMonthCount.md)
- [MeteringUnitMonthCounts](../interfaces/Pricing_api.MeteringUnitMonthCounts.md)
- [MeteringUnitTimestampCount](../interfaces/Pricing_api.MeteringUnitTimestampCount.md)
- [ModelError](../interfaces/Pricing_api.ModelError.md)
- [PricingFixedUnit](../interfaces/Pricing_api.PricingFixedUnit.md)
- [PricingFixedUnitAllOf](../interfaces/Pricing_api.PricingFixedUnitAllOf.md)
- [PricingFixedUnitForSave](../interfaces/Pricing_api.PricingFixedUnitForSave.md)
- [PricingFixedUnitForSaveAllOf](../interfaces/Pricing_api.PricingFixedUnitForSaveAllOf.md)
- [PricingMenu](../interfaces/Pricing_api.PricingMenu.md)
- [PricingMenuAllOf](../interfaces/Pricing_api.PricingMenuAllOf.md)
- [PricingMenuProps](../interfaces/Pricing_api.PricingMenuProps.md)
- [PricingMenuPropsAllOf](../interfaces/Pricing_api.PricingMenuPropsAllOf.md)
- [PricingMenus](../interfaces/Pricing_api.PricingMenus.md)
- [PricingPlan](../interfaces/Pricing_api.PricingPlan.md)
- [PricingPlanProps](../interfaces/Pricing_api.PricingPlanProps.md)
- [PricingPlanPropsAllOf](../interfaces/Pricing_api.PricingPlanPropsAllOf.md)
- [PricingPlans](../interfaces/Pricing_api.PricingPlans.md)
- [PricingTier](../interfaces/Pricing_api.PricingTier.md)
- [PricingTieredUnit](../interfaces/Pricing_api.PricingTieredUnit.md)
- [PricingTieredUnitForSave](../interfaces/Pricing_api.PricingTieredUnitForSave.md)
- [PricingTieredUnitForSaveAllOf](../interfaces/Pricing_api.PricingTieredUnitForSaveAllOf.md)
- [PricingTieredUsageUnit](../interfaces/Pricing_api.PricingTieredUsageUnit.md)
- [PricingTieredUsageUnitAllOf](../interfaces/Pricing_api.PricingTieredUsageUnitAllOf.md)
- [PricingTieredUsageUnitForSave](../interfaces/Pricing_api.PricingTieredUsageUnitForSave.md)
- [PricingTieredUsageUnitForSaveAllOf](../interfaces/Pricing_api.PricingTieredUsageUnitForSaveAllOf.md)
- [PricingTiers](../interfaces/Pricing_api.PricingTiers.md)
- [PricingUnitBaseProps](../interfaces/Pricing_api.PricingUnitBaseProps.md)
- [PricingUnits](../interfaces/Pricing_api.PricingUnits.md)
- [PricingUsageUnit](../interfaces/Pricing_api.PricingUsageUnit.md)
- [PricingUsageUnitForSave](../interfaces/Pricing_api.PricingUsageUnitForSave.md)
- [PricingUsageUnitForSaveAllOf](../interfaces/Pricing_api.PricingUsageUnitForSaveAllOf.md)
- [SavePricingMenuParam](../interfaces/Pricing_api.SavePricingMenuParam.md)
- [SavePricingPlanParam](../interfaces/Pricing_api.SavePricingPlanParam.md)
- [TaxRate](../interfaces/Pricing_api.TaxRate.md)
- [TaxRateProps](../interfaces/Pricing_api.TaxRateProps.md)
- [TaxRates](../interfaces/Pricing_api.TaxRates.md)
- [UpdateMeteringUnitTimestampCountNowParam](../interfaces/Pricing_api.UpdateMeteringUnitTimestampCountNowParam.md)
- [UpdateMeteringUnitTimestampCountParam](../interfaces/Pricing_api.UpdateMeteringUnitTimestampCountParam.md)
- [UpdatePricingPlansUsedParam](../interfaces/Pricing_api.UpdatePricingPlansUsedParam.md)
- [UpdateTaxRateParam](../interfaces/Pricing_api.UpdateTaxRateParam.md)

### Type Aliases

- [PricingUnit](Pricing_api.md#pricingunit)
- [PricingUnitForSave](Pricing_api.md#pricingunitforsave)

### Functions

- [ErrorApiAxiosParamCreator](Pricing_api.md#errorapiaxiosparamcreator)
- [ErrorApiFactory](Pricing_api.md#errorapifactory)
- [ErrorApiFp](Pricing_api.md#errorapifp)
- [MeteringApiAxiosParamCreator](Pricing_api.md#meteringapiaxiosparamcreator)
- [MeteringApiFactory](Pricing_api.md#meteringapifactory)
- [MeteringApiFp](Pricing_api.md#meteringapifp)
- [PricingMenusApiAxiosParamCreator](Pricing_api.md#pricingmenusapiaxiosparamcreator)
- [PricingMenusApiFactory](Pricing_api.md#pricingmenusapifactory)
- [PricingMenusApiFp](Pricing_api.md#pricingmenusapifp)
- [PricingPlansApiAxiosParamCreator](Pricing_api.md#pricingplansapiaxiosparamcreator)
- [PricingPlansApiFactory](Pricing_api.md#pricingplansapifactory)
- [PricingPlansApiFp](Pricing_api.md#pricingplansapifp)
- [PricingUnitsApiAxiosParamCreator](Pricing_api.md#pricingunitsapiaxiosparamcreator)
- [PricingUnitsApiFactory](Pricing_api.md#pricingunitsapifactory)
- [PricingUnitsApiFp](Pricing_api.md#pricingunitsapifp)
- [TaxRateApiAxiosParamCreator](Pricing_api.md#taxrateapiaxiosparamcreator)
- [TaxRateApiFactory](Pricing_api.md#taxrateapifactory)
- [TaxRateApiFp](Pricing_api.md#taxrateapifp)

## Type Aliases

### PricingUnit

Ƭ **PricingUnit**: [`PricingFixedUnit`](../interfaces/Pricing_api.PricingFixedUnit.md) \| [`PricingTieredUnit`](../interfaces/Pricing_api.PricingTieredUnit.md) \| [`PricingTieredUsageUnit`](../interfaces/Pricing_api.PricingTieredUsageUnit.md) \| [`PricingUsageUnit`](../interfaces/Pricing_api.PricingUsageUnit.md)

**`Export`**

#### Defined in

[src/generated/Pricing/api.ts:1040](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L1040)

___

### PricingUnitForSave

Ƭ **PricingUnitForSave**: [`PricingFixedUnitForSave`](../interfaces/Pricing_api.PricingFixedUnitForSave.md) \| [`PricingTieredUnitForSave`](../interfaces/Pricing_api.PricingTieredUnitForSave.md) \| [`PricingTieredUsageUnitForSave`](../interfaces/Pricing_api.PricingTieredUsageUnitForSave.md) \| [`PricingUsageUnitForSave`](../interfaces/Pricing_api.PricingUsageUnitForSave.md)

**`Export`**

#### Defined in

[src/generated/Pricing/api.ts:1083](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L1083)

## Functions

### ErrorApiAxiosParamCreator

▸ **ErrorApiAxiosParamCreator**(`configuration?`): `Object`

ErrorApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Pricing_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `returnInternalServerError` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |

**`Export`**

#### Defined in

[src/generated/Pricing/api.ts:1562](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L1562)

___

### ErrorApiFactory

▸ **ErrorApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

ErrorApi - factory interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Pricing_configuration.Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `returnInternalServerError` | (`options?`: `any`) => `AxiosPromise`\<`void`\> |

**`Export`**

#### Defined in

[src/generated/Pricing/api.ts:1625](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L1625)

___

### ErrorApiFp

▸ **ErrorApiFp**(`configuration?`): `Object`

ErrorApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Pricing_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `returnInternalServerError` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |

**`Export`**

#### Defined in

[src/generated/Pricing/api.ts:1605](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L1605)

___

### MeteringApiAxiosParamCreator

▸ **MeteringApiAxiosParamCreator**(`configuration?`): `Object`

MeteringApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Pricing_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `deleteMeteringUnitTimestampCount` | (`tenantId`: `string`, `meteringUnitName`: `string`, `timestamp`: `number`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |
| `getMeteringUnitDateCountByTenantIdAndUnitNameAndDate` | (`tenantId`: `string`, `meteringUnitName`: `string`, `date`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |
| `getMeteringUnitDateCountByTenantIdAndUnitNameAndDatePeriod` | (`tenantId`: `string`, `meteringUnitName`: `string`, `startTimestamp?`: `number`, `endTimestamp?`: `number`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |
| `getMeteringUnitDateCountByTenantIdAndUnitNameToday` | (`tenantId`: `string`, `meteringUnitName`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |
| `getMeteringUnitDateCountsByTenantIdAndDate` | (`tenantId`: `string`, `date`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |
| `getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth` | (`tenantId`: `string`, `meteringUnitName`: `string`, `month`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |
| `getMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth` | (`tenantId`: `string`, `meteringUnitName`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |
| `getMeteringUnitMonthCountsByTenantIdAndMonth` | (`tenantId`: `string`, `month`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |
| `updateMeteringUnitTimestampCount` | (`tenantId`: `string`, `meteringUnitName`: `string`, `timestamp`: `number`, `updateMeteringUnitTimestampCountParam?`: [`UpdateMeteringUnitTimestampCountParam`](../interfaces/Pricing_api.UpdateMeteringUnitTimestampCountParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |
| `updateMeteringUnitTimestampCountNow` | (`tenantId`: `string`, `meteringUnitName`: `string`, `updateMeteringUnitTimestampCountNowParam?`: [`UpdateMeteringUnitTimestampCountNowParam`](../interfaces/Pricing_api.UpdateMeteringUnitTimestampCountNowParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |

**`Export`**

#### Defined in

[src/generated/Pricing/api.ts:1664](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L1664)

___

### MeteringApiFactory

▸ **MeteringApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

MeteringApi - factory interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Pricing_configuration.Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `deleteMeteringUnitTimestampCount` | (`tenantId`: `string`, `meteringUnitName`: `string`, `timestamp`: `number`, `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `getMeteringUnitDateCountByTenantIdAndUnitNameAndDate` | (`tenantId`: `string`, `meteringUnitName`: `string`, `date`: `string`, `options?`: `any`) => `AxiosPromise`\<[`MeteringUnitDateCount`](../interfaces/Pricing_api.MeteringUnitDateCount.md)\> |
| `getMeteringUnitDateCountByTenantIdAndUnitNameAndDatePeriod` | (`tenantId`: `string`, `meteringUnitName`: `string`, `startTimestamp?`: `number`, `endTimestamp?`: `number`, `options?`: `any`) => `AxiosPromise`\<[`MeteringUnitDatePeriodCounts`](../interfaces/Pricing_api.MeteringUnitDatePeriodCounts.md)\> |
| `getMeteringUnitDateCountByTenantIdAndUnitNameToday` | (`tenantId`: `string`, `meteringUnitName`: `string`, `options?`: `any`) => `AxiosPromise`\<[`MeteringUnitDateCount`](../interfaces/Pricing_api.MeteringUnitDateCount.md)\> |
| `getMeteringUnitDateCountsByTenantIdAndDate` | (`tenantId`: `string`, `date`: `string`, `options?`: `any`) => `AxiosPromise`\<[`MeteringUnitDateCounts`](../interfaces/Pricing_api.MeteringUnitDateCounts.md)\> |
| `getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth` | (`tenantId`: `string`, `meteringUnitName`: `string`, `month`: `string`, `options?`: `any`) => `AxiosPromise`\<[`MeteringUnitMonthCount`](../interfaces/Pricing_api.MeteringUnitMonthCount.md)\> |
| `getMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth` | (`tenantId`: `string`, `meteringUnitName`: `string`, `options?`: `any`) => `AxiosPromise`\<[`MeteringUnitMonthCount`](../interfaces/Pricing_api.MeteringUnitMonthCount.md)\> |
| `getMeteringUnitMonthCountsByTenantIdAndMonth` | (`tenantId`: `string`, `month`: `string`, `options?`: `any`) => `AxiosPromise`\<[`MeteringUnitMonthCounts`](../interfaces/Pricing_api.MeteringUnitMonthCounts.md)\> |
| `updateMeteringUnitTimestampCount` | (`tenantId`: `string`, `meteringUnitName`: `string`, `timestamp`: `number`, `updateMeteringUnitTimestampCountParam?`: [`UpdateMeteringUnitTimestampCountParam`](../interfaces/Pricing_api.UpdateMeteringUnitTimestampCountParam.md), `options?`: `any`) => `AxiosPromise`\<[`MeteringUnitTimestampCount`](../interfaces/Pricing_api.MeteringUnitTimestampCount.md)\> |
| `updateMeteringUnitTimestampCountNow` | (`tenantId`: `string`, `meteringUnitName`: `string`, `updateMeteringUnitTimestampCountNowParam?`: [`UpdateMeteringUnitTimestampCountNowParam`](../interfaces/Pricing_api.UpdateMeteringUnitTimestampCountNowParam.md), `options?`: `any`) => `AxiosPromise`\<[`MeteringUnitTimestampCount`](../interfaces/Pricing_api.MeteringUnitTimestampCount.md)\> |

**`Export`**

#### Defined in

[src/generated/Pricing/api.ts:2265](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L2265)

___

### MeteringApiFp

▸ **MeteringApiFp**(`configuration?`): `Object`

MeteringApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Pricing_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `deleteMeteringUnitTimestampCount` | (`tenantId`: `string`, `meteringUnitName`: `string`, `timestamp`: `number`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `getMeteringUnitDateCountByTenantIdAndUnitNameAndDate` | (`tenantId`: `string`, `meteringUnitName`: `string`, `date`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`MeteringUnitDateCount`](../interfaces/Pricing_api.MeteringUnitDateCount.md)\>\> |
| `getMeteringUnitDateCountByTenantIdAndUnitNameAndDatePeriod` | (`tenantId`: `string`, `meteringUnitName`: `string`, `startTimestamp?`: `number`, `endTimestamp?`: `number`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`MeteringUnitDatePeriodCounts`](../interfaces/Pricing_api.MeteringUnitDatePeriodCounts.md)\>\> |
| `getMeteringUnitDateCountByTenantIdAndUnitNameToday` | (`tenantId`: `string`, `meteringUnitName`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`MeteringUnitDateCount`](../interfaces/Pricing_api.MeteringUnitDateCount.md)\>\> |
| `getMeteringUnitDateCountsByTenantIdAndDate` | (`tenantId`: `string`, `date`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`MeteringUnitDateCounts`](../interfaces/Pricing_api.MeteringUnitDateCounts.md)\>\> |
| `getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth` | (`tenantId`: `string`, `meteringUnitName`: `string`, `month`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`MeteringUnitMonthCount`](../interfaces/Pricing_api.MeteringUnitMonthCount.md)\>\> |
| `getMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth` | (`tenantId`: `string`, `meteringUnitName`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`MeteringUnitMonthCount`](../interfaces/Pricing_api.MeteringUnitMonthCount.md)\>\> |
| `getMeteringUnitMonthCountsByTenantIdAndMonth` | (`tenantId`: `string`, `month`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`MeteringUnitMonthCounts`](../interfaces/Pricing_api.MeteringUnitMonthCounts.md)\>\> |
| `updateMeteringUnitTimestampCount` | (`tenantId`: `string`, `meteringUnitName`: `string`, `timestamp`: `number`, `updateMeteringUnitTimestampCountParam?`: [`UpdateMeteringUnitTimestampCountParam`](../interfaces/Pricing_api.UpdateMeteringUnitTimestampCountParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`MeteringUnitTimestampCount`](../interfaces/Pricing_api.MeteringUnitTimestampCount.md)\>\> |
| `updateMeteringUnitTimestampCountNow` | (`tenantId`: `string`, `meteringUnitName`: `string`, `updateMeteringUnitTimestampCountNowParam?`: [`UpdateMeteringUnitTimestampCountNowParam`](../interfaces/Pricing_api.UpdateMeteringUnitTimestampCountNowParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`MeteringUnitTimestampCount`](../interfaces/Pricing_api.MeteringUnitTimestampCount.md)\>\> |

**`Export`**

#### Defined in

[src/generated/Pricing/api.ts:2127](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L2127)

___

### PricingMenusApiAxiosParamCreator

▸ **PricingMenusApiAxiosParamCreator**(`configuration?`): `Object`

PricingMenusApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Pricing_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `createPricingMenu` | (`body?`: [`SavePricingMenuParam`](../interfaces/Pricing_api.SavePricingMenuParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |
| `deletePricingMenu` | (`menuId`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |
| `getPricingMenu` | (`menuId`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |
| `getPricingMenus` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |
| `updatePricingMenu` | (`menuId`: `string`, `body?`: [`SavePricingMenuParam`](../interfaces/Pricing_api.SavePricingMenuParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |

**`Export`**

#### Defined in

[src/generated/Pricing/api.ts:2540](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L2540)

___

### PricingMenusApiFactory

▸ **PricingMenusApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

PricingMenusApi - factory interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Pricing_configuration.Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createPricingMenu` | (`body?`: [`SavePricingMenuParam`](../interfaces/Pricing_api.SavePricingMenuParam.md), `options?`: `any`) => `AxiosPromise`\<[`PricingMenu`](../interfaces/Pricing_api.PricingMenu.md)\> |
| `deletePricingMenu` | (`menuId`: `string`, `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `getPricingMenu` | (`menuId`: `string`, `options?`: `any`) => `AxiosPromise`\<[`PricingMenu`](../interfaces/Pricing_api.PricingMenu.md)\> |
| `getPricingMenus` | (`options?`: `any`) => `AxiosPromise`\<[`PricingMenus`](../interfaces/Pricing_api.PricingMenus.md)\> |
| `updatePricingMenu` | (`menuId`: `string`, `body?`: [`SavePricingMenuParam`](../interfaces/Pricing_api.SavePricingMenuParam.md), `options?`: `any`) => `AxiosPromise`\<`void`\> |

**`Export`**

#### Defined in

[src/generated/Pricing/api.ts:2804](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L2804)

___

### PricingMenusApiFp

▸ **PricingMenusApiFp**(`configuration?`): `Object`

PricingMenusApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Pricing_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createPricingMenu` | (`body?`: [`SavePricingMenuParam`](../interfaces/Pricing_api.SavePricingMenuParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`PricingMenu`](../interfaces/Pricing_api.PricingMenu.md)\>\> |
| `deletePricingMenu` | (`menuId`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `getPricingMenu` | (`menuId`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`PricingMenu`](../interfaces/Pricing_api.PricingMenu.md)\>\> |
| `getPricingMenus` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`PricingMenus`](../interfaces/Pricing_api.PricingMenus.md)\>\> |
| `updatePricingMenu` | (`menuId`: `string`, `body?`: [`SavePricingMenuParam`](../interfaces/Pricing_api.SavePricingMenuParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |

**`Export`**

#### Defined in

[src/generated/Pricing/api.ts:2739](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L2739)

___

### PricingPlansApiAxiosParamCreator

▸ **PricingPlansApiAxiosParamCreator**(`configuration?`): `Object`

PricingPlansApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Pricing_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `createPricingPlan` | (`body?`: [`SavePricingPlanParam`](../interfaces/Pricing_api.SavePricingPlanParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |
| `deleteAllPlansAndMenusAndUnitsAndMetersAndTaxRates` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |
| `deletePricingPlan` | (`planId`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |
| `deleteStripePlan` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |
| `getPricingPlan` | (`planId`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |
| `getPricingPlans` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |
| `linkPlanToStripe` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |
| `updatePricingPlan` | (`planId`: `string`, `body?`: [`SavePricingPlanParam`](../interfaces/Pricing_api.SavePricingPlanParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |
| `updatePricingPlansUsed` | (`updatePricingPlansUsedParam?`: [`UpdatePricingPlansUsedParam`](../interfaces/Pricing_api.UpdatePricingPlansUsedParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |

**`Export`**

#### Defined in

[src/generated/Pricing/api.ts:2933](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L2933)

___

### PricingPlansApiFactory

▸ **PricingPlansApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

PricingPlansApi - factory interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Pricing_configuration.Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createPricingPlan` | (`body?`: [`SavePricingPlanParam`](../interfaces/Pricing_api.SavePricingPlanParam.md), `options?`: `any`) => `AxiosPromise`\<[`PricingPlan`](../interfaces/Pricing_api.PricingPlan.md)\> |
| `deleteAllPlansAndMenusAndUnitsAndMetersAndTaxRates` | (`options?`: `any`) => `AxiosPromise`\<`void`\> |
| `deletePricingPlan` | (`planId`: `string`, `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `deleteStripePlan` | (`options?`: `any`) => `AxiosPromise`\<`void`\> |
| `getPricingPlan` | (`planId`: `string`, `options?`: `any`) => `AxiosPromise`\<[`PricingPlan`](../interfaces/Pricing_api.PricingPlan.md)\> |
| `getPricingPlans` | (`options?`: `any`) => `AxiosPromise`\<[`PricingPlans`](../interfaces/Pricing_api.PricingPlans.md)\> |
| `linkPlanToStripe` | (`options?`: `any`) => `AxiosPromise`\<`void`\> |
| `updatePricingPlan` | (`planId`: `string`, `body?`: [`SavePricingPlanParam`](../interfaces/Pricing_api.SavePricingPlanParam.md), `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `updatePricingPlansUsed` | (`updatePricingPlansUsedParam?`: [`UpdatePricingPlansUsedParam`](../interfaces/Pricing_api.UpdatePricingPlansUsedParam.md), `options?`: `any`) => `AxiosPromise`\<`void`\> |

**`Export`**

#### Defined in

[src/generated/Pricing/api.ts:3378](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L3378)

___

### PricingPlansApiFp

▸ **PricingPlansApiFp**(`configuration?`): `Object`

PricingPlansApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Pricing_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createPricingPlan` | (`body?`: [`SavePricingPlanParam`](../interfaces/Pricing_api.SavePricingPlanParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`PricingPlan`](../interfaces/Pricing_api.PricingPlan.md)\>\> |
| `deleteAllPlansAndMenusAndUnitsAndMetersAndTaxRates` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `deletePricingPlan` | (`planId`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `deleteStripePlan` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `getPricingPlan` | (`planId`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`PricingPlan`](../interfaces/Pricing_api.PricingPlan.md)\>\> |
| `getPricingPlans` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`PricingPlans`](../interfaces/Pricing_api.PricingPlans.md)\>\> |
| `linkPlanToStripe` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `updatePricingPlan` | (`planId`: `string`, `body?`: [`SavePricingPlanParam`](../interfaces/Pricing_api.SavePricingPlanParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `updatePricingPlansUsed` | (`updatePricingPlansUsedParam?`: [`UpdatePricingPlansUsedParam`](../interfaces/Pricing_api.UpdatePricingPlansUsedParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |

**`Export`**

#### Defined in

[src/generated/Pricing/api.ts:3272](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L3272)

___

### PricingUnitsApiAxiosParamCreator

▸ **PricingUnitsApiAxiosParamCreator**(`configuration?`): `Object`

PricingUnitsApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Pricing_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `createPricingUnit` | (`body?`: [`PricingUnitForSave`](Pricing_api.md#pricingunitforsave), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |
| `deletePricingUnit` | (`pricingUnitId`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |
| `getPricingUnit` | (`pricingUnitId`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |
| `getPricingUnits` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |
| `updatePricingUnit` | (`pricingUnitId`: `string`, `body?`: [`PricingUnitForSave`](Pricing_api.md#pricingunitforsave), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |

**`Export`**

#### Defined in

[src/generated/Pricing/api.ts:3589](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L3589)

___

### PricingUnitsApiFactory

▸ **PricingUnitsApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

PricingUnitsApi - factory interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Pricing_configuration.Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createPricingUnit` | (`body?`: [`PricingUnitForSave`](Pricing_api.md#pricingunitforsave), `options?`: `any`) => `AxiosPromise`\<[`PricingUnit`](Pricing_api.md#pricingunit)\> |
| `deletePricingUnit` | (`pricingUnitId`: `string`, `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `getPricingUnit` | (`pricingUnitId`: `string`, `options?`: `any`) => `AxiosPromise`\<[`PricingUnit`](Pricing_api.md#pricingunit)\> |
| `getPricingUnits` | (`options?`: `any`) => `AxiosPromise`\<[`PricingUnits`](../interfaces/Pricing_api.PricingUnits.md)\> |
| `updatePricingUnit` | (`pricingUnitId`: `string`, `body?`: [`PricingUnitForSave`](Pricing_api.md#pricingunitforsave), `options?`: `any`) => `AxiosPromise`\<`void`\> |

**`Export`**

#### Defined in

[src/generated/Pricing/api.ts:3853](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L3853)

___

### PricingUnitsApiFp

▸ **PricingUnitsApiFp**(`configuration?`): `Object`

PricingUnitsApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Pricing_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createPricingUnit` | (`body?`: [`PricingUnitForSave`](Pricing_api.md#pricingunitforsave), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`PricingUnit`](Pricing_api.md#pricingunit)\>\> |
| `deletePricingUnit` | (`pricingUnitId`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `getPricingUnit` | (`pricingUnitId`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`PricingUnit`](Pricing_api.md#pricingunit)\>\> |
| `getPricingUnits` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`PricingUnits`](../interfaces/Pricing_api.PricingUnits.md)\>\> |
| `updatePricingUnit` | (`pricingUnitId`: `string`, `body?`: [`PricingUnitForSave`](Pricing_api.md#pricingunitforsave), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |

**`Export`**

#### Defined in

[src/generated/Pricing/api.ts:3788](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L3788)

___

### TaxRateApiAxiosParamCreator

▸ **TaxRateApiAxiosParamCreator**(`configuration?`): `Object`

TaxRateApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Pricing_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `createTaxRate` | (`body?`: [`TaxRateProps`](../interfaces/Pricing_api.TaxRateProps.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |
| `getTaxRates` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |
| `updateTaxRate` | (`taxRateId`: `string`, `updateTaxRateParam?`: [`UpdateTaxRateParam`](../interfaces/Pricing_api.UpdateTaxRateParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/Pricing_base.RequestArgs.md)\> | - |

**`Export`**

#### Defined in

[src/generated/Pricing/api.ts:3982](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L3982)

___

### TaxRateApiFactory

▸ **TaxRateApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

TaxRateApi - factory interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Pricing_configuration.Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createTaxRate` | (`body?`: [`TaxRateProps`](../interfaces/Pricing_api.TaxRateProps.md), `options?`: `any`) => `AxiosPromise`\<[`TaxRate`](../interfaces/Pricing_api.TaxRate.md)\> |
| `getTaxRates` | (`options?`: `any`) => `AxiosPromise`\<[`TaxRates`](../interfaces/Pricing_api.TaxRates.md)\> |
| `updateTaxRate` | (`taxRateId`: `string`, `updateTaxRateParam?`: [`UpdateTaxRateParam`](../interfaces/Pricing_api.UpdateTaxRateParam.md), `options?`: `any`) => `AxiosPromise`\<`void`\> |

**`Export`**

#### Defined in

[src/generated/Pricing/api.ts:4148](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L4148)

___

### TaxRateApiFp

▸ **TaxRateApiFp**(`configuration?`): `Object`

TaxRateApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/Pricing_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createTaxRate` | (`body?`: [`TaxRateProps`](../interfaces/Pricing_api.TaxRateProps.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`TaxRate`](../interfaces/Pricing_api.TaxRate.md)\>\> |
| `getTaxRates` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`TaxRates`](../interfaces/Pricing_api.TaxRates.md)\>\> |
| `updateTaxRate` | (`taxRateId`: `string`, `updateTaxRateParam?`: [`UpdateTaxRateParam`](../interfaces/Pricing_api.UpdateTaxRateParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |

**`Export`**

#### Defined in

[src/generated/Pricing/api.ts:4105](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L4105)
