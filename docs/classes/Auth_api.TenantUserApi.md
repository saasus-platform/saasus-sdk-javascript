[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / TenantUserApi

# Class: TenantUserApi

[Auth/api](../modules/Auth_api.md).TenantUserApi

TenantUserApi - object-oriented interface

**`Export`**

TenantUserApi

## Hierarchy

- [`BaseAPI`](Auth_base.BaseAPI.md)

  ↳ **`TenantUserApi`**

## Table of contents

### Constructors

- [constructor](Auth_api.TenantUserApi.md#constructor)

### Properties

- [axios](Auth_api.TenantUserApi.md#axios)
- [basePath](Auth_api.TenantUserApi.md#basepath)
- [configuration](Auth_api.TenantUserApi.md#configuration)

### Methods

- [createTenantUser](Auth_api.TenantUserApi.md#createtenantuser)
- [createTenantUserRoles](Auth_api.TenantUserApi.md#createtenantuserroles)
- [deleteTenantUser](Auth_api.TenantUserApi.md#deletetenantuser)
- [deleteTenantUserRole](Auth_api.TenantUserApi.md#deletetenantuserrole)
- [getAllTenantUser](Auth_api.TenantUserApi.md#getalltenantuser)
- [getAllTenantUsers](Auth_api.TenantUserApi.md#getalltenantusers)
- [getTenantUser](Auth_api.TenantUserApi.md#gettenantuser)
- [getTenantUsers](Auth_api.TenantUserApi.md#gettenantusers)
- [updateTenantUser](Auth_api.TenantUserApi.md#updatetenantuser)

## Constructors

### constructor

• **new TenantUserApi**(`configuration?`, `basePath?`, `axios?`): [`TenantUserApi`](Auth_api.TenantUserApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Auth_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`TenantUserApi`](Auth_api.TenantUserApi.md)

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[constructor](Auth_base.BaseAPI.md#constructor)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Auth/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[axios](Auth_base.BaseAPI.md#axios)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Auth/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[basePath](Auth_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Auth/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Auth_configuration.Configuration.md)

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[configuration](Auth_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/Auth/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Auth/base.ts#L50)

## Methods

### createTenantUser

▸ **createTenantUser**(`tenantId`, `createTenantUserParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`User`](../interfaces/Auth_api.User.md), `any`\>\>

Create a tenant user. If attributes is empty, the additional attributes will be created empty.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `createTenantUserParam?` | [`CreateTenantUserParam`](../interfaces/Auth_api.CreateTenantUserParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`User`](../interfaces/Auth_api.User.md), `any`\>\>

**`Summary`**

Create Tenant User

**`Throws`**

**`Memberof`**

TenantUserApi

#### Defined in

[src/generated/Auth/api.ts:8523](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Auth/api.ts#L8523)

___

### createTenantUserRoles

▸ **createTenantUserRoles**(`tenantId`, `userId`, `envId`, `createTenantUserRolesParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Create roles on tenant users.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `userId` | `string` | User ID |
| `envId` | `number` | Env ID |
| `createTenantUserRolesParam?` | [`CreateTenantUserRolesParam`](../interfaces/Auth_api.CreateTenantUserRolesParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Create Tenant User Role

**`Throws`**

**`Memberof`**

TenantUserApi

#### Defined in

[src/generated/Auth/api.ts:8538](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Auth/api.ts#L8538)

___

### deleteTenantUser

▸ **deleteTenantUser**(`tenantId`, `userId`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Delete a user from the tenant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `userId` | `string` | User ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Delete Tenant User

**`Throws`**

**`Memberof`**

TenantUserApi

#### Defined in

[src/generated/Auth/api.ts:8551](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Auth/api.ts#L8551)

___

### deleteTenantUserRole

▸ **deleteTenantUserRole**(`tenantId`, `userId`, `envId`, `roleName`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Remove a role from a tenant user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `userId` | `string` | User ID |
| `envId` | `number` | Env ID |
| `roleName` | `string` | Role name |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Remove Role From Tenant User

**`Throws`**

**`Memberof`**

TenantUserApi

#### Defined in

[src/generated/Auth/api.ts:8566](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Auth/api.ts#L8566)

___

### getAllTenantUser

▸ **getAllTenantUser**(`userId`, `options?`): `Promise`\<`AxiosResponse`\<[`Users`](../interfaces/Auth_api.Users.md), `any`\>\>

Get information on user belonging to the tenant from the user ID. If the user belongs to multiple tenants, it will be returned as another object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Users`](../interfaces/Auth_api.Users.md), `any`\>\>

**`Summary`**

Get User Info

**`Throws`**

**`Memberof`**

TenantUserApi

#### Defined in

[src/generated/Auth/api.ts:8578](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Auth/api.ts#L8578)

___

### getAllTenantUsers

▸ **getAllTenantUsers**(`options?`): `Promise`\<`AxiosResponse`\<[`Users`](../interfaces/Auth_api.Users.md), `any`\>\>

Get all users belonging to the tenant. The same user belonging to multiple tenants will be returned as a different object. Id is not unique.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Users`](../interfaces/Auth_api.Users.md), `any`\>\>

**`Summary`**

Get Users

**`Throws`**

**`Memberof`**

TenantUserApi

#### Defined in

[src/generated/Auth/api.ts:8589](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Auth/api.ts#L8589)

___

### getTenantUser

▸ **getTenantUser**(`tenantId`, `userId`, `options?`): `Promise`\<`AxiosResponse`\<[`User`](../interfaces/Auth_api.User.md), `any`\>\>

Get one tenant user by specific ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `userId` | `string` | User ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`User`](../interfaces/Auth_api.User.md), `any`\>\>

**`Summary`**

Get Tenant User

**`Throws`**

**`Memberof`**

TenantUserApi

#### Defined in

[src/generated/Auth/api.ts:8602](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Auth/api.ts#L8602)

___

### getTenantUsers

▸ **getTenantUsers**(`tenantId`, `options?`): `Promise`\<`AxiosResponse`\<[`Users`](../interfaces/Auth_api.Users.md), `any`\>\>

Get all the users belonging to the tenant. Id is unique.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Users`](../interfaces/Auth_api.Users.md), `any`\>\>

**`Summary`**

Get Tenant Users

**`Throws`**

**`Memberof`**

TenantUserApi

#### Defined in

[src/generated/Auth/api.ts:8614](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Auth/api.ts#L8614)

___

### updateTenantUser

▸ **updateTenantUser**(`tenantId`, `userId`, `updateTenantUserParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Update tenant user attributes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `userId` | `string` | User ID |
| `updateTenantUserParam?` | [`UpdateTenantUserParam`](../interfaces/Auth_api.UpdateTenantUserParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Update Tenant User Attribute

**`Throws`**

**`Memberof`**

TenantUserApi

#### Defined in

[src/generated/Auth/api.ts:8628](https://github.com/saasus-platform/saasus-sdk-javascript/blob/6b95732/src/generated/Auth/api.ts#L8628)
