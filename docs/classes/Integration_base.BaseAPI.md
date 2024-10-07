[saasus-sdk](../README.md) / [Integration/base](../modules/Integration_base.md) / BaseAPI

# Class: BaseAPI

[Integration/base](../modules/Integration_base.md).BaseAPI

**`Export`**

BaseAPI

## Hierarchy

- **`BaseAPI`**

  ↳ [`ErrorApi`](Integration_api.ErrorApi.md)

  ↳ [`EventBridgeApi`](Integration_api.EventBridgeApi.md)

## Table of contents

### Constructors

- [constructor](Integration_base.BaseAPI.md#constructor)

### Properties

- [axios](Integration_base.BaseAPI.md#axios)
- [basePath](Integration_base.BaseAPI.md#basepath)
- [configuration](Integration_base.BaseAPI.md#configuration)

## Constructors

### constructor

• **new BaseAPI**(`configuration?`, `basePath?`, `axios?`): [`BaseAPI`](Integration_base.BaseAPI.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Integration_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`BaseAPI`](Integration_base.BaseAPI.md)

#### Defined in

[src/generated/Integration/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Integration/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Defined in

[src/generated/Integration/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Integration/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Defined in

[src/generated/Integration/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Integration/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Integration_configuration.Configuration.md)

#### Defined in

[src/generated/Integration/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Integration/base.ts#L50)
