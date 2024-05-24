[saasus-sdk](../README.md) / [Communication/api](../modules/Communication_api.md) / ErrorApi

# Class: ErrorApi

[Communication/api](../modules/Communication_api.md).ErrorApi

ErrorApi - object-oriented interface

**`Export`**

ErrorApi

## Hierarchy

- [`BaseAPI`](Communication_base.BaseAPI.md)

  ↳ **`ErrorApi`**

## Table of contents

### Constructors

- [constructor](Communication_api.ErrorApi.md#constructor)

### Properties

- [axios](Communication_api.ErrorApi.md#axios)
- [basePath](Communication_api.ErrorApi.md#basepath)
- [configuration](Communication_api.ErrorApi.md#configuration)

### Methods

- [returnInternalServerError](Communication_api.ErrorApi.md#returninternalservererror)

## Constructors

### constructor

• **new ErrorApi**(`configuration?`, `basePath?`, `axios?`): [`ErrorApi`](Communication_api.ErrorApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Communication_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`ErrorApi`](Communication_api.ErrorApi.md)

#### Inherited from

[BaseAPI](Communication_base.BaseAPI.md).[constructor](Communication_base.BaseAPI.md#constructor)

#### Defined in

[src/generated/Communication/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Communication/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](Communication_base.BaseAPI.md).[axios](Communication_base.BaseAPI.md#axios)

#### Defined in

[src/generated/Communication/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Communication/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](Communication_base.BaseAPI.md).[basePath](Communication_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/Communication/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Communication/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Communication_configuration.Configuration.md)

#### Inherited from

[BaseAPI](Communication_base.BaseAPI.md).[configuration](Communication_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/Communication/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Communication/base.ts#L50)

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

[src/generated/Communication/api.ts:494](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Communication/api.ts#L494)
