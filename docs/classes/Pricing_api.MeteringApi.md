[saasus-sdk](../README.md) / [Pricing/api](../modules/Pricing_api.md) / MeteringApi

# Class: MeteringApi

[Pricing/api](../modules/Pricing_api.md).MeteringApi

MeteringApi - object-oriented interface

**`Export`**

MeteringApi

## Hierarchy

- [`BaseAPI`](Pricing_base.BaseAPI.md)

  ↳ **`MeteringApi`**

## Table of contents

### Constructors

- [constructor](Pricing_api.MeteringApi.md#constructor)

### Properties

- [axios](Pricing_api.MeteringApi.md#axios)
- [basePath](Pricing_api.MeteringApi.md#basepath)
- [configuration](Pricing_api.MeteringApi.md#configuration)

### Methods

- [deleteMeteringUnitTimestampCount](Pricing_api.MeteringApi.md#deletemeteringunittimestampcount)
- [getMeteringUnitDateCountByTenantIdAndUnitNameAndDate](Pricing_api.MeteringApi.md#getmeteringunitdatecountbytenantidandunitnameanddate)
- [getMeteringUnitDateCountByTenantIdAndUnitNameAndDatePeriod](Pricing_api.MeteringApi.md#getmeteringunitdatecountbytenantidandunitnameanddateperiod)
- [getMeteringUnitDateCountByTenantIdAndUnitNameToday](Pricing_api.MeteringApi.md#getmeteringunitdatecountbytenantidandunitnametoday)
- [getMeteringUnitDateCountsByTenantIdAndDate](Pricing_api.MeteringApi.md#getmeteringunitdatecountsbytenantidanddate)
- [getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth](Pricing_api.MeteringApi.md#getmeteringunitmonthcountbytenantidandunitnameandmonth)
- [getMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth](Pricing_api.MeteringApi.md#getmeteringunitmonthcountbytenantidandunitnamethismonth)
- [getMeteringUnitMonthCountsByTenantIdAndMonth](Pricing_api.MeteringApi.md#getmeteringunitmonthcountsbytenantidandmonth)
- [updateMeteringUnitTimestampCount](Pricing_api.MeteringApi.md#updatemeteringunittimestampcount)
- [updateMeteringUnitTimestampCountNow](Pricing_api.MeteringApi.md#updatemeteringunittimestampcountnow)

## Constructors

### constructor

• **new MeteringApi**(`configuration?`, `basePath?`, `axios?`): [`MeteringApi`](Pricing_api.MeteringApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Pricing_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`MeteringApi`](Pricing_api.MeteringApi.md)

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

### deleteMeteringUnitTimestampCount

▸ **deleteMeteringUnitTimestampCount**(`tenantId`, `meteringUnitName`, `timestamp`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

指定したタイムスタンプのメータリングユニットカウントを削除します。  Deletes metering unit count for the specified timestamp.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | テナントID(tenant id) |
| `meteringUnitName` | `string` | 計測ユニット名(metering unit name) |
| `timestamp` | `number` | タイムスタンプ(timestamp) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

指定したタイムスタンプのメータリングユニットカウントを削除(Delete Metering Uunit Count for Specified Timestamp)

**`Throws`**

**`Memberof`**

MeteringApi

#### Defined in

[src/generated/Pricing/api.ts:2406](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L2406)

___

### getMeteringUnitDateCountByTenantIdAndUnitNameAndDate

▸ **getMeteringUnitDateCountByTenantIdAndUnitNameAndDate**(`tenantId`, `meteringUnitName`, `date`, `options?`): `Promise`\<`AxiosResponse`\<[`MeteringUnitDateCount`](../interfaces/Pricing_api.MeteringUnitDateCount.md), `any`\>\>

指定した日付のメータリングユニットカウントを取得します。  Gets the metering unit count for specific date.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | テナントID(tenant id) |
| `meteringUnitName` | `string` | 計測ユニット名(metering unit name) |
| `date` | `string` | 日(date) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`MeteringUnitDateCount`](../interfaces/Pricing_api.MeteringUnitDateCount.md), `any`\>\>

**`Summary`**

指定した日付のメータリングユニットカウントを取得(Get Metering Unit Count for Specific Date)

**`Throws`**

**`Memberof`**

MeteringApi

#### Defined in

[src/generated/Pricing/api.ts:2420](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L2420)

___

### getMeteringUnitDateCountByTenantIdAndUnitNameAndDatePeriod

▸ **getMeteringUnitDateCountByTenantIdAndUnitNameAndDatePeriod**(`tenantId`, `meteringUnitName`, `startTimestamp?`, `endTimestamp?`, `options?`): `Promise`\<`AxiosResponse`\<[`MeteringUnitDatePeriodCounts`](../interfaces/Pricing_api.MeteringUnitDatePeriodCounts.md), `any`\>\>

指定した日時期間のメータリングユニットカウントを取得します。  Obtain metering unit counts for a specified date/time period.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | テナントID(tenant id) |
| `meteringUnitName` | `string` | 計測ユニット名(metering unit name) |
| `startTimestamp?` | `number` | 開始日時(timestamp) |
| `endTimestamp?` | `number` | 終了日時(timestamp) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`MeteringUnitDatePeriodCounts`](../interfaces/Pricing_api.MeteringUnitDatePeriodCounts.md), `any`\>\>

**`Summary`**

指定した日時期間のメータリングユニットカウントを取得(Obtain metering unit counts for a specified date/time period)

**`Throws`**

**`Memberof`**

MeteringApi

#### Defined in

[src/generated/Pricing/api.ts:2435](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L2435)

___

### getMeteringUnitDateCountByTenantIdAndUnitNameToday

▸ **getMeteringUnitDateCountByTenantIdAndUnitNameToday**(`tenantId`, `meteringUnitName`, `options?`): `Promise`\<`AxiosResponse`\<[`MeteringUnitDateCount`](../interfaces/Pricing_api.MeteringUnitDateCount.md), `any`\>\>

当日のメータリングユニットカウントを取得します。  Get the metering unit count for the current day.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | テナントID(tenant id) |
| `meteringUnitName` | `string` | 計測ユニット名(metering unit name) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`MeteringUnitDateCount`](../interfaces/Pricing_api.MeteringUnitDateCount.md), `any`\>\>

**`Summary`**

当日のメータリングユニットカウントを取得(Get Metering Unit Count for the Current Day)

**`Throws`**

**`Memberof`**

MeteringApi

#### Defined in

[src/generated/Pricing/api.ts:2448](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L2448)

___

### getMeteringUnitDateCountsByTenantIdAndDate

▸ **getMeteringUnitDateCountsByTenantIdAndDate**(`tenantId`, `date`, `options?`): `Promise`\<`AxiosResponse`\<[`MeteringUnitDateCounts`](../interfaces/Pricing_api.MeteringUnitDateCounts.md), `any`\>\>

指定した日の全メータリングユニットカウントを取得します。  Gets the total metering unit count for the specified date.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | テナントID(tenant id) |
| `date` | `string` | 日(date) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`MeteringUnitDateCounts`](../interfaces/Pricing_api.MeteringUnitDateCounts.md), `any`\>\>

**`Summary`**

指定日の全メータリングユニットカウントを取得(Get All Metering Unit Counts for a Specified Date)

**`Throws`**

**`Memberof`**

MeteringApi

#### Defined in

[src/generated/Pricing/api.ts:2461](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L2461)

___

### getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth

▸ **getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth**(`tenantId`, `meteringUnitName`, `month`, `options?`): `Promise`\<`AxiosResponse`\<[`MeteringUnitMonthCount`](../interfaces/Pricing_api.MeteringUnitMonthCount.md), `any`\>\>

指定した月のメータリングユニットカウントを取得します。  Gets the metering unit count for the specified month.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | テナントID(tenant id) |
| `meteringUnitName` | `string` | 計測ユニット名(metering unit name) |
| `month` | `string` | 月(month) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`MeteringUnitMonthCount`](../interfaces/Pricing_api.MeteringUnitMonthCount.md), `any`\>\>

**`Summary`**

指定月のメータリングユニットカウントを取得(Get the Metering Unit Count for the Specified Month)

**`Throws`**

**`Memberof`**

MeteringApi

#### Defined in

[src/generated/Pricing/api.ts:2475](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L2475)

___

### getMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth

▸ **getMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth**(`tenantId`, `meteringUnitName`, `options?`): `Promise`\<`AxiosResponse`\<[`MeteringUnitMonthCount`](../interfaces/Pricing_api.MeteringUnitMonthCount.md), `any`\>\>

当月のメータリングユニットカウントを取得します。  Get the metering unit count for the current month.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | テナントID(tenant id) |
| `meteringUnitName` | `string` | 計測ユニット名(metering unit name) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`MeteringUnitMonthCount`](../interfaces/Pricing_api.MeteringUnitMonthCount.md), `any`\>\>

**`Summary`**

当月のメータリングユニットカウントを取得(Get Metering Unit Count for the Current Month)

**`Throws`**

**`Memberof`**

MeteringApi

#### Defined in

[src/generated/Pricing/api.ts:2488](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L2488)

___

### getMeteringUnitMonthCountsByTenantIdAndMonth

▸ **getMeteringUnitMonthCountsByTenantIdAndMonth**(`tenantId`, `month`, `options?`): `Promise`\<`AxiosResponse`\<[`MeteringUnitMonthCounts`](../interfaces/Pricing_api.MeteringUnitMonthCounts.md), `any`\>\>

指定した月の全メータリングユニットカウントを取得します。  Gets all metering unit counts for the specified month.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | テナントID(tenant id) |
| `month` | `string` | 月(month) |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`MeteringUnitMonthCounts`](../interfaces/Pricing_api.MeteringUnitMonthCounts.md), `any`\>\>

**`Summary`**

指定月の全メータリングユニットカウントを取得(Get All Metering Unit Counts for the Specified Month)

**`Throws`**

**`Memberof`**

MeteringApi

#### Defined in

[src/generated/Pricing/api.ts:2501](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L2501)

___

### updateMeteringUnitTimestampCount

▸ **updateMeteringUnitTimestampCount**(`tenantId`, `meteringUnitName`, `timestamp`, `updateMeteringUnitTimestampCountParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`MeteringUnitTimestampCount`](../interfaces/Pricing_api.MeteringUnitTimestampCount.md), `any`\>\>

指定したタイムスタンプのメータリングユニットカウントを更新します。  Update metering unit count for the specified timestamp.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | テナントID(tenant id) |
| `meteringUnitName` | `string` | 計測ユニット名(metering unit name) |
| `timestamp` | `number` | タイムスタンプ(timestamp) |
| `updateMeteringUnitTimestampCountParam?` | [`UpdateMeteringUnitTimestampCountParam`](../interfaces/Pricing_api.UpdateMeteringUnitTimestampCountParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`MeteringUnitTimestampCount`](../interfaces/Pricing_api.MeteringUnitTimestampCount.md), `any`\>\>

**`Summary`**

指定したタイムスタンプのメータリングユニットカウントを更新(Update Metering Unit Count for Specified Timestamp)

**`Throws`**

**`Memberof`**

MeteringApi

#### Defined in

[src/generated/Pricing/api.ts:2516](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L2516)

___

### updateMeteringUnitTimestampCountNow

▸ **updateMeteringUnitTimestampCountNow**(`tenantId`, `meteringUnitName`, `updateMeteringUnitTimestampCountNowParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`MeteringUnitTimestampCount`](../interfaces/Pricing_api.MeteringUnitTimestampCount.md), `any`\>\>

現在時刻のメータリングユニットカウントを更新します。  Update the metering unit count for the current time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | テナントID(tenant id) |
| `meteringUnitName` | `string` | 計測ユニット名(metering unit name) |
| `updateMeteringUnitTimestampCountNowParam?` | [`UpdateMeteringUnitTimestampCountNowParam`](../interfaces/Pricing_api.UpdateMeteringUnitTimestampCountNowParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`MeteringUnitTimestampCount`](../interfaces/Pricing_api.MeteringUnitTimestampCount.md), `any`\>\>

**`Summary`**

現在時刻のメータリングユニットカウントを更新(Update Metering Unit Count for Current Time)

**`Throws`**

**`Memberof`**

MeteringApi

#### Defined in

[src/generated/Pricing/api.ts:2530](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Pricing/api.ts#L2530)
