[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / UserAttributeApi

# Class: UserAttributeApi

[Auth/api](../modules/Auth_api.md).UserAttributeApi

UserAttributeApi - object-oriented interface

**`Export`**

UserAttributeApi

## Hierarchy

- [`BaseAPI`](Auth_base.BaseAPI.md)

  ↳ **`UserAttributeApi`**

## Table of contents

### Constructors

- [constructor](Auth_api.UserAttributeApi.md#constructor)

### Properties

- [axios](Auth_api.UserAttributeApi.md#axios)
- [basePath](Auth_api.UserAttributeApi.md#basepath)
- [configuration](Auth_api.UserAttributeApi.md#configuration)

### Methods

- [createUserAttribute](Auth_api.UserAttributeApi.md#createuserattribute)
- [deleteUserAttribute](Auth_api.UserAttributeApi.md#deleteuserattribute)
- [getUserAttributes](Auth_api.UserAttributeApi.md#getuserattributes)

## Constructors

### constructor

• **new UserAttributeApi**(`configuration?`, `basePath?`, `axios?`): [`UserAttributeApi`](Auth_api.UserAttributeApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Auth_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`UserAttributeApi`](Auth_api.UserAttributeApi.md)

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

### createUserAttribute

▸ **createUserAttribute**(`body?`, `options?`): `Promise`\<`AxiosResponse`\<[`Attribute`](../interfaces/Auth_api.Attribute.md), `any`\>\>

SaaSus Platform にて保持するユーザーの追加属性を登録します。 例えば、ユーザー名を持たせる、誕生日を持たせるなど、ユーザーに紐付いた項目の定義を行うことができます。 一方で、個人情報を SaaSus Platform 側に持たせたくない場合は、このユーザー属性定義を行わずに SaaS 側で個人情報を持つことを検討してください。  Create additional user attributes to be kept on the SaaSus Platform. For example, you can define items associated with a user, such as user name, birthday, etc. If you don\'t want personal information on the SaaS Platform side, personal information can be kept on the SaaS side without user attribute definition.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body?` | [`Attribute`](../interfaces/Auth_api.Attribute.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Attribute`](../interfaces/Auth_api.Attribute.md), `any`\>\>

**`Summary`**

ユーザー属性の作成(Create User Attributes)

**`Throws`**

**`Memberof`**

UserAttributeApi

#### Defined in

[src/generated/Auth/api.ts:8414](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L8414)

___

### deleteUserAttribute

▸ **deleteUserAttribute**(`attributeName`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

SaaSus Platform にて保持するユーザーの追加属性を削除します。  Delete user attributes kept on the SaaSus Platform.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributeName` | `string` | 属性名(Attribute Name) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

ユーザー属性の削除(Delete User Attribute)

**`Throws`**

**`Memberof`**

UserAttributeApi

#### Defined in

[src/generated/Auth/api.ts:8426](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L8426)

___

### getUserAttributes

▸ **getUserAttributes**(`options?`): `Promise`\<`AxiosResponse`\<[`UserAttributes`](../interfaces/Auth_api.UserAttributes.md), `any`\>\>

SaaSus Platform にて保持するユーザーの追加属性を取得します。 例えば、ユーザー名を持たせる、誕生日を持たせるなど、ユーザーに紐付いた項目の定義を行うことができます。 一方で、個人情報を SaaSus Platform 側に持たせたくない場合は、このユーザー属性定義を行わずに SaaS 側で個人情報を持つことを検討してください。  Get additional attributes of the user saved in the SaaSus Platform. For example, you can define items associated with a user, such as user name, birthday, etc. If you don\'t want personal information on the SaaS Platform side, personal information can be kept on the SaaS side without user attribute definition.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`UserAttributes`](../interfaces/Auth_api.UserAttributes.md), `any`\>\>

**`Summary`**

ユーザー属性の一覧を取得(Get User Attributes)

**`Throws`**

**`Memberof`**

UserAttributeApi

#### Defined in

[src/generated/Auth/api.ts:8437](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L8437)
