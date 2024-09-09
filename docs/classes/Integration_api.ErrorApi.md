[saasus-sdk](../README.md) / [Integration/api](../modules/Integration_api.md) / ErrorApi

# Class: ErrorApi

[Integration/api](../modules/Integration_api.md).ErrorApi

ErrorApi - object-oriented interface

**`Export`**

ErrorApi

## Hierarchy

- [`BaseAPI`](Integration_base.BaseAPI.md)

  ↳ **`ErrorApi`**

## Table of contents

### Constructors

- [constructor](Integration_api.ErrorApi.md#constructor)

### Properties

- [axios](Integration_api.ErrorApi.md#axios)
- [basePath](Integration_api.ErrorApi.md#basepath)
- [configuration](Integration_api.ErrorApi.md#configuration)

### Methods

- [returnInternalServerError](Integration_api.ErrorApi.md#returninternalservererror)

## Constructors

### constructor

• **new ErrorApi**(`configuration?`, `basePath?`, `axios?`): [`ErrorApi`](Integration_api.ErrorApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Integration_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`ErrorApi`](Integration_api.ErrorApi.md)

#### Inherited from

[BaseAPI](Integration_base.BaseAPI.md).[constructor](Integration_base.BaseAPI.md#constructor)

#### Defined in

[src/generated/Integration/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Integration/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](Integration_base.BaseAPI.md).[axios](Integration_base.BaseAPI.md#axios)

#### Defined in

[src/generated/Integration/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Integration/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](Integration_base.BaseAPI.md).[basePath](Integration_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/Integration/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Integration/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Integration_configuration.Configuration.md)

#### Inherited from

[BaseAPI](Integration_base.BaseAPI.md).[configuration](Integration_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/Integration/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Integration/base.ts#L50)

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

[src/generated/Integration/api.ts:231](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Integration/api.ts#L231)
