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

- [createMeteringUnit](Pricing_api.MeteringApi.md#createmeteringunit)
- [deleteMeteringUnitByID](Pricing_api.MeteringApi.md#deletemeteringunitbyid)
- [deleteMeteringUnitTimestampCount](Pricing_api.MeteringApi.md#deletemeteringunittimestampcount)
- [getMeteringUnitDateCountByTenantIdAndUnitNameAndDate](Pricing_api.MeteringApi.md#getmeteringunitdatecountbytenantidandunitnameanddate)
- [getMeteringUnitDateCountByTenantIdAndUnitNameAndDatePeriod](Pricing_api.MeteringApi.md#getmeteringunitdatecountbytenantidandunitnameanddateperiod)
- [getMeteringUnitDateCountByTenantIdAndUnitNameToday](Pricing_api.MeteringApi.md#getmeteringunitdatecountbytenantidandunitnametoday)
- [getMeteringUnitDateCountsByTenantIdAndDate](Pricing_api.MeteringApi.md#getmeteringunitdatecountsbytenantidanddate)
- [getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth](Pricing_api.MeteringApi.md#getmeteringunitmonthcountbytenantidandunitnameandmonth)
- [getMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth](Pricing_api.MeteringApi.md#getmeteringunitmonthcountbytenantidandunitnamethismonth)
- [getMeteringUnitMonthCountsByTenantIdAndMonth](Pricing_api.MeteringApi.md#getmeteringunitmonthcountsbytenantidandmonth)
- [getMeteringUnits](Pricing_api.MeteringApi.md#getmeteringunits)
- [updateMeteringUnitByID](Pricing_api.MeteringApi.md#updatemeteringunitbyid)
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

[src/generated/Pricing/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Pricing/base.ts#L52)

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

[BaseAPI](Pricing_base.BaseAPI.md).[axios](Pricing_base.BaseAPI.md#axios)

#### Defined in

[src/generated/Pricing/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Pricing/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

[BaseAPI](Pricing_base.BaseAPI.md).[basePath](Pricing_base.BaseAPI.md#basepath)

#### Defined in

[src/generated/Pricing/base.ts:52](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Pricing/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Pricing_configuration.Configuration.md)

#### Inherited from

[BaseAPI](Pricing_base.BaseAPI.md).[configuration](Pricing_base.BaseAPI.md#configuration)

#### Defined in

[src/generated/Pricing/base.ts:50](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Pricing/base.ts#L50)

## Methods

### createMeteringUnit

▸ **createMeteringUnit**(`body?`, `options?`): `Promise`\<`AxiosResponse`\<[`MeteringUnit`](../interfaces/Pricing_api.MeteringUnit.md), `any`\>\>

Create a metering unit.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body?` | [`MeteringUnitProps`](../interfaces/Pricing_api.MeteringUnitProps.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`MeteringUnit`](../interfaces/Pricing_api.MeteringUnit.md), `any`\>\>

**`Summary`**

Create Metering Unit

**`Throws`**

**`Memberof`**

MeteringApi

#### Defined in

[src/generated/Pricing/api.ts:2752](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Pricing/api.ts#L2752)

___

### deleteMeteringUnitByID

▸ **deleteMeteringUnitByID**(`meteringUnitId`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Delete metering unit.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `meteringUnitId` | `string` | Metering Unit ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Delete Metering Unit

**`Throws`**

**`Memberof`**

MeteringApi

#### Defined in

[src/generated/Pricing/api.ts:2764](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Pricing/api.ts#L2764)

___

### deleteMeteringUnitTimestampCount

▸ **deleteMeteringUnitTimestampCount**(`tenantId`, `meteringUnitName`, `timestamp`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Deletes metering unit count for the specified timestamp.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `meteringUnitName` | `string` | Metering Unit Name |
| `timestamp` | `number` | Timestamp |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Delete Metering Unit Count for Specified Timestamp

**`Throws`**

**`Memberof`**

MeteringApi

#### Defined in

[src/generated/Pricing/api.ts:2778](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Pricing/api.ts#L2778)

___

### getMeteringUnitDateCountByTenantIdAndUnitNameAndDate

▸ **getMeteringUnitDateCountByTenantIdAndUnitNameAndDate**(`tenantId`, `meteringUnitName`, `date`, `options?`): `Promise`\<`AxiosResponse`\<[`MeteringUnitDateCount`](../interfaces/Pricing_api.MeteringUnitDateCount.md), `any`\>\>

Gets the metering unit count for a specific date.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `meteringUnitName` | `string` | Metering Unit Name |
| `date` | `string` | Date |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`MeteringUnitDateCount`](../interfaces/Pricing_api.MeteringUnitDateCount.md), `any`\>\>

**`Summary`**

Get Metering Unit Count for Specific Date

**`Throws`**

**`Memberof`**

MeteringApi

#### Defined in

[src/generated/Pricing/api.ts:2792](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Pricing/api.ts#L2792)

___

### getMeteringUnitDateCountByTenantIdAndUnitNameAndDatePeriod

▸ **getMeteringUnitDateCountByTenantIdAndUnitNameAndDatePeriod**(`tenantId`, `meteringUnitName`, `startTimestamp?`, `endTimestamp?`, `options?`): `Promise`\<`AxiosResponse`\<[`MeteringUnitDatePeriodCounts`](../interfaces/Pricing_api.MeteringUnitDatePeriodCounts.md), `any`\>\>

Obtain metering unit counts for a specified date/time period.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `meteringUnitName` | `string` | Metering Unit Name |
| `startTimestamp?` | `number` | Start Date-Time |
| `endTimestamp?` | `number` | End Date-Time |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`MeteringUnitDatePeriodCounts`](../interfaces/Pricing_api.MeteringUnitDatePeriodCounts.md), `any`\>\>

**`Summary`**

Obtain metering unit counts for a specified date/time period

**`Throws`**

**`Memberof`**

MeteringApi

#### Defined in

[src/generated/Pricing/api.ts:2807](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Pricing/api.ts#L2807)

___

### getMeteringUnitDateCountByTenantIdAndUnitNameToday

▸ **getMeteringUnitDateCountByTenantIdAndUnitNameToday**(`tenantId`, `meteringUnitName`, `options?`): `Promise`\<`AxiosResponse`\<[`MeteringUnitDateCount`](../interfaces/Pricing_api.MeteringUnitDateCount.md), `any`\>\>

Get the metering unit count for the current day.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `meteringUnitName` | `string` | Metering Unit Name |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`MeteringUnitDateCount`](../interfaces/Pricing_api.MeteringUnitDateCount.md), `any`\>\>

**`Summary`**

Get Metering Unit Count for the Current Day

**`Throws`**

**`Memberof`**

MeteringApi

#### Defined in

[src/generated/Pricing/api.ts:2820](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Pricing/api.ts#L2820)

___

### getMeteringUnitDateCountsByTenantIdAndDate

▸ **getMeteringUnitDateCountsByTenantIdAndDate**(`tenantId`, `date`, `options?`): `Promise`\<`AxiosResponse`\<[`MeteringUnitDateCounts`](../interfaces/Pricing_api.MeteringUnitDateCounts.md), `any`\>\>

Gets the total metering unit count for the specified date.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `date` | `string` | Date |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`MeteringUnitDateCounts`](../interfaces/Pricing_api.MeteringUnitDateCounts.md), `any`\>\>

**`Summary`**

Get All Metering Unit Counts for a Specified Date

**`Throws`**

**`Memberof`**

MeteringApi

#### Defined in

[src/generated/Pricing/api.ts:2833](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Pricing/api.ts#L2833)

___

### getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth

▸ **getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth**(`tenantId`, `meteringUnitName`, `month`, `options?`): `Promise`\<`AxiosResponse`\<[`MeteringUnitMonthCount`](../interfaces/Pricing_api.MeteringUnitMonthCount.md), `any`\>\>

Gets the metering unit count for the specified month.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `meteringUnitName` | `string` | Metering Unit Name |
| `month` | `string` | Month |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`MeteringUnitMonthCount`](../interfaces/Pricing_api.MeteringUnitMonthCount.md), `any`\>\>

**`Summary`**

Get the Metering Unit Count for the Specified Month

**`Throws`**

**`Memberof`**

MeteringApi

#### Defined in

[src/generated/Pricing/api.ts:2847](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Pricing/api.ts#L2847)

___

### getMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth

▸ **getMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth**(`tenantId`, `meteringUnitName`, `options?`): `Promise`\<`AxiosResponse`\<[`MeteringUnitMonthCount`](../interfaces/Pricing_api.MeteringUnitMonthCount.md), `any`\>\>

Get the metering unit count for the current month.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `meteringUnitName` | `string` | Metering Unit Name |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`MeteringUnitMonthCount`](../interfaces/Pricing_api.MeteringUnitMonthCount.md), `any`\>\>

**`Summary`**

Get Metering Unit Count for the Current Month

**`Throws`**

**`Memberof`**

MeteringApi

#### Defined in

[src/generated/Pricing/api.ts:2860](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Pricing/api.ts#L2860)

___

### getMeteringUnitMonthCountsByTenantIdAndMonth

▸ **getMeteringUnitMonthCountsByTenantIdAndMonth**(`tenantId`, `month`, `options?`): `Promise`\<`AxiosResponse`\<[`MeteringUnitMonthCounts`](../interfaces/Pricing_api.MeteringUnitMonthCounts.md), `any`\>\>

Gets all metering unit counts for the specified month.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `month` | `string` | Month |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`MeteringUnitMonthCounts`](../interfaces/Pricing_api.MeteringUnitMonthCounts.md), `any`\>\>

**`Summary`**

Get All Metering Unit Counts for the Specified Month

**`Throws`**

**`Memberof`**

MeteringApi

#### Defined in

[src/generated/Pricing/api.ts:2873](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Pricing/api.ts#L2873)

___

### getMeteringUnits

▸ **getMeteringUnits**(`options?`): `Promise`\<`AxiosResponse`\<[`MeteringUnits`](../interfaces/Pricing_api.MeteringUnits.md), `any`\>\>

Get all metering units.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`MeteringUnits`](../interfaces/Pricing_api.MeteringUnits.md), `any`\>\>

**`Summary`**

Get all metering units

**`Throws`**

**`Memberof`**

MeteringApi

#### Defined in

[src/generated/Pricing/api.ts:2884](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Pricing/api.ts#L2884)

___

### updateMeteringUnitByID

▸ **updateMeteringUnitByID**(`meteringUnitId`, `body?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Update metering unit.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `meteringUnitId` | `string` | Metering Unit ID |
| `body?` | [`MeteringUnitProps`](../interfaces/Pricing_api.MeteringUnitProps.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Update Metering Unit

**`Throws`**

**`Memberof`**

MeteringApi

#### Defined in

[src/generated/Pricing/api.ts:2897](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Pricing/api.ts#L2897)

___

### updateMeteringUnitTimestampCount

▸ **updateMeteringUnitTimestampCount**(`tenantId`, `meteringUnitName`, `timestamp`, `updateMeteringUnitTimestampCountParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`MeteringUnitTimestampCount`](../interfaces/Pricing_api.MeteringUnitTimestampCount.md), `any`\>\>

Update metering unit count for the specified timestamp.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `meteringUnitName` | `string` | Metering Unit Name |
| `timestamp` | `number` | Timestamp |
| `updateMeteringUnitTimestampCountParam?` | [`UpdateMeteringUnitTimestampCountParam`](../interfaces/Pricing_api.UpdateMeteringUnitTimestampCountParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`MeteringUnitTimestampCount`](../interfaces/Pricing_api.MeteringUnitTimestampCount.md), `any`\>\>

**`Summary`**

Update Metering Unit Count for Specified Timestamp

**`Throws`**

**`Memberof`**

MeteringApi

#### Defined in

[src/generated/Pricing/api.ts:2912](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Pricing/api.ts#L2912)

___

### updateMeteringUnitTimestampCountNow

▸ **updateMeteringUnitTimestampCountNow**(`tenantId`, `meteringUnitName`, `updateMeteringUnitTimestampCountNowParam?`, `options?`): `Promise`\<`AxiosResponse`\<[`MeteringUnitTimestampCount`](../interfaces/Pricing_api.MeteringUnitTimestampCount.md), `any`\>\>

Update the metering unit count for the current time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `meteringUnitName` | `string` | Metering Unit Name |
| `updateMeteringUnitTimestampCountNowParam?` | [`UpdateMeteringUnitTimestampCountNowParam`](../interfaces/Pricing_api.UpdateMeteringUnitTimestampCountNowParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`MeteringUnitTimestampCount`](../interfaces/Pricing_api.MeteringUnitTimestampCount.md), `any`\>\>

**`Summary`**

Update Metering Unit Count for Current Time

**`Throws`**

**`Memberof`**

MeteringApi

#### Defined in

[src/generated/Pricing/api.ts:2926](https://github.com/saasus-platform/saasus-sdk-javascript/blob/997c544/src/generated/Pricing/api.ts#L2926)
