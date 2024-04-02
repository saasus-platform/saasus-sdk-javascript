[saasus-sdk](../README.md) / [ApiLog/api](../modules/ApiLog_api.md) / ErrorApi

# Class: ErrorApi

[ApiLog/api](../modules/ApiLog_api.md).ErrorApi

ErrorApi - object-oriented interface

**`Export`**

ErrorApi

## Hierarchy

- [`BaseAPI`](ApiLog_base.BaseAPI.md)

  ↳ **`ErrorApi`**

## Table of contents

### Constructors

- [constructor](ApiLog_api.ErrorApi.md#constructor)

### Properties

- [axios](ApiLog_api.ErrorApi.md#axios)
- [basePath](ApiLog_api.ErrorApi.md#basepath)
- [configuration](ApiLog_api.ErrorApi.md#configuration)

### Methods

- [returnInternalServerError](ApiLog_api.ErrorApi.md#returninternalservererror)

## Constructors

### constructor

• **new ErrorApi**(`configuration?`, `basePath?`, `axios?`): [`ErrorApi`](ApiLog_api.ErrorApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](ApiLog_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`ErrorApi`](ApiLog_api.ErrorApi.md)

#### Inherited from

[BaseAPI](ApiLog_base.BaseAPI.md).[constructor](ApiLog_base.BaseAPI.md#constructor)

#### Defined in

[src/generated/ApiLog/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/ApiLog/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](ApiLog_base.BaseAPI.md).[axios](ApiLog_base.BaseAPI.md#axios)

#### Defined in

[src/generated/ApiLog/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/ApiLog/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](ApiLog_base.BaseAPI.md).[basePath](ApiLog_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/ApiLog/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/ApiLog/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](ApiLog_configuration.Configuration.md)

#### Inherited from

[BaseAPI](ApiLog_base.BaseAPI.md).[configuration](ApiLog_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/ApiLog/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/ApiLog/base.ts#L50)

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

Returns a server error with status code 500

**`Throws`**

**`Memberof`**

ErrorApi

#### Defined in

[src/generated/ApiLog/api.ts:550](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/ApiLog/api.ts#L550)
