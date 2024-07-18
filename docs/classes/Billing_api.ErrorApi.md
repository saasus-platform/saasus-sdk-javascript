[saasus-sdk](../README.md) / [Billing/api](../modules/Billing_api.md) / ErrorApi

# Class: ErrorApi

[Billing/api](../modules/Billing_api.md).ErrorApi

ErrorApi - object-oriented interface

**`Export`**

ErrorApi

## Hierarchy

- [`BaseAPI`](Billing_base.BaseAPI.md)

  ↳ **`ErrorApi`**

## Table of contents

### Constructors

- [constructor](Billing_api.ErrorApi.md#constructor)

### Properties

- [axios](Billing_api.ErrorApi.md#axios)
- [basePath](Billing_api.ErrorApi.md#basepath)
- [configuration](Billing_api.ErrorApi.md#configuration)

### Methods

- [returnInternalServerError](Billing_api.ErrorApi.md#returninternalservererror)

## Constructors

### constructor

• **new ErrorApi**(`configuration?`, `basePath?`, `axios?`): [`ErrorApi`](Billing_api.ErrorApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Billing_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`ErrorApi`](Billing_api.ErrorApi.md)

#### Inherited from

[BaseAPI](Billing_base.BaseAPI.md).[constructor](Billing_base.BaseAPI.md#constructor)

#### Defined in

[src/generated/Billing/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/Billing/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](Billing_base.BaseAPI.md).[axios](Billing_base.BaseAPI.md#axios)

#### Defined in

[src/generated/Billing/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/Billing/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](Billing_base.BaseAPI.md).[basePath](Billing_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/Billing/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/Billing/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Billing_configuration.Configuration.md)

#### Inherited from

[BaseAPI](Billing_base.BaseAPI.md).[configuration](Billing_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/Billing/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/Billing/base.ts#L50)

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

[src/generated/Billing/api.ts:166](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/Billing/api.ts#L166)
