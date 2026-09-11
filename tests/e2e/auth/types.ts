/**
 * TypeScript型定義ファイル
 * Auth E2Eテストで使用される型定義を提供します
 */

import { AxiosResponse } from 'axios';

// 基本的な型定義（testlibとの互換性のため）
export { Step, StepResult, StoryResult } from '../../../__tests__/testlib/models';

// テストパラメータの型定義
export interface TestParams {
  UpdateBasicInfo: {
    updateParams: {
      domain_name: string;
      from_email_address: string;
      reply_email_address: string;
    };
  };
  UpdateAuthInfo: {
    updateParams: {
      callback_url: string;
    };
  };
  CreateSaasUser: {
    createParams: {
      email: string;
      password: string;
    };
  };
  CreateRole: {
    createParams: {
      display_name: string;
      role_name: string;
    };
  };
  CreateUserAttribute: {
    createParams: {
      attribute_name: string;
      attribute_type: string;
      display_name: string;
    };
  };
  CreateTenantAttribute: {
    createParams: {
      attribute_name: string;
      attribute_type: string;
      display_name: string;
    };
  };
  CreateEnv: {
    createParams: {
      display_name: string;
      id: number | null;
      name: string;
    };
  };
  CreateTenant: {
    createParams: {
      name: string;
      attributes: Record<string, any>;
      back_office_staff_email: string;
    };
  };
  CreateTenantUser: {
    createParams: {
      attributes: Record<string, any>;
      email: string;
    };
  };
  CreateTenantUserRoles: {
    createParams: {
      role_names: string[];
    };
  };
  UpdateCustomizePages: {
    updateParams: {
      password_reset_page?: {
        html_contents: string;
        is_privacy_policy: boolean;
        is_terms_of_service: boolean;
      };
      sign_in_page?: {
        html_contents: string;
        is_privacy_policy: boolean;
        is_terms_of_service: boolean;
      };
      sign_up_page?: {
        html_contents: string;
        is_privacy_policy: boolean;
        is_terms_of_service: boolean;
      };
    };
  };
  UpdateCustomizePageSettings: {
    updateParams: {
      favicon: string;
      google_tag_manager_container_id: string;
      icon: string;
      privacy_policy_url: string;
      terms_of_service_url: string;
      title: string;
    };
  };
  UpdateSignInSettings: {
    updateParams: {
      password_policy?: {
        is_require_lowercase: boolean;
        is_require_numbers: boolean;
        is_require_symbols: boolean;
        is_require_uppercase: boolean;
        minimum_length: number;
        temporary_password_validity_days: number;
      };
    };
  };
  UpdateNotificationMessages: {
    updateParams: {
      authentication_mfa?: {
        message: string;
        subject: string;
      };
      create_user?: {
        message: string;
        subject: string;
      };
      [key: string]: any;
    };
  };
  CreateSecretCode: {
    createParams: {
      access_token: string;
    };
  };
  UpdateSoftwareToken: {
    updateParams: {
      access_token: string;
      verification_code: string;
    };
  };
  UpdateUserMfaPreference: {
    updateParams: {
      enabled: boolean;
      method: string | null;
    };
  };
  UpdateStripeInfo: {
    updateParams: {
      secret_key: string;
    };
  };
  UpdateSettings: {
    updateParams: {
      cas_bucket_name: string;
      cas_sns_topic_arn: string;
      product_code: string;
      role_arn: string;
      role_external_id: string;
      seller_sns_topic_arn: string;
      sns_topic_arn: string;
      sqs_arn: string;
    };
  };
  SignUpWithAwsMarketplace: {
    createParams: {
      email: string;
      listing_status: string;
      product_code: string;
      registration_token: string;
      role_arn: string;
      sns_topic_arn: string;
      seller_sns_topic_arn: string;
      cas_bucket_name: string;
      cas_sns_topic_arn: string;
      sqs_arn: string;
      role_external_id: string;
    };
  };
  UpdateTenantBillingInfo: {
    updateParams: {
      address: {
        additional_address_info: string;
        city: string;
        country: string;
        postal_code: string;
        state: string;
        street: string;
      };
      invoice_language: string;
      name: string;
    };
  };
}

// ストーリー変数の型定義（Go版との互換性を考慮）
export interface StoryVariables {
  [key: string]: any;
  
  // 基本設定
  domain_name?: string;
  from_email_address?: string;
  reply_email_address?: string;
  
  // 認証情報
  callback_url?: string;
  
  // ユーザー情報
  email?: string;
  _email_updates?: string[]; // Go版と同じキー名
  password?: string;
  user_id?: string;
  
  // ロール情報
  role_name?: string;
  display_name?: string;
  tenant_role_name?: string; // Go版と同じキー名
  
  // 属性情報
  attribute_name?: string;
  attribute_type?: string;
  attributes?: Record<string, any>; // テナント属性用
  
  // 環境情報
  env_id?: number;
  name?: string; // Go版と同じキー名（env_nameではなくname）
  
  // テナント情報
  tenant_id?: string;
  back_office_staff_email?: string; // Go版と同じキー名
  
  // MFA関連
  software_token_secret?: string;
  access_token?: string; // Cognitoアクセストークン
  verification_code?: string; // TOTP検証コード
  enabled?: boolean; // MFA有効フラグ
  
  // 認証トークン
  token?: string; // IDトークン（Go版と同じキー名）
  
  // 通知・カスタマイズ
  notification_messages?: any;
  customize_pages?: any;
  
  // カスタマイズページ設定
  favicon?: string;
  icon?: string;
  title?: string;
  terms_of_service_url?: string;
  privacy_policy_url?: string;
  google_tag_manager_container_id?: string;
  
  // 請求情報
  tenant_billing_info?: any;
  
  // AWS Marketplace関連
  aws_marketplace_token?: string; // Go版と同じキー名
  aws_marketplace_email?: string; // Go版と同じキー名
  
  // Stripe関連
  stripe_secret_key?: string;
}

// Cognitoトークンの型定義
export interface CognitoTokens {
  accessToken: string;
  idToken: string;
  refreshToken: string;
}

// Cognito設定の型定義
export interface CognitoConfig {
  userPoolId: string;
  clientId: string;
  region: string;
  endpoint?: string;
}

// ステップ定義の型定義
export interface StepDefinition {
  method_name: string;
  description: string;
  params: ParamsFunction;
  expected_status: number;
  allowed_statuses?: number[];
  skip?: boolean;
  state_update?: ResponseHandler;
  validation_func?: ValidationFunction;
}

// ストーリー定義の型定義
export interface StoryDefinition {
  name: string;
  description: string;
  module: string;
  steps: StepDefinition[];
  tags: string[];
}

// パラメータ関数の型定義
export type ParamsFunction = (variables: StoryVariables) => any;

// レスポンスハンドラーの型定義（Go版準拠でAxiosResponseを受け取る）
export type ResponseHandler = (response: AxiosResponse<any>, variables: StoryVariables) => void;

// バリデーション関数の型定義（Go版準拠でペイロードを直接受け取る）
export type ValidationFunction = (payload: any) => boolean;

// リソーストラッカーの型定義
export interface ResourceTracker {
  saasUsers: string[];
  tenants: string[];
  environments: number[];
  roles: string[];
  userAttributes: string[];
  tenantAttributes: string[];
  tenantUsers: Array<{tenantId: string, userId: string}>;
  tenantInvitations: Array<{tenantId: string, invitationId: string}>;
  stripeResources: string[];
  awsMarketplaceResources: string[];
}

// エラータイプの定義
export enum ErrorType {
  CONFIG_ERROR = 'CONFIG_ERROR',
  EXTERNAL_SERVICE_ERROR = 'EXTERNAL_SERVICE_ERROR',
  API_ERROR = 'API_ERROR',
  RESOURCE_ERROR = 'RESOURCE_ERROR'
}

// カスタムエラークラス
export class AuthE2EError extends Error {
  public readonly type: ErrorType;
  public readonly context?: string;
  public readonly originalError?: Error;

  constructor(
    message: string,
    type: ErrorType,
    context?: string,
    originalError?: Error
  ) {
    super(message);
    this.name = 'AuthE2EError';
    this.type = type;
    this.context = context;
    this.originalError = originalError;
  }
}

// ログレベルの定義
export enum LogLevel {
  DEBUG = 'debug',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error'
}

// AWS Marketplace設定の型定義
export interface AwsMarketplaceConfig {
  productCode?: string;
  roleArn?: string;
  snsTopicArn?: string;
  sellerSnsTopicArn?: string;
  casBucketName?: string;
  casSnsTopicArn?: string;
  sqsArn?: string;
  roleExternalId?: string;
}

// MFA関連の型定義
export interface MFASettings {
  enabled: boolean;
  method?: string;
}

// テナント招待の型定義
export interface TenantInvitation {
  tenantId: string;
  invitationId: string;
  email: string;
  envs: Array<{
    id: number;
    role_names: string[];
  }>;
}

// 外部ユーザーリンクの型定義
export interface ExternalUserLink {
  accessToken: string;
  code?: string;
}

// メール更新の型定義
export interface EmailUpdate {
  email: string;
  accessToken: string;
  code?: string;
}

// サインアップの型定義
export interface SignUp {
  email: string;
}

// プロバイダー管理の型定義
export interface ProviderManagement {
  providerName: string;
}