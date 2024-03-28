[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / EnvApi

# Class: EnvApi

[Auth/api](../modules/Auth_api.md).EnvApi

EnvApi - object-oriented interface

**`Export`**

EnvApi

## Hierarchy

- [`BaseAPI`](Auth_base.BaseAPI.md)

  ↳ **`EnvApi`**

## Table of contents

### Constructors

- [constructor](Auth_api.EnvApi.md#constructor)

### Properties

- [axios](Auth_api.EnvApi.md#axios)
- [basePath](Auth_api.EnvApi.md#basepath)
- [configuration](Auth_api.EnvApi.md#configuration)

### Methods

- [createEnv](Auth_api.EnvApi.md#createenv)
- [deleteEnv](Auth_api.EnvApi.md#deleteenv)
- [getEnv](Auth_api.EnvApi.md#getenv)
- [getEnvs](Auth_api.EnvApi.md#getenvs)
- [updateEnv](Auth_api.EnvApi.md#updateenv)

## Constructors

### constructor

• **new EnvApi**(`configuration?`, `basePath?`, `axios?`): [`EnvApi`](Auth_api.EnvApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Auth_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`EnvApi`](Auth_api.EnvApi.md)

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

### createEnv

▸ **createEnv**(`body?`, `options?`): `Promise`\<`AxiosResponse`\<[`Env`](../interfaces/Auth_api.Env.md), `any`\>\>

環境情報を作成します。 連携のテストや開発用環境や実際の運用で利用する環境など複数の環境を定義することができます。  Create environment information. Multiple environments can be defined, such as an environment for testing linkage, an environment for development, and an environment for actual operation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body?` | [`Env`](../interfaces/Auth_api.Env.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Env`](../interfaces/Auth_api.Env.md), `any`\>\>

**`Summary`**

環境情報を作成(Create Env Info)

**`Throws`**

**`Memberof`**

EnvApi

#### Defined in

[src/generated/Auth/api.ts:3919](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L3919)

___

### deleteEnv

▸ **deleteEnv**(`envId`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

環境情報を削除します。idが3の環境は削除できません。  Delete env info. Env with id 3 cannot be deleted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `envId` | `number` | 環境ID(Env ID) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

環境情報を削除(Delete Env Info)

**`Throws`**

**`Memberof`**

EnvApi

#### Defined in

[src/generated/Auth/api.ts:3931](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L3931)

___

### getEnv

▸ **getEnv**(`envId`, `options?`): `Promise`\<`AxiosResponse`\<[`Env`](../interfaces/Auth_api.Env.md), `any`\>\>

環境情報の詳細を取得します。  Get environment details.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `envId` | `number` | 環境ID(Env ID) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Env`](../interfaces/Auth_api.Env.md), `any`\>\>

**`Summary`**

環境情報を取得(Get Env Details)

**`Throws`**

**`Memberof`**

EnvApi

#### Defined in

[src/generated/Auth/api.ts:3943](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L3943)

___

### getEnvs

▸ **getEnvs**(`options?`): `Promise`\<`AxiosResponse`\<[`Envs`](../interfaces/Auth_api.Envs.md), `any`\>\>

登録されている環境情報を取得します。 連携のテストや開発用環境や実際の運用で利用する環境など複数の環境を定義することができます。  Get registered environment information. Multiple environments can be defined, such as an environment for testing linkage, an environment for development, and an environment for actual operation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Envs`](../interfaces/Auth_api.Envs.md), `any`\>\>

**`Summary`**

環境情報一覧を取得(Get Env Info)

**`Throws`**

**`Memberof`**

EnvApi

#### Defined in

[src/generated/Auth/api.ts:3954](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L3954)

___

### updateEnv

▸ **updateEnv**(`envId`, `updateEnvParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

環境情報を更新します。  Update env info.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `envId` | `number` | 環境ID(Env ID) |
| `updateEnvParam?` | [`UpdateEnvParam`](../interfaces/Auth_api.UpdateEnvParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

環境情報を更新(Update Env Info)

**`Throws`**

**`Memberof`**

EnvApi

#### Defined in

[src/generated/Auth/api.ts:3967](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L3967)
