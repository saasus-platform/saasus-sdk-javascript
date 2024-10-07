[saasus-sdk](../README.md) / AwsMarketplace/api

# Module: AwsMarketplace/api

## Table of contents

### Enumerations

- [ListingStatus](../enums/AwsMarketplace_api.ListingStatus.md)
- [VisibilityStatus](../enums/AwsMarketplace_api.VisibilityStatus.md)

### Classes

- [AwsMarketplaceApi](../classes/AwsMarketplace_api.AwsMarketplaceApi.md)
- [ErrorApi](../classes/AwsMarketplace_api.ErrorApi.md)

### Interfaces

- [CatalogEntityVisibility](../interfaces/AwsMarketplace_api.CatalogEntityVisibility.md)
- [CloudFormationLaunchStackLink](../interfaces/AwsMarketplace_api.CloudFormationLaunchStackLink.md)
- [CreateCustomerParam](../interfaces/AwsMarketplace_api.CreateCustomerParam.md)
- [Customer](../interfaces/AwsMarketplace_api.Customer.md)
- [Customers](../interfaces/AwsMarketplace_api.Customers.md)
- [GetListingStatusResult](../interfaces/AwsMarketplace_api.GetListingStatusResult.md)
- [ModelError](../interfaces/AwsMarketplace_api.ModelError.md)
- [Plan](../interfaces/AwsMarketplace_api.Plan.md)
- [Plans](../interfaces/AwsMarketplace_api.Plans.md)
- [SavePlanParam](../interfaces/AwsMarketplace_api.SavePlanParam.md)
- [Settings](../interfaces/AwsMarketplace_api.Settings.md)
- [UpdateListingStatusParam](../interfaces/AwsMarketplace_api.UpdateListingStatusParam.md)
- [UpdateSettingsParam](../interfaces/AwsMarketplace_api.UpdateSettingsParam.md)
- [VerifyRegistrationTokenParam](../interfaces/AwsMarketplace_api.VerifyRegistrationTokenParam.md)

### Functions

- [AwsMarketplaceApiAxiosParamCreator](AwsMarketplace_api.md#awsmarketplaceapiaxiosparamcreator)
- [AwsMarketplaceApiFactory](AwsMarketplace_api.md#awsmarketplaceapifactory)
- [AwsMarketplaceApiFp](AwsMarketplace_api.md#awsmarketplaceapifp)
- [ErrorApiAxiosParamCreator](AwsMarketplace_api.md#errorapiaxiosparamcreator)
- [ErrorApiFactory](AwsMarketplace_api.md#errorapifactory)
- [ErrorApiFp](AwsMarketplace_api.md#errorapifp)

## Functions

### AwsMarketplaceApiAxiosParamCreator

▸ **AwsMarketplaceApiAxiosParamCreator**(`configuration?`): `Object`

AwsMarketplaceApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/AwsMarketplace_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `createCustomer` | (`createCustomerParam?`: [`CreateCustomerParam`](../interfaces/AwsMarketplace_api.CreateCustomerParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/AwsMarketplace_base.RequestArgs.md)\> | - |
| `getCatalogEntityVisibility` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/AwsMarketplace_base.RequestArgs.md)\> | - |
| `getCloudFormationLaunchStackLink` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/AwsMarketplace_base.RequestArgs.md)\> | - |
| `getCustomer` | (`customerIdentifier`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/AwsMarketplace_base.RequestArgs.md)\> | - |
| `getCustomers` | (`tenantIds?`: `string`[], `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/AwsMarketplace_base.RequestArgs.md)\> | - |
| `getListingStatus` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/AwsMarketplace_base.RequestArgs.md)\> | - |
| `getPlanByPlanName` | (`planName`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/AwsMarketplace_base.RequestArgs.md)\> | - |
| `getPlans` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/AwsMarketplace_base.RequestArgs.md)\> | - |
| `getSettings` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/AwsMarketplace_base.RequestArgs.md)\> | - |
| `savePlan` | (`savePlanParam?`: [`SavePlanParam`](../interfaces/AwsMarketplace_api.SavePlanParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/AwsMarketplace_base.RequestArgs.md)\> | - |
| `syncCustomer` | (`customerIdentifier`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/AwsMarketplace_base.RequestArgs.md)\> | - |
| `updateListingStatus` | (`updateListingStatusParam?`: [`UpdateListingStatusParam`](../interfaces/AwsMarketplace_api.UpdateListingStatusParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/AwsMarketplace_base.RequestArgs.md)\> | - |
| `updateSettings` | (`updateSettingsParam?`: [`UpdateSettingsParam`](../interfaces/AwsMarketplace_api.UpdateSettingsParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/AwsMarketplace_base.RequestArgs.md)\> | - |
| `verifyRegistrationToken` | (`verifyRegistrationTokenParam?`: [`VerifyRegistrationTokenParam`](../interfaces/AwsMarketplace_api.VerifyRegistrationTokenParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/AwsMarketplace_base.RequestArgs.md)\> | - |

**`Export`**

#### Defined in

[src/generated/AwsMarketplace/api.ts:375](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/AwsMarketplace/api.ts#L375)

___

### AwsMarketplaceApiFactory

▸ **AwsMarketplaceApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

AwsMarketplaceApi - factory interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/AwsMarketplace_configuration.Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createCustomer` | (`createCustomerParam?`: [`CreateCustomerParam`](../interfaces/AwsMarketplace_api.CreateCustomerParam.md), `options?`: `any`) => `AxiosPromise`\<[`Customer`](../interfaces/AwsMarketplace_api.Customer.md)\> |
| `getCatalogEntityVisibility` | (`options?`: `any`) => `AxiosPromise`\<[`CatalogEntityVisibility`](../interfaces/AwsMarketplace_api.CatalogEntityVisibility.md)\> |
| `getCloudFormationLaunchStackLink` | (`options?`: `any`) => `AxiosPromise`\<[`CloudFormationLaunchStackLink`](../interfaces/AwsMarketplace_api.CloudFormationLaunchStackLink.md)\> |
| `getCustomer` | (`customerIdentifier`: `string`, `options?`: `any`) => `AxiosPromise`\<[`Customer`](../interfaces/AwsMarketplace_api.Customer.md)\> |
| `getCustomers` | (`tenantIds?`: `string`[], `options?`: `any`) => `AxiosPromise`\<[`Customers`](../interfaces/AwsMarketplace_api.Customers.md)\> |
| `getListingStatus` | (`options?`: `any`) => `AxiosPromise`\<[`GetListingStatusResult`](../interfaces/AwsMarketplace_api.GetListingStatusResult.md)\> |
| `getPlanByPlanName` | (`planName`: `string`, `options?`: `any`) => `AxiosPromise`\<[`Plan`](../interfaces/AwsMarketplace_api.Plan.md)\> |
| `getPlans` | (`options?`: `any`) => `AxiosPromise`\<[`Plans`](../interfaces/AwsMarketplace_api.Plans.md)\> |
| `getSettings` | (`options?`: `any`) => `AxiosPromise`\<[`Settings`](../interfaces/AwsMarketplace_api.Settings.md)\> |
| `savePlan` | (`savePlanParam?`: [`SavePlanParam`](../interfaces/AwsMarketplace_api.SavePlanParam.md), `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `syncCustomer` | (`customerIdentifier`: `string`, `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `updateListingStatus` | (`updateListingStatusParam?`: [`UpdateListingStatusParam`](../interfaces/AwsMarketplace_api.UpdateListingStatusParam.md), `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `updateSettings` | (`updateSettingsParam?`: [`UpdateSettingsParam`](../interfaces/AwsMarketplace_api.UpdateSettingsParam.md), `options?`: `any`) => `AxiosPromise`\<`void`\> |
| `verifyRegistrationToken` | (`verifyRegistrationTokenParam?`: [`VerifyRegistrationTokenParam`](../interfaces/AwsMarketplace_api.VerifyRegistrationTokenParam.md), `options?`: `any`) => `AxiosPromise`\<`void`\> |

**`Export`**

#### Defined in

[src/generated/AwsMarketplace/api.ts:1056](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/AwsMarketplace/api.ts#L1056)

___

### AwsMarketplaceApiFp

▸ **AwsMarketplaceApiFp**(`configuration?`): `Object`

AwsMarketplaceApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/AwsMarketplace_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createCustomer` | (`createCustomerParam?`: [`CreateCustomerParam`](../interfaces/AwsMarketplace_api.CreateCustomerParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Customer`](../interfaces/AwsMarketplace_api.Customer.md)\>\> |
| `getCatalogEntityVisibility` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`CatalogEntityVisibility`](../interfaces/AwsMarketplace_api.CatalogEntityVisibility.md)\>\> |
| `getCloudFormationLaunchStackLink` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`CloudFormationLaunchStackLink`](../interfaces/AwsMarketplace_api.CloudFormationLaunchStackLink.md)\>\> |
| `getCustomer` | (`customerIdentifier`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Customer`](../interfaces/AwsMarketplace_api.Customer.md)\>\> |
| `getCustomers` | (`tenantIds?`: `string`[], `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Customers`](../interfaces/AwsMarketplace_api.Customers.md)\>\> |
| `getListingStatus` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`GetListingStatusResult`](../interfaces/AwsMarketplace_api.GetListingStatusResult.md)\>\> |
| `getPlanByPlanName` | (`planName`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Plan`](../interfaces/AwsMarketplace_api.Plan.md)\>\> |
| `getPlans` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Plans`](../interfaces/AwsMarketplace_api.Plans.md)\>\> |
| `getSettings` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<[`Settings`](../interfaces/AwsMarketplace_api.Settings.md)\>\> |
| `savePlan` | (`savePlanParam?`: [`SavePlanParam`](../interfaces/AwsMarketplace_api.SavePlanParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `syncCustomer` | (`customerIdentifier`: `string`, `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `updateListingStatus` | (`updateListingStatusParam?`: [`UpdateListingStatusParam`](../interfaces/AwsMarketplace_api.UpdateListingStatusParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `updateSettings` | (`updateSettingsParam?`: [`UpdateSettingsParam`](../interfaces/AwsMarketplace_api.UpdateSettingsParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |
| `verifyRegistrationToken` | (`verifyRegistrationTokenParam?`: [`VerifyRegistrationTokenParam`](../interfaces/AwsMarketplace_api.VerifyRegistrationTokenParam.md), `options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |

**`Export`**

#### Defined in

[src/generated/AwsMarketplace/api.ts:897](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/AwsMarketplace/api.ts#L897)

___

### ErrorApiAxiosParamCreator

▸ **ErrorApiAxiosParamCreator**(`configuration?`): `Object`

ErrorApi - axios parameter creator

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/AwsMarketplace_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `returnInternalServerError` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<[`RequestArgs`](../interfaces/AwsMarketplace_base.RequestArgs.md)\> | - |

**`Export`**

#### Defined in

[src/generated/AwsMarketplace/api.ts:1373](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/AwsMarketplace/api.ts#L1373)

___

### ErrorApiFactory

▸ **ErrorApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

ErrorApi - factory interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/AwsMarketplace_configuration.Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `returnInternalServerError` | (`options?`: `any`) => `AxiosPromise`\<`void`\> |

**`Export`**

#### Defined in

[src/generated/AwsMarketplace/api.ts:1436](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/AwsMarketplace/api.ts#L1436)

___

### ErrorApiFp

▸ **ErrorApiFp**(`configuration?`): `Object`

ErrorApi - functional programming interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](../classes/AwsMarketplace_configuration.Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `returnInternalServerError` | (`options?`: `AxiosRequestConfig`\<`any`\>) => `Promise`\<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`\<`void`\>\> |

**`Export`**

#### Defined in

[src/generated/AwsMarketplace/api.ts:1416](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c6c266c/src/generated/AwsMarketplace/api.ts#L1416)
