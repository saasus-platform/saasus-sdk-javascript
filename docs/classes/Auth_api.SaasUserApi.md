[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / SaasUserApi

# Class: SaasUserApi

[Auth/api](../modules/Auth_api.md).SaasUserApi

SaasUserApi - object-oriented interface

**`Export`**

SaasUserApi

## Hierarchy

- [`BaseAPI`](Auth_base.BaseAPI.md)

  ↳ **`SaasUserApi`**

## Table of contents

### Constructors

- [constructor](Auth_api.SaasUserApi.md#constructor)

### Properties

- [axios](Auth_api.SaasUserApi.md#axios)
- [basePath](Auth_api.SaasUserApi.md#basepath)
- [configuration](Auth_api.SaasUserApi.md#configuration)

### Methods

- [confirmEmailUpdate](Auth_api.SaasUserApi.md#confirmemailupdate)
- [confirmExternalUserLink](Auth_api.SaasUserApi.md#confirmexternaluserlink)
- [confirmSignUpWithAwsMarketplace](Auth_api.SaasUserApi.md#confirmsignupwithawsmarketplace)
- [createSaasUser](Auth_api.SaasUserApi.md#createsaasuser)
- [createSecretCode](Auth_api.SaasUserApi.md#createsecretcode)
- [deleteSaasUser](Auth_api.SaasUserApi.md#deletesaasuser)
- [getSaasUser](Auth_api.SaasUserApi.md#getsaasuser)
- [getSaasUsers](Auth_api.SaasUserApi.md#getsaasusers)
- [getUserMfaPreference](Auth_api.SaasUserApi.md#getusermfapreference)
- [linkAwsMarketplace](Auth_api.SaasUserApi.md#linkawsmarketplace)
- [requestEmailUpdate](Auth_api.SaasUserApi.md#requestemailupdate)
- [requestExternalUserLink](Auth_api.SaasUserApi.md#requestexternaluserlink)
- [resendSignUpConfirmationEmail](Auth_api.SaasUserApi.md#resendsignupconfirmationemail)
- [signUp](Auth_api.SaasUserApi.md#signup)
- [signUpWithAwsMarketplace](Auth_api.SaasUserApi.md#signupwithawsmarketplace)
- [unlinkProvider](Auth_api.SaasUserApi.md#unlinkprovider)
- [updateSaasUserEmail](Auth_api.SaasUserApi.md#updatesaasuseremail)
- [updateSaasUserPassword](Auth_api.SaasUserApi.md#updatesaasuserpassword)
- [updateSoftwareToken](Auth_api.SaasUserApi.md#updatesoftwaretoken)
- [updateUserMfaPreference](Auth_api.SaasUserApi.md#updateusermfapreference)

## Constructors

### constructor

• **new SaasUserApi**(`configuration?`, `basePath?`, `axios?`): [`SaasUserApi`](Auth_api.SaasUserApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Auth_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`SaasUserApi`](Auth_api.SaasUserApi.md)

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

### confirmEmailUpdate

▸ **confirmEmailUpdate**(`userId`, `confirmEmailUpdateParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

ユーザーのメールアドレス変更確認のためにコードを検証します。 ユーザーのアクセストークンが必要です。  Verify the code to confirm the user\'s email address update. Requires the user\'s access token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | ユーザーID(User ID) |
| `confirmEmailUpdateParam?` | [`ConfirmEmailUpdateParam`](../interfaces/Auth_api.ConfirmEmailUpdateParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

ユーザーのメールアドレス変更確認(Confirm User Email Update)

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6078](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L6078)

___

### confirmExternalUserLink

▸ **confirmExternalUserLink**(`confirmExternalUserLinkParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

外部アカウントのユーザー連携確認のためにコードを検証します。  Verify the code for external account user link confirmation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `confirmExternalUserLinkParam?` | [`ConfirmExternalUserLinkParam`](../interfaces/Auth_api.ConfirmExternalUserLinkParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

外部アカウントのユーザーの連携確認(Confirm External User Account Link)

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6090](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L6090)

___

### confirmSignUpWithAwsMarketplace

▸ **confirmSignUpWithAwsMarketplace**(`confirmSignUpWithAwsMarketplaceParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`Tenant`](../interfaces/Auth_api.Tenant.md), `any`\>\>

AWS Marketplaceと連携したユーザー新規登録を確定します。AWS Marketplaceと連携したテナントを新規作成します。 Registration Tokenが有効でない場合はエラーを返却します。  Confirm a new use registeration linked to AWS Marketplace. Create a new tenant linked to AWS Marketplace. If the Registration Token is not valid, an error is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `confirmSignUpWithAwsMarketplaceParam?` | [`ConfirmSignUpWithAwsMarketplaceParam`](../interfaces/Auth_api.ConfirmSignUpWithAwsMarketplaceParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Tenant`](../interfaces/Auth_api.Tenant.md), `any`\>\>

**`Summary`**

AWS Marketplaceによるユーザー新規登録の確定(Confirm Sign Up with AWS Marketplace)

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6102](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L6102)

___

### createSaasUser

▸ **createSaasUser**(`createSaasUserParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`SaasUser`](../interfaces/Auth_api.SaasUser.md), `any`\>\>

SaaSにユーザーを作成します。  Create SaaS User.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createSaasUserParam?` | [`CreateSaasUserParam`](../interfaces/Auth_api.CreateSaasUserParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SaasUser`](../interfaces/Auth_api.SaasUser.md), `any`\>\>

**`Summary`**

SaaSにユーザーを作成(Create SaaS User)

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6114](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L6114)

___

### createSecretCode

▸ **createSecretCode**(`userId`, `createSecretCodeParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`SoftwareTokenSecretCode`](../interfaces/Auth_api.SoftwareTokenSecretCode.md), `any`\>\>

認証アプリケーション登録用のシークレットコードを作成します。  Create a secret code for authentication application registration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | ユーザーID(User ID) |
| `createSecretCodeParam?` | [`CreateSecretCodeParam`](../interfaces/Auth_api.CreateSecretCodeParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SoftwareTokenSecretCode`](../interfaces/Auth_api.SoftwareTokenSecretCode.md), `any`\>\>

**`Summary`**

認証アプリケーション登録用のシークレットコードを作成(Creates secret code for authentication application registration)

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6127](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L6127)

___

### deleteSaasUser

▸ **deleteSaasUser**(`userId`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

ユーザーIDを元に一致するユーザーをテナントからすべて削除し、SaaSからも削除します。  Delete all users with matching user ID from the tenant and SaaS.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | ユーザーID(User ID) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

ユーザー情報を削除(Delete User)

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6139](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L6139)

___

### getSaasUser

▸ **getSaasUser**(`userId`, `options?`): `Promise`\<`AxiosResponse`\<[`SaasUser`](../interfaces/Auth_api.SaasUser.md), `any`\>\>

ユーザーIDからユーザー情報を取得します。  Get user information based on user ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | ユーザーID(User ID) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SaasUser`](../interfaces/Auth_api.SaasUser.md), `any`\>\>

**`Summary`**

ユーザー情報を取得(Get User)

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6151](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L6151)

___

### getSaasUsers

▸ **getSaasUsers**(`options?`): `Promise`\<`AxiosResponse`\<[`SaasUsers`](../interfaces/Auth_api.SaasUsers.md), `any`\>\>

SaaSのユーザー全件を取得します。  Get all SaaS users.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SaasUsers`](../interfaces/Auth_api.SaasUsers.md), `any`\>\>

**`Summary`**

ユーザー一覧を取得(Get Users)

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6162](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L6162)

___

### getUserMfaPreference

▸ **getUserMfaPreference**(`userId`, `options?`): `Promise`\<`AxiosResponse`\<[`MfaPreference`](../interfaces/Auth_api.MfaPreference.md), `any`\>\>

ユーザーのMFA設定を取得します。  Get the user\'s MFA settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | ユーザーID(User ID) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`MfaPreference`](../interfaces/Auth_api.MfaPreference.md), `any`\>\>

**`Summary`**

ユーザーのMFA設定を取得(Get User\'s MFA Settings)

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6174](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L6174)

___

### linkAwsMarketplace

▸ **linkAwsMarketplace**(`linkAwsMarketplaceParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

AWS Marketplaceと既存のテナントを連携します。 Registration Tokenが有効でない場合はエラーを返却します。  Link an existing tenant with AWS Marketplace. If the Registration Token is not valid, an error is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `linkAwsMarketplaceParam?` | [`LinkAwsMarketplaceParam`](../interfaces/Auth_api.LinkAwsMarketplaceParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

AWS Marketplaceと既存のテナントの連携(Link an existing tenant with AWS Marketplace)

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6186](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L6186)

___

### requestEmailUpdate

▸ **requestEmailUpdate**(`userId`, `requestEmailUpdateParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

ユーザーのメールアドレス変更を要求します。 要求されたメールアドレスに対して検証コードを送信します。 ユーザーのアクセストークンが必要です。 検証コードの有効期限は24時間です。  Request to update the user\'s email address. Sends a verification code to the requested email address. Requires the user\'s access token. The verification code is valid for 24 hours.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | ユーザーID(User ID) |
| `requestEmailUpdateParam?` | [`RequestEmailUpdateParam`](../interfaces/Auth_api.RequestEmailUpdateParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

ユーザーのメールアドレス変更要求(Request User Email Update)

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6199](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L6199)

___

### requestExternalUserLink

▸ **requestExternalUserLink**(`requestExternalUserLinkParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

外部アカウントのユーザー連携を要求します。 アクセストークンから連携するユーザーのメールアドレスを取得し、そのメールアドレスに対して検証コードを送信します。 検証コードの有効期限は24時間です。  Request to link an external account user. Get the email address of the user to be linked from the access token and send a verification code to that email address. The verification code is valid for 24 hours.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestExternalUserLinkParam?` | [`RequestExternalUserLinkParam`](../interfaces/Auth_api.RequestExternalUserLinkParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

外部アカウントのユーザー連携要求(Request External User Account Link)

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6211](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L6211)

___

### resendSignUpConfirmationEmail

▸ **resendSignUpConfirmationEmail**(`resendSignUpConfirmationEmailParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

新規登録時の仮パスワードを再送信します。  Resend temporary password for the new registered user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resendSignUpConfirmationEmailParam?` | [`ResendSignUpConfirmationEmailParam`](../interfaces/Auth_api.ResendSignUpConfirmationEmailParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

新規登録時の確認メール再送信(Resend Sign Up Confirmation Email)

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6223](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L6223)

___

### signUp

▸ **signUp**(`signUpParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`SaasUser`](../interfaces/Auth_api.SaasUser.md), `any`\>\>

ユーザーを新規登録します。登録されたメールアドレスに対して仮パスワードを送信します。  Register a new user. A temporary password will be sent to the registered email.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signUpParam?` | [`SignUpParam`](../interfaces/Auth_api.SignUpParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SaasUser`](../interfaces/Auth_api.SaasUser.md), `any`\>\>

**`Summary`**

新規登録(Sign Up)

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6235](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L6235)

___

### signUpWithAwsMarketplace

▸ **signUpWithAwsMarketplace**(`signUpWithAwsMarketplaceParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`SaasUser`](../interfaces/Auth_api.SaasUser.md), `any`\>\>

AWS Marketplaceと連携したユーザーを新規登録します。登録されたメールアドレスに対して仮パスワードを送信します。 Registration Tokenが有効でない場合はエラーを返却します。  Register a new user linked to AWS Marketplace. A temporary password will be sent to the registered email. If the Registration Token is not valid, an error is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signUpWithAwsMarketplaceParam?` | [`SignUpWithAwsMarketplaceParam`](../interfaces/Auth_api.SignUpWithAwsMarketplaceParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SaasUser`](../interfaces/Auth_api.SaasUser.md), `any`\>\>

**`Summary`**

AWS Marketplaceによるユーザー新規登録(Sign Up with AWS Marketplace)

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6247](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L6247)

___

### unlinkProvider

▸ **unlinkProvider**(`providerName`, `userId`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

外部IDプロバイダの連携を解除します。  Unlink external identity providers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `providerName` | `string` |  |
| `userId` | `string` | ユーザーID(User ID) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

外部IDプロバイダの連携解除(Unlink external identity providers)

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6260](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L6260)

___

### updateSaasUserEmail

▸ **updateSaasUserEmail**(`userId`, `updateSaasUserEmailParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

ユーザーのメールアドレスを変更します。  Change user\'s email.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | ユーザーID(User ID) |
| `updateSaasUserEmailParam?` | [`UpdateSaasUserEmailParam`](../interfaces/Auth_api.UpdateSaasUserEmailParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

メールアドレスを変更(Change Email)

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6273](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L6273)

___

### updateSaasUserPassword

▸ **updateSaasUserPassword**(`userId`, `updateSaasUserPasswordParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

ユーザーのログインパスワードを変更します。  Change user\'s login password.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | ユーザーID(User ID) |
| `updateSaasUserPasswordParam?` | [`UpdateSaasUserPasswordParam`](../interfaces/Auth_api.UpdateSaasUserPasswordParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

パスワードを変更(Change Password)

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6286](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L6286)

___

### updateSoftwareToken

▸ **updateSoftwareToken**(`userId`, `updateSoftwareTokenParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

認証アプリケーションを登録します。  Register an authentication application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | ユーザーID(User ID) |
| `updateSoftwareTokenParam?` | [`UpdateSoftwareTokenParam`](../interfaces/Auth_api.UpdateSoftwareTokenParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

認証アプリケーションを登録(Register Authentication Application)

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6299](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L6299)

___

### updateUserMfaPreference

▸ **updateUserMfaPreference**(`userId`, `body?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

ユーザーのMFA設定を更新します。  Update user\'s MFA settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | ユーザーID(User ID) |
| `body?` | [`MfaPreference`](../interfaces/Auth_api.MfaPreference.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

ユーザーのMFA設定を更新(Update User\'s MFA Settings)

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6312](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L6312)
