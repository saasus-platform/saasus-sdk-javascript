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
- [exchangeAuthCredentials](Auth_api.CredentialApi.md#exchangeauthcredentials)
- [getAuthCredentials](Auth_api.CredentialApi.md#getauthcredentials)
- [revokeToken](Auth_api.CredentialApi.md#revoketoken)

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

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[axios](Auth_base.BaseAPI.md#axios)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[basePath](Auth_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Auth_configuration.Configuration.md)

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[configuration](Auth_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/Auth/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/base.ts#L50)

## Methods

### createAuthCredentials

▸ **createAuthCredentials**(`createAuthCredentialsParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`AuthorizationTempCode`](../interfaces/Auth_api.AuthorizationTempCode.md), `any`, {}, `any`\>\>

Temporarily save the parameter for the ID token, access token, and refresh token and return a temporary code for obtaining. Temporary codes are valid for 10 seconds from issuance. When code_challenge is specified, the temporary code can only be exchanged via POST /credentials/exchange and cannot be retrieved via GET /credentials.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createAuthCredentialsParam?` | [`CreateAuthCredentialsParam`](../interfaces/Auth_api.CreateAuthCredentialsParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`AuthorizationTempCode`](../interfaces/Auth_api.AuthorizationTempCode.md), `any`, {}, `any`\>\>

**`Summary`**

Save Authentication/Authorization Information

**`Throws`**

**`Memberof`**

CredentialApi

#### Defined in

[src/generated/Auth/api.ts:4541](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L4541)

___

### exchangeAuthCredentials

▸ **exchangeAuthCredentials**(`exchangeAuthCredentialsParam`, `options?`): `Promise`\<`AxiosResponse`\<[`Credentials`](../interfaces/Auth_api.Credentials.md), `any`, {}, `any`\>\>

Exchange a temporary code for ID token, access token, and refresh token by verifying the PKCE code verifier. Only temporary codes created with code_challenge can be exchanged. Temporary codes created without code_challenge must be retrieved via GET /credentials.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `exchangeAuthCredentialsParam` | [`ExchangeAuthCredentialsParam`](../interfaces/Auth_api.ExchangeAuthCredentialsParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Credentials`](../interfaces/Auth_api.Credentials.md), `any`, {}, `any`\>\>

**`Summary`**

Exchange a Temporary Code for Authentication/Authorization Information

**`Throws`**

**`Memberof`**

CredentialApi

#### Defined in

[src/generated/Auth/api.ts:4553](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L4553)

___

### getAuthCredentials

▸ **getAuthCredentials**(`code?`, `authFlow?`, `refreshToken?`, `options?`): `Promise`\<`AxiosResponse`\<[`Credentials`](../interfaces/Auth_api.Credentials.md), `any`, {}, `any`\>\>

Get ID token, access token, and refresh token using a temporary code or a refresh token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code?` | `string` | Temp Code |
| `authFlow?` | ``"tempCodeAuth"`` \| ``"refreshTokenAuth"`` | Authentication Flow tempCodeAuth: Getting authentication information using a temporary code refreshTokenAuth: Getting authentication information using a refresh token If not specified, it will be tempCodeAuth |
| `refreshToken?` | `string` | Refresh Token |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Credentials`](../interfaces/Auth_api.Credentials.md), `any`, {}, `any`\>\>

**`Summary`**

Get Authentication/Authorization Information

**`Throws`**

**`Memberof`**

CredentialApi

#### Defined in

[src/generated/Auth/api.ts:4567](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L4567)

___

### revokeToken

▸ **revokeToken**(`revokeTokenParam`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

Revoke the specified refresh token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `revokeTokenParam` | [`RevokeTokenParam`](../interfaces/Auth_api.RevokeTokenParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

**`Summary`**

Revoke Token

**`Throws`**

**`Memberof`**

CredentialApi

#### Defined in

[src/generated/Auth/api.ts:4579](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L4579)
