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

### getAuthInfo

▸ **getAuthInfo**(`options?`): `Promise`\<`AxiosResponse`\<[`AuthInfo`](../interfaces/Auth_api.AuthInfo.md), `any`\>\>

ログイン後に認証情報を渡す SaaS の URL を取得します。 ここで取得した URL へ認証情報を渡し、SaaSus SDK を利用してこの Callback の実装をすることが可能となります。  Get the post-login SaaS URL that contains authentication information. You can pass authentication information to the URL obtained here and implement this Callback using the SaaSus SDK.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`AuthInfo`](../interfaces/Auth_api.AuthInfo.md), `any`\>\>

**`Summary`**

認証情報を取得(Get Authentication Info)

**`Throws`**

**`Memberof`**

AuthInfoApi

#### Defined in

[src/generated/Auth/api.ts:2743](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L2743)

___

### getIdentityProviders

▸ **getIdentityProviders**(`options?`): `Promise`\<`AxiosResponse`\<[`IdentityProviders`](../interfaces/Auth_api.IdentityProviders.md), `any`\>\>

cognitoに設定している外部プロバイダ経由のサインイン情報取得  Get sign-in information via external provider set in cognito

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`IdentityProviders`](../interfaces/Auth_api.IdentityProviders.md), `any`\>\>

**`Throws`**

**`Memberof`**

AuthInfoApi

#### Defined in

[src/generated/Auth/api.ts:2753](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L2753)

___

### getSignInSettings

▸ **getSignInSettings**(`options?`): `Promise`\<`AxiosResponse`\<[`SignInSettings`](../interfaces/Auth_api.SignInSettings.md), `any`\>\>

ユーザーパスワードの要件設定を取得します。 アルファベット、数字、記号の組み合わせで、桁数を長くすれば解読されづらい安全なパスワードを設定することが可能となります。  Get user password requirements. Set a secure password that is difficult to decipher by increasing the number of digits by combining alphabets, numbers, and symbols.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SignInSettings`](../interfaces/Auth_api.SignInSettings.md), `any`\>\>

**`Summary`**

パスワード要件を取得(Get Password Requirements)

**`Throws`**

**`Memberof`**

AuthInfoApi

#### Defined in

[src/generated/Auth/api.ts:2764](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L2764)

___

### updateAuthInfo

▸ **updateAuthInfo**(`body?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

ログイン後に認証情報を渡す SaaS の URL を登録します。 ここで登録した URL に認証情報を渡し、SaaSus SDK を利用してこの Callback の実装をすることが可能となります。  Register post-login SaaS URL for authentication information. It is possible to pass authentication information to the URL registered here and implement this Callback using the SaaSus SDK.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body?` | [`AuthInfo`](../interfaces/Auth_api.AuthInfo.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

認証情報を更新(Update Authentication Info)

**`Throws`**

**`Memberof`**

AuthInfoApi

#### Defined in

[src/generated/Auth/api.ts:2776](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L2776)

___

### updateIdentityProvider

▸ **updateIdentityProvider**(`updateIdentityProviderParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

外部IDプロバイダのサインイン情報更新

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `updateIdentityProviderParam?` | [`UpdateIdentityProviderParam`](../interfaces/Auth_api.UpdateIdentityProviderParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Throws`**

**`Memberof`**

AuthInfoApi

#### Defined in

[src/generated/Auth/api.ts:2787](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L2787)

___

### updateSignInSettings

▸ **updateSignInSettings**(`updateSignInSettingsParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

ユーザーパスワードの要件設定を更新します。 アルファベット、数字、記号の組み合わせで、桁数を長くすれば解読されづらい安全なパスワードを設定することが可能となります。  Update user password requirements. Set a secure password that is difficult to decipher by increasing the number of digits by combining alphabets, numbers, and symbols.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `updateSignInSettingsParam?` | [`UpdateSignInSettingsParam`](../interfaces/Auth_api.UpdateSignInSettingsParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

パスワード要件を更新(Update Password Requirements)

**`Throws`**

**`Memberof`**

AuthInfoApi

#### Defined in

[src/generated/Auth/api.ts:2799](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L2799)
