[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / CreateSaasUserParam

# Interface: CreateSaasUserParam

[Auth/api](../modules/Auth_api.md).CreateSaasUserParam

Either email or sign_in_id must be specified, but not both. - If email is specified: Email authentication user will be created.   When password is not specified, a temporary password will be sent by email. - If sign_in_id is specified: Sign-in ID authentication user will be created.   When password is not specified, it will be auto-generated and returned in the response.

**`Export`**

CreateSaasUserParam

## Table of contents

### Properties

- [email](Auth_api.CreateSaasUserParam.md#email)
- [password](Auth_api.CreateSaasUserParam.md#password)
- [sign\_in\_id](Auth_api.CreateSaasUserParam.md#sign_in_id)

## Properties

### email

• `Optional` **email**: `string`

E-mail

**`Memberof`**

CreateSaasUserParam

#### Defined in

[src/generated/Auth/api.ts:439](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L439)

___

### password

• `Optional` **password**: `string`

Password. For email authentication, if not specified, a temporary password will be sent by email. For sign-in ID authentication, if not specified, password will be auto-generated and returned.

**`Memberof`**

CreateSaasUserParam

#### Defined in

[src/generated/Auth/api.ts:451](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L451)

___

### sign\_in\_id

• `Optional` **sign\_in\_id**: `string`

Sign-in ID (alphanumeric and symbols -_ only, max 50 characters)

**`Memberof`**

CreateSaasUserParam

#### Defined in

[src/generated/Auth/api.ts:445](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L445)
