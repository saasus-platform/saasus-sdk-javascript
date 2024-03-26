[saasus-sdk](../README.md) / [Pricing/api](../modules/Pricing_api.md) / TaxRateApi

# Class: TaxRateApi

[Pricing/api](../modules/Pricing_api.md).TaxRateApi

TaxRateApi - object-oriented interface

**`Export`**

TaxRateApi

## Hierarchy

- [`BaseAPI`](Pricing_base.BaseAPI.md)

  ↳ **`TaxRateApi`**

## Table of contents

### Constructors

- [constructor](Pricing_api.TaxRateApi.md#constructor)

### Properties

- [axios](Pricing_api.TaxRateApi.md#axios)
- [basePath](Pricing_api.TaxRateApi.md#basepath)
- [configuration](Pricing_api.TaxRateApi.md#configuration)

### Methods

- [createTaxRate](Pricing_api.TaxRateApi.md#createtaxrate)
- [getTaxRates](Pricing_api.TaxRateApi.md#gettaxrates)
- [updateTaxRate](Pricing_api.TaxRateApi.md#updatetaxrate)

## Constructors

### constructor

• **new TaxRateApi**(`configuration?`, `basePath?`, `axios?`): [`TaxRateApi`](Pricing_api.TaxRateApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Pricing_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`TaxRateApi`](Pricing_api.TaxRateApi.md)

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

### createTaxRate

▸ **createTaxRate**(`body?`, `options?`): `Promise`\<`AxiosResponse`\<[`TaxRate`](../interfaces/Pricing_api.TaxRate.md), `any`\>\>

税率を作成します。  Creates a tax rate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body?` | [`TaxRateProps`](../interfaces/Pricing_api.TaxRateProps.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`TaxRate`](../interfaces/Pricing_api.TaxRate.md), `any`\>\>

**`Summary`**

税率の作成(Create Tax Rate)

**`Throws`**

**`Memberof`**

TaxRateApi

#### Defined in

[src/generated/Pricing/api.ts:4199](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L4199)

___

### getTaxRates

▸ **getTaxRates**(`options?`): `Promise`\<`AxiosResponse`\<[`TaxRates`](../interfaces/Pricing_api.TaxRates.md), `any`\>\>

税率を取得します。  Get all Tax Rates

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`TaxRates`](../interfaces/Pricing_api.TaxRates.md), `any`\>\>

**`Summary`**

税率を取得します(Get Tax Rates)

**`Throws`**

**`Memberof`**

TaxRateApi

#### Defined in

[src/generated/Pricing/api.ts:4210](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L4210)

___

### updateTaxRate

▸ **updateTaxRate**(`taxRateId`, `updateTaxRateParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

税率を更新します。  Update tax rate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `taxRateId` | `string` | 税率ID(tax rate ID) |
| `updateTaxRateParam?` | [`UpdateTaxRateParam`](../interfaces/Pricing_api.UpdateTaxRateParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

税率を更新(Update Tax Rate)

**`Throws`**

**`Memberof`**

TaxRateApi

#### Defined in

[src/generated/Pricing/api.ts:4223](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L4223)
