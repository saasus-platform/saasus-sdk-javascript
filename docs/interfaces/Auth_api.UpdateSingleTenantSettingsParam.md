[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / UpdateSingleTenantSettingsParam

# Interface: UpdateSingleTenantSettingsParam

[Auth/api](../modules/Auth_api.md).UpdateSingleTenantSettingsParam

**`Export`**

UpdateSingleTenantSettingsParam

## Table of contents

### Properties

- [cloudformation\_template](Auth_api.UpdateSingleTenantSettingsParam.md#cloudformation_template)
- [ddl\_template](Auth_api.UpdateSingleTenantSettingsParam.md#ddl_template)
- [enabled](Auth_api.UpdateSingleTenantSettingsParam.md#enabled)
- [role\_arn](Auth_api.UpdateSingleTenantSettingsParam.md#role_arn)
- [role\_external\_id](Auth_api.UpdateSingleTenantSettingsParam.md#role_external_id)

## Properties

### cloudformation\_template

• `Optional` **cloudformation\_template**: `string`

CloudFormation template file

**`Memberof`**

UpdateSingleTenantSettingsParam

#### Defined in

[src/generated/Auth/api.ts:2365](https://github.com/saasus-platform/saasus-sdk-javascript/blob/ea545cb/src/generated/Auth/api.ts#L2365)

___

### ddl\_template

• `Optional` **ddl\_template**: `string`

ddl file to run in SaaS environment

**`Memberof`**

UpdateSingleTenantSettingsParam

#### Defined in

[src/generated/Auth/api.ts:2371](https://github.com/saasus-platform/saasus-sdk-javascript/blob/ea545cb/src/generated/Auth/api.ts#L2371)

___

### enabled

• `Optional` **enabled**: `boolean`

enable SaaS Infrastructure Management settings or not

**`Memberof`**

UpdateSingleTenantSettingsParam

#### Defined in

[src/generated/Auth/api.ts:2353](https://github.com/saasus-platform/saasus-sdk-javascript/blob/ea545cb/src/generated/Auth/api.ts#L2353)

___

### role\_arn

• `Optional` **role\_arn**: `string`

ARN of the role for SaaS Platform to AssumeRole

**`Memberof`**

UpdateSingleTenantSettingsParam

#### Defined in

[src/generated/Auth/api.ts:2359](https://github.com/saasus-platform/saasus-sdk-javascript/blob/ea545cb/src/generated/Auth/api.ts#L2359)

___

### role\_external\_id

• `Optional` **role\_external\_id**: `string`

External id used by SaaSus when AssumeRole to operate SaaS

**`Memberof`**

UpdateSingleTenantSettingsParam

#### Defined in

[src/generated/Auth/api.ts:2377](https://github.com/saasus-platform/saasus-sdk-javascript/blob/ea545cb/src/generated/Auth/api.ts#L2377)
