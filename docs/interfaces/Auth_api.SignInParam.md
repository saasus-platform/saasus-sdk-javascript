[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / SignInParam

# Interface: SignInParam

[Auth/api](../modules/Auth_api.md).SignInParam

Parameters required for user sign-in The required parameters vary depending on the sign_in_flow.

**`Export`**

SignInParam

## Table of contents

### Properties

- [sign\_in\_flow](Auth_api.SignInParam.md#sign_in_flow)
- [sign\_in\_parameters](Auth_api.SignInParam.md#sign_in_parameters)

## Properties

### sign\_in\_flow

• **sign\_in\_flow**: ``"USER_SRP_AUTH"``

The sign-in flow to use for authentication. Currently, only USER_SRP_AUTH is supported.

**`Memberof`**

SignInParam

#### Defined in

[src/generated/Auth/api.ts:1531](https://github.com/saasus-platform/saasus-sdk-javascript/blob/ea545cb/src/generated/Auth/api.ts#L1531)

___

### sign\_in\_parameters

• `Optional` **sign\_in\_parameters**: `Object`

The required parameters vary depending on the sign_in_flow. USER_SRP_AUTH:   USERNAME: email address   SRP_A: SRP A value

**`Memberof`**

SignInParam

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/generated/Auth/api.ts:1537](https://github.com/saasus-platform/saasus-sdk-javascript/blob/ea545cb/src/generated/Auth/api.ts#L1537)
