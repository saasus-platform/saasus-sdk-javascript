[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / InvitationApi

# Class: InvitationApi

[Auth/api](../modules/Auth_api.md).InvitationApi

InvitationApi - object-oriented interface

**`Export`**

InvitationApi

## Hierarchy

- [`BaseAPI`](Auth_base.BaseAPI.md)

  ↳ **`InvitationApi`**

## Table of contents

### Constructors

- [constructor](Auth_api.InvitationApi.md#constructor)

### Properties

- [axios](Auth_api.InvitationApi.md#axios)
- [basePath](Auth_api.InvitationApi.md#basepath)
- [configuration](Auth_api.InvitationApi.md#configuration)

### Methods

- [createTenantInvitation](Auth_api.InvitationApi.md#createtenantinvitation)
- [deleteTenantInvitation](Auth_api.InvitationApi.md#deletetenantinvitation)
- [getInvitationValidity](Auth_api.InvitationApi.md#getinvitationvalidity)
- [getTenantInvitation](Auth_api.InvitationApi.md#gettenantinvitation)
- [getTenantInvitations](Auth_api.InvitationApi.md#gettenantinvitations)
- [validateInvitation](Auth_api.InvitationApi.md#validateinvitation)

## Constructors

### constructor

• **new InvitationApi**(`configuration?`, `basePath?`, `axios?`): [`InvitationApi`](Auth_api.InvitationApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Auth_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`InvitationApi`](Auth_api.InvitationApi.md)

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

### createTenantInvitation

▸ **createTenantInvitation**(`tenantId`, `createTenantInvitationParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`Invitation`](../interfaces/Auth_api.Invitation.md), `any`\>\>

Create an invitation to the tenant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `createTenantInvitationParam?` | [`CreateTenantInvitationParam`](../interfaces/Auth_api.CreateTenantInvitationParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Invitation`](../interfaces/Auth_api.Invitation.md), `any`\>\>

**`Summary`**

Create Tenant Invitation

**`Throws`**

**`Memberof`**

InvitationApi

#### Defined in

[src/generated/Auth/api.ts:4506](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L4506)

___

### deleteTenantInvitation

▸ **deleteTenantInvitation**(`tenantId`, `invitationId`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Delete an invitation for the tenant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `invitationId` | `string` | Invitation ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Delete Tenant Invitation

**`Throws`**

**`Memberof`**

InvitationApi

#### Defined in

[src/generated/Auth/api.ts:4519](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L4519)

___

### getInvitationValidity

▸ **getInvitationValidity**(`invitationId`, `options?`): `Promise`\<`AxiosResponse`\<[`InvitationValidity`](../interfaces/Auth_api.InvitationValidity.md), `any`\>\>

Get the validity of an invitation to the tenant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `invitationId` | `string` | Invitation ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`InvitationValidity`](../interfaces/Auth_api.InvitationValidity.md), `any`\>\>

**`Summary`**

Get Invitation Validity

**`Throws`**

**`Memberof`**

InvitationApi

#### Defined in

[src/generated/Auth/api.ts:4531](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L4531)

___

### getTenantInvitation

▸ **getTenantInvitation**(`tenantId`, `invitationId`, `options?`): `Promise`\<`AxiosResponse`\<[`Invitation`](../interfaces/Auth_api.Invitation.md), `any`\>\>

Get invitation information for the tenant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `invitationId` | `string` | Invitation ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Invitation`](../interfaces/Auth_api.Invitation.md), `any`\>\>

**`Summary`**

Get Tenant Invitation

**`Throws`**

**`Memberof`**

InvitationApi

#### Defined in

[src/generated/Auth/api.ts:4544](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L4544)

___

### getTenantInvitations

▸ **getTenantInvitations**(`tenantId`, `options?`): `Promise`\<`AxiosResponse`\<[`Invitations`](../interfaces/Auth_api.Invitations.md), `any`\>\>

Get a list of invitations to the tenant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Invitations`](../interfaces/Auth_api.Invitations.md), `any`\>\>

**`Summary`**

Get Tenant Invitations

**`Throws`**

**`Memberof`**

InvitationApi

#### Defined in

[src/generated/Auth/api.ts:4556](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L4556)

___

### validateInvitation

▸ **validateInvitation**(`invitationId`, `validateInvitationParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Validate an invitation to the tenant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `invitationId` | `string` | Invitation ID |
| `validateInvitationParam?` | [`ValidateInvitationParam`](../interfaces/Auth_api.ValidateInvitationParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Validate Invitation

**`Throws`**

**`Memberof`**

InvitationApi

#### Defined in

[src/generated/Auth/api.ts:4569](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L4569)
