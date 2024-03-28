[saasus-sdk](../README.md) / [Auth/api](../modules/Auth_api.md) / BasicInfo

# Interface: BasicInfo

[Auth/api](../modules/Auth_api.md).BasicInfo

**`Export`**

BasicInfo

## Table of contents

### Properties

- [certificate\_dns\_record](Auth_api.BasicInfo.md#certificate_dns_record)
- [cloud\_front\_dns\_record](Auth_api.BasicInfo.md#cloud_front_dns_record)
- [default\_domain\_name](Auth_api.BasicInfo.md#default_domain_name)
- [dkim\_dns\_records](Auth_api.BasicInfo.md#dkim_dns_records)
- [domain\_name](Auth_api.BasicInfo.md#domain_name)
- [from\_email\_address](Auth_api.BasicInfo.md#from_email_address)
- [is\_dns\_validated](Auth_api.BasicInfo.md#is_dns_validated)
- [is\_ses\_sandbox\_granted](Auth_api.BasicInfo.md#is_ses_sandbox_granted)
- [reply\_email\_address](Auth_api.BasicInfo.md#reply_email_address)

## Properties

### certificate\_dns\_record

• **certificate\_dns\_record**: [`DnsRecord`](Auth_api.DnsRecord.md)

**`Memberof`**

BasicInfo

#### Defined in

[src/generated/Auth/api.ts:161](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L161)

___

### cloud\_front\_dns\_record

• **cloud\_front\_dns\_record**: [`DnsRecord`](Auth_api.DnsRecord.md)

**`Memberof`**

BasicInfo

#### Defined in

[src/generated/Auth/api.ts:167](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L167)

___

### default\_domain\_name

• **default\_domain\_name**: `string`

デフォルトドメイン名(Default Domain Name)

**`Memberof`**

BasicInfo

#### Defined in

[src/generated/Auth/api.ts:179](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L179)

___

### dkim\_dns\_records

• **dkim\_dns\_records**: [`DnsRecord`](Auth_api.DnsRecord.md)[]

DKIM DNS レコード(DKIM DNS Records)

**`Memberof`**

BasicInfo

#### Defined in

[src/generated/Auth/api.ts:173](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L173)

___

### domain\_name

• **domain\_name**: `string`

ドメイン名(Domain Name)

**`Memberof`**

BasicInfo

#### Defined in

[src/generated/Auth/api.ts:149](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L149)

___

### from\_email\_address

• **from\_email\_address**: `string`

認証メールの送信元メールアドレス(Sender Email for Authentication Email)

**`Memberof`**

BasicInfo

#### Defined in

[src/generated/Auth/api.ts:185](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L185)

___

### is\_dns\_validated

• **is\_dns\_validated**: `boolean`

DNSレコードの検証結果(DNS Record Verification Results)

**`Memberof`**

BasicInfo

#### Defined in

[src/generated/Auth/api.ts:155](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L155)

___

### is\_ses\_sandbox\_granted

• **is\_ses\_sandbox\_granted**: `boolean`

SESのサンドボックス解除及びCognitoのSES設定結果(SES sandbox release and Cognito SES configuration results)

**`Memberof`**

BasicInfo

#### Defined in

[src/generated/Auth/api.ts:197](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L197)

___

### reply\_email\_address

• **reply\_email\_address**: `string`

認証メールの返信元メールアドレス(Reply-from email address of authentication email)

**`Memberof`**

BasicInfo

#### Defined in

[src/generated/Auth/api.ts:191](https://github.com/saasus-platform/saasus-sdk-javascript/blob/55abc15/src/generated/Auth/api.ts#L191)
