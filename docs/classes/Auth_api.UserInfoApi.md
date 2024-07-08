[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / UserInfoApi

# Class: UserInfoApi

[Auth/api](../modules/Auth_api.md).UserInfoApi

UserInfoApi - object-oriented interface

**`Export`**

UserInfoApi

## Hierarchy

- [`BaseAPI`](Auth_base.BaseAPI.md)

  ↳ **`UserInfoApi`**

## Table of contents

### Constructors

- [constructor](Auth_api.UserInfoApi.md#constructor)

### Properties

- [axios](Auth_api.UserInfoApi.md#axios)
- [basePath](Auth_api.UserInfoApi.md#basepath)
- [configuration](Auth_api.UserInfoApi.md#configuration)

### Methods

- [getUserInfo](Auth_api.UserInfoApi.md#getuserinfo)

## Constructors

### constructor

• **new UserInfoApi**(`configuration?`, `basePath?`, `axios?`): [`UserInfoApi`](Auth_api.UserInfoApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Auth_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`UserInfoApi`](Auth_api.UserInfoApi.md)

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[constructor](Auth_base.BaseAPI.md#constructor)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/Auth/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[axios](Auth_base.BaseAPI.md#axios)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/Auth/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[basePath](Auth_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/Auth/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Auth_configuration.Configuration.md)

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[configuration](Auth_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/Auth/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/Auth/base.ts#L50)

## Methods

### getUserInfo

▸ **getUserInfo**(`token`, `options?`): `Promise`\<`AxiosResponse`\<[`UserInfo`](../interfaces/Auth_api.UserInfo.md), `any`\>\>

User information is obtained based on the ID token of the SaaS user (registered user). The ID token is passed to the Callback URL during login from the SaaSus Platform generated login screen. User information can be obtained from calling this API with an ID token from the URL on the server side. Since the acquired tenant, role (role), price plan, etc. are included, it is possible to implement authorization based on it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | ID Token |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`UserInfo`](../interfaces/Auth_api.UserInfo.md), `any`\>\>

**`Summary`**

Get User Info

**`Throws`**

**`Memberof`**

UserInfoApi

#### Defined in

[src/generated/Auth/api.ts:8881](https://github.com/saasus-platform/saasus-sdk-javascript/blob/09ef427/src/generated/Auth/api.ts#L8881)
