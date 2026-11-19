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
- [getAllTenantUsersCount](Auth_api.TenantUserApi.md#getalltenantuserscount)
- [getTenantUser](Auth_api.TenantUserApi.md#gettenantuser)
- [getTenantUsers](Auth_api.TenantUserApi.md#gettenantusers)
- [saveTenantUsersCounts](Auth_api.TenantUserApi.md#savetenantuserscounts)
- [searchTenantUsers](Auth_api.TenantUserApi.md#searchtenantusers)
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

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[axios](Auth_base.BaseAPI.md#axios)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[basePath](Auth_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/Auth/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Auth_configuration.Configuration.md)

#### Inherited from

[BaseAPI](Auth_base.BaseAPI.md).[configuration](Auth_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/Auth/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/base.ts#L50)

## Methods

### createTenantUser

▸ **createTenantUser**(`tenantId`, `createTenantUserParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`User`](../interfaces/Auth_api.User.md), `any`, {}, `any`\>\>

Create a tenant user. If attributes is empty, the additional attributes will be created empty.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `createTenantUserParam?` | [`CreateTenantUserParam`](../interfaces/Auth_api.CreateTenantUserParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`User`](../interfaces/Auth_api.User.md), `any`, {}, `any`\>\>

**`Summary`**

Create Tenant User

**`Throws`**

**`Memberof`**

TenantUserApi

#### Defined in

[src/generated/Auth/api.ts:10484](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L10484)

___

### createTenantUserRoles

▸ **createTenantUserRoles**(`tenantId`, `userId`, `envId`, `createTenantUserRolesParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

Create roles on tenant users.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `userId` | `string` | User ID |
| `envId` | `number` | Env ID |
| `createTenantUserRolesParam?` | [`CreateTenantUserRolesParam`](../interfaces/Auth_api.CreateTenantUserRolesParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

**`Summary`**

Create Tenant User Role

**`Throws`**

**`Memberof`**

TenantUserApi

#### Defined in

[src/generated/Auth/api.ts:10499](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L10499)

___

### deleteTenantUser

▸ **deleteTenantUser**(`tenantId`, `userId`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

Delete a user from the tenant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `userId` | `string` | User ID |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

**`Summary`**

Delete Tenant User

**`Throws`**

**`Memberof`**

TenantUserApi

#### Defined in

[src/generated/Auth/api.ts:10512](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L10512)

___

### deleteTenantUserRole

▸ **deleteTenantUserRole**(`tenantId`, `userId`, `envId`, `roleName`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

Remove a role from a tenant user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `userId` | `string` | User ID |
| `envId` | `number` | Env ID |
| `roleName` | `string` | Role name |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

**`Summary`**

Remove Role From Tenant User

**`Throws`**

**`Memberof`**

TenantUserApi

#### Defined in

[src/generated/Auth/api.ts:10527](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L10527)

___

### getAllTenantUser

▸ **getAllTenantUser**(`userId`, `options?`): `Promise`\<`AxiosResponse`\<[`Users`](../interfaces/Auth_api.Users.md), `any`, {}, `any`\>\>

Get information on user belonging to the tenant from the user ID. If the user belongs to multiple tenants, it will be returned as another object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | User ID |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Users`](../interfaces/Auth_api.Users.md), `any`, {}, `any`\>\>

**`Summary`**

Get User Info

**`Throws`**

**`Memberof`**

TenantUserApi

#### Defined in

[src/generated/Auth/api.ts:10539](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L10539)

___

### getAllTenantUsers

▸ **getAllTenantUsers**(`options?`): `Promise`\<`AxiosResponse`\<[`Users`](../interfaces/Auth_api.Users.md), `any`, {}, `any`\>\>

Get all users belonging to the tenant. The same user belonging to multiple tenants will be returned as a different object. Id is not unique.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Users`](../interfaces/Auth_api.Users.md), `any`, {}, `any`\>\>

**`Summary`**

Get Users

**`Throws`**

**`Memberof`**

TenantUserApi

#### Defined in

[src/generated/Auth/api.ts:10550](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L10550)

___

### getAllTenantUsersCount

▸ **getAllTenantUsersCount**(`options?`): `Promise`\<`AxiosResponse`\<[`TenantUsersCounts`](../interfaces/Auth_api.TenantUsersCounts.md), `any`, {}, `any`\>\>

Get the count of tenant users for each tenant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`TenantUsersCounts`](../interfaces/Auth_api.TenantUsersCounts.md), `any`, {}, `any`\>\>

**`Summary`**

Get Tenant Users Count

**`Throws`**

**`Memberof`**

TenantUserApi

#### Defined in

[src/generated/Auth/api.ts:10561](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L10561)

___

### getTenantUser

▸ **getTenantUser**(`tenantId`, `userId`, `options?`): `Promise`\<`AxiosResponse`\<[`User`](../interfaces/Auth_api.User.md), `any`, {}, `any`\>\>

Get one tenant user by specific ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `userId` | `string` | User ID |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`User`](../interfaces/Auth_api.User.md), `any`, {}, `any`\>\>

**`Summary`**

Get Tenant User

**`Throws`**

**`Memberof`**

TenantUserApi

#### Defined in

[src/generated/Auth/api.ts:10574](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L10574)

___

### getTenantUsers

▸ **getTenantUsers**(`tenantId`, `options?`): `Promise`\<`AxiosResponse`\<[`Users`](../interfaces/Auth_api.Users.md), `any`, {}, `any`\>\>

Get all the users belonging to the tenant. Id is unique.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Users`](../interfaces/Auth_api.Users.md), `any`, {}, `any`\>\>

**`Summary`**

Get Tenant Users

**`Throws`**

**`Memberof`**

TenantUserApi

#### Defined in

[src/generated/Auth/api.ts:10586](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L10586)

___

### saveTenantUsersCounts

▸ **saveTenantUsersCounts**(`saveTenantUsersCountsParam`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

Save the count of tenant users for each tenant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `saveTenantUsersCountsParam` | [`SaveTenantUsersCountsParam`](../interfaces/Auth_api.SaveTenantUsersCountsParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

**`Summary`**

Save Tenant Users Count

**`Throws`**

**`Memberof`**

TenantUserApi

#### Defined in

[src/generated/Auth/api.ts:10598](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L10598)

___

### searchTenantUsers

▸ **searchTenantUsers**(`tenantId?`, `id?`, `email?`, `signInId?`, `envId?`, `roleName?`, `limit?`, `cursor?`, `options?`): `Promise`\<`AxiosResponse`\<[`SearchTenantUsersResult`](../interfaces/Auth_api.SearchTenantUsersResult.md), `any`, {}, `any`\>\>

Search tenant users by user id, tenant id, email, sign-in ID, env, or role.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId?` | `string` | Tenant ID |
| `id?` | `string` | User ID |
| `email?` | `string` | Email prefix |
| `signInId?` | `string` | Sign-in ID prefix |
| `envId?` | `number` | Environment ID |
| `roleName?` | `string` | Role Name |
| `limit?` | `number` | Maximum number of items to retrieve |
| `cursor?` | `string` | Cursor for cursor pagination |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`SearchTenantUsersResult`](../interfaces/Auth_api.SearchTenantUsersResult.md), `any`, {}, `any`\>\>

**`Summary`**

Search Tenant Users

**`Throws`**

**`Memberof`**

TenantUserApi

#### Defined in

[src/generated/Auth/api.ts:10617](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L10617)

___

### updateTenantUser

▸ **updateTenantUser**(`tenantId`, `userId`, `updateTenantUserParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

Update tenant user attributes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `userId` | `string` | User ID |
| `updateTenantUserParam?` | [`UpdateTenantUserParam`](../interfaces/Auth_api.UpdateTenantUserParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`, `any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`, {}, `any`\>\>

**`Summary`**

Update Tenant User Attribute

**`Throws`**

**`Memberof`**

TenantUserApi

#### Defined in

[src/generated/Auth/api.ts:10631](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L10631)
