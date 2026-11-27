[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / SingleTenantSettings

# Interface: SingleTenantSettings

[Auth/api](../modules/Auth_api.md).SingleTenantSettings

**`Export`**

SingleTenantSettings

## Table of contents

### Properties

- [cloudformation\_template\_url](Auth_api.SingleTenantSettings.md#cloudformation_template_url)
- [ddl\_template\_url](Auth_api.SingleTenantSettings.md#ddl_template_url)
- [enabled](Auth_api.SingleTenantSettings.md#enabled)
- [role\_arn](Auth_api.SingleTenantSettings.md#role_arn)
- [role\_external\_id](Auth_api.SingleTenantSettings.md#role_external_id)

## Properties

### cloudformation\_template\_url

• **cloudformation\_template\_url**: `string`

S3 URL where the CloudFormationTemplate to be executed in the SaaS environment is stored

**`Memberof`**

SingleTenantSettings

#### Defined in

[src/generated/Auth/api.ts:2171](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L2171)

___

### ddl\_template\_url

• **ddl\_template\_url**: `string`

S3 URL where the CloudFormationTemplate to be executed in the SaaS environment is stored

**`Memberof`**

SingleTenantSettings

#### Defined in

[src/generated/Auth/api.ts:2177](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L2177)

___

### enabled

• **enabled**: `boolean`

enable SaaS Infrastructure Management settings or not

**`Memberof`**

SingleTenantSettings

#### Defined in

[src/generated/Auth/api.ts:2159](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L2159)

___

### role\_arn

• **role\_arn**: `string`

ARN of the role for SaaS Platform to AssumeRole

**`Memberof`**

SingleTenantSettings

#### Defined in

[src/generated/Auth/api.ts:2165](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L2165)

___

### role\_external\_id

• **role\_external\_id**: `string`

External id used by SaaSus when AssumeRole to operate SaaS

**`Memberof`**

SingleTenantSettings

#### Defined in

[src/generated/Auth/api.ts:2183](https://github.com/saasus-platform/saasus-sdk-javascript/blob/f226248/src/generated/Auth/api.ts#L2183)
