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

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[axios](Auth_base.BaseAPI.md#axios)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[basePath](Auth_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Auth_configuration.Configuration.md)

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[configuration](Auth_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/Auth/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/base.ts#L50)

## Methods

### confirmEmailUpdate

▸ **confirmEmailUpdate**(`userId`, `confirmEmailUpdateParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Verify the code to confirm the user\'s email address update. Requires the user\'s access token.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `confirmEmailUpdateParam?` | [`ConfirmEmailUpdateParam`](../interfaces/Auth_api.ConfirmEmailUpdateParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Confirm User Email Update

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6086](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L6086)

___

### confirmExternalUserLink

▸ **confirmExternalUserLink**(`confirmExternalUserLinkParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Verify the code for external account user link confirmation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `confirmExternalUserLinkParam?` | [`ConfirmExternalUserLinkParam`](../interfaces/Auth_api.ConfirmExternalUserLinkParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Confirm External User Account Link

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6098](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L6098)

___

### confirmSignUpWithAwsMarketplace

▸ **confirmSignUpWithAwsMarketplace**(`confirmSignUpWithAwsMarketplaceParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`Tenant`](../interfaces/Auth_api.Tenant.md), `any`\>\>

Confirm a new use registeration linked to AWS Marketplace. Create a new tenant linked to AWS Marketplace. If the Registration Token is not valid, an error is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `confirmSignUpWithAwsMarketplaceParam?` | [`ConfirmSignUpWithAwsMarketplaceParam`](../interfaces/Auth_api.ConfirmSignUpWithAwsMarketplaceParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Tenant`](../interfaces/Auth_api.Tenant.md), `any`\>\>

**`Summary`**

Confirm Sign Up with AWS Marketplace

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6110](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L6110)

___

### createSaasUser

▸ **createSaasUser**(`createSaasUserParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`SaasUser`](../interfaces/Auth_api.SaasUser.md), `any`\>\>

Create SaaS User.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `createSaasUserParam?` | [`CreateSaasUserParam`](../interfaces/Auth_api.CreateSaasUserParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SaasUser`](../interfaces/Auth_api.SaasUser.md), `any`\>\>

**`Summary`**

Create SaaS User

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6122](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L6122)

___

### createSecretCode

▸ **createSecretCode**(`userId`, `createSecretCodeParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`SoftwareTokenSecretCode`](../interfaces/Auth_api.SoftwareTokenSecretCode.md), `any`\>\>

Create a secret code for authentication application registration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `createSecretCodeParam?` | [`CreateSecretCodeParam`](../interfaces/Auth_api.CreateSecretCodeParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SoftwareTokenSecretCode`](../interfaces/Auth_api.SoftwareTokenSecretCode.md), `any`\>\>

**`Summary`**

Create secret code for authentication application registration

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6135](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L6135)

___

### deleteSaasUser

▸ **deleteSaasUser**(`userId`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Delete all users with matching user ID from the tenant and SaaS.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Delete User

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6147](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L6147)

___

### getSaasUser

▸ **getSaasUser**(`userId`, `options?`): `Promise`\<`AxiosResponse`\<[`SaasUser`](../interfaces/Auth_api.SaasUser.md), `any`\>\>

Get user information based on user ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SaasUser`](../interfaces/Auth_api.SaasUser.md), `any`\>\>

**`Summary`**

Get User

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6159](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L6159)

___

### getSaasUsers

▸ **getSaasUsers**(`options?`): `Promise`\<`AxiosResponse`\<[`SaasUsers`](../interfaces/Auth_api.SaasUsers.md), `any`\>\>

Get all SaaS users.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SaasUsers`](../interfaces/Auth_api.SaasUsers.md), `any`\>\>

**`Summary`**

Get Users

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6170](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L6170)

___

### getUserMfaPreference

▸ **getUserMfaPreference**(`userId`, `options?`): `Promise`\<`AxiosResponse`\<[`MfaPreference`](../interfaces/Auth_api.MfaPreference.md), `any`\>\>

Get the user\'s MFA settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`MfaPreference`](../interfaces/Auth_api.MfaPreference.md), `any`\>\>

**`Summary`**

Get User\'s MFA Settings

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6182](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L6182)

___

### linkAwsMarketplace

▸ **linkAwsMarketplace**(`linkAwsMarketplaceParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Link an existing tenant with AWS Marketplace. If the Registration Token is not valid, an error is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `linkAwsMarketplaceParam?` | [`LinkAwsMarketplaceParam`](../interfaces/Auth_api.LinkAwsMarketplaceParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Link an existing tenant with AWS Marketplace

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6194](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L6194)

___

### requestEmailUpdate

▸ **requestEmailUpdate**(`userId`, `requestEmailUpdateParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Request to update the user\'s email address. Sends a verification code to the requested email address. Requires the user\'s access token. The verification code is valid for 24 hours.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `requestEmailUpdateParam?` | [`RequestEmailUpdateParam`](../interfaces/Auth_api.RequestEmailUpdateParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Request User Email Update

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6207](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L6207)

___

### requestExternalUserLink

▸ **requestExternalUserLink**(`requestExternalUserLinkParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Request to link an external account user. Get the email address of the user to be linked from the access token and send a verification code to that email address. The verification code is valid for 24 hours.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestExternalUserLinkParam?` | [`RequestExternalUserLinkParam`](../interfaces/Auth_api.RequestExternalUserLinkParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Request External User Account Link

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6219](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L6219)

___

### resendSignUpConfirmationEmail

▸ **resendSignUpConfirmationEmail**(`resendSignUpConfirmationEmailParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Resend temporary password for the new registered user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resendSignUpConfirmationEmailParam?` | [`ResendSignUpConfirmationEmailParam`](../interfaces/Auth_api.ResendSignUpConfirmationEmailParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Resend Sign Up Confirmation Email

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6231](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L6231)

___

### signUp

▸ **signUp**(`signUpParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`SaasUser`](../interfaces/Auth_api.SaasUser.md), `any`\>\>

Register a new user. A temporary password will be sent to the registered email.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signUpParam?` | [`SignUpParam`](../interfaces/Auth_api.SignUpParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SaasUser`](../interfaces/Auth_api.SaasUser.md), `any`\>\>

**`Summary`**

Sign Up

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6243](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L6243)

___

### signUpWithAwsMarketplace

▸ **signUpWithAwsMarketplace**(`signUpWithAwsMarketplaceParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`SaasUser`](../interfaces/Auth_api.SaasUser.md), `any`\>\>

Register a new user linked to AWS Marketplace. A temporary password will be sent to the registered email. If the Registration Token is not valid, an error is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `signUpWithAwsMarketplaceParam?` | [`SignUpWithAwsMarketplaceParam`](../interfaces/Auth_api.SignUpWithAwsMarketplaceParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SaasUser`](../interfaces/Auth_api.SaasUser.md), `any`\>\>

**`Summary`**

Sign Up with AWS Marketplace

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6255](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L6255)

___

### unlinkProvider

▸ **unlinkProvider**(`providerName`, `userId`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Unlink external identity providers.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `providerName` | `string` |  |
| `userId` | `string` | User ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Unlink external identity providers

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6268](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L6268)

___

### updateSaasUserEmail

▸ **updateSaasUserEmail**(`userId`, `updateSaasUserEmailParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Change user\'s email.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `updateSaasUserEmailParam?` | [`UpdateSaasUserEmailParam`](../interfaces/Auth_api.UpdateSaasUserEmailParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Change Email

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6281](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L6281)

___

### updateSaasUserPassword

▸ **updateSaasUserPassword**(`userId`, `updateSaasUserPasswordParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Change user\'s login password.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `updateSaasUserPasswordParam?` | [`UpdateSaasUserPasswordParam`](../interfaces/Auth_api.UpdateSaasUserPasswordParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Change Password

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6294](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L6294)

___

### updateSoftwareToken

▸ **updateSoftwareToken**(`userId`, `updateSoftwareTokenParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Register an authentication application.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `updateSoftwareTokenParam?` | [`UpdateSoftwareTokenParam`](../interfaces/Auth_api.UpdateSoftwareTokenParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Register Authentication Application

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6307](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L6307)

___

### updateUserMfaPreference

▸ **updateUserMfaPreference**(`userId`, `body?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Update user\'s MFA settings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `body?` | [`MfaPreference`](../interfaces/Auth_api.MfaPreference.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Update User\'s MFA Settings

**`Throws`**

**`Memberof`**

SaasUserApi

#### Defined in

[src/generated/Auth/api.ts:6320](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L6320)
