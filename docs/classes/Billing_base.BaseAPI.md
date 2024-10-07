[saasus-sdk](../README.md) / [Billing/base](../modules/Billing_base.md) / BaseAPI

# Class: BaseAPI

[Billing/base](../modules/Billing_base.md).BaseAPI

**`Export`**

BaseAPI

## Hierarchy

- **`BaseAPI`**

  ↳ [`ErrorApi`](Billing_api.ErrorApi.md)

  ↳ [`StripeApi`](Billing_api.StripeApi.md)

## Table of contents

### Constructors

- [constructor](Billing_base.BaseAPI.md#constructor)

### Properties

- [axios](Billing_base.BaseAPI.md#axios)
- [basePath](Billing_base.BaseAPI.md#basepath)
- [configuration](Billing_base.BaseAPI.md#configuration)

## Constructors

### constructor

• **new BaseAPI**(`configuration?`, `basePath?`, `axios?`): [`BaseAPI`](Billing_base.BaseAPI.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Billing_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`BaseAPI`](Billing_base.BaseAPI.md)

#### Defined in

[src/generated/Billing/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Billing/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Defined in

[src/generated/Billing/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Billing/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Defined in

[src/generated/Billing/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Billing/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Billing_configuration.Configuration.md)

#### Defined in

[src/generated/Billing/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Billing/base.ts#L50)
