[saasus-sdk](../README.md) / [Communication/base](../modules/Communication_base.md) / BaseAPI

# Class: BaseAPI

[Communication/base](../modules/Communication_base.md).BaseAPI

**`Export`**

BaseAPI

## Hierarchy

- **`BaseAPI`**

  ↳ [`ErrorApi`](Communication_api.ErrorApi.md)

  ↳ [`FeedbackApi`](Communication_api.FeedbackApi.md)

## Table of contents

### Constructors

- [constructor](Communication_base.BaseAPI.md#constructor)

### Properties

- [axios](Communication_base.BaseAPI.md#axios)
- [basePath](Communication_base.BaseAPI.md#basepath)
- [configuration](Communication_base.BaseAPI.md#configuration)

## Constructors

### constructor

• **new BaseAPI**(`configuration?`, `basePath?`, `axios?`): [`BaseAPI`](Communication_base.BaseAPI.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Communication_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`BaseAPI`](Communication_base.BaseAPI.md)

#### Defined in

[src/generated/Communication/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Communication/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Defined in

[src/generated/Communication/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Communication/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Defined in

[src/generated/Communication/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Communication/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Communication_configuration.Configuration.md)

#### Defined in

[src/generated/Communication/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Communication/base.ts#L50)
