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

[src/generated/Pricing/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](Pricing_base.BaseAPI.md).[axios](Pricing_base.BaseAPI.md#axios)

#### Defined in

[src/generated/Pricing/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](Pricing_base.BaseAPI.md).[basePath](Pricing_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/Pricing/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Pricing_configuration.Configuration.md)

#### Inherited from

[BaseAPI](Pricing_base.BaseAPI.md).[configuration](Pricing_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/Pricing/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/base.ts#L50)

## Methods

### createPricingPlan

▸ **createPricingPlan**(`body?`, `options?`): `Promise`\<`AxiosResponse`\<[`PricingPlan`](../interfaces/Pricing_api.PricingPlan.md), `any`\>\>

料金プランを作成します。  Create pricing plan.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body?` | [`SavePricingPlanParam`](../interfaces/Pricing_api.SavePricingPlanParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PricingPlan`](../interfaces/Pricing_api.PricingPlan.md), `any`\>\>

**`Summary`**

料金プランを作成(Create Pricing Plan)

**`Throws`**

**`Memberof`**

PricingPlansApi

#### Defined in

[src/generated/Pricing/api.ts:3486](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L3486)

___

### deleteAllPlansAndMenusAndUnitsAndMetersAndTaxRates

▸ **deleteAllPlansAndMenusAndUnitsAndMetersAndTaxRates**(`options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

無条件に全料金プラン、メニュー、ユニット、メーター、税率を削除します。  Unconditionally remove all rate plans, menus, units, meters and tax rates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

全てのPlans,Menus,Units,Metersの削除(Delete all Plans, Menus, Units, Meters and Tax Rates)

**`Throws`**

**`Memberof`**

PricingPlansApi

#### Defined in

[src/generated/Pricing/api.ts:3497](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L3497)

___

### deletePricingPlan

▸ **deletePricingPlan**(`planId`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

料金プランを削除します。  Delete pricing plan.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `planId` | `string` | 料金プランID(price plan ID) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

料金プランを削除(Delete Pricing Plan)

**`Throws`**

**`Memberof`**

PricingPlansApi

#### Defined in

[src/generated/Pricing/api.ts:3509](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L3509)

___

### deleteStripePlan

▸ **deleteStripePlan**(`options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

stripe上の商品情報を削除します。  Delete product data from Stripe.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

stripe上の商品情報を削除(Delete Product Data from Stripe)

**`Throws`**

**`Memberof`**

PricingPlansApi

#### Defined in

[src/generated/Pricing/api.ts:3520](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L3520)

___

### getPricingPlan

▸ **getPricingPlan**(`planId`, `options?`): `Promise`\<`AxiosResponse`\<[`PricingPlan`](../interfaces/Pricing_api.PricingPlan.md), `any`\>\>

料金プランを取得します。  Get pricing plan.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `planId` | `string` | 料金プランID(price plan ID) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PricingPlan`](../interfaces/Pricing_api.PricingPlan.md), `any`\>\>

**`Summary`**

料金プランを取得(Get Pricing Plan)

**`Throws`**

**`Memberof`**

PricingPlansApi

#### Defined in

[src/generated/Pricing/api.ts:3532](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L3532)

___

### getPricingPlans

▸ **getPricingPlans**(`options?`): `Promise`\<`AxiosResponse`\<[`PricingPlans`](../interfaces/Pricing_api.PricingPlans.md), `any`\>\>

料金プラン一覧を取得します。 機能メニューを複数まとめて、１つの料金プランとして定義します。 ここで定義した料金プランを各テナントは選ぶことができます。 もし特定テナント特有の料金（プライベートプライシング）がある場合は、そのテナント専用の料金プランを作成して結びつけます。  Get pricing plans. Multiple feature menus are grouped together and defined as one pricing plan. Each tenant can choose a pricing plan defined here. If you have a specific tenant-specific rate (private pricing), create and connect the pricing plan specifically for that tenant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PricingPlans`](../interfaces/Pricing_api.PricingPlans.md), `any`\>\>

**`Summary`**

料金プラン一覧を取得(Get pricing plan list)

**`Throws`**

**`Memberof`**

PricingPlansApi

#### Defined in

[src/generated/Pricing/api.ts:3543](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L3543)

___

### linkPlanToStripe

▸ **linkPlanToStripe**(`options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

stripeへ情報を連携します。  Connect information to Stripe.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

stripe連携(Connect to Stripe)

**`Throws`**

**`Memberof`**

PricingPlansApi

#### Defined in

[src/generated/Pricing/api.ts:3554](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L3554)

___

### updatePricingPlan

▸ **updatePricingPlan**(`planId`, `body?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

料金プランを更新します。  Update pricing plan.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `planId` | `string` | 料金プランID(price plan ID) |
| `body?` | [`SavePricingPlanParam`](../interfaces/Pricing_api.SavePricingPlanParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

料金プランを更新(Update Pricing Plan)

**`Throws`**

**`Memberof`**

PricingPlansApi

#### Defined in

[src/generated/Pricing/api.ts:3567](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L3567)

___

### updatePricingPlansUsed

▸ **updatePricingPlansUsed**(`updatePricingPlansUsedParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

料金プランと配下のメニュー・ユニットを使用済みに更新します。  Update price plan and feature menu/pricing unit to used.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `updatePricingPlansUsedParam?` | [`UpdatePricingPlansUsedParam`](../interfaces/Pricing_api.UpdatePricingPlansUsedParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

使用済みフラグ更新(Update Used Flag)

**`Throws`**

**`Memberof`**

PricingPlansApi

#### Defined in

[src/generated/Pricing/api.ts:3579](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L3579)
