[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / CredentialApi

# Class: CredentialApi

[Auth/api](../modules/Auth_api.md).CredentialApi

CredentialApi - object-oriented interface

**`Export`**

CredentialApi

## Hierarchy

- [`BaseAPI`](Auth_base.BaseAPI.md)

  ↳ **`CredentialApi`**

## Table of contents

### Constructors

- [constructor](Auth_api.CredentialApi.md#constructor)

### Properties

- [axios](Auth_api.CredentialApi.md#axios)
- [basePath](Auth_api.CredentialApi.md#basepath)
- [configuration](Auth_api.CredentialApi.md#configuration)

### Methods

- [createAuthCredentials](Auth_api.CredentialApi.md#createauthcredentials)
- [getAuthCredentials](Auth_api.CredentialApi.md#getauthcredentials)

## Constructors

### constructor

• **new CredentialApi**(`configuration?`, `basePath?`, `axios?`): [`CredentialApi`](Auth_api.CredentialApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Auth_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`CredentialApi`](Auth_api.CredentialApi.md)

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[constructor](Auth_base.BaseAPI.md#constructor)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[axios](Auth_base.BaseAPI.md#axios)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[basePath](Auth_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Auth_configuration.Configuration.md)

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[configuration](Auth_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/Auth/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/base.ts#L50)

## Methods

### createAuthCredentials

▸ **createAuthCredentials**(`body?`, `options?`): `Promise`\<`AxiosResponse`\<[`AuthorizationTempCode`](../interfaces/Auth_api.AuthorizationTempCode.md), `any`\>\>

引数のIDトークン・アクセストークン・リフレッシュトークンを一時保存し取得用の一時コードを返却する。 一時コードの有効期間は発行から10秒です。  Temporarily save the parameter for the ID token, access token, and refresh token and return a temporary code for obtaining. Temporary codes are valid for 10 seconds from issuance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body?` | [`Credentials`](../interfaces/Auth_api.Credentials.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`AuthorizationTempCode`](../interfaces/Auth_api.AuthorizationTempCode.md), `any`\>\>

**`Summary`**

認証・認可情報の保存(Save Authentication/Authorization Information)

**`Throws`**

**`Memberof`**

CredentialApi

#### Defined in

[src/generated/Auth/api.ts:3560](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L3560)

___

### getAuthCredentials

▸ **getAuthCredentials**(`code?`, `authFlow?`, `refreshToken?`, `options?`): `Promise`\<`AxiosResponse`\<[`Credentials`](../interfaces/Auth_api.Credentials.md), `any`\>\>

一時コードまたはリフレッシュトークンを利用してIDトークン・アクセストークン・リフレッシュトークンを取得する。  Get ID token, access token, and refresh token using a temporary code or a refresh token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code?` | `string` | 一時コード(Temp Code) |
| `authFlow?` | ``"tempCodeAuth"`` \| ``"refreshTokenAuth"`` | 認証フロー（Authentication Flow） tempCodeAuth: 一時コードを利用した認証情報の取得 refreshTokenAuth: リフレッシュトークンを利用した認証情報の取得 指定されていない場合は tempCodeAuth になります |
| `refreshToken?` | `string` | リフレッシュトークン(Refresh Token) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Credentials`](../interfaces/Auth_api.Credentials.md), `any`\>\>

**`Summary`**

認証・認可情報の取得(Get Authentication/Authorization Information)

**`Throws`**

**`Memberof`**

CredentialApi

#### Defined in

[src/generated/Auth/api.ts:3574](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L3574)
