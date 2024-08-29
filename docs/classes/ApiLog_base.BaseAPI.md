[saasus-sdk](../README.md) / [ApiLog/base](../modules/ApiLog_base.md) / BaseAPI

# Class: BaseAPI

[ApiLog/base](../modules/ApiLog_base.md).BaseAPI

**`Export`**

BaseAPI

## Hierarchy

- **`BaseAPI`**

  ↳ [`ApiLogApi`](ApiLog_api.ApiLogApi.md)

  ↳ [`ErrorApi`](ApiLog_api.ErrorApi.md)

## Table of contents

### Constructors

- [constructor](ApiLog_base.BaseAPI.md#constructor)

### Properties

- [axios](ApiLog_base.BaseAPI.md#axios)
- [basePath](ApiLog_base.BaseAPI.md#basepath)
- [configuration](ApiLog_base.BaseAPI.md#configuration)

## Constructors

### constructor

• **new BaseAPI**(`configuration?`, `basePath?`, `axios?`): [`BaseAPI`](ApiLog_base.BaseAPI.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](ApiLog_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`BaseAPI`](ApiLog_base.BaseAPI.md)

#### Defined in

[src/generated/ApiLog/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/ApiLog/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Defined in

[src/generated/ApiLog/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/ApiLog/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Defined in

[src/generated/ApiLog/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/ApiLog/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](ApiLog_configuration.Configuration.md)

#### Defined in

[src/generated/ApiLog/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/ApiLog/base.ts#L50)
