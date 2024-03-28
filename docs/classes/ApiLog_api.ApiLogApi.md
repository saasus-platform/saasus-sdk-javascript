[saasus-sdk](../README.md) / [ApiLog/api](../modules/ApiLog_api.md) / ApiLogApi

# Class: ApiLogApi

[ApiLog/api](../modules/ApiLog_api.md).ApiLogApi

ApiLogApi - object-oriented interface

**`Export`**

ApiLogApi

## Hierarchy

- [`BaseAPI`](ApiLog_base.BaseAPI.md)

  ↳ **`ApiLogApi`**

## Table of contents

### Constructors

- [constructor](ApiLog_api.ApiLogApi.md#constructor)

### Properties

- [axios](ApiLog_api.ApiLogApi.md#axios)
- [basePath](ApiLog_api.ApiLogApi.md#basepath)
- [configuration](ApiLog_api.ApiLogApi.md#configuration)

### Methods

- [getLog](ApiLog_api.ApiLogApi.md#getlog)
- [getLogs](ApiLog_api.ApiLogApi.md#getlogs)

## Constructors

### constructor

• **new ApiLogApi**(`configuration?`, `basePath?`, `axios?`): [`ApiLogApi`](ApiLog_api.ApiLogApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](ApiLog_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`ApiLogApi`](ApiLog_api.ApiLogApi.md)

#### Inherited from

[BaseAPI](ApiLog_base.BaseAPI.md).[constructor](ApiLog_base.BaseAPI.md#constructor)

#### Defined in

[src/generated/ApiLog/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/ApiLog/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](ApiLog_base.BaseAPI.md).[axios](ApiLog_base.BaseAPI.md#axios)

#### Defined in

[src/generated/ApiLog/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/ApiLog/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](ApiLog_base.BaseAPI.md).[basePath](ApiLog_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/ApiLog/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/ApiLog/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](ApiLog_configuration.Configuration.md)

#### Inherited from

[BaseAPI](ApiLog_base.BaseAPI.md).[configuration](ApiLog_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/ApiLog/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/ApiLog/base.ts#L50)

## Methods

### getLog

▸ **getLog**(`apiLogId`, `options?`): `Promise`\<`AxiosResponse`\<[`ApiLog`](../interfaces/ApiLog_api.ApiLog.md), `any`\>\>

指定したIDのAPI実行のログ登録を取得します。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `apiLogId` | `string` | APIログID(API Log ID) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`ApiLog`](../interfaces/ApiLog_api.ApiLog.md), `any`\>\>

**`Summary`**

API実行ログ取得

**`Throws`**

**`Memberof`**

ApiLogApi

#### Defined in

[src/generated/ApiLog/api.ts:395](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/ApiLog/api.ts#L395)

___

### getLogs

▸ **getLogs**(`options?`): `Promise`\<`AxiosResponse`\<[`ApiLogs`](../interfaces/ApiLog_api.ApiLogs.md), `any`\>\>

全API実行のログ登録を取得します。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`ApiLogs`](../interfaces/ApiLog_api.ApiLogs.md), `any`\>\>

**`Summary`**

API実行ログ取得

**`Throws`**

**`Memberof`**

ApiLogApi

#### Defined in

[src/generated/ApiLog/api.ts:406](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/ApiLog/api.ts#L406)
