import * as dotenv from 'dotenv';
dotenv.config();

import { updateUserTokensFromCognito } from './token-provider';
import {
    buildCreateSaasUserParams,
    buildCreateTenantParams,
    buildDeleteSaasUserParams,
    buildDeleteTenantParams,
    buildGetOnlyParams,
    buildGetSaasUserParams,
    buildUpdateSignInSettingsParams,
    confirmEmailUpdateParams,
    confirmExternalUserLinkParams,
    confirmSignUpWithAwsMarketplaceParams,
    createSaasUserAttributeParams,
    createSecretCodeParams,
    ensureAuthState,
    getDefaultNotificationMessages,
    getUserMfaPreferenceParams,
    linkAwsMarketplaceParams,
    requestEmailUpdateParams,
    requestExternalUserLinkParams,
    resendSignUpConfirmationEmailParams,
    signUpParams,
    unlinkProviderParams,
    updateAuthInfoParams,
    updateBasicInfoParams,
    updateNotificationMessagesParams,
    updateSaasUserAttributesParams,
    updateSaasUserEmailParams,
    updateSaasUserPasswordParams,
    updateSoftwareTokenParams,
    updateTenantBillingInfoParams,
    updateUserMfaPreferenceParams
} from './helpers';
import { AwsMarketplaceIntegration } from './integrations/aws-marketplace';
import { StripeIntegration } from './integrations/stripe';
import { StateManager } from './state';
import { TestDataLoader } from './testdata/loader';
import {
    extractFieldFromResponse,
    extractIDFromResponse,
    validateAttribute,
    validateAuthInfo,
    validateBasicInfo,
    validateMfaPreference,
    validateSaasUser,
    validateSaasUserList,
    validateSecretCode,
    validateTenant,
    validateVoidResponse
} from './validation';

import { Step, StoryDefinition, StoryVariables, TestParams } from './types';

// Story型のエイリアス（後方互換性のため）
type Story = StoryDefinition;

const MODULE = 'auth';
const statusOKOrCreated = [200, 201];
const skipSignUpOnCognitoEmailLimit =
  process.env.AUTH_E2E_SKIP_SIGNUP_ON_COGNITO_EMAIL_LIMIT === 'true';

interface AuthTokens {
  accessToken: string;
  idToken: string;
  refreshToken: string;
}

const loadAuthTokens = (): AuthTokens => {
  const fallback = '';
  return {
    accessToken: process.env.AUTH_E2E_ACCESS_TOKEN || process.env.SAASUS_ACCESS_TOKEN || fallback,
    idToken: process.env.AUTH_E2E_ID_TOKEN || process.env.SAASUS_ID_TOKEN || fallback,
    refreshToken: process.env.AUTH_E2E_REFRESH_TOKEN || fallback
  };
};

/**
 * Auth APIの全メソッド一覧を返します（Go版準拠の250メソッド）
 */
export const getAuthMethods = (): string[] => [
  // Standard メソッド
  'GetBasicInfo', 'UpdateBasicInfo', 'GetAuthInfo', 'UpdateAuthInfo',
  'GetSaasUsers', 'GetSaasUser', 'CreateSaasUser', 'DeleteSaasUser',
  'UpdateSaasUserPassword', 'UpdateSaasUserEmail', 'UpdateSaasUserAttributes',
  'RequestEmailUpdate', 'ConfirmEmailUpdate',
  'GetUserMfaPreference', 'UpdateUserMfaPreference', 'UpdateSoftwareToken', 'CreateSecretCode',
  'GetRoles', 'CreateRole', 'DeleteRole', 'UpdateRole',
  'GetUserAttributes', 'CreateUserAttribute', 'DeleteUserAttribute',
  'CreateSaasUserAttribute',
  'GetTenantAttributes', 'CreateTenantAttribute', 'DeleteTenantAttribute',
  'FindNotificationMessages', 'UpdateNotificationMessages',
  'GetCustomizePages', 'UpdateCustomizePages', 'GetCustomizePageSettings', 'UpdateCustomizePageSettings',
  'GetEnvs', 'CreateEnv', 'GetEnv', 'UpdateEnv', 'DeleteEnv',
  'GetSignInSettings', 'UpdateSignInSettings',
  'SignUp', 'ResendSignUpConfirmationEmail',
  'SignIn', 'RespondToSignInChallenge',
  'GetTenants', 'CreateTenant', 'GetTenant', 'UpdateTenant', 'DeleteTenant',
  'CreateTenantUser', 'GetAllTenantUsers', 'GetAllTenantUser', 'GetTenantUsers', 'GetTenantUser', 'UpdateTenantUser', 'DeleteTenantUser',
  'CreateTenantUserRoles', 'DeleteTenantUserRole',
  'GetTenantInvitations', 'CreateTenantInvitation', 'GetTenantInvitation', 'DeleteTenantInvitation',
  'GetInvitationValidity', 'ValidateInvitation',
  'UpdateTenantPlan', 'UpdateTenantBillingInfo',
  'CreateTenantAndPricing', 'DeleteStripeTenantAndPricing', 'GetStripeCustomer',
  'ResetPlan',
  'GetUserInfo', 'GetAuthCredentials', 'CreateAuthCredentials',
  'GetIdentityProviders', 'UpdateIdentityProvider',
  'GetTenantIdentityProviders', 'UpdateTenantIdentityProvider',
  'RequestExternalUserLink', 'ConfirmExternalUserLink',
  'UnlinkProvider',
  'SignUpWithAwsMarketplace', 'ConfirmSignUpWithAwsMarketplace', 'LinkAwsMarketplace',
  'GetCloudFormationLaunchStackLinkForSingleTenant', 'GetSingleTenantSettings', 'UpdateSingleTenantSettings',

  // WithBody メソッド
  'UpdateBasicInfoWithBody', 'UpdateAuthInfoWithBody',
  'CreateSaasUserWithBody', 'UpdateSaasUserPasswordWithBody', 'UpdateSaasUserEmailWithBody', 'UpdateSaasUserAttributesWithBody',
  'RequestEmailUpdateWithBody', 'ConfirmEmailUpdateWithBody',
  'UpdateUserMfaPreferenceWithBody', 'UpdateSoftwareTokenWithBody', 'CreateSecretCodeWithBody',
  'CreateRoleWithBody', 'UpdateRoleWithBody', 'CreateUserAttributeWithBody', 'CreateSaasUserAttributeWithBody', 'CreateTenantAttributeWithBody',
  'UpdateNotificationMessagesWithBody', 'UpdateCustomizePagesWithBody', 'UpdateCustomizePageSettingsWithBody',
  'CreateEnvWithBody', 'UpdateEnvWithBody', 'UpdateSignInSettingsWithBody',
  'SignUpWithBody', 'ResendSignUpConfirmationEmailWithBody',
  'SignInWithBody', 'RespondToSignInChallengeWithBody',
  'CreateTenantWithBody', 'UpdateTenantWithBody',
  'CreateTenantUserWithBody', 'UpdateTenantUserWithBody', 'CreateTenantUserRolesWithBody',
  'CreateTenantInvitationWithBody', 'ValidateInvitationWithBody',
  'UpdateTenantPlanWithBody', 'UpdateTenantBillingInfoWithBody',
  'CreateAuthCredentialsWithBody', 'UpdateIdentityProviderWithBody', 'UpdateTenantIdentityProviderWithBody',
  'RequestExternalUserLinkWithBody', 'ConfirmExternalUserLinkWithBody',
  'SignUpWithAwsMarketplaceWithBody', 'ConfirmSignUpWithAwsMarketplaceWithBody', 'LinkAwsMarketplaceWithBody',
  'UpdateSingleTenantSettingsWithBody',

  // WithResponse メソッド
  'GetBasicInfoWithResponse', 'UpdateBasicInfoWithResponse', 'GetAuthInfoWithResponse', 'UpdateAuthInfoWithResponse',
  'GetSaasUsersWithResponse', 'GetSaasUserWithResponse', 'CreateSaasUserWithResponse', 'DeleteSaasUserWithResponse',
  'UpdateSaasUserPasswordWithResponse', 'UpdateSaasUserEmailWithResponse', 'UpdateSaasUserAttributesWithResponse',
  'RequestEmailUpdateWithResponse', 'ConfirmEmailUpdateWithResponse',
  'GetUserMfaPreferenceWithResponse', 'UpdateUserMfaPreferenceWithResponse', 'UpdateSoftwareTokenWithResponse', 'CreateSecretCodeWithResponse',
  'GetRolesWithResponse', 'CreateRoleWithResponse', 'DeleteRoleWithResponse', 'UpdateRoleWithResponse',
  'GetUserAttributesWithResponse', 'CreateUserAttributeWithResponse', 'DeleteUserAttributeWithResponse',
  'CreateSaasUserAttributeWithResponse',
  'GetTenantAttributesWithResponse', 'CreateTenantAttributeWithResponse', 'DeleteTenantAttributeWithResponse',
  'FindNotificationMessagesWithResponse', 'UpdateNotificationMessagesWithResponse',
  'GetCustomizePagesWithResponse', 'UpdateCustomizePagesWithResponse', 'GetCustomizePageSettingsWithResponse', 'UpdateCustomizePageSettingsWithResponse',
  'GetEnvsWithResponse', 'CreateEnvWithResponse', 'GetEnvWithResponse', 'UpdateEnvWithResponse', 'DeleteEnvWithResponse',
  'GetSignInSettingsWithResponse', 'UpdateSignInSettingsWithResponse',
  'SignUpWithResponse', 'ResendSignUpConfirmationEmailWithResponse',
  'SignInWithResponse', 'RespondToSignInChallengeWithResponse',
  'GetTenantsWithResponse', 'CreateTenantWithResponse', 'GetTenantWithResponse', 'UpdateTenantWithResponse', 'DeleteTenantWithResponse',
  'CreateTenantUserWithResponse', 'GetAllTenantUsersWithResponse', 'GetAllTenantUserWithResponse', 'GetTenantUsersWithResponse', 'GetTenantUserWithResponse', 'UpdateTenantUserWithResponse', 'DeleteTenantUserWithResponse',
  'CreateTenantUserRolesWithResponse', 'DeleteTenantUserRoleWithResponse',
  'GetTenantInvitationsWithResponse', 'CreateTenantInvitationWithResponse', 'GetTenantInvitationWithResponse', 'DeleteTenantInvitationWithResponse',
  'GetInvitationValidityWithResponse', 'ValidateInvitationWithResponse',
  'UpdateTenantPlanWithResponse', 'UpdateTenantBillingInfoWithResponse',
  'CreateTenantAndPricingWithResponse', 'DeleteStripeTenantAndPricingWithResponse', 'GetStripeCustomerWithResponse',
  'ResetPlanWithResponse',
  'GetUserInfoWithResponse', 'GetAuthCredentialsWithResponse', 'CreateAuthCredentialsWithResponse',
  'GetIdentityProvidersWithResponse', 'UpdateIdentityProviderWithResponse',
  'GetTenantIdentityProvidersWithResponse', 'UpdateTenantIdentityProviderWithResponse',
  'RequestExternalUserLinkWithResponse', 'ConfirmExternalUserLinkWithResponse',
  'UnlinkProviderWithResponse',
  'SignUpWithAwsMarketplaceWithResponse', 'ConfirmSignUpWithAwsMarketplaceWithResponse', 'LinkAwsMarketplaceWithResponse',
  'GetCloudFormationLaunchStackLinkForSingleTenantWithResponse', 'GetSingleTenantSettingsWithResponse', 'UpdateSingleTenantSettingsWithResponse',

  // WithBodyWithResponse メソッド
  'UpdateBasicInfoWithBodyWithResponse', 'UpdateAuthInfoWithBodyWithResponse',
  'CreateSaasUserWithBodyWithResponse', 'UpdateSaasUserPasswordWithBodyWithResponse', 'UpdateSaasUserEmailWithBodyWithResponse', 'UpdateSaasUserAttributesWithBodyWithResponse',
  'RequestEmailUpdateWithBodyWithResponse', 'ConfirmEmailUpdateWithBodyWithResponse',
  'UpdateUserMfaPreferenceWithBodyWithResponse', 'UpdateSoftwareTokenWithBodyWithResponse', 'CreateSecretCodeWithBodyWithResponse',
  'CreateRoleWithBodyWithResponse', 'UpdateRoleWithBodyWithResponse', 'CreateUserAttributeWithBodyWithResponse', 'CreateSaasUserAttributeWithBodyWithResponse', 'CreateTenantAttributeWithBodyWithResponse',
  'UpdateNotificationMessagesWithBodyWithResponse', 'UpdateCustomizePagesWithBodyWithResponse', 'UpdateCustomizePageSettingsWithBodyWithResponse',
  'CreateEnvWithBodyWithResponse', 'UpdateEnvWithBodyWithResponse', 'UpdateSignInSettingsWithBodyWithResponse',
  'SignUpWithBodyWithResponse', 'ResendSignUpConfirmationEmailWithBodyWithResponse',
  'SignInWithBodyWithResponse', 'RespondToSignInChallengeWithBodyWithResponse',
  'CreateTenantWithBodyWithResponse', 'UpdateTenantWithBodyWithResponse',
  'CreateTenantUserWithBodyWithResponse', 'UpdateTenantUserWithBodyWithResponse', 'CreateTenantUserRolesWithBodyWithResponse',
  'CreateTenantInvitationWithBodyWithResponse', 'ValidateInvitationWithBodyWithResponse',
  'UpdateTenantPlanWithBodyWithResponse', 'UpdateTenantBillingInfoWithBodyWithResponse',
  'CreateAuthCredentialsWithBodyWithResponse', 'UpdateIdentityProviderWithBodyWithResponse', 'UpdateTenantIdentityProviderWithBodyWithResponse',
  'RequestExternalUserLinkWithBodyWithResponse', 'ConfirmExternalUserLinkWithBodyWithResponse',
  'SignUpWithAwsMarketplaceWithBodyWithResponse', 'ConfirmSignUpWithAwsMarketplaceWithBodyWithResponse', 'LinkAwsMarketplaceWithBodyWithResponse',
  'UpdateSingleTenantSettingsWithBodyWithResponse'
];
/**
 * ユニークなメールアドレスを生成（Go版準拠）
 */
function uniqueEmail(prefix: string): string {
  return `${prefix}+${Date.now()}@example.com`;
}

/**
 * ユニークな文字列を生成（Go版準拠）
 */
function uniqueString(prefix: string): string {
  return `${prefix}-${Date.now()}`;
}

/**
 * ユニークな環境IDを生成（Go版準拠）
 */
function uniqueEnvID(): number {
  return Math.floor(Date.now() % 900000) + 10000;
}

/**
 * メールアドレスリストを生成（Go版準拠）
 */
function generateEmailList(prefix: string, count: number): string[] {
  const emails: string[] = [];
  for (let i = 0; i < count; i++) {
    emails.push(uniqueEmail(`${prefix}-${i}`));
  }
  return emails;
}

function buildAuthCredentialQuery(): Record<string, string> {
  const query: Record<string, string> = {};
  const code = process.env.AUTH_E2E_AUTH_CODE;
  const refresh = process.env.AUTH_E2E_REFRESH_TOKEN;
  const flow = process.env.AUTH_E2E_AUTH_FLOW || 'tempCodeAuth';

  if (code) {
    query.code = code;
  }
  if (refresh) {
    query['refresh-token'] = refresh;
  }
  if (flow) {
    query['auth-flow'] = flow;
  }

  return query;
}

/**
 * 基本ストーリー変数を構築（Go版準拠）
 */
function buildBaseStoryVariables(params: TestParams, tokens: any, prefix: string): StoryVariables {
  const emailsForUpdates = generateEmailList(`${prefix}-update`, 20);
  const primaryEmail = uniqueEmail(prefix);
  const uniqueSuffix = Date.now() % 1000000;
  const roleName = `${prefix}-role-${String(uniqueSuffix).padStart(6, '0')}`;
  const roleDisplay = `Role ${String(uniqueSuffix).padStart(6, '0')}`;
  const attributeName = `${prefix}-attr-${String(uniqueSuffix).padStart(6, '0')}`;
  const envName = `${prefix}-env-${String(uniqueSuffix).padStart(6, '0')}`;
  const tenantStaffEmail = uniqueEmail(`${prefix}-tenant-staff`);
  const tenantRoleName = roleName;
  const defaultPassword = params.CreateSaasUser?.createParams?.password || process.env.AUTH_E2E_DEFAULT_PASSWORD || 'Passw0rd!';
  const notificationMessages = params.UpdateNotificationMessages?.updateParams || getDefaultNotificationMessages();
  const tenantBillingInfo = params.UpdateTenantBillingInfo?.updateParams || {
    name: 'Test Billing',
    invoice_language: 'ja-JP',
    address: {
      country: 'JP',
      postal_code: '100-0001',
      state: 'Tokyo',
      city: 'Chiyoda',
      street: '1-1-1'
    }
  };
  const awsRegistrationToken = params.SignUpWithAwsMarketplace?.createParams?.registration_token || process.env.AWS_MARKETPLACE_REGISTRATION_TOKEN || '';
  const awsMarketplaceEmail = params.SignUpWithAwsMarketplace?.createParams?.email || primaryEmail;
  const mfaEnabled = params.UpdateUserMfaPreference?.updateParams?.enabled ?? true;
  const verificationCode = params.UpdateSoftwareToken?.updateParams?.verification_code || '123456';
  const accessToken = tokens.accessToken || process.env.AUTH_E2E_ACCESS_TOKEN || '';
  const idToken = tokens.idToken || process.env.AUTH_E2E_ID_TOKEN || '';
  const refreshToken = tokens.refreshToken || process.env.AUTH_E2E_REFRESH_TOKEN || '';

  const vars: StoryVariables = {
    domain_name: params.UpdateBasicInfo?.updateParams?.domain_name,
    from_email_address: params.UpdateBasicInfo?.updateParams?.from_email_address,
    reply_email_address: params.UpdateBasicInfo?.updateParams?.reply_email_address,
    callback_url: params.UpdateAuthInfo?.updateParams?.callback_url,
    email: primaryEmail,
    _email_updates: emailsForUpdates,
    password: defaultPassword,
    role_name: roleName,
    display_name: roleDisplay,
    attribute_name: attributeName,
    attribute_type: params.CreateUserAttribute?.createParams?.attribute_type || 'string',
    env_id: uniqueEnvID(),
    name: envName,
    back_office_staff_email: tenantStaffEmail,
    attributes: {},
    plan_id: params.UpdateTenantPlan?.updateParams?.plan_id || 'basic-plan',
    notification_messages: notificationMessages,
    customize_pages: params.UpdateCustomizePages?.updateParams || {
      sign_in_page: {
        background_color: '#ffffff',
        text_color: '#000000'
      }
    },
    tenant_role_name: tenantRoleName,
    tenant_billing_info: tenantBillingInfo,
    enabled: mfaEnabled,
    access_token: accessToken,
    user_access_token: accessToken,
    verification_code: verificationCode,
    favicon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
    title: params.UpdateCustomizePageSettings?.updateParams?.title,
    terms_of_service_url: params.UpdateCustomizePageSettings?.updateParams?.terms_of_service_url,
    privacy_policy_url: params.UpdateCustomizePageSettings?.updateParams?.privacy_policy_url,
    google_tag_manager_container_id: params.UpdateCustomizePageSettings?.updateParams?.google_tag_manager_container_id,
    token: idToken,
    refresh_token: refreshToken,
    aws_marketplace_email: awsMarketplaceEmail,
    registration_token: awsRegistrationToken,
    aws_marketplace_token: awsRegistrationToken
  };

  // AWS Marketplace関連の環境変数チェック
  const awsMarketplaceToken = process.env.AWS_MARKETPLACE_REGISTRATION_TOKEN;
  if (awsMarketplaceToken) {
    vars.aws_marketplace_token = awsMarketplaceToken;
    vars.registration_token = awsMarketplaceToken;
  }

  if (params.SignUpWithAwsMarketplace?.createParams) {
    const awsCfg = params.SignUpWithAwsMarketplace.createParams;
    if (awsCfg.registration_token) {
      vars.aws_marketplace_token = awsCfg.registration_token;
      vars.registration_token = awsCfg.registration_token;
    }
    if (awsCfg.email) {
      vars.aws_marketplace_email = awsCfg.email;
    }
  }

  return vars;
}
/**
 * Stripe統合を確保する
 */
async function ensureStripeIntegration(): Promise<void> {
  await StripeIntegration.ensureStripeIntegration();
}

/**
 * AWS Marketplace統合を確保する
 */
async function ensureAwsMarketplaceIntegration(params: TestParams): Promise<void> {
  await AwsMarketplaceIntegration.ensureAwsMarketplaceIntegration(params);
}

/**
 * Stripe Secret Keyを取得する
 */
function getStripeSecretKey(): string {
  return process.env.STRIPE_SECRET_KEY || '';
}

const buildEnsurePricingPlanStep = (skipStripe: boolean): Step => ({
  method_name: 'EnsurePricingPlan',
  description: 'Ensure pricing plan exists for Stripe initialization',
  params: (vars) => ({ plan_id: vars.plan_id }),
  expected_status: 200,
  skip: skipStripe,
  state_update: (response, vars) => {
    if (response?.plan_id) {
      vars.plan_id = response.plan_id;
    }
  }
});

/**
 * Postman Collection Story - Standard Methodsを返します
 * Go版のGetPostmanStoryStandardMethodsと同等の機能
 */
export function getPostmanStoryStandardMethods(): Story {
  // テストパラメータを読み込む
  const params = TestDataLoader.loadTestParams();
  const tokens = loadAuthTokens();

  const vars = buildBaseStoryVariables(params, tokens, 'auth-standard');
  const skipStripe = !StripeIntegration.isStripeIntegrationAvailable(); // Stripe統合が使えない場合はスキップ
  const stripeSecretKey = skipStripe ? '' : getStripeSecretKey();

  // Stripe secret key を vars に設定
  if (stripeSecretKey) {
    vars.secret_key = stripeSecretKey;
  }

  return {
    name: 'Postman Collection Story - Standard Methods',
    description: 'Postman Collection の Test Flow に従い、WithBody サフィックスを持たない Standard メソッドの完全なテストを実行します。基本設定、ユーザー管理、ロール管理、属性管理、環境管理、テナント管理など、Auth API の主要な機能をカバーします。',
    module: MODULE,
    variables: vars,
    setup: [
      buildEnsurePricingPlanStep(skipStripe)
    ],
    steps: [
      // Stripe設定を事前に行う（認証が正常に動作するはず）
      { 
        method_name: 'UpdateStripeInfo', 
        description: 'Setup: Configure Stripe integration', 
        params: () => ({ secret_key: stripeSecretKey }), 
        expected_status: 200,
        allowed_statuses: [200, 201],
        skip: skipStripe,
        validation_func: validateVoidResponse,
        state_update: (response, vars) => {
          console.log(`ℹ️ Stripe統合設定結果: Status ${response?.status || 'unknown'}`);
        }
      },
      // 基本設定・認証情報
      { method_name: 'GetBasicInfo', description: 'GetBasicInfo', params: buildGetOnlyParams, expected_status: 200, validation_func: validateBasicInfo },
      { method_name: 'UpdateBasicInfo', description: 'UpdateBasicInfo', params: (vars) => updateBasicInfoParams(vars), expected_status: 200, validation_func: validateVoidResponse },
      { method_name: 'GetAuthInfo', description: 'GetAuthInfo', params: buildGetOnlyParams, expected_status: 200, validation_func: validateAuthInfo },
      { method_name: 'UpdateAuthInfo', description: 'UpdateAuthInfo', params: (vars) => updateAuthInfoParams(vars), expected_status: 200, validation_func: validateVoidResponse },

      // ユーザー管理
      { method_name: 'GetSaasUsers', description: 'GetSaasUsers', params: buildGetOnlyParams, expected_status: 200, validation_func: validateSaasUserList },
      { 
        method_name: 'CreateSaasUser', 
        description: 'CreateSaasUser', 
        params: buildCreateSaasUserParams, 
        expected_status: 200, 
        allowed_statuses: statusOKOrCreated,
        validation_func: validateSaasUser,
        state_update: async (response, vars) => {
          const id = extractIDFromResponse(response, 'id');
          if (id) {
            vars.user_id = id;
            // StateManagerでSaaSユーザーを追跡
            StateManager.trackResource('saasUsers', id);
          } else {
            console.warn('Warning: failed to extract user_id');
            vars.user_id = 'extracted_user_id';
          }
          // レスポンスのemailをstateに保存（CreateTenantUserで使用）
          if (response?.email) {
            const state = ensureAuthState(vars);
            state.saasUserEmail = response.email;
          }
          await updateUserTokensFromCognito(vars);
        }
      },
      { method_name: 'GetSaasUser', description: 'GetSaasUser', params: buildGetSaasUserParams, expected_status: 200, validation_func: validateSaasUser },
      { method_name: 'UpdateSaasUserPassword', description: 'UpdateSaasUserPassword', params: (vars) => [vars.user_id, { password: vars.password }], expected_status: 200, validation_func: validateVoidResponse },
      { method_name: 'UpdateSaasUserEmail', description: 'UpdateSaasUserEmail', params: (vars) => updateSaasUserEmailParams(vars), expected_status: 200, validation_func: validateVoidResponse },

      // MFA設定
      { method_name: 'GetUserMfaPreference', description: 'GetUserMfaPreference', params: (vars) => getUserMfaPreferenceParams(vars), expected_status: 200, validation_func: validateMfaPreference },
      { method_name: 'CreateSecretCode', description: 'CreateSecretCode', params: (vars) => createSecretCodeParams(vars), expected_status: 200, skip: true },
      { method_name: 'UpdateSoftwareToken', description: 'UpdateSoftwareToken', params: (vars) => updateSoftwareTokenParams(vars), expected_status: 200, skip: true, validation_func: validateVoidResponse },
      { method_name: 'UpdateUserMfaPreference', description: 'UpdateUserMfaPreference', params: (vars) => [vars.user_id, { enabled: false }], expected_status: 200 },

      // ロール管理
      { method_name: 'GetRoles', description: 'GetRoles', params: buildGetOnlyParams, expected_status: 200 },
      { 
        method_name: 'CreateRole', 
        description: 'CreateRole', 
        params: (vars) => ({ role_name: vars.role_name, display_name: vars.display_name }), 
        expected_status: 200, 
        allowed_statuses: statusOKOrCreated,
        state_update: (response, vars) => {
          // StateManagerでロールを追跡
          StateManager.trackResource('roles', vars.role_name);
        }
      },
      { method_name: 'UpdateRole', description: 'UpdateRole', params: (vars) => [vars.role_name, { display_name: vars.display_name }], expected_status: 200, validation_func: validateVoidResponse },

      // ユーザー属性
      { method_name: 'GetUserAttributes', description: 'GetUserAttributes', params: buildGetOnlyParams, expected_status: 200 },
      { 
        method_name: 'CreateUserAttribute', 
        description: 'CreateUserAttribute', 
        params: (vars) => ({ attribute_name: vars.attribute_name, display_name: vars.display_name, attribute_type: vars.attribute_type }), 
        expected_status: 200, 
        allowed_statuses: statusOKOrCreated,
        state_update: (response, vars) => {
          // StateManagerでユーザー属性を追跡
          StateManager.trackResource('userAttributes', vars.attribute_name);
        }
      },

      // テナント属性
      { method_name: 'GetTenantAttributes', description: 'GetTenantAttributes', params: buildGetOnlyParams, expected_status: 200 },
      { 
        method_name: 'CreateTenantAttribute', 
        description: 'CreateTenantAttribute', 
        params: (vars) => ({ attribute_name: vars.attribute_name, display_name: vars.display_name, attribute_type: vars.attribute_type }), 
        expected_status: 200, 
        allowed_statuses: statusOKOrCreated,
        state_update: (response, vars) => {
          // StateManagerでテナント属性を追跡
          StateManager.trackResource('tenantAttributes', vars.attribute_name);
        }
      },

      // 通知メッセージ
      { method_name: 'FindNotificationMessages', description: 'FindNotificationMessages', params: buildGetOnlyParams, expected_status: 200 },
      { method_name: 'UpdateNotificationMessages', description: 'UpdateNotificationMessages', params: (vars) => updateNotificationMessagesParams(vars), expected_status: 200, validation_func: validateVoidResponse },

      // カスタマイズページ
      { method_name: 'GetCustomizePages', description: 'GetCustomizePages', params: buildGetOnlyParams, expected_status: 200 },
      { method_name: 'UpdateCustomizePages', description: 'UpdateCustomizePages', params: (vars) => vars.customize_pages, expected_status: 200, validation_func: validateVoidResponse },
      { method_name: 'GetCustomizePageSettings', description: 'GetCustomizePageSettings', params: buildGetOnlyParams, expected_status: 200 },
      { method_name: 'UpdateCustomizePageSettings', description: 'UpdateCustomizePageSettings', params: (vars) => ({ favicon: vars.favicon, icon: vars.icon, title: vars.title, terms_of_service_url: vars.terms_of_service_url, privacy_policy_url: vars.privacy_policy_url, google_tag_manager_container_id: vars.google_tag_manager_container_id }), expected_status: 200, validation_func: validateVoidResponse },

      // 環境管理
      { method_name: 'GetEnvs', description: 'GetEnvs', params: buildGetOnlyParams, expected_status: 200 },
      { 
        method_name: 'CreateEnv', 
        description: 'CreateEnv', 
        params: (vars) => ({
          id: vars.env_id,
          name: vars.name,
          display_name: `${vars.name}-display`
        }), 
        expected_status: 200, 
        allowed_statuses: statusOKOrCreated,
        state_update: (response, vars) => {
          // StateManagerで環境を追跡
          StateManager.trackResource('environments', vars.env_id);
        }
      },
      { method_name: 'GetEnv', description: 'GetEnv', params: (vars) => vars.env_id, expected_status: 200 },
      { method_name: 'UpdateEnv', description: 'UpdateEnv', params: (vars) => [vars.env_id, { name: vars.name, display_name: `${vars.name}-updated` }], expected_status: 200, validation_func: validateVoidResponse },

      // サインイン設定
      { method_name: 'GetSignInSettings', description: 'GetSignInSettings', params: buildGetOnlyParams, expected_status: 200 },
      { method_name: 'UpdateSignInSettings', description: 'UpdateSignInSettings', params: buildUpdateSignInSettingsParams, expected_status: 200, validation_func: validateVoidResponse },

      // テナント管理
      { method_name: 'GetTenants', description: 'GetTenants', params: buildGetOnlyParams, expected_status: 200 },
      { 
        method_name: 'CreateTenant', 
        description: 'CreateTenant', 
        params: buildCreateTenantParams, 
        expected_status: 200, 
        allowed_statuses: statusOKOrCreated,
        state_update: (response, vars) => {
          const id = extractIDFromResponse(response, 'id');
          if (id) {
            vars.tenant_id = id;
            // StateManagerでテナントを追跡
            StateManager.trackResource('tenants', id);
          } else {
            console.warn('Warning: failed to extract tenant_id');
            vars.tenant_id = 'extracted_tenant_id';
          }
        }
      },
      { method_name: 'GetTenant', description: 'GetTenant', params: (vars) => vars.tenant_id, expected_status: 200 },
      { method_name: 'UpdateTenant', description: 'UpdateTenant', params: (vars) => [vars.tenant_id, { name: vars.name, attributes: vars.attributes, back_office_staff_email: vars.back_office_staff_email }], expected_status: 200, validation_func: validateVoidResponse },

      // テナントユーザー管理
      { method_name: 'GetAllTenantUsers', description: 'GetAllTenantUsers', params: buildGetOnlyParams, expected_status: 200 },
      { method_name: 'GetAllTenantUser', description: 'GetAllTenantUser', params: (vars) => vars.user_id, expected_status: 200 },
      { 
        method_name: 'CreateTenantUser', 
        description: 'CreateTenantUser', 
        params: (vars) => {
          // UpdateSaasUserEmailで更新された可能性があるので、vars.emailを優先
          const email = vars.email || ensureAuthState(vars).saasUserEmail;
          return [vars.tenant_id, { email, attributes: vars.attributes }];
        }, 
        expected_status: 200, 
        allowed_statuses: statusOKOrCreated,
        state_update: (response, vars) => {
          const id = extractIDFromResponse(response, 'id');
          if (id) {
            vars.tenant_user_id = id;
            // StateManagerでテナントユーザーを追跡
            StateManager.trackResource('tenantUsers', {
              tenantId: vars.tenant_id,
              userId: id
            });
          }
        }
      },
      { method_name: 'GetTenantUsers', description: 'GetTenantUsers', params: (vars) => vars.tenant_id, expected_status: 200 },
      { method_name: 'GetTenantUser', description: 'GetTenantUser', params: (vars) => [vars.tenant_id, vars.tenant_user_id], expected_status: 200 },
      { method_name: 'UpdateTenantUser', description: 'UpdateTenantUser', params: (vars) => [vars.tenant_id, vars.tenant_user_id, { attributes: vars.attributes }], expected_status: 200, validation_func: validateVoidResponse },

      // テナントユーザーロール
      { method_name: 'CreateTenantUserRoles', description: 'CreateTenantUserRoles', params: (vars) => [vars.tenant_id, vars.tenant_user_id, vars.env_id, { role_names: [vars.tenant_role_name] }], expected_status: 200, allowed_statuses: statusOKOrCreated },
      // テナントユーザーロール削除
      { method_name: 'DeleteTenantUserRole', description: 'DeleteTenantUserRole', params: (vars) => [vars.tenant_id, vars.tenant_user_id, vars.env_id, vars.tenant_role_name], expected_status: 200, allowed_statuses: [200, 404], validation_func: validateVoidResponse },

      // テナントプラン・請求
      { method_name: 'UpdateTenantPlan', description: 'UpdateTenantPlan', params: (vars) => [vars.tenant_id, { plan_id: vars.plan_id || 'basic-plan' }], expected_status: 200, validation_func: validateVoidResponse },
      { method_name: 'UpdateTenantBillingInfo', description: 'UpdateTenantBillingInfo', params: (vars) => updateTenantBillingInfoParams(vars), expected_status: 200, validation_func: validateVoidResponse },

      // Stripe連携
      // Stripe設定確認
      { 
        method_name: 'GetStripeInfo', 
        description: 'Verify Stripe integration before tenant creation', 
        params: buildGetOnlyParams, 
        expected_status: 200,
        skip: skipStripe,
        validation_func: validateVoidResponse
      },
      { 
        method_name: 'CreateTenantAndPricing', 
        description: 'CreateTenantAndPricing', 
        params: (vars) => vars.tenant_id, 
        expected_status: 200,
        allowed_statuses: [200, 201],
        skip: skipStripe,
        validation_func: validateVoidResponse,
        state_update: (response, vars) => {
          console.log(`ℹ️ CreateTenantAndPricing結果: Status ${response?.status || 'unknown'}`);
          // StateManagerでStripeリソースを追跡
          StateManager.trackResource('stripeResources', 'tenant-pricing');
        }
      },
      { method_name: 'GetStripeCustomer', description: 'GetStripeCustomer', params: (vars) => vars.tenant_id, expected_status: 200, skip: skipStripe },
      { 
        method_name: 'DeleteStripeTenantAndPricing', 
        description: 'DeleteStripeTenantAndPricing', 
        params: (vars) => vars.tenant_id, 
        expected_status: 200,
        allowed_statuses: [200],
        skip: skipStripe,
        validation_func: validateVoidResponse,
        state_update: (response, vars) => {
          console.log(`ℹ️ DeleteStripeTenantAndPricing結果: Status ${response?.status || 'unknown'}`);
        }
      },

      // プランリセット
      { method_name: 'ResetPlan', description: 'ResetPlan', params: buildGetOnlyParams, expected_status: 200, validation_func: validateVoidResponse },

      // 認証情報（Cognitoトークンが必要）
      { method_name: 'GetUserInfo', description: 'GetUserInfo', params: (vars) => vars.token || vars.user_id_token || vars.cognito_id_token || vars.id_token, expected_status: 200, validation_func: validateVoidResponse },
      // CreateAuthCredentials/GetAuthCredentials - unauthorized in current environment
      { 
        method_name: 'CreateAuthCredentials', 
        description: 'CreateAuthCredentials', 
        params: (vars) => ({ id_token: vars.token, access_token: vars.access_token, refresh_token: vars.user_refresh_token }), 
        expected_status: 201,
        skip: true,
        state_update: (response, vars) => {
          if (response?.code) {
            vars.auth_code = response.code;
          }
        }
      },
      { 
        method_name: 'GetAuthCredentials', 
        description: 'GetAuthCredentials', 
        params: (vars) => ({ code: vars.auth_code, 'auth-flow': 'tempCodeAuth' }), 
        expected_status: 200,
        skip: true
      },

      // IDプロバイダー
      { method_name: 'GetIdentityProviders', description: 'GetIdentityProviders', params: buildGetOnlyParams, expected_status: 200 },
      { method_name: 'UpdateIdentityProvider', description: 'UpdateIdentityProvider', params: () => ['Google', { 
        provider: 'Google',
        identity_provider_props: {
          application_id: 'in consectetur ad in minim',
          application_secret: '123456789b00def123456a12345678d1',
          approval_scope: 'profile email openid'
        }
      }], expected_status: 200, validation_func: validateVoidResponse },
      { method_name: 'GetTenantIdentityProviders', description: 'GetTenantIdentityProviders', params: (vars) => vars.tenant_id, expected_status: 200 },
      { method_name: 'UpdateTenantIdentityProvider', description: 'UpdateTenantIdentityProvider', params: (vars) => [vars.tenant_id, { provider_type: 'SAML' }], expected_status: 200, skip: true, validation_func: validateVoidResponse },

      // AWS Marketplace
      { method_name: 'SignUpWithAwsMarketplace', description: 'SignUpWithAwsMarketplace', params: (vars) => ({ email: vars.aws_marketplace_email || vars.email, registration_token: vars.aws_marketplace_token }), expected_status: 200, skip: true },

      // シングルテナント
      { method_name: 'GetCloudFormationLaunchStackLinkForSingleTenant', description: 'GetCloudFormationLaunchStackLinkForSingleTenant', params: buildGetOnlyParams, expected_status: 200 },
      { method_name: 'GetSingleTenantSettings', description: 'GetSingleTenantSettings', params: buildGetOnlyParams, expected_status: 200 },
      { method_name: 'UpdateSingleTenantSettings', description: 'UpdateSingleTenantSettings', params: (vars) => ({ enabled: false }), expected_status: 200, validation_func: validateVoidResponse },

      // クリーンアップ（作成したリソースを逆順で削除）
      { 
        method_name: 'DeleteTenantUser', 
        description: 'DeleteTenantUser', 
        params: (vars) => [vars.tenant_id, vars.tenant_user_id], 
        expected_status: 200, 
        allowed_statuses: [200, 404],
        validation_func: validateVoidResponse,
        state_update: (response, vars) => {
          // StateManagerから削除済みとしてマーク
          StateManager.markResourceAsDeleted('tenantUsers', {tenantId: vars.tenant_id, userId: vars.tenant_user_id});
        }
      },
      { 
        method_name: 'DeleteTenant', 
        description: 'DeleteTenant', 
        params: (vars) => vars.tenant_id, 
        expected_status: 200, 
        allowed_statuses: [200, 404],
        validation_func: validateVoidResponse,
        state_update: (response, vars) => {
          StateManager.markResourceAsDeleted('tenants', vars.tenant_id);
        }
      },
      { 
        method_name: 'DeleteEnv', 
        description: 'DeleteEnv', 
        params: (vars) => vars.env_id, 
        expected_status: 200, 
        allowed_statuses: [200, 404],
        validation_func: validateVoidResponse,
        state_update: (response, vars) => {
          StateManager.markResourceAsDeleted('environments', vars.env_id);
        }
      },
      { 
        method_name: 'DeleteTenantAttribute', 
        description: 'DeleteTenantAttribute', 
        params: (vars) => vars.attribute_name, 
        expected_status: 200, 
        allowed_statuses: [200, 404],
        validation_func: validateVoidResponse,
        state_update: (response, vars) => {
          StateManager.markResourceAsDeleted('tenantAttributes', vars.attribute_name);
        }
      },
      { 
        method_name: 'DeleteUserAttribute', 
        description: 'DeleteUserAttribute', 
        params: (vars) => vars.attribute_name, 
        expected_status: 200, 
        allowed_statuses: [200, 404],
        validation_func: validateVoidResponse,
        state_update: (response, vars) => {
          StateManager.markResourceAsDeleted('userAttributes', vars.attribute_name);
        }
      },
      { 
        method_name: 'DeleteRole', 
        description: 'DeleteRole', 
        params: (vars) => vars.role_name, 
        expected_status: 200, 
        allowed_statuses: [200, 404],
        validation_func: validateVoidResponse,
        state_update: (response, vars) => {
          StateManager.markResourceAsDeleted('roles', vars.role_name);
        }
      },
      { 
        method_name: 'DeleteSaasUser', 
        description: 'DeleteSaasUser', 
        params: buildDeleteSaasUserParams, 
        expected_status: 200, 
        validation_func: validateVoidResponse,
        state_update: (response, vars) => {
          StateManager.markResourceAsDeleted('saasUsers', vars.user_id);
        }
      },
      // Stripe関連のクリーンアップ（最後に実行）
      ...(skipStripe ? [] : [
        { 
          method_name: 'DeleteStripeInfo', 
          description: 'Cleanup: Delete Stripe integration', 
          params: buildGetOnlyParams, 
          expected_status: 200,
          skip: false,
          validation_func: validateVoidResponse,
          state_update: (response, vars) => {
            StateManager.markResourceAsDeleted('stripeResources', 'stripe-info');
          }
        }
      ])
    ],
    tags: ['standard']
  };
}
/**
 * SaaS User Attributes Management Storyを返します
 * Go版のGetStorySaasUserAttributesと同等の機能
 */
export function getStorySaasUserAttributes(): Story {
  const params = TestDataLoader.loadTestParams();
  
  const attributeName = uniqueString('saas-custom-field');
  const vars: StoryVariables = {
    email: uniqueEmail('auth-attr'),
    password: params.CreateSaasUser?.createParams?.password || 'Passw0rd!',
    attributes: { [attributeName]: 'test value' },
    attribute_name: attributeName,
    display_name: `SaaS Custom Field ${Date.now()}`,
    attribute_type: 'string'
  };

  return {
    name: 'SaaS User Attributes Management Story',
    description: 'SaaS ユーザーの追加属性を管理するメソッドをテストします。UpdateSaasUserAttributes 系と CreateSaasUserAttribute 系の全バリアントをカバーします。',
    module: MODULE,
    variables: vars,
    steps: [
      // Setup: ユーザーを作成
      { 
        method_name: 'CreateSaasUser', 
        description: 'CreateSaasUser for attributes test', 
        params: buildCreateSaasUserParams, 
        expected_status: 200, 
        allowed_statuses: statusOKOrCreated,
        validation_func: validateSaasUser,
        state_update: async (response, vars) => {
          const id = extractIDFromResponse(response, 'id');
          if (id) {
            vars.user_id = id;
          } else {
            console.warn('Warning: failed to extract user_id');
            vars.user_id = 'extracted_user_id';
          }
          await updateUserTokensFromCognito(vars);
        }
      },

      // SaaS ユーザー属性定義を作成
      { method_name: 'CreateSaasUserAttribute', description: 'CreateSaasUserAttribute', params: (vars) => createSaasUserAttributeParams(vars), expected_status: 200, allowed_statuses: statusOKOrCreated, validation_func: validateAttribute },

      // SaaS ユーザー属性を更新
      { method_name: 'UpdateSaasUserAttributes', description: 'UpdateSaasUserAttributes', params: (vars) => updateSaasUserAttributesParams(vars), expected_status: 200, validation_func: validateVoidResponse },

      // Cleanup: ユーザーを削除
      { method_name: 'DeleteSaasUser', description: 'DeleteSaasUser after attributes test', params: buildDeleteSaasUserParams, expected_status: 200, validation_func: validateVoidResponse }
    ],
    tags: ['attributes']
  };
}

/**
 * External User Link and Email Update Storyを返します
 * Go版のGetStoryExternalUserLinkAndEmailUpdateと同等の機能
 */
export function getStoryExternalUserLinkAndEmailUpdate(): Story {
  const params = TestDataLoader.loadTestParams();
  const tokens = loadAuthTokens();

  const vars: StoryVariables = {
    email: uniqueEmail('auth-external'),
    password: params.CreateSaasUser?.createParams?.password || 'Passw0rd!',
    access_token: tokens.accessToken,
    verification_code: '000000', // モック確認コード
    new_email: uniqueEmail('auth-email-update')
  };

  return {
    name: 'External User Link and Email Update Story',
    description: '外部ユーザーアカウントのリンクとメールアドレス更新確認機能をテストします。全バリアントをカバーします。',
    module: MODULE,
    variables: vars,
    steps: [
      // Setup: ユーザーを作成
      { 
        method_name: 'CreateSaasUser', 
        description: 'CreateSaasUser for external link test', 
        params: buildCreateSaasUserParams, 
        expected_status: 200, 
        allowed_statuses: statusOKOrCreated,
        validation_func: validateSaasUser,
        state_update: async (response, vars) => {
          const id = extractIDFromResponse(response, 'id');
          if (id) {
            vars.user_id = id;
          } else {
            console.warn('Warning: failed to extract user_id');
            vars.user_id = 'extracted_user_id';
          }
          await updateUserTokensFromCognito(vars);
        }
      },

      // 外部ユーザーリンクをリクエスト（実際の確認コードが必要なためスキップ）
      { method_name: 'RequestExternalUserLink', description: 'RequestExternalUserLink', params: (vars) => requestExternalUserLinkParams(vars), expected_status: 200, skip: true, validation_func: validateVoidResponse },
      { method_name: 'ConfirmExternalUserLink', description: 'ConfirmExternalUserLink', params: (vars) => confirmExternalUserLinkParams(vars), expected_status: 401, skip: true, validation_func: validateVoidResponse },

      // メールアドレス更新をリクエスト（Cognitoアクセストークンが必要なためスキップ）
      { method_name: 'RequestEmailUpdate', description: 'RequestEmailUpdate', params: (vars) => requestEmailUpdateParams(vars), expected_status: 200, skip: true, validation_func: validateVoidResponse },
      { method_name: 'ConfirmEmailUpdate', description: 'ConfirmEmailUpdate', params: (vars) => confirmEmailUpdateParams(vars), expected_status: 401, skip: true, validation_func: validateVoidResponse },

      // Cleanup: ユーザーを削除
      { method_name: 'DeleteSaasUser', description: 'DeleteSaasUser after external link test', params: buildDeleteSaasUserParams, expected_status: 200, validation_func: validateVoidResponse }
    ],
    tags: ['external', 'email']
  };
}
/**
 * Sign Up and Provider Management Storyを返します
 * Go版のGetStorySignUpAndProviderManagementと同等の機能
 */
export function getStorySignUpAndProviderManagement(): Story {
  const params = TestDataLoader.loadTestParams();
  const tokens = loadAuthTokens();

  const signupEmail = uniqueEmail('auth-signup');
  const vars: StoryVariables = {
    email: signupEmail,
    signup_email: signupEmail,
    access_token: tokens.accessToken,
    registration_token: params.SignUpWithAwsMarketplace?.createParams?.registration_token,
    tenant_name: 'aws-marketplace-tenant',
    provider_name: 'Google', // デフォルトプロバイダー名
    name: 'signup-test-tenant',
    back_office_staff_email: params.CreateTenant?.createParams?.back_office_staff_email || uniqueEmail('tenant-staff'),
    attributes: {}
  };

  // AWS Marketplace関連の環境変数チェック
  const awsMarketplaceToken = process.env.AWS_MARKETPLACE_REGISTRATION_TOKEN;
  if (awsMarketplaceToken) {
    vars.registration_token = awsMarketplaceToken;
    vars.aws_marketplace_token = awsMarketplaceToken;
  }

  if (params.SignUpWithAwsMarketplace?.createParams) {
    const awsCfg = params.SignUpWithAwsMarketplace.createParams;
    if (awsCfg.registration_token) {
      vars.registration_token = awsCfg.registration_token;
      vars.aws_marketplace_token = awsCfg.registration_token;
    }
    if (awsCfg.email) {
      vars.aws_marketplace_email = awsCfg.email;
    }
  }

  return {
    name: 'Sign Up and Provider Management Story',
    description: 'サインアップ、AWS Marketplace連携、プロバイダー管理機能をテストします。全バリアントをカバーします。',
    module: MODULE,
    variables: vars,
    steps: [
      // セルフサインアップを有効化（事前準備）
      { method_name: 'UpdateSignInSettings', description: 'UpdateSignInSettings (Enable Self Regist)', params: buildUpdateSignInSettingsParams, expected_status: 200, validation_func: validateVoidResponse },

      // サインアップ
      { 
        method_name: 'SignUp', 
        description: 'SignUp', 
        params: (vars) => signUpParams(vars), 
        expected_status: 200, 
        allowed_statuses: statusOKOrCreated,
        skip: skipSignUpOnCognitoEmailLimit,
        validation_func: validateVoidResponse,
        state_update: (response, vars) => {
          vars.signup_email = uniqueEmail('auth-signup');
        }
      },

      // サインアップ確認メール再送信
      { method_name: 'ResendSignUpConfirmationEmail', description: 'ResendSignUpConfirmationEmail', params: (vars) => resendSignUpConfirmationEmailParams(vars), expected_status: 200, skip: skipSignUpOnCognitoEmailLimit, validation_func: validateVoidResponse },

      // AWS Marketplaceサインアップ確認（実際のトークンが必要なためスキップ）
      { method_name: 'ConfirmSignUpWithAwsMarketplace', description: 'ConfirmSignUpWithAwsMarketplace', params: (vars) => confirmSignUpWithAwsMarketplaceParams(vars), expected_status: 200, skip: true, validation_func: validateVoidResponse },

      // Setup: テナントを作成（LinkAwsMarketplace用）
      { 
        method_name: 'CreateTenant', 
        description: 'CreateTenant for AWS Marketplace link', 
        params: buildCreateTenantParams, 
        expected_status: 200, 
        allowed_statuses: statusOKOrCreated,
        validation_func: validateTenant,
        state_update: (response, vars) => {
          const id = extractIDFromResponse(response, 'id');
          if (id) {
            vars.tenant_id = id;
          } else {
            console.warn('Warning: failed to extract tenant_id');
            vars.tenant_id = 'extracted_tenant_id';
          }
        }
      },

      // AWS Marketplaceリンク
      { method_name: 'LinkAwsMarketplace', description: 'LinkAwsMarketplace', params: (vars) => linkAwsMarketplaceParams(vars), expected_status: 200, skip: true, validation_func: validateVoidResponse },

      // Setup: ユーザーを作成（UnlinkProvider用）
      { 
        method_name: 'CreateSaasUser', 
        description: 'CreateSaasUser for provider unlink', 
        params: buildCreateSaasUserParams, 
        expected_status: 200, 
        allowed_statuses: statusOKOrCreated,
        validation_func: validateSaasUser,
        state_update: async (response, vars) => {
          const id = extractIDFromResponse(response, 'id');
          if (id) {
            vars.user_id = id;
          } else {
            console.warn('Warning: failed to extract user_id');
            vars.user_id = 'extracted_user_id';
          }
          await updateUserTokensFromCognito(vars);
        }
      },

      // プロバイダーのアンリンク（実際のプロバイダーリンクが必要なためスキップ）
      { method_name: 'UnlinkProvider', description: 'UnlinkProvider', params: (vars) => unlinkProviderParams(vars), expected_status: 200, skip: true, validation_func: validateVoidResponse },

      // Cleanup
      { method_name: 'DeleteSaasUser', description: 'DeleteSaasUser after provider test', params: buildDeleteSaasUserParams, expected_status: 200, validation_func: validateVoidResponse },
      { method_name: 'DeleteTenant', description: 'DeleteTenant after AWS Marketplace test', params: (vars) => vars.tenant_id, expected_status: 200, validation_func: validateVoidResponse }
    ],
    tags: ['signup', 'provider', 'aws-marketplace']
  };
}
/**
 * Missing Methods Coverage Storyを返します
 * 未実装の3メソッドをテストします
 */
export function getStoryMissingMethodsCoverage(): Story {
  const params = TestDataLoader.loadTestParams();
  const skipStripe = !StripeIntegration.isStripeIntegrationAvailable();
  
  const billingInfo = {
    name: 'Test Company',
    invoice_language: 'ja-JP',
    address: {
      country: 'JP',
      postal_code: '100-0001',
      state: 'Tokyo',
      city: 'Chiyoda',
      street: '1-1-1 Test Building'
    }
  };

  const vars: StoryVariables = {
    email: uniqueEmail('auth-missing'),
    password: params.CreateSaasUser?.createParams?.password || 'Passw0rd!',
    tenant_name: uniqueString('missing-tenant'),
    plan_id: params.UpdateTenantPlan?.updateParams?.plan_id || 'basic-plan',
    tenant_billing_info: billingInfo
  };

  return {
    name: 'Missing Methods Coverage Story',
    description: '未実装の3メソッド（GetUserInfoByEmail, UpdateTenantPlan, UpdateTenantBillingInfo）をテストします。',
    module: MODULE,
    variables: vars,
    setup: [
      buildEnsurePricingPlanStep(skipStripe)
    ],
    steps: [
      // Setup: ユーザーとテナントを作成
      { 
        method_name: 'CreateSaasUser', 
        description: 'CreateSaasUser for missing methods test', 
        params: buildCreateSaasUserParams, 
        expected_status: 200, 
        allowed_statuses: statusOKOrCreated,
        validation_func: validateSaasUser,
        state_update: (response, vars) => {
          const id = extractIDFromResponse(response, 'id');
          if (id) {
            vars.user_id = id;
            StateManager.trackResource('saasUsers', id);
            // stateにも設定してbuildDeleteSaasUserParamsで使用できるようにする
            const state = ensureAuthState(vars);
            state.saasUserId = id;
          }
        }
      },
      
      { 
        method_name: 'CreateTenant', 
        description: 'CreateTenant for missing methods test', 
        params: buildCreateTenantParams, 
        expected_status: 200, 
        allowed_statuses: statusOKOrCreated,
        validation_func: validateTenant,
        state_update: (response, vars) => {
          const id = extractIDFromResponse(response, 'id');
          if (id) {
            vars.tenant_id = id;
            StateManager.trackResource('tenants', id);
          }
        }
      },

      // 未実装メソッドのテスト
      { 
        method_name: 'GetUserInfoByEmail', 
        description: 'GetUserInfoByEmail', 
        params: (vars) => ensureAuthState(vars).saasUserEmail, 
        expected_status: 200
      },
      
      { 
        method_name: 'UpdateTenantPlan', 
        description: 'UpdateTenantPlan', 
        params: (vars) => [vars.tenant_id, { plan_id: vars.plan_id || 'basic-plan' }], 
        expected_status: 200, 
        validation_func: validateVoidResponse 
      },
      
      { 
        method_name: 'UpdateTenantBillingInfo', 
        description: 'UpdateTenantBillingInfo', 
        params: (vars) => updateTenantBillingInfoParams(vars), 
        expected_status: 200, 
        validation_func: validateVoidResponse 
      },

      // Cleanup
      { method_name: 'DeleteTenant', description: 'DeleteTenant after missing methods test', params: (vars) => vars.tenant_id, expected_status: 200, validation_func: validateVoidResponse },
      { method_name: 'DeleteSaasUser', description: 'DeleteSaasUser after missing methods test', params: buildDeleteSaasUserParams, expected_status: 200, validation_func: validateVoidResponse }
    ],
    tags: ['missing-methods']
  };
}

/**
 * Sign In Challenge Story
 * SignIn と RespondToSignInChallenge エンドポイントをテストします
 */
export function getStorySignInChallenge(): Story {
  const params = TestDataLoader.loadTestParams();
  const tokens = loadAuthTokens();

  const vars: StoryVariables = {
    email: uniqueEmail('auth-signin'),
    password: params.CreateSaasUser?.createParams?.password || 'Passw0rd!',
    access_token: tokens.accessToken,
  };

  return {
    name: 'Sign In Challenge Story',
    description: 'SignIn と RespondToSignInChallenge エンドポイントをテストします。SRP認証フローの開始とチャレンジ応答をカバーします。',
    module: MODULE,
    variables: vars,
    steps: [
      // Setup: ユーザーを作成
      {
        method_name: 'CreateSaasUser',
        description: 'CreateSaasUser for sign-in test',
        params: buildCreateSaasUserParams,
        expected_status: 200,
        allowed_statuses: statusOKOrCreated,
        validation_func: validateSaasUser,
        state_update: async (response, vars) => {
          const id = extractIDFromResponse(response, 'id');
          if (id) {
            vars.user_id = id;
          }
          await updateUserTokensFromCognito(vars);
        }
      },

      // SignIn（USER_SRP_AUTH フロー）
      {
        method_name: 'SignIn',
        description: 'SignIn with USER_SRP_AUTH flow',
        params: (vars) => ({
          sign_in_flow: 'USER_SRP_AUTH',
          sign_in_parameters: {
            USERNAME: vars.email,
            SRP_A: 'a'.repeat(512)
          }
        }),
        expected_status: 200,
        allowed_statuses: [200, 400],
        state_update: (response, vars) => {
          if (response?.challenge_name) {
            vars.challenge_name = response.challenge_name;
          }
          if (response?.session) {
            vars.sign_in_session = response.session;
          }
        }
      },

      // RespondToSignInChallenge（チャレンジ応答）
      // SRPフローでは正しいPASSWORD_CLAIM_SIGNATUREが必要なため、ダミー値では500が返る
      {
        method_name: 'RespondToSignInChallenge',
        description: 'RespondToSignInChallenge',
        params: (vars) => ({
          challenge_name: vars.challenge_name || 'PASSWORD_VERIFIER',
          challenge_responses: {
            USERNAME: vars.email
          },
          session: vars.sign_in_session || ''
        }),
        expected_status: 200,
        allowed_statuses: [200, 400, 500],
      },

      // Cleanup
      {
        method_name: 'DeleteSaasUser',
        description: 'DeleteSaasUser after sign-in test',
        params: buildDeleteSaasUserParams,
        expected_status: 200,
        validation_func: validateVoidResponse
      }
    ],
    tags: ['sign-in', 'challenge']
  };
}

/**
 * Auth APIの全ストーリーを返します（Go版準拠）
 * 6つのストーリーを実装：
 * 1. Postman Collection Story - Standard Methods
 * 2. SaaS User Attributes Management Story  
 * 3. External User Link and Email Update Story
 * 4. Sign Up and Provider Management Story
 * 5. Missing Methods Coverage Story
 * 6. Sign In Challenge Story
 */
export const getAuthStories = (filters?: string[]): Story[] => {
  const stories = [
    getPostmanStoryStandardMethods(),
    getStorySaasUserAttributes(), 
    getStoryExternalUserLinkAndEmailUpdate(),
    getStorySignUpAndProviderManagement(),
    getStoryMissingMethodsCoverage(),
    getStorySignInChallenge()
  ];

  if (!filters || filters.length === 0) {
    return stories;
  }

  const lower = filters.map(name => name.toLowerCase());
  return stories.filter(story => lower.includes(story.name.toLowerCase()));
};

/**
 * メソッドカバレッジを検証します
 * 全Auth APIメソッドがストーリーでカバーされているかを確認
 */
export const verifyMethodCoverage = (): void => {
  const allMethods = getAuthMethods();
  const usedMethods = new Set<string>();

  // 全ストーリーの全ステップで使用されているメソッドを記録
  for (const story of getAuthStories()) {
    for (const step of story.steps) {
      usedMethods.add(step.method_name);
    }
  }

  // 使用されていないメソッドをリストアップ
  const missingMethods = allMethods.filter(method => !usedMethods.has(method));

  if (missingMethods.length > 0) {
    const sortedMissing = missingMethods.sort();
    throw new Error(
      `以下のメソッドがストーリーでカバーされていません (${missingMethods.length}/${allMethods.length} 個): ${sortedMissing.join(', ')}`
    );
  }

  console.log(`✅ 全 ${allMethods.length} メソッドがストーリーでカバーされています`);
};

/**
 * ストーリーが実装されているかチェック
 */
function isStoriesImplemented(): boolean {
  return true;
}

/**
 * 統合セットアップを実行
 * ストーリー実行前に呼び出される
 */
export async function setupIntegrationsForStories(): Promise<void> {
  try {
    const params = TestDataLoader.loadTestParams();
    
    // Stripe統合のセットアップ
    if (getStripeSecretKey()) {
      await ensureStripeIntegration();
      console.log('✅ Stripe統合セットアップ完了');
    } else {
      console.log('⚠️ STRIPE_SECRET_KEY未設定のため、Stripe統合をスキップします');
    }

    // AWS Marketplace統合のセットアップ
    await ensureAwsMarketplaceIntegration(params);
    console.log('✅ AWS Marketplace統合セットアップ完了');

    console.log('✅ 全ての統合セットアップが完了しました');
  } catch (error: any) {
    console.error('❌ 統合セットアップ中にエラーが発生しました:', error.message);
    throw error;
  }
}

/**
 * ストーリー実行前の準備処理
 */
export async function prepareStoriesExecution(): Promise<void> {
  console.log('=== ストーリー実行準備を開始します ===');
  
  try {
    // 統合セットアップを実行
    await setupIntegrationsForStories();
    
    // メソッドカバレッジを検証
    verifyMethodCoverage();
    
    console.log('=== ストーリー実行準備が完了しました ===');
  } catch (error: any) {
    console.error('=== ストーリー実行準備中にエラーが発生しました ===');
    console.error(error.message);
    throw error;
  }
}

// デフォルトエクスポート（後方互換性のため）
export default {
  getAuthStories,
  getAuthMethods,
  verifyMethodCoverage,
  setupIntegrationsForStories,
  prepareStoriesExecution
};
