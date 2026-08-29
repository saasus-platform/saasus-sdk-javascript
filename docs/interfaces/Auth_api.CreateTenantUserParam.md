[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / CreateTenantUserParam

# Interface: CreateTenantUserParam

[Auth/api](../modules/Auth_api.md).CreateTenantUserParam

Either email or sign_in_id must be specified, but not both.

**`Export`**

CreateTenantUserParam

## Table of contents

### Properties

- [attributes](Auth_api.CreateTenantUserParam.md#attributes)
- [email](Auth_api.CreateTenantUserParam.md#email)
- [sign\_in\_id](Auth_api.CreateTenantUserParam.md#sign_in_id)

## Properties

### attributes

• **attributes**: `Object`

Attribute information (Get information set by defining user attributes in the SaaS development console)

**`Memberof`**

CreateTenantUserParam

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[src/generated/Auth/api.ts:514](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L514)

___

### email

• `Optional` **email**: `string`

E-mail

**`Memberof`**

CreateTenantUserParam

#### Defined in

[src/generated/Auth/api.ts:502](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L502)

___

### sign\_in\_id

• `Optional` **sign\_in\_id**: `string`

Sign-in ID (alphanumeric and symbols -_ only, max 50 characters)

**`Memberof`**

CreateTenantUserParam

#### Defined in

[src/generated/Auth/api.ts:508](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L508)
