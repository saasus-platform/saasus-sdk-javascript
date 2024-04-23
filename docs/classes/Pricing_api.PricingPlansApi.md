[saasus-sdk](../README.md) / [Pricing/api](../modules/Pricing_api.md) / PricingPlansApi

# Class: PricingPlansApi

[Pricing/api](../modules/Pricing_api.md).PricingPlansApi

PricingPlansApi - object-oriented interface

**`Export`**

PricingPlansApi

## Hierarchy

- [`BaseAPI`](Pricing_base.BaseAPI.md)

  ↳ **`PricingPlansApi`**

## Table of contents

### Constructors

- [constructor](Pricing_api.PricingPlansApi.md#constructor)

### Properties

- [axios](Pricing_api.PricingPlansApi.md#axios)
- [basePath](Pricing_api.PricingPlansApi.md#basepath)
- [configuration](Pricing_api.PricingPlansApi.md#configuration)

### Methods

- [createPricingPlan](Pricing_api.PricingPlansApi.md#createpricingplan)
- [deleteAllPlansAndMenusAndUnitsAndMetersAndTaxRates](Pricing_api.PricingPlansApi.md#deleteallplansandmenusandunitsandmetersandtaxrates)
- [deletePricingPlan](Pricing_api.PricingPlansApi.md#deletepricingplan)
- [deleteStripePlan](Pricing_api.PricingPlansApi.md#deletestripeplan)
- [getPricingPlan](Pricing_api.PricingPlansApi.md#getpricingplan)
- [getPricingPlans](Pricing_api.PricingPlansApi.md#getpricingplans)
- [linkPlanToStripe](Pricing_api.PricingPlansApi.md#linkplantostripe)
- [updatePricingPlan](Pricing_api.PricingPlansApi.md#updatepricingplan)
- [updatePricingPlansUsed](Pricing_api.PricingPlansApi.md#updatepricingplansused)

## Constructors

### constructor

• **new PricingPlansApi**(`configuration?`, `basePath?`, `axios?`): [`PricingPlansApi`](Pricing_api.PricingPlansApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Pricing_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`PricingPlansApi`](Pricing_api.PricingPlansApi.md)

#### Inherited from

[BaseAPI](Pricing_base.BaseAPI.md).[constructor](Pricing_base.BaseAPI.md#constructor)

#### Defined in

[src/generated/Pricing/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Pricing/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](Pricing_base.BaseAPI.md).[axios](Pricing_base.BaseAPI.md#axios)

#### Defined in

[src/generated/Pricing/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Pricing/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](Pricing_base.BaseAPI.md).[basePath](Pricing_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/Pricing/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Pricing/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Pricing_configuration.Configuration.md)

#### Inherited from

[BaseAPI](Pricing_base.BaseAPI.md).[configuration](Pricing_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/Pricing/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Pricing/base.ts#L50)

## Methods

### createPricingPlan

▸ **createPricingPlan**(`body?`, `options?`): `Promise`\<`AxiosResponse`\<[`PricingPlan`](../interfaces/Pricing_api.PricingPlan.md), `any`\>\>

Create a pricing plan.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body?` | [`SavePricingPlanParam`](../interfaces/Pricing_api.SavePricingPlanParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PricingPlan`](../interfaces/Pricing_api.PricingPlan.md), `any`\>\>

**`Summary`**

Create Pricing Plan

**`Throws`**

**`Memberof`**

PricingPlansApi

#### Defined in

[src/generated/Pricing/api.ts:3882](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Pricing/api.ts#L3882)

___

### deleteAllPlansAndMenusAndUnitsAndMetersAndTaxRates

▸ **deleteAllPlansAndMenusAndUnitsAndMetersAndTaxRates**(`options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Unconditionally remove all rate plans, menus, units, meters and tax rates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Delete all Plans, Menus, Units, Meters and Tax Rates

**`Throws`**

**`Memberof`**

PricingPlansApi

#### Defined in

[src/generated/Pricing/api.ts:3893](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Pricing/api.ts#L3893)

___

### deletePricingPlan

▸ **deletePricingPlan**(`planId`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Delete a pricing plan.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `planId` | `string` | Pricing Plan ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Delete Pricing Plan

**`Throws`**

**`Memberof`**

PricingPlansApi

#### Defined in

[src/generated/Pricing/api.ts:3905](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Pricing/api.ts#L3905)

___

### deleteStripePlan

▸ **deleteStripePlan**(`options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Delete product data from Stripe.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Delete Product Data from Stripe

**`Throws`**

**`Memberof`**

PricingPlansApi

#### Defined in

[src/generated/Pricing/api.ts:3916](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Pricing/api.ts#L3916)

___

### getPricingPlan

▸ **getPricingPlan**(`planId`, `options?`): `Promise`\<`AxiosResponse`\<[`PricingPlan`](../interfaces/Pricing_api.PricingPlan.md), `any`\>\>

Get a pricing plan.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `planId` | `string` | Pricing Plan ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PricingPlan`](../interfaces/Pricing_api.PricingPlan.md), `any`\>\>

**`Summary`**

Get Pricing Plan

**`Throws`**

**`Memberof`**

PricingPlansApi

#### Defined in

[src/generated/Pricing/api.ts:3928](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Pricing/api.ts#L3928)

___

### getPricingPlans

▸ **getPricingPlans**(`options?`): `Promise`\<`AxiosResponse`\<[`PricingPlans`](../interfaces/Pricing_api.PricingPlans.md), `any`\>\>

Get pricing plans. Multiple feature menus are grouped together and defined as one pricing plan. Each tenant can choose a pricing plan defined here. If you have a specific tenant-specific rate (private pricing), create and connect the pricing plan specifically for that tenant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PricingPlans`](../interfaces/Pricing_api.PricingPlans.md), `any`\>\>

**`Summary`**

Get Pricing Plans

**`Throws`**

**`Memberof`**

PricingPlansApi

#### Defined in

[src/generated/Pricing/api.ts:3939](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Pricing/api.ts#L3939)

___

### linkPlanToStripe

▸ **linkPlanToStripe**(`options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Connect information to Stripe.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Connect to Stripe

**`Throws`**

**`Memberof`**

PricingPlansApi

#### Defined in

[src/generated/Pricing/api.ts:3950](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Pricing/api.ts#L3950)

___

### updatePricingPlan

▸ **updatePricingPlan**(`planId`, `body?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Update a pricing plan.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `planId` | `string` | Pricing Plan ID |
| `body?` | [`SavePricingPlanParam`](../interfaces/Pricing_api.SavePricingPlanParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Update Pricing Plan

**`Throws`**

**`Memberof`**

PricingPlansApi

#### Defined in

[src/generated/Pricing/api.ts:3963](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Pricing/api.ts#L3963)

___

### updatePricingPlansUsed

▸ **updatePricingPlansUsed**(`updatePricingPlansUsedParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Update price plan and feature menu/pricing unit to used.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `updatePricingPlansUsedParam?` | [`UpdatePricingPlansUsedParam`](../interfaces/Pricing_api.UpdatePricingPlansUsedParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Update Used Flag

**`Throws`**

**`Memberof`**

PricingPlansApi

#### Defined in

[src/generated/Pricing/api.ts:3975](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Pricing/api.ts#L3975)
