[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / RoleApi

# Class: RoleApi

[Auth/api](../modules/Auth_api.md).RoleApi

RoleApi - object-oriented interface

**`Export`**

RoleApi

## Hierarchy

- [`BaseAPI`](Auth_base.BaseAPI.md)

  ↳ **`RoleApi`**

## Table of contents

### Constructors

- [constructor](Auth_api.RoleApi.md#constructor)

### Properties

- [axios](Auth_api.RoleApi.md#axios)
- [basePath](Auth_api.RoleApi.md#basepath)
- [configuration](Auth_api.RoleApi.md#configuration)

### Methods

- [createRole](Auth_api.RoleApi.md#createrole)
- [deleteRole](Auth_api.RoleApi.md#deleterole)
- [getRoles](Auth_api.RoleApi.md#getroles)

## Constructors

### constructor

• **new RoleApi**(`configuration?`, `basePath?`, `axios?`): [`RoleApi`](Auth_api.RoleApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Auth_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`RoleApi`](Auth_api.RoleApi.md)

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

### createRole

▸ **createRole**(`body?`, `options?`): `Promise`\<`AxiosResponse`\<[`Role`](../interfaces/Auth_api.Role.md), `any`\>\>

Create a role. By granting users the roles created here, it becomes easier to implement role-based authorization on the SaaS side. In addition, even the same user can have different roles for each tenant/environment to which they belong.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body?` | [`Role`](../interfaces/Auth_api.Role.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Role`](../interfaces/Auth_api.Role.md), `any`\>\>

**`Summary`**

Create Role

**`Throws`**

**`Memberof`**

RoleApi

#### Defined in

[src/generated/Auth/api.ts:4865](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L4865)

___

### deleteRole

▸ **deleteRole**(`roleName`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Delete role.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `roleName` | `string` | Role name |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Delete Role

**`Throws`**

**`Memberof`**

RoleApi

#### Defined in

[src/generated/Auth/api.ts:4877](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L4877)

___

### getRoles

▸ **getRoles**(`options?`): `Promise`\<`AxiosResponse`\<[`Roles`](../interfaces/Auth_api.Roles.md), `any`\>\>

Get registered roles list. Granting users the roles defined here makes it easy to implement role-based authorization on the SaaS side. In addition, even the same user can have different roles for each tenant/environment to which they belong.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Roles`](../interfaces/Auth_api.Roles.md), `any`\>\>

**`Summary`**

Get Roles

**`Throws`**

**`Memberof`**

RoleApi

#### Defined in

[src/generated/Auth/api.ts:4888](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L4888)
