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

[src/generated/ApiLog/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/ApiLog/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](ApiLog_base.BaseAPI.md).[axios](ApiLog_base.BaseAPI.md#axios)

#### Defined in

[src/generated/ApiLog/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/ApiLog/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](ApiLog_base.BaseAPI.md).[basePath](ApiLog_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/ApiLog/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/ApiLog/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](ApiLog_configuration.Configuration.md)

#### Inherited from

[BaseAPI](ApiLog_base.BaseAPI.md).[configuration](ApiLog_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/ApiLog/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/ApiLog/base.ts#L50)

## Methods

### getLog

▸ **getLog**(`apiLogId`, `options?`): `Promise`\<`AxiosResponse`\<[`ApiLog`](../interfaces/ApiLog_api.ApiLog.md), `any`\>\>

Retrieve the log of the API execution with the specified ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `apiLogId` | `string` | API Log ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`ApiLog`](../interfaces/ApiLog_api.ApiLog.md), `any`\>\>

**`Summary`**

Get API execution log

**`Throws`**

**`Memberof`**

ApiLogApi

#### Defined in

[src/generated/ApiLog/api.ts:433](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/ApiLog/api.ts#L433)

___

### getLogs

▸ **getLogs**(`createdDate?`, `createdAt?`, `limit?`, `cursor?`, `options?`): `Promise`\<`AxiosResponse`\<[`ApiLogs`](../interfaces/ApiLog_api.ApiLogs.md), `any`\>\>

Retrieve the log of all API executions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createdDate?` | `string` | The date, in format of YYYY-MM-DD, to retrieve the log. |
| `createdAt?` | `string` | The datetime, in ISO 8601 format, to retrieve the log. |
| `limit?` | `number` | Maximum number of logs to retrieve. |
| `cursor?` | `string` | Cursor for cursor pagination. |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`ApiLogs`](../interfaces/ApiLog_api.ApiLogs.md), `any`\>\>

**`Summary`**

Get API execution log list

**`Throws`**

**`Memberof`**

ApiLogApi

#### Defined in

[src/generated/ApiLog/api.ts:448](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/ApiLog/api.ts#L448)
