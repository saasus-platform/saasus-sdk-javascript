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

- [confirmDevice](Auth_api.SaasUserApi.md#confirmdevice)
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
- [resetSaasUserPassword](Auth_api.SaasUserApi.md#resetsaasuserpassword)
- [respondToSignInChallenge](Auth_api.SaasUserApi.md#respondtosigninchallenge)
- [searchSaasUsers](Auth_api.SaasUserApi.md#searchsaasusers)
- [signIn](Auth_api.SaasUserApi.md#signin)
- [signUp](Auth_api.SaasUserApi.md#signup)
- [signUpWithAwsMarketplace](Auth_api.SaasUserApi.md#signupwithawsmarketplace)
- [unlinkProvider](Auth_api.SaasUserApi.md#unlinkprovider)
- [updateDeviceStatus](Auth_api.SaasUserApi.md#updatedevicestatus)
- [updateSaasUserAttributes](Auth_api.SaasUserApi.md#updatesaasuserattributes)
- [updateSaasUserEmail](Auth_api.SaasUserApi.md#updatesaasuseremail)
- [updateSaasUserPassword](Auth_api.SaasUserApi.md#updatesaasuserpassword)
- [updateSaasUserSignInId](Auth_api.SaasUserApi.md#updatesaasusersigninid)
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

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[axios](Auth_base.BaseAPI.md#axios)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[basePath](Auth_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Auth_configuration.Configuration.md)

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[configuration](Auth_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/Auth/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/base.ts#L50)

## Methods

### confirmDevice

▸ **confirmDevice**(`confirmDeviceParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`ConfirmDeviceResult`](../interfaces/Auth_api.ConfirmDeviceResult.md), `any`, {}\>\>

Confirms a device for remembering.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `confirmDeviceParam?` | [`ConfirmDeviceParam`](../interfaces/Auth_api.ConfirmDeviceParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`ConfirmDeviceResult`](../interfaces/Auth_api.ConfirmDeviceResult.md), `any`, {}\>\>

**`Summary`**

Confirm Device

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7251](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L7251)

___

### confirmEmailUpdate

▸ **confirmEmailUpdate**(`userId`, `confirmEmailUpdateParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}\>\>

Verify the code to confirm the user\'s email address update. Requires the user\'s access token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `confirmEmailUpdateParam?` | [`ConfirmEmailUpdateParam`](../interfaces/Auth_api.ConfirmEmailUpdateParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}\>\>

**`Summary`**

Confirm User Email Update

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7264](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L7264)

___

### confirmExternalUserLink

▸ **confirmExternalUserLink**(`confirmExternalUserLinkParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}\>\>

Verify the code for external account user link confirmation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `confirmExternalUserLinkParam?` | [`ConfirmExternalUserLinkParam`](../interfaces/Auth_api.ConfirmExternalUserLinkParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}\>\>

**`Summary`**

Confirm External User Account Link

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7276](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L7276)

___

### confirmSignUpWithAwsMarketplace

▸ **confirmSignUpWithAwsMarketplace**(`confirmSignUpWithAwsMarketplaceParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`Tenant`](../interfaces/Auth_api.Tenant.md), `any`, {}\>\>

Confirm a new use registeration linked to AWS Marketplace. Create a new tenant linked to AWS Marketplace. If the Registration Token is not valid, an error is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `confirmSignUpWithAwsMarketplaceParam?` | [`ConfirmSignUpWithAwsMarketplaceParam`](../interfaces/Auth_api.ConfirmSignUpWithAwsMarketplaceParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Tenant`](../interfaces/Auth_api.Tenant.md), `any`, {}\>\>

**`Summary`**

Confirm Sign Up with AWS Marketplace

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7288](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L7288)

___

### createSaasUser

▸ **createSaasUser**(`createSaasUserParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`CreatedSaasUser`](../interfaces/Auth_api.CreatedSaasUser.md), `any`, {}\>\>

Create SaaS User. If attributes is empty, a temporary password will be sent to the registered email.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createSaasUserParam?` | [`CreateSaasUserParam`](../interfaces/Auth_api.CreateSaasUserParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`CreatedSaasUser`](../interfaces/Auth_api.CreatedSaasUser.md), `any`, {}\>\>

**`Summary`**

Create SaaS User

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7300](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L7300)

___

### createSecretCode

▸ **createSecretCode**(`userId`, `createSecretCodeParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`SoftwareTokenSecretCode`](../interfaces/Auth_api.SoftwareTokenSecretCode.md), `any`, {}\>\>

Create a secret code for authentication application registration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `createSecretCodeParam?` | [`CreateSecretCodeParam`](../interfaces/Auth_api.CreateSecretCodeParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SoftwareTokenSecretCode`](../interfaces/Auth_api.SoftwareTokenSecretCode.md), `any`, {}\>\>

**`Summary`**

Create secret code for authentication application registration

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7313](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L7313)

___

### deleteSaasUser

▸ **deleteSaasUser**(`userId`, `options?`): `Promise`\<`AxiosResponse`\<[`UserInfo`](../interfaces/Auth_api.UserInfo.md), `any`, {}\>\>

Delete all users with matching user ID from the tenant and SaaS. Returns user information before deletion.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`UserInfo`](../interfaces/Auth_api.UserInfo.md), `any`, {}\>\>

**`Summary`**

Delete User

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7325](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L7325)

___

### getSaasUser

▸ **getSaasUser**(`userId`, `options?`): `Promise`\<`AxiosResponse`\<[`SaasUser`](../interfaces/Auth_api.SaasUser.md), `any`, {}\>\>

Get user information based on user ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SaasUser`](../interfaces/Auth_api.SaasUser.md), `any`, {}\>\>

**`Summary`**

Get User

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7337](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L7337)

___

### getSaasUsers

▸ **getSaasUsers**(`options?`): `Promise`\<`AxiosResponse`\<[`SaasUsers`](../interfaces/Auth_api.SaasUsers.md), `any`, {}\>\>

Get all SaaS users.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SaasUsers`](../interfaces/Auth_api.SaasUsers.md), `any`, {}\>\>

**`Summary`**

Get Users

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7348](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L7348)

___

### getUserMfaPreference

▸ **getUserMfaPreference**(`userId`, `options?`): `Promise`\<`AxiosResponse`\<[`MfaPreference`](../interfaces/Auth_api.MfaPreference.md), `any`, {}\>\>

Get the user\'s MFA settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`MfaPreference`](../interfaces/Auth_api.MfaPreference.md), `any`, {}\>\>

**`Summary`**

Get User\'s MFA Settings

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7360](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L7360)

___

### linkAwsMarketplace

▸ **linkAwsMarketplace**(`linkAwsMarketplaceParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}\>\>

Link an existing tenant with AWS Marketplace. If the Registration Token is not valid, an error is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `linkAwsMarketplaceParam?` | [`LinkAwsMarketplaceParam`](../interfaces/Auth_api.LinkAwsMarketplaceParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}\>\>

**`Summary`**

Link an existing tenant with AWS Marketplace

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7372](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L7372)

___

### requestEmailUpdate

▸ **requestEmailUpdate**(`userId`, `requestEmailUpdateParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}\>\>

Request to update the user\'s email address. Sends a verification code to the requested email address. Requires the user\'s access token. The verification code is valid for 24 hours. This API is only available for email-authenticated users. Sign-in ID authentication users cannot use this API.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `requestEmailUpdateParam?` | [`RequestEmailUpdateParam`](../interfaces/Auth_api.RequestEmailUpdateParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}\>\>

**`Summary`**

Request User Email Update

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7385](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L7385)

___

### requestExternalUserLink

▸ **requestExternalUserLink**(`requestExternalUserLinkParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}\>\>

Request to link an external account user. Get the email address of the user to be linked from the access token and send a verification code to that email address. The verification code is valid for 24 hours.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestExternalUserLinkParam?` | [`RequestExternalUserLinkParam`](../interfaces/Auth_api.RequestExternalUserLinkParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}\>\>

**`Summary`**

Request External User Account Link

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7397](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L7397)

___

### resendSignUpConfirmationEmail

▸ **resendSignUpConfirmationEmail**(`resendSignUpConfirmationEmailParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}\>\>

Resend temporary password for the new registered user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resendSignUpConfirmationEmailParam?` | [`ResendSignUpConfirmationEmailParam`](../interfaces/Auth_api.ResendSignUpConfirmationEmailParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}\>\>

**`Summary`**

Resend Sign Up Confirmation Email

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7409](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L7409)

___

### resetSaasUserPassword

▸ **resetSaasUserPassword**(`userId`, `options?`): `Promise`\<`AxiosResponse`\<[`SaasUserResetPasswordResult`](../interfaces/Auth_api.SaasUserResetPasswordResult.md), `any`, {}\>\>

Reset user\'s login password. The current password will be invalidated and a temporary password will be issued.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SaasUserResetPasswordResult`](../interfaces/Auth_api.SaasUserResetPasswordResult.md), `any`, {}\>\>

**`Summary`**

Reset Password

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7421](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L7421)

___

### respondToSignInChallenge

▸ **respondToSignInChallenge**(`respondToSignInChallengeParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`RespondToSignInChallengeResult`](../interfaces/Auth_api.RespondToSignInChallengeResult.md), `any`, {}\>\>

Respond to a sign-in challenge.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `respondToSignInChallengeParam?` | [`RespondToSignInChallengeParam`](../interfaces/Auth_api.RespondToSignInChallengeParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`RespondToSignInChallengeResult`](../interfaces/Auth_api.RespondToSignInChallengeResult.md), `any`, {}\>\>

**`Summary`**

Respond to Sign In Challenge

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7433](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L7433)

___

### searchSaasUsers

▸ **searchSaasUsers**(`id?`, `email?`, `signInId?`, `limit?`, `cursor?`, `options?`): `Promise`\<`AxiosResponse`\<[`SearchSaasUsersResult`](../interfaces/Auth_api.SearchSaasUsersResult.md), `any`, {}\>\>

Search SaaS users by user ID, email, or sign-in ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id?` | `string` | User ID |
| `email?` | `string` | Email prefix |
| `signInId?` | `string` | Sign-in ID prefix |
| `limit?` | `number` | Maximum number of items to retrieve |
| `cursor?` | `string` | Cursor for cursor pagination |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SearchSaasUsersResult`](../interfaces/Auth_api.SearchSaasUsersResult.md), `any`, {}\>\>

**`Summary`**

Search SaaS Users

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7449](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L7449)

___

### signIn

▸ **signIn**(`signInParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`SignInResult`](../interfaces/Auth_api.SignInResult.md), `any`, {}\>\>

A user attempts to sign in.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signInParam?` | [`SignInParam`](../interfaces/Auth_api.SignInParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SignInResult`](../interfaces/Auth_api.SignInResult.md), `any`, {}\>\>

**`Summary`**

Sign In

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7461](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L7461)

___

### signUp

▸ **signUp**(`signUpParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`SaasUser`](../interfaces/Auth_api.SaasUser.md), `any`, {}\>\>

Register a new user. A temporary password will be sent to the registered email.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signUpParam?` | [`SignUpParam`](../interfaces/Auth_api.SignUpParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SaasUser`](../interfaces/Auth_api.SaasUser.md), `any`, {}\>\>

**`Summary`**

Sign Up

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7473](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L7473)

___

### signUpWithAwsMarketplace

▸ **signUpWithAwsMarketplace**(`signUpWithAwsMarketplaceParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`SaasUser`](../interfaces/Auth_api.SaasUser.md), `any`, {}\>\>

Register a new user linked to AWS Marketplace. A temporary password will be sent to the registered email. If the Registration Token is not valid, an error is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signUpWithAwsMarketplaceParam?` | [`SignUpWithAwsMarketplaceParam`](../interfaces/Auth_api.SignUpWithAwsMarketplaceParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SaasUser`](../interfaces/Auth_api.SaasUser.md), `any`, {}\>\>

**`Summary`**

Sign Up with AWS Marketplace

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7485](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L7485)

___

### unlinkProvider

▸ **unlinkProvider**(`providerName`, `userId`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}\>\>

Unlink external identity providers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `providerName` | `string` |  |
| `userId` | `string` | User ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}\>\>

**`Summary`**

Unlink external identity providers

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7498](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L7498)

___

### updateDeviceStatus

▸ **updateDeviceStatus**(`updateDeviceStatusParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}\>\>

Updates the device status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `updateDeviceStatusParam?` | [`UpdateDeviceStatusParam`](../interfaces/Auth_api.UpdateDeviceStatusParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}\>\>

**`Summary`**

Update Device Status

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7510](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L7510)

___

### updateSaasUserAttributes

▸ **updateSaasUserAttributes**(`userId`, `updateSaasUserAttributesParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}\>\>

Update the additional attributes of the SaaS user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `updateSaasUserAttributesParam?` | [`UpdateSaasUserAttributesParam`](../interfaces/Auth_api.UpdateSaasUserAttributesParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}\>\>

**`Summary`**

Update SaaS User Attributes

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7523](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L7523)

___

### updateSaasUserEmail

▸ **updateSaasUserEmail**(`userId`, `updateSaasUserEmailParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}\>\>

Change user\'s email. The user must be an email authentication user. Sign-in ID authentication users cannot change their email.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `updateSaasUserEmailParam?` | [`UpdateSaasUserEmailParam`](../interfaces/Auth_api.UpdateSaasUserEmailParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}\>\>

**`Summary`**

Change Email

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7536](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L7536)

___

### updateSaasUserPassword

▸ **updateSaasUserPassword**(`userId`, `updateSaasUserPasswordParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}\>\>

Change user\'s login password.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `updateSaasUserPasswordParam?` | [`UpdateSaasUserPasswordParam`](../interfaces/Auth_api.UpdateSaasUserPasswordParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}\>\>

**`Summary`**

Change Password

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7549](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L7549)

___

### updateSaasUserSignInId

▸ **updateSaasUserSignInId**(`userId`, `updateSaasUserSignInIdParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}\>\>

Change user\'s sign-in ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `updateSaasUserSignInIdParam?` | [`UpdateSaasUserSignInIdParam`](../interfaces/Auth_api.UpdateSaasUserSignInIdParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}\>\>

**`Summary`**

Change Sign-in ID

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7562](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L7562)

___

### updateSoftwareToken

▸ **updateSoftwareToken**(`userId`, `updateSoftwareTokenParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}\>\>

Register an authentication application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `updateSoftwareTokenParam?` | [`UpdateSoftwareTokenParam`](../interfaces/Auth_api.UpdateSoftwareTokenParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}\>\>

**`Summary`**

Register Authentication Application

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7575](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L7575)

___

### updateUserMfaPreference

▸ **updateUserMfaPreference**(`userId`, `body?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}\>\>

Update user\'s MFA settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `body?` | [`MfaPreference`](../interfaces/Auth_api.MfaPreference.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}\>\>

**`Summary`**

Update User\'s MFA Settings

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7588](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L7588)
