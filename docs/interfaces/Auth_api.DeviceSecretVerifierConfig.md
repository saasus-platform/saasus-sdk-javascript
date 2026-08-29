[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / DeviceSecretVerifierConfig

# Interface: DeviceSecretVerifierConfig

[Auth/api](../modules/Auth_api.md).DeviceSecretVerifierConfig

The configuration of the device secret verifier.

**`Export`**

DeviceSecretVerifierConfig

## Table of contents

### Properties

- [password\_verifier](Auth_api.DeviceSecretVerifierConfig.md#password_verifier)
- [salt](Auth_api.DeviceSecretVerifierConfig.md#salt)

## Properties

### password\_verifier

• `Optional` **password\_verifier**: `string`

A password verifier for a user\'s device. Used in SRP authentication.

**`Memberof`**

DeviceSecretVerifierConfig

#### Defined in

[src/generated/Auth/api.ts:806](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L806)

___

### salt

• `Optional` **salt**: `string`

The salt for SRP authentication with the user\'s device.

**`Memberof`**

DeviceSecretVerifierConfig

#### Defined in

[src/generated/Auth/api.ts:812](https://github.com/saasus-platform/saasus-sdk-javascript/blob/a487389/src/generated/Auth/api.ts#L812)
