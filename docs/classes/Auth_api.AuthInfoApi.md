[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / AuthInfoApi

# Class: AuthInfoApi

[Auth/api](../modules/Auth_api.md).AuthInfoApi

AuthInfoApi - object-oriented interface

**`Export`**

AuthInfoApi

## Hierarchy

- [`BaseAPI`](Auth_base.BaseAPI.md)

  ↳ **`AuthInfoApi`**

## Table of contents

### Constructors

- [constructor](Auth_api.AuthInfoApi.md#constructor)

### Properties

- [axios](Auth_api.AuthInfoApi.md#axios)
- [basePath](Auth_api.AuthInfoApi.md#basepath)
- [configuration](Auth_api.AuthInfoApi.md#configuration)

### Methods

- [getAuthInfo](Auth_api.AuthInfoApi.md#getauthinfo)
- [getIdentityProviders](Auth_api.AuthInfoApi.md#getidentityproviders)
- [getSignInSettings](Auth_api.AuthInfoApi.md#getsigninsettings)
- [updateAuthInfo](Auth_api.AuthInfoApi.md#updateauthinfo)
- [updateIdentityProvider](Auth_api.AuthInfoApi.md#updateidentityprovider)
- [updateSignInSettings](Auth_api.AuthInfoApi.md#updatesigninsettings)

## Constructors

### constructor

• **new AuthInfoApi**(`configuration?`, `basePath?`, `axios?`): [`AuthInfoApi`](Auth_api.AuthInfoApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Auth_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`AuthInfoApi`](Auth_api.AuthInfoApi.md)

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

### getAuthInfo

▸ **getAuthInfo**(`options?`): `Promise`\<`AxiosResponse`\<[`AuthInfo`](../interfaces/Auth_api.AuthInfo.md), `any`, {}, `any`\>\>

Get the post-login SaaS URL that contains authentication information. You can pass authentication information to the URL obtained here and implement this Callback using the SaaSus SDK.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`AuthInfo`](../interfaces/Auth_api.AuthInfo.md), `any`, {}, `any`\>\>

**`Summary`**

Get Authentication Info

**`Throws`**

**`Memberof`**

AuthInfoApi

#### Defined in

[src/generated/Auth/api.ts:3600](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L3600)

___

### getIdentityProviders

▸ **getIdentityProviders**(`options?`): `Promise`\<`AxiosResponse`\<[`IdentityProviders`](../interfaces/Auth_api.IdentityProviders.md), `any`, {}, `any`\>\>

Get sign-in information via external provider set in cognito.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`IdentityProviders`](../interfaces/Auth_api.IdentityProviders.md), `any`, {}, `any`\>\>

**`Summary`**

Get Sign-In Information Via External Provider

**`Throws`**

**`Memberof`**

AuthInfoApi

#### Defined in

[src/generated/Auth/api.ts:3611](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L3611)

___

### getSignInSettings

▸ **getSignInSettings**(`options?`): `Promise`\<`AxiosResponse`\<[`SignInSettings`](../interfaces/Auth_api.SignInSettings.md), `any`, {}, `any`\>\>

Get sign-in settings, including user password requirements and refresh token validity period.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SignInSettings`](../interfaces/Auth_api.SignInSettings.md), `any`, {}, `any`\>\>

**`Summary`**

Get Sign-In Settings

**`Throws`**

**`Memberof`**

AuthInfoApi

#### Defined in

[src/generated/Auth/api.ts:3622](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L3622)

___

### updateAuthInfo

▸ **updateAuthInfo**(`body?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

Register post-login SaaS URL for authentication information. It is possible to pass authentication information to the URL registered here and implement this Callback using the SaaSus SDK.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body?` | [`AuthInfo`](../interfaces/Auth_api.AuthInfo.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

**`Summary`**

Update Authentication Info

**`Throws`**

**`Memberof`**

AuthInfoApi

#### Defined in

[src/generated/Auth/api.ts:3634](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L3634)

___

### updateIdentityProvider

▸ **updateIdentityProvider**(`updateIdentityProviderParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

Update the sign-in information for the external ID provider

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `updateIdentityProviderParam?` | [`UpdateIdentityProviderParam`](../interfaces/Auth_api.UpdateIdentityProviderParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

**`Summary`**

Update Sign-In Information

**`Throws`**

**`Memberof`**

AuthInfoApi

#### Defined in

[src/generated/Auth/api.ts:3646](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L3646)

___

### updateSignInSettings

▸ **updateSignInSettings**(`updateSignInSettingsParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

Update sign-in settings, including user password requirements and refresh token validity period.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `updateSignInSettingsParam?` | [`UpdateSignInSettingsParam`](../interfaces/Auth_api.UpdateSignInSettingsParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

**`Summary`**

Update Sign-In Settings

**`Throws`**

**`Memberof`**

AuthInfoApi

#### Defined in

[src/generated/Auth/api.ts:3658](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L3658)
