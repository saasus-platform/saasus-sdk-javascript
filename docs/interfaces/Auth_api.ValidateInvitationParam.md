[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / ValidateInvitationParam

# Interface: ValidateInvitationParam

[Auth/api](../modules/Auth_api.md).ValidateInvitationParam

既存ユーザーの場合はアクセストークン、新規ユーザーの場合はメールアドレスとパスワードが必須です。  Access token is required for existing users, and email and password is required for new users.

**`Export`**

ValidateInvitationParam

## Table of contents

### Properties

- [access\_token](Auth_api.ValidateInvitationParam.md#access_token)
- [email](Auth_api.ValidateInvitationParam.md#email)
- [password](Auth_api.ValidateInvitationParam.md#password)

## Properties

### access\_token

• `Optional` **access\_token**: `string`

招待されたユーザーのアクセストークン(access token of the invited user)

**`Memberof`**

ValidateInvitationParam

#### Defined in

[src/generated/Auth/api.ts:2355](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L2355)

___

### email

• `Optional` **email**: `string`

招待されたユーザーのメールアドレス(email address of the invited user)

**`Memberof`**

ValidateInvitationParam

#### Defined in

[src/generated/Auth/api.ts:2361](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L2361)

___

### password

• `Optional` **password**: `string`

招待されたユーザーのパスワード(password of the invited user)

**`Memberof`**

ValidateInvitationParam

#### Defined in

[src/generated/Auth/api.ts:2367](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L2367)
