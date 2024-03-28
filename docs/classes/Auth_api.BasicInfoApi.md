[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / BasicInfoApi

# Class: BasicInfoApi

[Auth/api](../modules/Auth_api.md).BasicInfoApi

BasicInfoApi - object-oriented interface

**`Export`**

BasicInfoApi

## Hierarchy

- [`BaseAPI`](Auth_base.BaseAPI.md)

  ↳ **`BasicInfoApi`**

## Table of contents

### Constructors

- [constructor](Auth_api.BasicInfoApi.md#constructor)

### Properties

- [axios](Auth_api.BasicInfoApi.md#axios)
- [basePath](Auth_api.BasicInfoApi.md#basepath)
- [configuration](Auth_api.BasicInfoApi.md#configuration)

### Methods

- [findNotificationMessages](Auth_api.BasicInfoApi.md#findnotificationmessages)
- [getBasicInfo](Auth_api.BasicInfoApi.md#getbasicinfo)
- [getCustomizePageSettings](Auth_api.BasicInfoApi.md#getcustomizepagesettings)
- [getCustomizePages](Auth_api.BasicInfoApi.md#getcustomizepages)
- [updateBasicInfo](Auth_api.BasicInfoApi.md#updatebasicinfo)
- [updateCustomizePageSettings](Auth_api.BasicInfoApi.md#updatecustomizepagesettings)
- [updateCustomizePages](Auth_api.BasicInfoApi.md#updatecustomizepages)
- [updateNotificationMessages](Auth_api.BasicInfoApi.md#updatenotificationmessages)

## Constructors

### constructor

• **new BasicInfoApi**(`configuration?`, `basePath?`, `axios?`): [`BasicInfoApi`](Auth_api.BasicInfoApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Auth_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`BasicInfoApi`](Auth_api.BasicInfoApi.md)

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

### findNotificationMessages

▸ **findNotificationMessages**(`options?`): `Promise`\<`AxiosResponse`\<[`NotificationMessages`](../interfaces/Auth_api.NotificationMessages.md), `any`\>\>

各種通知メールテンプレートを取得します。  Get notification email templates.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`NotificationMessages`](../interfaces/Auth_api.NotificationMessages.md), `any`\>\>

**`Summary`**

通知メールテンプレートを取得(Get Notification Email Templates)

**`Throws`**

**`Memberof`**

BasicInfoApi

#### Defined in

[src/generated/Auth/api.ts:3296](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L3296)

___

### getBasicInfo

▸ **getBasicInfo**(`options?`): `Promise`\<`AxiosResponse`\<[`BasicInfo`](../interfaces/Auth_api.BasicInfo.md), `any`\>\>

SaaS ID を元に設定されているドメイン名と CNAME レコードを取得します。 取得した CNAME レコードを DNS に設定することで、ログイン画面を生成します。  Get the domain name and CNAME record based on the SaaS ID. By setting the CNAME record on the DNS the login screen will be generated.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`BasicInfo`](../interfaces/Auth_api.BasicInfo.md), `any`\>\>

**`Summary`**

基本設定情報の取得(Get Basic Configurations)

**`Throws`**

**`Memberof`**

BasicInfoApi

#### Defined in

[src/generated/Auth/api.ts:3307](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L3307)

___

### getCustomizePageSettings

▸ **getCustomizePageSettings**(`options?`): `Promise`\<`AxiosResponse`\<[`CustomizePageSettings`](../interfaces/Auth_api.CustomizePageSettings.md), `any`\>\>

認証認可基本情報を取得します。  Get authentication authorization basic information.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`CustomizePageSettings`](../interfaces/Auth_api.CustomizePageSettings.md), `any`\>\>

**`Summary`**

認証認可基本情報取得(Get Authentication Authorization Basic Information)

**`Throws`**

**`Memberof`**

BasicInfoApi

#### Defined in

[src/generated/Auth/api.ts:3318](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L3318)

___

### getCustomizePages

▸ **getCustomizePages**(`options?`): `Promise`\<`AxiosResponse`\<[`CustomizePages`](../interfaces/Auth_api.CustomizePages.md), `any`\>\>

認証系画面設定情報（新規登録・ログイン・パスワードリセット等）を取得します。  Get the authentication screen setting information (new registration, login, password reset, etc.).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`CustomizePages`](../interfaces/Auth_api.CustomizePages.md), `any`\>\>

**`Summary`**

認証系画面設定情報取得(Get Authentication Page Setting)

**`Throws`**

**`Memberof`**

BasicInfoApi

#### Defined in

[src/generated/Auth/api.ts:3329](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L3329)

___

### updateBasicInfo

▸ **updateBasicInfo**(`updateBasicInfoParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

SaaS ID を元にパラメータとして設定したドメイン名を設定更新します。 CNAME レコードが生成されますので、 DNS に設定して下さい。 既に稼働中の SaaS アプリケーションに設定している場合には、動作に影響があります。  Update the domain name that was set as a parameter based on the SaaS ID. After the CNAME record is generated, set it in your DNS. If it is set on a SaaS application that is already running, it will affect the behavior.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `updateBasicInfoParam?` | [`UpdateBasicInfoParam`](../interfaces/Auth_api.UpdateBasicInfoParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

基本設定情報の更新(Update Basic Configurations)

**`Throws`**

**`Memberof`**

BasicInfoApi

#### Defined in

[src/generated/Auth/api.ts:3341](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L3341)

___

### updateCustomizePageSettings

▸ **updateCustomizePageSettings**(`updateCustomizePageSettingsParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

認証認可基本情報を更新します。  Update authentication authorization basic information.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `updateCustomizePageSettingsParam?` | [`UpdateCustomizePageSettingsParam`](../interfaces/Auth_api.UpdateCustomizePageSettingsParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

認証認可基本情報更新(Update Authentication Authorization Basic Information)

**`Throws`**

**`Memberof`**

BasicInfoApi

#### Defined in

[src/generated/Auth/api.ts:3353](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L3353)

___

### updateCustomizePages

▸ **updateCustomizePages**(`updateCustomizePagesParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

認証系画面設定情報（新規登録・ログイン・パスワードリセット等）を更新します。  Update the authentication page setting information (new registration, login, password reset, etc.).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `updateCustomizePagesParam?` | [`UpdateCustomizePagesParam`](../interfaces/Auth_api.UpdateCustomizePagesParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

認証系画面設定情報設定(Authentication Page Setting)

**`Throws`**

**`Memberof`**

BasicInfoApi

#### Defined in

[src/generated/Auth/api.ts:3365](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L3365)

___

### updateNotificationMessages

▸ **updateNotificationMessages**(`updateNotificationMessagesParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

各種通知メールテンプレート更新します。  Update notification email template.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `updateNotificationMessagesParam?` | [`UpdateNotificationMessagesParam`](../interfaces/Auth_api.UpdateNotificationMessagesParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

通知メールテンプレートを更新(Update Notification Email Template)

**`Throws`**

**`Memberof`**

BasicInfoApi

#### Defined in

[src/generated/Auth/api.ts:3377](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L3377)
