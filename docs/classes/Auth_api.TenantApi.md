[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / TenantApi

# Class: TenantApi

[Auth/api](../modules/Auth_api.md).TenantApi

TenantApi - object-oriented interface

**`Export`**

TenantApi

## Hierarchy

- [`BaseAPI`](Auth_base.BaseAPI.md)

  ↳ **`TenantApi`**

## Table of contents

### Constructors

- [constructor](Auth_api.TenantApi.md#constructor)

### Properties

- [axios](Auth_api.TenantApi.md#axios)
- [basePath](Auth_api.TenantApi.md#basepath)
- [configuration](Auth_api.TenantApi.md#configuration)

### Methods

- [createTenant](Auth_api.TenantApi.md#createtenant)
- [createTenantAndPricing](Auth_api.TenantApi.md#createtenantandpricing)
- [deleteStripeTenantAndPricing](Auth_api.TenantApi.md#deletestripetenantandpricing)
- [deleteTenant](Auth_api.TenantApi.md#deletetenant)
- [getTenant](Auth_api.TenantApi.md#gettenant)
- [getTenantIdentityProviders](Auth_api.TenantApi.md#gettenantidentityproviders)
- [getTenants](Auth_api.TenantApi.md#gettenants)
- [resetPlan](Auth_api.TenantApi.md#resetplan)
- [updateTenant](Auth_api.TenantApi.md#updatetenant)
- [updateTenantBillingInfo](Auth_api.TenantApi.md#updatetenantbillinginfo)
- [updateTenantIdentityProvider](Auth_api.TenantApi.md#updatetenantidentityprovider)
- [updateTenantPlan](Auth_api.TenantApi.md#updatetenantplan)

## Constructors

### constructor

• **new TenantApi**(`configuration?`, `basePath?`, `axios?`): [`TenantApi`](Auth_api.TenantApi.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Auth_configuration.Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Returns

[`TenantApi`](Auth_api.TenantApi.md)

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

### createTenant

▸ **createTenant**(`body?`, `options?`): `Promise`\<`AxiosResponse`\<[`Tenant`](../interfaces/Auth_api.Tenant.md), `any`\>\>

Create a tenant managed by the SaaSus Platform.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body?` | [`TenantProps`](../interfaces/Auth_api.TenantProps.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Tenant`](../interfaces/Auth_api.Tenant.md), `any`\>\>

**`Summary`**

Create Tenant

**`Throws`**

**`Memberof`**

TenantApi

#### Defined in

[src/generated/Auth/api.ts:7402](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L7402)

___

### createTenantAndPricing

▸ **createTenantAndPricing**(`options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Set Stripe initial information via billing

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Stripe Initial Setting

**`Throws`**

**`Memberof`**

TenantApi

#### Defined in

[src/generated/Auth/api.ts:7413](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L7413)

___

### deleteStripeTenantAndPricing

▸ **deleteStripeTenantAndPricing**(`options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Delete customer and product from Stripe.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Delete Customer and Product From Stripe

**`Throws`**

**`Memberof`**

TenantApi

#### Defined in

[src/generated/Auth/api.ts:7424](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L7424)

___

### deleteTenant

▸ **deleteTenant**(`tenantId`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Delete SaaSus Platform tenant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Delete Tenant

**`Throws`**

**`Memberof`**

TenantApi

#### Defined in

[src/generated/Auth/api.ts:7436](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L7436)

___

### getTenant

▸ **getTenant**(`tenantId`, `options?`): `Promise`\<`AxiosResponse`\<[`TenantDetail`](../interfaces/Auth_api.TenantDetail.md), `any`\>\>

Get the details of tenant managed on the SaaSus Platform.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`TenantDetail`](../interfaces/Auth_api.TenantDetail.md), `any`\>\>

**`Summary`**

Get Tenant Details

**`Throws`**

**`Memberof`**

TenantApi

#### Defined in

[src/generated/Auth/api.ts:7448](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L7448)

___

### getTenantIdentityProviders

▸ **getTenantIdentityProviders**(`tenantId`, `options?`): `Promise`\<`AxiosResponse`\<[`TenantIdentityProviders`](../interfaces/Auth_api.TenantIdentityProviders.md), `any`\>\>

Get sign-in information via external identity provider per tenant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`TenantIdentityProviders`](../interfaces/Auth_api.TenantIdentityProviders.md), `any`\>\>

**`Summary`**

Get identity provider per tenant

**`Throws`**

**`Memberof`**

TenantApi

#### Defined in

[src/generated/Auth/api.ts:7460](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L7460)

___

### getTenants

▸ **getTenants**(`options?`): `Promise`\<`AxiosResponse`\<[`Tenants`](../interfaces/Auth_api.Tenants.md), `any`\>\>

Get tenants managed by SaaSus Platform.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<[`Tenants`](../interfaces/Auth_api.Tenants.md), `any`\>\>

**`Summary`**

Get Tenants

**`Throws`**

**`Memberof`**

TenantApi

#### Defined in

[src/generated/Auth/api.ts:7471](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L7471)

___

### resetPlan

▸ **resetPlan**(`options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Delete all information related to rate plans. Delete plans linked to tenants and plan definitions. If you are using the Stripe linkage, the linkage will be removed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Delete all information related to rate plans

**`Throws`**

**`Memberof`**

TenantApi

#### Defined in

[src/generated/Auth/api.ts:7482](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L7482)

___

### updateTenant

▸ **updateTenant**(`tenantId`, `body?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Update SaaSus Platform tenant details.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `body?` | [`TenantProps`](../interfaces/Auth_api.TenantProps.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Update Tenant Details

**`Throws`**

**`Memberof`**

TenantApi

#### Defined in

[src/generated/Auth/api.ts:7495](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L7495)

___

### updateTenantBillingInfo

▸ **updateTenantBillingInfo**(`tenantId`, `body?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Update SaaSus Platform tenant billing information.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `body?` | [`BillingInfo`](../interfaces/Auth_api.BillingInfo.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Update Tenant Billing Information

**`Throws`**

**`Memberof`**

TenantApi

#### Defined in

[src/generated/Auth/api.ts:7508](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L7508)

___

### updateTenantIdentityProvider

▸ **updateTenantIdentityProvider**(`tenantId`, `updateTenantIdentityProviderParam?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Update sign-in information via external identity provider per tenant.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `updateTenantIdentityProviderParam?` | [`UpdateTenantIdentityProviderParam`](../interfaces/Auth_api.UpdateTenantIdentityProviderParam.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Update identity provider per tenant

**`Throws`**

**`Memberof`**

TenantApi

#### Defined in

[src/generated/Auth/api.ts:7521](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L7521)

___

### updateTenantPlan

▸ **updateTenantPlan**(`tenantId`, `body?`, `options?`): `Promise`\<`AxiosResponse`\<`void`, `any`\>\>

Update SaaSus Platform tenant plan information.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tenantId` | `string` | Tenant ID |
| `body?` | [`PlanReservation`](../interfaces/Auth_api.PlanReservation.md) |  |
| `options?` | `AxiosRequestConfig`\<`any`\> | Override http request option. |

#### Returns

`Promise`\<`AxiosResponse`\<`void`, `any`\>\>

**`Summary`**

Update Tenant Plan Information

**`Throws`**

**`Memberof`**

TenantApi

#### Defined in

[src/generated/Auth/api.ts:7534](https://github.com/saasus-platform/saasus-sdk-javascript/blob/c67ac22/src/generated/Auth/api.ts#L7534)
