[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / SingleTenantApi

# Class: SingleTenantApi

[Auth/api](../modules/Auth_api.md).SingleTenantApi

SingleTenantApi - object-oriented interface

**`Export`**

SingleTenantApi

## Hierarchy

- [`BaseAPI`](Auth_base.BaseAPI.md)

  ↳ **`SingleTenantApi`**

## Table of contents

### Constructors

- [constructor](Auth_api.SingleTenantApi.md#constructor)

### Properties

- [axios](Auth_api.SingleTenantApi.md#axios)
- [basePath](Auth_api.SingleTenantApi.md#basepath)
- [configuration](Auth_api.SingleTenantApi.md#configuration)

### Methods

- [getCloudFormationLaunchStackLinkForSingleTenant](Auth_api.SingleTenantApi.md#getcloudformationlaunchstacklinkforsingletenant)
- [getSingleTenantSettings](Auth_api.SingleTenantApi.md#getsingletenantsettings)
- [updateSingleTenantSettings](Auth_api.SingleTenantApi.md#updatesingletenantsettings)

## Constructors

### constructor

• **new SingleTenantApi**(`configuration?`, `basePath?`, `axios?`): [`SingleTenantApi`](Auth_api.SingleTenantApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Auth_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`SingleTenantApi`](Auth_api.SingleTenantApi.md)

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[constructor](Auth_base.BaseAPI.md#constructor)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Auth/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[axios](Auth_base.BaseAPI.md#axios)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Auth/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[basePath](Auth_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Auth/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Auth_configuration.Configuration.md)

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[configuration](Auth_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/Auth/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Auth/base.ts#L50)

## Methods

### getCloudFormationLaunchStackLinkForSingleTenant

▸ **getCloudFormationLaunchStackLinkForSingleTenant**(`options?`): `Promise`\<`AxiosResponse`\<[`CloudFormationLaunchStackLink`](../interfaces/Auth_api.CloudFormationLaunchStackLink.md), `any`\>\>

Get the CloudFormation stack activation link for Single Tenant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`CloudFormationLaunchStackLink`](../interfaces/Auth_api.CloudFormationLaunchStackLink.md), `any`\>\>

**`Summary`**

Get CloudFormation Stack Launch Link For Single Tenant

**`Throws`**

**`Memberof`**

SingleTenantApi

#### Defined in

[src/generated/Auth/api.ts:6718](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Auth/api.ts#L6718)

___

### getSingleTenantSettings

▸ **getSingleTenantSettings**(`options?`): `Promise`\<`AxiosResponse`\<[`SingleTenantSettings`](../interfaces/Auth_api.SingleTenantSettings.md), `any`\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SingleTenantSettings`](../interfaces/Auth_api.SingleTenantSettings.md), `any`\>\>

**`Summary`**

Retrieve the settings of the single tenant.

**`Throws`**

**`Memberof`**

SingleTenantApi

#### Defined in

[src/generated/Auth/api.ts:6729](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Auth/api.ts#L6729)

___

### updateSingleTenantSettings

▸ **updateSingleTenantSettings**(`updateSingleTenantSettingsParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Updates configuration information for single-tenant functionality Returns error if single tenant feature cannot be enabled.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `updateSingleTenantSettingsParam?` | [`UpdateSingleTenantSettingsParam`](../interfaces/Auth_api.UpdateSingleTenantSettingsParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Update configuration information for single-tenant functionality

**`Throws`**

**`Memberof`**

SingleTenantApi

#### Defined in

[src/generated/Auth/api.ts:6741](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Auth/api.ts#L6741)
