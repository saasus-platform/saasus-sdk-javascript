[saasus-sdk](../README.md) / [Pricing/api](../modules/Pricing_api.md) / PricingUnitsApi

# Class: PricingUnitsApi

[Pricing/api](../modules/Pricing_api.md).PricingUnitsApi

PricingUnitsApi - object-oriented interface

**`Export`**

PricingUnitsApi

## Hierarchy

- [`BaseAPI`](Pricing_base.BaseAPI.md)

  ↳ **`PricingUnitsApi`**

## Table of contents

### Constructors

- [constructor](Pricing_api.PricingUnitsApi.md#constructor)

### Properties

- [axios](Pricing_api.PricingUnitsApi.md#axios)
- [basePath](Pricing_api.PricingUnitsApi.md#basepath)
- [configuration](Pricing_api.PricingUnitsApi.md#configuration)

### Methods

- [createPricingUnit](Pricing_api.PricingUnitsApi.md#createpricingunit)
- [deletePricingUnit](Pricing_api.PricingUnitsApi.md#deletepricingunit)
- [getPricingUnit](Pricing_api.PricingUnitsApi.md#getpricingunit)
- [getPricingUnits](Pricing_api.PricingUnitsApi.md#getpricingunits)
- [updatePricingUnit](Pricing_api.PricingUnitsApi.md#updatepricingunit)

## Constructors

### constructor

• **new PricingUnitsApi**(`configuration?`, `basePath?`, `axios?`): [`PricingUnitsApi`](Pricing_api.PricingUnitsApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Pricing_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`PricingUnitsApi`](Pricing_api.PricingUnitsApi.md)

#### Inherited from

[BaseAPI](Pricing_base.BaseAPI.md).[constructor](Pricing_base.BaseAPI.md#constructor)

#### Defined in

[src/generated/Pricing/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Pricing/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](Pricing_base.BaseAPI.md).[axios](Pricing_base.BaseAPI.md#axios)

#### Defined in

[src/generated/Pricing/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Pricing/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](Pricing_base.BaseAPI.md).[basePath](Pricing_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/Pricing/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Pricing/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Pricing_configuration.Configuration.md)

#### Inherited from

[BaseAPI](Pricing_base.BaseAPI.md).[configuration](Pricing_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/Pricing/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Pricing/base.ts#L50)

## Methods

### createPricingUnit

▸ **createPricingUnit**(`body?`, `options?`): `Promise`\<`AxiosResponse`\<[`PricingUnit`](../modules/Pricing_api.md#pricingunit), `any`\>\>

Create a pricing unit.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body?` | [`PricingUnitForSave`](../modules/Pricing_api.md#pricingunitforsave) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PricingUnit`](../modules/Pricing_api.md#pricingunit), `any`\>\>

**`Summary`**

Create Pricing Unit

**`Throws`**

**`Memberof`**

PricingUnitsApi

#### Defined in

[src/generated/Pricing/api.ts:4320](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Pricing/api.ts#L4320)

___

### deletePricingUnit

▸ **deletePricingUnit**(`pricingUnitId`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Delete a pricing unit.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pricingUnitId` | `string` | Unit ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Delete Pricing Unit

**`Throws`**

**`Memberof`**

PricingUnitsApi

#### Defined in

[src/generated/Pricing/api.ts:4332](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Pricing/api.ts#L4332)

___

### getPricingUnit

▸ **getPricingUnit**(`pricingUnitId`, `options?`): `Promise`\<`AxiosResponse`\<[`PricingUnit`](../modules/Pricing_api.md#pricingunit), `any`\>\>

Get a pricing unit.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pricingUnitId` | `string` | Unit ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PricingUnit`](../modules/Pricing_api.md#pricingunit), `any`\>\>

**`Summary`**

Get Pricing Unit

**`Throws`**

**`Memberof`**

PricingUnitsApi

#### Defined in

[src/generated/Pricing/api.ts:4344](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Pricing/api.ts#L4344)

___

### getPricingUnits

▸ **getPricingUnits**(`options?`): `Promise`\<`AxiosResponse`\<[`PricingUnits`](../interfaces/Pricing_api.PricingUnits.md), `any`\>\>

Gets the smallest unit of measure on which the charges are based. \"Fixed Unit\" (type=fixed) is a unit of a monthly fixed charge such as a basic charge, \"Usage Unit\" (type=usage) is a unit in which a charge is generated per unit such as billing for the number of users, \"Tiered Unit\" (type=tiered) is a fixed charge unit for each tier of usage, such as the tiered packet charge for mobile phones, \"Tiered Usage Unit\" (type=tiered_usage) is a unit where the charge per unit changes according to the usage amount, such as a volume discount.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PricingUnits`](../interfaces/Pricing_api.PricingUnits.md), `any`\>\>

**`Summary`**

Get Pricing Units

**`Throws`**

**`Memberof`**

PricingUnitsApi

#### Defined in

[src/generated/Pricing/api.ts:4355](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Pricing/api.ts#L4355)

___

### updatePricingUnit

▸ **updatePricingUnit**(`pricingUnitId`, `body?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Update pricing unit.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pricingUnitId` | `string` | Unit ID |
| `body?` | [`PricingUnitForSave`](../modules/Pricing_api.md#pricingunitforsave) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Update Pricing Unit

**`Throws`**

**`Memberof`**

PricingUnitsApi

#### Defined in

[src/generated/Pricing/api.ts:4368](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Pricing/api.ts#L4368)
