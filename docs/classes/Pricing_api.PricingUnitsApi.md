[saasus-sdk](../README.md) / [Pricing/api](../modules/Pricing_api.md) / PricingUnitsApi

# Class: PricingUnitsApi

[Pricing/api](../modules/Pricing_api.md).PricingUnitsApi

PricingUnitsApi - object-oriented interface

**`Export`**

PricingUnitsApi

## Hierarchy

- [`BaseAPI`](Pricing_base.BaseAPI.md)

  ↳ **`PricingUnitsApi`**

## Table of contents

### Constructors

- [constructor](Pricing_api.PricingUnitsApi.md#constructor)

### Properties

- [axios](Pricing_api.PricingUnitsApi.md#axios)
- [basePath](Pricing_api.PricingUnitsApi.md#basepath)
- [configuration](Pricing_api.PricingUnitsApi.md#configuration)

### Methods

- [createPricingUnit](Pricing_api.PricingUnitsApi.md#createpricingunit)
- [deletePricingUnit](Pricing_api.PricingUnitsApi.md#deletepricingunit)
- [getPricingUnit](Pricing_api.PricingUnitsApi.md#getpricingunit)
- [getPricingUnits](Pricing_api.PricingUnitsApi.md#getpricingunits)
- [updatePricingUnit](Pricing_api.PricingUnitsApi.md#updatepricingunit)

## Constructors

### constructor

• **new PricingUnitsApi**(`configuration?`, `basePath?`, `axios?`): [`PricingUnitsApi`](Pricing_api.PricingUnitsApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Pricing_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`PricingUnitsApi`](Pricing_api.PricingUnitsApi.md)

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

### createPricingUnit

▸ **createPricingUnit**(`body?`, `options?`): `Promise`\<`AxiosResponse`\<[`PricingUnit`](../modules/Pricing_api.md#pricingunit), `any`\>\>

プライシングユニットを作成します。  Create a pricing unit.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body?` | [`PricingUnitForSave`](../modules/Pricing_api.md#pricingunitforsave) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PricingUnit`](../modules/Pricing_api.md#pricingunit), `any`\>\>

**`Summary`**

プライシングユニットを作成(Create Pricing Unit)

**`Throws`**

**`Memberof`**

PricingUnitsApi

#### Defined in

[src/generated/Pricing/api.ts:3924](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L3924)

___

### deletePricingUnit

▸ **deletePricingUnit**(`pricingUnitId`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

プライシングユニットを削除します。  Delete a pricing unit.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pricingUnitId` | `string` | ユニットID(unit id) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

プライシングユニットを削除(Delete Pricing Unit)

**`Throws`**

**`Memberof`**

PricingUnitsApi

#### Defined in

[src/generated/Pricing/api.ts:3936](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L3936)

___

### getPricingUnit

▸ **getPricingUnit**(`pricingUnitId`, `options?`): `Promise`\<`AxiosResponse`\<[`PricingUnit`](../modules/Pricing_api.md#pricingunit), `any`\>\>

プライシングユニットを取得します。  Get a pricing unit.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pricingUnitId` | `string` | ユニットID(unit id) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PricingUnit`](../modules/Pricing_api.md#pricingunit), `any`\>\>

**`Summary`**

プライシングユニットを取得(Get Pricing Unit)

**`Throws`**

**`Memberof`**

PricingUnitsApi

#### Defined in

[src/generated/Pricing/api.ts:3948](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L3948)

___

### getPricingUnits

▸ **getPricingUnits**(`options?`): `Promise`\<`AxiosResponse`\<[`PricingUnits`](../interfaces/Pricing_api.PricingUnits.md), `any`\>\>

料金のベースとなる最小の計測単位を取得します。 「固定ユニット」(type=fixed)は基本料金などの月額固定料金の単位、 「使用量ユニット」(type=usage)はユーザ数課金などの１単位あたりごとに料金が発生する単位、 「段階ユニット」(type=tiered)は携帯電話の段階的パケット料金のように利用量の段階ごとに一定の料金の単位、 「段階的使用量ユニット」(type=tiered_usage)はボリュームディスカウントのように利用量に応じて１単位あたりの料金が変化していく単位、となります。  Gets the smallest unit of measure on which the charges are based. \"Fixed Unit\" (type=fixed) is a unit of a monthly fixed charge such as a basic charge, \"Usage Unit\" (type=usage) is a unit in which a charge is generated per unit such as billing for the number of users, \"Tiered Unit\" (type = tiered) is a fixed charge unit for each tier of usage, such as the tiered packet charge for mobile phones, \"Tiered Usage Unit\" (type=tiered_usage) is a unit where the charge per unit changes according to the usage amount, such as a volume discount.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`PricingUnits`](../interfaces/Pricing_api.PricingUnits.md), `any`\>\>

**`Summary`**

プライシングユニットの一覧を取得(Get Pricing Units)

**`Throws`**

**`Memberof`**

PricingUnitsApi

#### Defined in

[src/generated/Pricing/api.ts:3959](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L3959)

___

### updatePricingUnit

▸ **updatePricingUnit**(`pricingUnitId`, `body?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

プライシングユニット情報を更新します。  Update pricing unit.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pricingUnitId` | `string` | ユニットID(unit id) |
| `body?` | [`PricingUnitForSave`](../modules/Pricing_api.md#pricingunitforsave) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

プライシングユニットを更新(Update Pricing Unit)

**`Throws`**

**`Memberof`**

PricingUnitsApi

#### Defined in

[src/generated/Pricing/api.ts:3972](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L3972)
