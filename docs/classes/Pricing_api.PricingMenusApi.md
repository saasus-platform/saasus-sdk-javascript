[saasus-sdk](../README.md) / [Pricing/api](../modules/Pricing_api.md) / PricingMenusApi

# Class: PricingMenusApi

[Pricing/api](../modules/Pricing_api.md).PricingMenusApi

PricingMenusApi - object-oriented interface

**`Export`**

PricingMenusApi

## Hierarchy

- [`BaseAPI`](Pricing_base.BaseAPI.md)

  ↳ **`PricingMenusApi`**

## Table of contents

### Constructors

- [constructor](Pricing_api.PricingMenusApi.md#constructor)

### Properties

- [axios](Pricing_api.PricingMenusApi.md#axios)
- [basePath](Pricing_api.PricingMenusApi.md#basepath)
- [configuration](Pricing_api.PricingMenusApi.md#configuration)

### Methods

- [createPricingMenu](Pricing_api.PricingMenusApi.md#createpricingmenu)
- [deletePricingMenu](Pricing_api.PricingMenusApi.md#deletepricingmenu)
- [getPricingMenu](Pricing_api.PricingMenusApi.md#getpricingmenu)
- [getPricingMenus](Pricing_api.PricingMenusApi.md#getpricingmenus)
- [updatePricingMenu](Pricing_api.PricingMenusApi.md#updatepricingmenu)

## Constructors

### constructor

• **new PricingMenusApi**(`configuration?`, `basePath?`, `axios?`): [`PricingMenusApi`](Pricing_api.PricingMenusApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Pricing_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`PricingMenusApi`](Pricing_api.PricingMenusApi.md)

#### Inherited from

[BaseAPI](Pricing_base.BaseAPI.md).[constructor](Pricing_base.BaseAPI.md#constructor)

#### Defined in

[src/generated/Pricing/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](Pricing_base.BaseAPI.md).[axios](Pricing_base.BaseAPI.md#axios)

#### Defined in

[src/generated/Pricing/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](Pricing_base.BaseAPI.md).[basePath](Pricing_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/Pricing/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Pricing_configuration.Configuration.md)

#### Inherited from

[BaseAPI](Pricing_base.BaseAPI.md).[configuration](Pricing_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/Pricing/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/base.ts#L50)

## Methods

### createPricingMenu

▸ **createPricingMenu**(`body?`, `options?`): `Promise`\<`AxiosResponse`\<[`PricingMenu`](../interfaces/Pricing_api.PricingMenu.md), `any`\>\>

プライシング機能メニューを作成します。  Create a pricing feature menu.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body?` | [`SavePricingMenuParam`](../interfaces/Pricing_api.SavePricingMenuParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PricingMenu`](../interfaces/Pricing_api.PricingMenu.md), `any`\>\>

**`Summary`**

プライシング機能メニューを作成(Create a Pricing Feature Menu)

**`Throws`**

**`Memberof`**

PricingMenusApi

#### Defined in

[src/generated/Pricing/api.ts:2875](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L2875)

___

### deletePricingMenu

▸ **deletePricingMenu**(`menuId`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

プライシング機能メニューを削除します。  Delete pricing feature menu.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `menuId` | `string` | メニューID(menu ID) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

プライシング機能メニューを削除(Delete Pricing Feature Menu)

**`Throws`**

**`Memberof`**

PricingMenusApi

#### Defined in

[src/generated/Pricing/api.ts:2887](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L2887)

___

### getPricingMenu

▸ **getPricingMenu**(`menuId`, `options?`): `Promise`\<`AxiosResponse`\<[`PricingMenu`](../interfaces/Pricing_api.PricingMenu.md), `any`\>\>

プライシング機能メニューを取得します。  Get a pricing feature menu.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `menuId` | `string` | メニューID(menu ID) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PricingMenu`](../interfaces/Pricing_api.PricingMenu.md), `any`\>\>

**`Summary`**

プライシング機能メニューを取得(Get Pricing Feature Menu)

**`Throws`**

**`Memberof`**

PricingMenusApi

#### Defined in

[src/generated/Pricing/api.ts:2899](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L2899)

___

### getPricingMenus

▸ **getPricingMenus**(`options?`): `Promise`\<`AxiosResponse`\<[`PricingMenus`](../interfaces/Pricing_api.PricingMenus.md), `any`\>\>

機能メニュー一覧を取得します。 計測単位を複数まとめて、１つの機能メニューとして定義します。 ここで定義した機能メニューを複数合わせ１つの料金プランとします。  Get the feature menu list. Multiple measurement units are grouped together and defined as one feature menu. Multiple feature menus defined here are combined into one billing plan.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PricingMenus`](../interfaces/Pricing_api.PricingMenus.md), `any`\>\>

**`Summary`**

プライシング機能メニュー一覧を取得(Get Pricing Feature Menus)

**`Throws`**

**`Memberof`**

PricingMenusApi

#### Defined in

[src/generated/Pricing/api.ts:2910](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L2910)

___

### updatePricingMenu

▸ **updatePricingMenu**(`menuId`, `body?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

プライシング機能メニューを更新します。  Update pricing feature menu.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `menuId` | `string` | メニューID(menu ID) |
| `body?` | [`SavePricingMenuParam`](../interfaces/Pricing_api.SavePricingMenuParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

プライシング機能メニューを更新(Updated pricing feature menu)

**`Throws`**

**`Memberof`**

PricingMenusApi

#### Defined in

[src/generated/Pricing/api.ts:2923](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L2923)
