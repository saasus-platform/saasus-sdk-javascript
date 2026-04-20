[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / RespondToSignInChallengeResult

# Interface: RespondToSignInChallengeResult

[Auth/api](../modules/Auth_api.md).RespondToSignInChallengeResult

Result returned after responding to a sign-in challenge

**`Export`**

RespondToSignInChallengeResult

## Table of contents

### Properties

- [challenge\_name](Auth_api.RespondToSignInChallengeResult.md#challenge_name)
- [challenge\_parameters](Auth_api.RespondToSignInChallengeResult.md#challenge_parameters)
- [credentials](Auth_api.RespondToSignInChallengeResult.md#credentials)
- [new\_device\_metadata](Auth_api.RespondToSignInChallengeResult.md#new_device_metadata)
- [session](Auth_api.RespondToSignInChallengeResult.md#session)

## Properties

### challenge\_name

• `Optional` **challenge\_name**: [`ChallengeName`](../enums/Auth_api.ChallengeName.md)

**`Memberof`**

RespondToSignInChallengeResult

#### Defined in

[src/generated/Auth/api.ts:1569](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L1569)

___

### challenge\_parameters

• `Optional` **challenge\_parameters**: `Object`

Parameters required for the next challenge.

**`Memberof`**

RespondToSignInChallengeResult

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/generated/Auth/api.ts:1575](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L1575)

___

### credentials

• `Optional` **credentials**: [`Credentials`](Auth_api.Credentials.md)

**`Memberof`**

RespondToSignInChallengeResult

#### Defined in

[src/generated/Auth/api.ts:1563](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L1563)

___

### new\_device\_metadata

• `Optional` **new\_device\_metadata**: [`NewDeviceMetadata`](Auth_api.NewDeviceMetadata.md)

**`Memberof`**

RespondToSignInChallengeResult

#### Defined in

[src/generated/Auth/api.ts:1587](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L1587)

___

### session

• `Optional` **session**: `string`

Session identifier for the challenge. This session should be passed to the next call to RespondToSignInChallenge if another challenge is required.

**`Memberof`**

RespondToSignInChallengeResult

#### Defined in

[src/generated/Auth/api.ts:1581](https://github.com/saasus-platform/saasus-sdk-javascript/blob/7a3a70e/src/generated/Auth/api.ts#L1581)
