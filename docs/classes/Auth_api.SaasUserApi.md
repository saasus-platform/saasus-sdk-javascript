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
- [getSaasUsersCount](Auth_api.SaasUserApi.md#getsaasuserscount)
- [getUserMfaPreference](Auth_api.SaasUserApi.md#getusermfapreference)
- [linkAwsMarketplace](Auth_api.SaasUserApi.md#linkawsmarketplace)
- [requestEmailUpdate](Auth_api.SaasUserApi.md#requestemailupdate)
- [requestExternalUserLink](Auth_api.SaasUserApi.md#requestexternaluserlink)
- [resendSignUpConfirmationEmail](Auth_api.SaasUserApi.md#resendsignupconfirmationemail)
- [resetSaasUserPassword](Auth_api.SaasUserApi.md#resetsaasuserpassword)
- [respondToSignInChallenge](Auth_api.SaasUserApi.md#respondtosigninchallenge)
- [saveSaasUsersCount](Auth_api.SaasUserApi.md#savesaasuserscount)
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

### confirmDevice

▸ **confirmDevice**(`confirmDeviceParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`ConfirmDeviceResult`](../interfaces/Auth_api.ConfirmDeviceResult.md), `any`, {}, `any`\>\>

Confirms a device for remembering.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `confirmDeviceParam?` | [`ConfirmDeviceParam`](../interfaces/Auth_api.ConfirmDeviceParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`ConfirmDeviceResult`](../interfaces/Auth_api.ConfirmDeviceResult.md), `any`, {}, `any`\>\>

**`Summary`**

Confirm Device

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7787](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L7787)

___

### confirmEmailUpdate

▸ **confirmEmailUpdate**(`userId`, `confirmEmailUpdateParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

Verify the code to confirm the user\'s email address update. Requires the user\'s access token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `confirmEmailUpdateParam?` | [`ConfirmEmailUpdateParam`](../interfaces/Auth_api.ConfirmEmailUpdateParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

**`Summary`**

Confirm User Email Update

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7800](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L7800)

___

### confirmExternalUserLink

▸ **confirmExternalUserLink**(`confirmExternalUserLinkParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

Verify the code for external account user link confirmation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `confirmExternalUserLinkParam?` | [`ConfirmExternalUserLinkParam`](../interfaces/Auth_api.ConfirmExternalUserLinkParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

**`Summary`**

Confirm External User Account Link

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7812](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L7812)

___

### confirmSignUpWithAwsMarketplace

▸ **confirmSignUpWithAwsMarketplace**(`confirmSignUpWithAwsMarketplaceParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`Tenant`](../interfaces/Auth_api.Tenant.md), `any`, {}, `any`\>\>

Confirm a new use registeration linked to AWS Marketplace. Create a new tenant linked to AWS Marketplace. If the Registration Token is not valid, an error is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `confirmSignUpWithAwsMarketplaceParam?` | [`ConfirmSignUpWithAwsMarketplaceParam`](../interfaces/Auth_api.ConfirmSignUpWithAwsMarketplaceParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Tenant`](../interfaces/Auth_api.Tenant.md), `any`, {}, `any`\>\>

**`Summary`**

Confirm Sign Up with AWS Marketplace

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7824](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L7824)

___

### createSaasUser

▸ **createSaasUser**(`createSaasUserParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`CreatedSaasUser`](../interfaces/Auth_api.CreatedSaasUser.md), `any`, {}, `any`\>\>

Create SaaS User. If attributes is empty, a temporary password will be sent to the registered email.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createSaasUserParam?` | [`CreateSaasUserParam`](../interfaces/Auth_api.CreateSaasUserParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`CreatedSaasUser`](../interfaces/Auth_api.CreatedSaasUser.md), `any`, {}, `any`\>\>

**`Summary`**

Create SaaS User

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7836](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L7836)

___

### createSecretCode

▸ **createSecretCode**(`userId`, `createSecretCodeParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`SoftwareTokenSecretCode`](../interfaces/Auth_api.SoftwareTokenSecretCode.md), `any`, {}, `any`\>\>

Create a secret code for authentication application registration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `createSecretCodeParam?` | [`CreateSecretCodeParam`](../interfaces/Auth_api.CreateSecretCodeParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SoftwareTokenSecretCode`](../interfaces/Auth_api.SoftwareTokenSecretCode.md), `any`, {}, `any`\>\>

**`Summary`**

Create secret code for authentication application registration

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7849](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L7849)

___

### deleteSaasUser

▸ **deleteSaasUser**(`userId`, `options?`): `Promise`\<`AxiosResponse`\<[`UserInfo`](../interfaces/Auth_api.UserInfo.md), `any`, {}, `any`\>\>

Delete all users with matching user ID from the tenant and SaaS. Returns user information before deletion.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`UserInfo`](../interfaces/Auth_api.UserInfo.md), `any`, {}, `any`\>\>

**`Summary`**

Delete User

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7861](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L7861)

___

### getSaasUser

▸ **getSaasUser**(`userId`, `options?`): `Promise`\<`AxiosResponse`\<[`SaasUser`](../interfaces/Auth_api.SaasUser.md), `any`, {}, `any`\>\>

Get user information based on user ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SaasUser`](../interfaces/Auth_api.SaasUser.md), `any`, {}, `any`\>\>

**`Summary`**

Get User

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7873](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L7873)

___

### getSaasUsers

▸ **getSaasUsers**(`options?`): `Promise`\<`AxiosResponse`\<[`SaasUsers`](../interfaces/Auth_api.SaasUsers.md), `any`, {}, `any`\>\>

Get all SaaS users.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SaasUsers`](../interfaces/Auth_api.SaasUsers.md), `any`, {}, `any`\>\>

**`Summary`**

Get Users

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7884](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L7884)

___

### getSaasUsersCount

▸ **getSaasUsersCount**(`options?`): `Promise`\<`AxiosResponse`\<[`SaasUsersCount`](../interfaces/Auth_api.SaasUsersCount.md), `any`, {}, `any`\>\>

Get the count of SaaS users.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SaasUsersCount`](../interfaces/Auth_api.SaasUsersCount.md), `any`, {}, `any`\>\>

**`Summary`**

Get SaaS Users Count

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7895](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L7895)

___

### getUserMfaPreference

▸ **getUserMfaPreference**(`userId`, `options?`): `Promise`\<`AxiosResponse`\<[`MfaPreference`](../interfaces/Auth_api.MfaPreference.md), `any`, {}, `any`\>\>

Get the user\'s MFA settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`MfaPreference`](../interfaces/Auth_api.MfaPreference.md), `any`, {}, `any`\>\>

**`Summary`**

Get User\'s MFA Settings

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7907](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L7907)

___

### linkAwsMarketplace

▸ **linkAwsMarketplace**(`linkAwsMarketplaceParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

Link an existing tenant with AWS Marketplace. If the Registration Token is not valid, an error is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `linkAwsMarketplaceParam?` | [`LinkAwsMarketplaceParam`](../interfaces/Auth_api.LinkAwsMarketplaceParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

**`Summary`**

Link an existing tenant with AWS Marketplace

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7919](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L7919)

___

### requestEmailUpdate

▸ **requestEmailUpdate**(`userId`, `requestEmailUpdateParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

Request to update the user\'s email address. Sends a verification code to the requested email address. Requires the user\'s access token. The verification code is valid for 24 hours. This API is only available for email-authenticated users. Sign-in ID authentication users cannot use this API.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `requestEmailUpdateParam?` | [`RequestEmailUpdateParam`](../interfaces/Auth_api.RequestEmailUpdateParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

**`Summary`**

Request User Email Update

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7932](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L7932)

___

### requestExternalUserLink

▸ **requestExternalUserLink**(`requestExternalUserLinkParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

Request to link an external account user. Get the email address of the user to be linked from the access token and send a verification code to that email address. The verification code is valid for 24 hours.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestExternalUserLinkParam?` | [`RequestExternalUserLinkParam`](../interfaces/Auth_api.RequestExternalUserLinkParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

**`Summary`**

Request External User Account Link

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7944](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L7944)

___

### resendSignUpConfirmationEmail

▸ **resendSignUpConfirmationEmail**(`resendSignUpConfirmationEmailParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

Resend temporary password for the new registered user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resendSignUpConfirmationEmailParam?` | [`ResendSignUpConfirmationEmailParam`](../interfaces/Auth_api.ResendSignUpConfirmationEmailParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

**`Summary`**

Resend Sign Up Confirmation Email

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7956](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L7956)

___

### resetSaasUserPassword

▸ **resetSaasUserPassword**(`userId`, `options?`): `Promise`\<`AxiosResponse`\<[`SaasUserResetPasswordResult`](../interfaces/Auth_api.SaasUserResetPasswordResult.md), `any`, {}, `any`\>\>

Reset user\'s login password. The current password will be invalidated and a temporary password will be issued.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SaasUserResetPasswordResult`](../interfaces/Auth_api.SaasUserResetPasswordResult.md), `any`, {}, `any`\>\>

**`Summary`**

Reset Password

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7968](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L7968)

___

### respondToSignInChallenge

▸ **respondToSignInChallenge**(`respondToSignInChallengeParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`RespondToSignInChallengeResult`](../interfaces/Auth_api.RespondToSignInChallengeResult.md), `any`, {}, `any`\>\>

Respond to a sign-in challenge.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `respondToSignInChallengeParam?` | [`RespondToSignInChallengeParam`](../interfaces/Auth_api.RespondToSignInChallengeParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`RespondToSignInChallengeResult`](../interfaces/Auth_api.RespondToSignInChallengeResult.md), `any`, {}, `any`\>\>

**`Summary`**

Respond to Sign In Challenge

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7980](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L7980)

___

### saveSaasUsersCount

▸ **saveSaasUsersCount**(`saveSaasUsersCountParam`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

Save the count of SaaS users.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `saveSaasUsersCountParam` | [`SaveSaasUsersCountParam`](../interfaces/Auth_api.SaveSaasUsersCountParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

**`Summary`**

Save SaaS Users Count

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:7992](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L7992)

___

### searchSaasUsers

▸ **searchSaasUsers**(`id?`, `email?`, `signInId?`, `limit?`, `cursor?`, `options?`): `Promise`\<`AxiosResponse`\<[`SearchSaasUsersResult`](../interfaces/Auth_api.SearchSaasUsersResult.md), `any`, {}, `any`\>\>

Search SaaS users by user ID, email, or sign-in ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id?` | `string` | User ID |
| `email?` | `string` | Email prefix |
| `signInId?` | `string` | Sign-in ID prefix |
| `limit?` | `number` | Maximum number of items to retrieve |
| `cursor?` | `string` | Cursor for cursor pagination |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SearchSaasUsersResult`](../interfaces/Auth_api.SearchSaasUsersResult.md), `any`, {}, `any`\>\>

**`Summary`**

Search SaaS Users

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:8008](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L8008)

___

### signIn

▸ **signIn**(`signInParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`SignInResult`](../interfaces/Auth_api.SignInResult.md), `any`, {}, `any`\>\>

A user attempts to sign in.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signInParam?` | [`SignInParam`](../interfaces/Auth_api.SignInParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SignInResult`](../interfaces/Auth_api.SignInResult.md), `any`, {}, `any`\>\>

**`Summary`**

Sign In

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:8020](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L8020)

___

### signUp

▸ **signUp**(`signUpParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`SaasUser`](../interfaces/Auth_api.SaasUser.md), `any`, {}, `any`\>\>

Register a new user. A temporary password will be sent to the registered email.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signUpParam?` | [`SignUpParam`](../interfaces/Auth_api.SignUpParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SaasUser`](../interfaces/Auth_api.SaasUser.md), `any`, {}, `any`\>\>

**`Summary`**

Sign Up

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:8032](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L8032)

___

### signUpWithAwsMarketplace

▸ **signUpWithAwsMarketplace**(`signUpWithAwsMarketplaceParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`SaasUser`](../interfaces/Auth_api.SaasUser.md), `any`, {}, `any`\>\>

Register a new user linked to AWS Marketplace. A temporary password will be sent to the registered email. If the Registration Token is not valid, an error is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signUpWithAwsMarketplaceParam?` | [`SignUpWithAwsMarketplaceParam`](../interfaces/Auth_api.SignUpWithAwsMarketplaceParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SaasUser`](../interfaces/Auth_api.SaasUser.md), `any`, {}, `any`\>\>

**`Summary`**

Sign Up with AWS Marketplace

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:8044](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L8044)

___

### unlinkProvider

▸ **unlinkProvider**(`providerName`, `userId`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

Unlink external identity providers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `providerName` | `string` |  |
| `userId` | `string` | User ID |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

**`Summary`**

Unlink external identity providers

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:8057](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L8057)

___

### updateDeviceStatus

▸ **updateDeviceStatus**(`updateDeviceStatusParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

Updates the device status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `updateDeviceStatusParam?` | [`UpdateDeviceStatusParam`](../interfaces/Auth_api.UpdateDeviceStatusParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

**`Summary`**

Update Device Status

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:8069](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L8069)

___

### updateSaasUserAttributes

▸ **updateSaasUserAttributes**(`userId`, `updateSaasUserAttributesParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

Update the additional attributes of the SaaS user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `updateSaasUserAttributesParam?` | [`UpdateSaasUserAttributesParam`](../interfaces/Auth_api.UpdateSaasUserAttributesParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

**`Summary`**

Update SaaS User Attributes

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:8082](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L8082)

___

### updateSaasUserEmail

▸ **updateSaasUserEmail**(`userId`, `updateSaasUserEmailParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

Change user\'s email. The user must be an email authentication user. Sign-in ID authentication users cannot change their email.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `updateSaasUserEmailParam?` | [`UpdateSaasUserEmailParam`](../interfaces/Auth_api.UpdateSaasUserEmailParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

**`Summary`**

Change Email

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:8095](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L8095)

___

### updateSaasUserPassword

▸ **updateSaasUserPassword**(`userId`, `updateSaasUserPasswordParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

Change user\'s login password.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `updateSaasUserPasswordParam?` | [`UpdateSaasUserPasswordParam`](../interfaces/Auth_api.UpdateSaasUserPasswordParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

**`Summary`**

Change Password

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:8108](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L8108)

___

### updateSaasUserSignInId

▸ **updateSaasUserSignInId**(`userId`, `updateSaasUserSignInIdParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

Change user\'s sign-in ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `updateSaasUserSignInIdParam?` | [`UpdateSaasUserSignInIdParam`](../interfaces/Auth_api.UpdateSaasUserSignInIdParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

**`Summary`**

Change Sign-in ID

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:8121](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L8121)

___

### updateSoftwareToken

▸ **updateSoftwareToken**(`userId`, `updateSoftwareTokenParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

Register an authentication application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `updateSoftwareTokenParam?` | [`UpdateSoftwareTokenParam`](../interfaces/Auth_api.UpdateSoftwareTokenParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

**`Summary`**

Register Authentication Application

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:8134](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L8134)

___

### updateUserMfaPreference

▸ **updateUserMfaPreference**(`userId`, `body?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

Update user\'s MFA settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `body?` | [`MfaPreference`](../interfaces/Auth_api.MfaPreference.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

**`Summary`**

Update User\'s MFA Settings

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:8147](https://github.com/saasus-platform/saasus-sdk-javascript/blob/354d362/src/generated/Auth/api.ts#L8147)
