[saasus-sdk](../README.md) / [AwsMarketplace/base](../modules/AwsMarketplace_base.md) / BaseAPI

# Class: BaseAPI

[AwsMarketplace/base](../modules/AwsMarketplace_base.md).BaseAPI

**`Export`**

BaseAPI

## Hierarchy

- **`BaseAPI`**

  ↳ [`AwsMarketplaceApi`](AwsMarketplace_api.AwsMarketplaceApi.md)

  ↳ [`ErrorApi`](AwsMarketplace_api.ErrorApi.md)

## Table of contents

### Constructors

- [constructor](AwsMarketplace_base.BaseAPI.md#constructor)

### Properties

- [axios](AwsMarketplace_base.BaseAPI.md#axios)
- [basePath](AwsMarketplace_base.BaseAPI.md#basepath)
- [configuration](AwsMarketplace_base.BaseAPI.md#configuration)

## Constructors

### constructor

• **new BaseAPI**(`configuration?`, `basePath?`, `axios?`): [`BaseAPI`](AwsMarketplace_base.BaseAPI.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](AwsMarketplace_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`BaseAPI`](AwsMarketplace_base.BaseAPI.md)

#### Defined in

[src/generated/AwsMarketplace/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/AwsMarketplace/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Defined in

[src/generated/AwsMarketplace/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/AwsMarketplace/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Defined in

[src/generated/AwsMarketplace/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/AwsMarketplace/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](AwsMarketplace_configuration.Configuration.md)

#### Defined in

[src/generated/AwsMarketplace/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/AwsMarketplace/base.ts#L50)
