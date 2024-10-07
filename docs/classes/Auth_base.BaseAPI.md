[saasus-sdk](../README.md) / [Auth/base](../modules/Auth_base.md) / BaseAPI

# Class: BaseAPI

[Auth/base](../modules/Auth_base.md).BaseAPI

**`Export`**

BaseAPI

## Hierarchy

- **`BaseAPI`**

  ↳ [`AuthInfoApi`](Auth_api.AuthInfoApi.md)

  ↳ [`BasicInfoApi`](Auth_api.BasicInfoApi.md)

  ↳ [`CredentialApi`](Auth_api.CredentialApi.md)

  ↳ [`EnvApi`](Auth_api.EnvApi.md)

  ↳ [`ErrorApi`](Auth_api.ErrorApi.md)

  ↳ [`InvitationApi`](Auth_api.InvitationApi.md)

  ↳ [`RoleApi`](Auth_api.RoleApi.md)

  ↳ [`SaasUserApi`](Auth_api.SaasUserApi.md)

  ↳ [`SingleTenantApi`](Auth_api.SingleTenantApi.md)

  ↳ [`TenantApi`](Auth_api.TenantApi.md)

  ↳ [`TenantAttributeApi`](Auth_api.TenantAttributeApi.md)

  ↳ [`TenantUserApi`](Auth_api.TenantUserApi.md)

  ↳ [`UserAttributeApi`](Auth_api.UserAttributeApi.md)

  ↳ [`UserInfoApi`](Auth_api.UserInfoApi.md)

## Table of contents

### Constructors

- [constructor](Auth_base.BaseAPI.md#constructor)

### Properties

- [axios](Auth_base.BaseAPI.md#axios)
- [basePath](Auth_base.BaseAPI.md#basepath)
- [configuration](Auth_base.BaseAPI.md#configuration)

## Constructors

### constructor

• **new BaseAPI**(`configuration?`, `basePath?`, `axios?`): [`BaseAPI`](Auth_base.BaseAPI.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Auth_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`BaseAPI`](Auth_base.BaseAPI.md)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Auth/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Auth/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Auth/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Auth_configuration.Configuration.md)

#### Defined in

[src/generated/Auth/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/Auth/base.ts#L50)
