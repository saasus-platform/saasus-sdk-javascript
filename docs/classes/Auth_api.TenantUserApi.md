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

### createTenantUser

▸ **createTenantUser**(`tenantId`, `createTenantUserParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`User`](../interfaces/Auth_api.User.md), `any`\>\>

テナントにユーザーを作成します。 attributesを空のオブジェクトにした場合、追加属性は空で作成されます。  Create a tenant user. If attributes is empty, the additional attributes will be created empty.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | テナントID(Tenant ID) |
| `createTenantUserParam?` | [`CreateTenantUserParam`](../interfaces/Auth_api.CreateTenantUserParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`User`](../interfaces/Auth_api.User.md), `any`\>\>

**`Summary`**

テナントにユーザーを作成(Create Tenant User)

**`Throws`**

**`Memberof`**

TenantUserApi

#### Defined in

[src/generated/Auth/api.ts:8088](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L8088)

___

### createTenantUserRoles

▸ **createTenantUserRoles**(`tenantId`, `userId`, `envId`, `createTenantUserRolesParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

テナントのユーザーに役割(ロール)を作成します。  Create roles on tenant users.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | テナントID(Tenant ID) |
| `userId` | `string` | ユーザーID(User ID) |
| `envId` | `number` | 環境ID(Env ID) |
| `createTenantUserRolesParam?` | [`CreateTenantUserRolesParam`](../interfaces/Auth_api.CreateTenantUserRolesParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

テナントのユーザー情報に役割(ロール)を作成(Create Tenant User Role)

**`Throws`**

**`Memberof`**

TenantUserApi

#### Defined in

[src/generated/Auth/api.ts:8103](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L8103)

___

### deleteTenantUser

▸ **deleteTenantUser**(`tenantId`, `userId`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

テナントからユーザーを削除します。  Delete a user from your tenant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | テナントID(Tenant ID) |
| `userId` | `string` | ユーザーID(User ID) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

テナントのユーザー情報を削除(Delete Tenant User)

**`Throws`**

**`Memberof`**

TenantUserApi

#### Defined in

[src/generated/Auth/api.ts:8116](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L8116)

___

### deleteTenantUserRole

▸ **deleteTenantUserRole**(`tenantId`, `userId`, `envId`, `roleName`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

テナントのユーザーから役割(ロール)を削除します。  Remove a role from a tenant user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | テナントID(Tenant ID) |
| `userId` | `string` | ユーザーID(User ID) |
| `envId` | `number` | 環境ID(Env ID) |
| `roleName` | `string` | 役割(ロール)名(role name) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

テナントのユーザーから役割(ロール)を削除(Remove Role From Tenant User)

**`Throws`**

**`Memberof`**

TenantUserApi

#### Defined in

[src/generated/Auth/api.ts:8131](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L8131)

___

### getAllTenantUser

▸ **getAllTenantUser**(`userId`, `options?`): `Promise`\<`AxiosResponse`\<[`Users`](../interfaces/Auth_api.Users.md), `any`\>\>

ユーザーIDからテナントに所属しているユーザー情報を取得します。 複数テナントに所属している場合は別のオブジェクトとして返却されます。  Get information on user belonging to the tenant from the user ID. If the user belongs to multiple tenants, it will be returned as another object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | ユーザーID(User ID) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Users`](../interfaces/Auth_api.Users.md), `any`\>\>

**`Summary`**

ユーザー情報を取得(Get User Info)

**`Throws`**

**`Memberof`**

TenantUserApi

#### Defined in

[src/generated/Auth/api.ts:8143](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L8143)

___

### getAllTenantUsers

▸ **getAllTenantUsers**(`options?`): `Promise`\<`AxiosResponse`\<[`Users`](../interfaces/Auth_api.Users.md), `any`\>\>

テナントに所属しているユーザー全件を取得します。 複数テナントに所属する同一ユーザーは別のオブジェクトとして返却されます。 idは一意ではありません。  Get all users belonging to the tenant. The same user belonging to multiple tenants will be returned as a different object. Id is not unique.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Users`](../interfaces/Auth_api.Users.md), `any`\>\>

**`Summary`**

ユーザー一覧を取得(Get Users)

**`Throws`**

**`Memberof`**

TenantUserApi

#### Defined in

[src/generated/Auth/api.ts:8154](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L8154)

___

### getTenantUser

▸ **getTenantUser**(`tenantId`, `userId`, `options?`): `Promise`\<`AxiosResponse`\<[`User`](../interfaces/Auth_api.User.md), `any`\>\>

テナントのユーザーをIDから一件取得します。  Get one tenant user by specific ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | テナントID(Tenant ID) |
| `userId` | `string` | ユーザーID(User ID) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`User`](../interfaces/Auth_api.User.md), `any`\>\>

**`Summary`**

テナントのユーザー情報を取得(Get Tenant User)

**`Throws`**

**`Memberof`**

TenantUserApi

#### Defined in

[src/generated/Auth/api.ts:8167](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L8167)

___

### getTenantUsers

▸ **getTenantUsers**(`tenantId`, `options?`): `Promise`\<`AxiosResponse`\<[`Users`](../interfaces/Auth_api.Users.md), `any`\>\>

テナントに所属するユーザーを全件取得します。 idは一意です。  Get all the users belonging to the tenant. Id is unique.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | テナントID(Tenant ID) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Users`](../interfaces/Auth_api.Users.md), `any`\>\>

**`Summary`**

テナントのユーザー一覧を取得(Get Tenant Users)

**`Throws`**

**`Memberof`**

TenantUserApi

#### Defined in

[src/generated/Auth/api.ts:8179](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L8179)

___

### updateTenantUser

▸ **updateTenantUser**(`tenantId`, `userId`, `updateTenantUserParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

テナントのユーザー属性情報を更新します。  Update tenant user attributes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | テナントID(Tenant ID) |
| `userId` | `string` | ユーザーID(User ID) |
| `updateTenantUserParam?` | [`UpdateTenantUserParam`](../interfaces/Auth_api.UpdateTenantUserParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

テナントのユーザー属性情報を更新(Update Tenant User Attribute)

**`Throws`**

**`Memberof`**

TenantUserApi

#### Defined in

[src/generated/Auth/api.ts:8193](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L8193)
