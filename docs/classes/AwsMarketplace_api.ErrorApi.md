[saasus-sdk](../README.md) / [AwsMarketplace/api](../modules/AwsMarketplace_api.md) / ErrorApi

# Class: ErrorApi

[AwsMarketplace/api](../modules/AwsMarketplace_api.md).ErrorApi

ErrorApi - object-oriented interface

**`Export`**

ErrorApi

## Hierarchy

- [`BaseAPI`](AwsMarketplace_base.BaseAPI.md)

  ↳ **`ErrorApi`**

## Table of contents

### Constructors

- [constructor](AwsMarketplace_api.ErrorApi.md#constructor)

### Properties

- [axios](AwsMarketplace_api.ErrorApi.md#axios)
- [basePath](AwsMarketplace_api.ErrorApi.md#basepath)
- [configuration](AwsMarketplace_api.ErrorApi.md#configuration)

### Methods

- [returnInternalServerError](AwsMarketplace_api.ErrorApi.md#returninternalservererror)

## Constructors

### constructor

• **new ErrorApi**(`configuration?`, `basePath?`, `axios?`): [`ErrorApi`](AwsMarketplace_api.ErrorApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](AwsMarketplace_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`ErrorApi`](AwsMarketplace_api.ErrorApi.md)

#### Inherited from

[BaseAPI](AwsMarketplace_base.BaseAPI.md).[constructor](AwsMarketplace_base.BaseAPI.md#constructor)

#### Defined in

[src/generated/AwsMarketplace/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/AwsMarketplace/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](AwsMarketplace_base.BaseAPI.md).[axios](AwsMarketplace_base.BaseAPI.md#axios)

#### Defined in

[src/generated/AwsMarketplace/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/AwsMarketplace/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](AwsMarketplace_base.BaseAPI.md).[basePath](AwsMarketplace_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/AwsMarketplace/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/AwsMarketplace/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](AwsMarketplace_configuration.Configuration.md)

#### Inherited from

[BaseAPI](AwsMarketplace_base.BaseAPI.md).[configuration](AwsMarketplace_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/AwsMarketplace/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/AwsMarketplace/base.ts#L50)

## Methods

### returnInternalServerError

▸ **returnInternalServerError**(`options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

This endpoint is used for testing purposes. Returns a server error with status code 500.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Return Internal Server Error

**`Throws`**

**`Memberof`**

ErrorApi

#### Defined in

[src/generated/AwsMarketplace/api.ts:1465](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/AwsMarketplace/api.ts#L1465)
