[saasus-sdk](../README.md) / [Pricing/base](../modules/Pricing_base.md) / BaseAPI

# Class: BaseAPI

[Pricing/base](../modules/Pricing_base.md).BaseAPI

**`Export`**

BaseAPI

## Hierarchy

- **`BaseAPI`**

  ↳ [`ErrorApi`](Pricing_api.ErrorApi.md)

  ↳ [`MeteringApi`](Pricing_api.MeteringApi.md)

  ↳ [`PricingMenusApi`](Pricing_api.PricingMenusApi.md)

  ↳ [`PricingPlansApi`](Pricing_api.PricingPlansApi.md)

  ↳ [`PricingUnitsApi`](Pricing_api.PricingUnitsApi.md)

  ↳ [`TaxRateApi`](Pricing_api.TaxRateApi.md)

## Table of contents

### Constructors

- [constructor](Pricing_base.BaseAPI.md#constructor)

### Properties

- [axios](Pricing_base.BaseAPI.md#axios)
- [basePath](Pricing_base.BaseAPI.md#basepath)
- [configuration](Pricing_base.BaseAPI.md#configuration)

## Constructors

### constructor

• **new BaseAPI**(`configuration?`, `basePath?`, `axios?`): [`BaseAPI`](Pricing_base.BaseAPI.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Pricing_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`BaseAPI`](Pricing_base.BaseAPI.md)

#### Defined in

[src/generated/Pricing/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Pricing/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Defined in

[src/generated/Pricing/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Pricing/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Defined in

[src/generated/Pricing/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Pricing/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Pricing_configuration.Configuration.md)

#### Defined in

[src/generated/Pricing/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Pricing/base.ts#L50)
