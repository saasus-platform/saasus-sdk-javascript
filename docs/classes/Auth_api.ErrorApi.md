[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / ErrorApi

# Class: ErrorApi

[Auth/api](../modules/Auth_api.md).ErrorApi

ErrorApi - object-oriented interface

**`Export`**

ErrorApi

## Hierarchy

- [`BaseAPI`](Auth_base.BaseAPI.md)

  ↳ **`ErrorApi`**

## Table of contents

### Constructors

- [constructor](Auth_api.ErrorApi.md#constructor)

### Properties

- [axios](Auth_api.ErrorApi.md#axios)
- [basePath](Auth_api.ErrorApi.md#basepath)
- [configuration](Auth_api.ErrorApi.md#configuration)

### Methods

- [returnInternalServerError](Auth_api.ErrorApi.md#returninternalservererror)

## Constructors

### constructor

• **new ErrorApi**(`configuration?`, `basePath?`, `axios?`): [`ErrorApi`](Auth_api.ErrorApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Auth_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`ErrorApi`](Auth_api.ErrorApi.md)

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[constructor](Auth_base.BaseAPI.md#constructor)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[axios](Auth_base.BaseAPI.md#axios)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[basePath](Auth_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Auth_configuration.Configuration.md)

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[configuration](Auth_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/Auth/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/base.ts#L50)

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

[src/generated/Auth/api.ts:4077](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L4077)
