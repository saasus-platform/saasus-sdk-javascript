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

### createTenantInvitation

▸ **createTenantInvitation**(`tenantId`, `createTenantInvitationParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`Invitation`](../interfaces/Auth_api.Invitation.md), `any`\>\>

テナントへの招待を作成します。  Create an invitation to the tenant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | テナントID(Tenant ID) |
| `createTenantInvitationParam?` | [`CreateTenantInvitationParam`](../interfaces/Auth_api.CreateTenantInvitationParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Invitation`](../interfaces/Auth_api.Invitation.md), `any`\>\>

**`Summary`**

テナントへの招待を作成(Create Tenant Invitation)

**`Throws`**

**`Memberof`**

InvitationApi

#### Defined in

[src/generated/Auth/api.ts:4498](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L4498)

___

### deleteTenantInvitation

▸ **deleteTenantInvitation**(`tenantId`, `invitationId`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

テナントへの招待を削除します。  Delete an invitation to the tenant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | テナントID(Tenant ID) |
| `invitationId` | `string` | 招待ID(Invitation ID) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

テナントへの招待を削除(Delete Tenant Invitation)

**`Throws`**

**`Memberof`**

InvitationApi

#### Defined in

[src/generated/Auth/api.ts:4511](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L4511)

___

### getInvitationValidity

▸ **getInvitationValidity**(`invitationId`, `options?`): `Promise`\<`AxiosResponse`\<[`InvitationValidity`](../interfaces/Auth_api.InvitationValidity.md), `any`\>\>

テナントへの招待の有効性を取得します。  Get the validity of an invitation to the tenant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `invitationId` | `string` | 招待ID(Invitation ID) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`InvitationValidity`](../interfaces/Auth_api.InvitationValidity.md), `any`\>\>

**`Summary`**

テナントへの招待の有効性を取得(Get Invitation Validity)

**`Throws`**

**`Memberof`**

InvitationApi

#### Defined in

[src/generated/Auth/api.ts:4523](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L4523)

___

### getTenantInvitation

▸ **getTenantInvitation**(`tenantId`, `invitationId`, `options?`): `Promise`\<`AxiosResponse`\<[`Invitation`](../interfaces/Auth_api.Invitation.md), `any`\>\>

テナントへの招待情報を取得します。  Get invitation information to the tenant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | テナントID(Tenant ID) |
| `invitationId` | `string` | 招待ID(Invitation ID) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Invitation`](../interfaces/Auth_api.Invitation.md), `any`\>\>

**`Summary`**

テナントの招待情報を取得(Get Tenant Invitation)

**`Throws`**

**`Memberof`**

InvitationApi

#### Defined in

[src/generated/Auth/api.ts:4536](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L4536)

___

### getTenantInvitations

▸ **getTenantInvitations**(`tenantId`, `options?`): `Promise`\<`AxiosResponse`\<[`Invitations`](../interfaces/Auth_api.Invitations.md), `any`\>\>

テナントへの招待一覧を取得します。  Get a list of invitations to the tenant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | テナントID(Tenant ID) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Invitations`](../interfaces/Auth_api.Invitations.md), `any`\>\>

**`Summary`**

テナントの招待一覧を取得(Get Tenant Invitations)

**`Throws`**

**`Memberof`**

InvitationApi

#### Defined in

[src/generated/Auth/api.ts:4548](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L4548)

___

### validateInvitation

▸ **validateInvitation**(`invitationId`, `validateInvitationParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

テナントへの招待を検証します。  Validate an invitation to the tenant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `invitationId` | `string` | 招待ID(Invitation ID) |
| `validateInvitationParam?` | [`ValidateInvitationParam`](../interfaces/Auth_api.ValidateInvitationParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

テナントへの招待を検証(Validate Invitation)

**`Throws`**

**`Memberof`**

InvitationApi

#### Defined in

[src/generated/Auth/api.ts:4561](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L4561)
