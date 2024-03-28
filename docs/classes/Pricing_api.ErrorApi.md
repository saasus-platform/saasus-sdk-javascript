[saasus-sdk](../README.md) / [Pricing/api](../modules/Pricing_api.md) / ErrorApi

# Class: ErrorApi

[Pricing/api](../modules/Pricing_api.md).ErrorApi

ErrorApi - object-oriented interface

**`Export`**

ErrorApi

## Hierarchy

- [`BaseAPI`](Pricing_base.BaseAPI.md)

  ↳ **`ErrorApi`**

## Table of contents

### Constructors

- [constructor](Pricing_api.ErrorApi.md#constructor)

### Properties

- [axios](Pricing_api.ErrorApi.md#axios)
- [basePath](Pricing_api.ErrorApi.md#basepath)
- [configuration](Pricing_api.ErrorApi.md#configuration)

### Methods

- [returnInternalServerError](Pricing_api.ErrorApi.md#returninternalservererror)

## Constructors

### constructor

• **new ErrorApi**(`configuration?`, `basePath?`, `axios?`): [`ErrorApi`](Pricing_api.ErrorApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Pricing_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`ErrorApi`](Pricing_api.ErrorApi.md)

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

### returnInternalServerError

▸ **returnInternalServerError**(`options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

テスト用途で使用するエンドポイントです。ステータスコード500でサーバーエラーを返却します。  This endpoint is used for testing purposes. Returns a server error with status code 500.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

ステータスコード500でサーバーエラーを返却(Return Internal Server Error)

**`Throws`**

**`Memberof`**

ErrorApi

#### Defined in

[src/generated/Pricing/api.ts:1654](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L1654)
