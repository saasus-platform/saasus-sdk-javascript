import { AxiosInstance, AxiosResponse } from 'axios';
import {
    Attribute,
    AuthInfo,
    AuthInfoApi,
    BasicInfo,
    BasicInfoApi,
    Configuration,
    CreateSaasUserParam,
    CreateTenantUserParam,
    CreateTenantUserRolesParam,
    CustomizePageSettings,
    CustomizePages,
    Env,
    EnvApi,
    Envs,
    RespondToSignInChallengeParam,
    RespondToSignInChallengeResult,
    Role,
    RoleApi,
    Roles,
    SaasUser,
    SaasUserApi,
    SaasUsers,
    SignInParam,
    SignInResult,
    SignInSettings,
    SingleTenantApi,
    Tenant,
    TenantApi,
    TenantAttributeApi,
    TenantAttributes,
    TenantDetail,
    TenantProps,
    TenantUserApi,
    Tenants,
    UpdateCustomizePageSettingsParam,
    UpdateCustomizePagesParam,
    UpdateEnvParam,
    UpdateRoleParam,
    UpdateSignInSettingsParam,
    UpdateTenantUserParam,
    User,
    UserAttributeApi,
    UserAttributes,
    UserInfoApi,
    Users
} from '../../../src/generated/Auth';
import getAxiosInstance from '../../../src/modules/interceptor';
import { BillingClient } from '../../../src/modules/billing-client';
import { PricingClient } from '../../../src/modules/pricing-client';
import { CognitoTokenProvider } from './cognito/token-provider';

export class AuthE2EClient {
  private basicInfoApi: BasicInfoApi;
  private authInfoApi: AuthInfoApi;
  private saasUserApi: SaasUserApi;
  private roleApi: RoleApi;
  private userAttributeApi: UserAttributeApi;
  private tenantAttributeApi: TenantAttributeApi;
  private envApi: EnvApi;
  private tenantApi: TenantApi;
  private tenantUserApi: TenantUserApi;
  private userInfoApi: UserInfoApi;
  private singleTenantApi: SingleTenantApi;
  private billingClient: BillingClient;
  private pricingClient: PricingClient;
  private axios: AxiosInstance;
  private basePath: string;
  private stripeBasePath: string;

  constructor(referer = '', xSaaSusReferer = '') {
    const baseUrl = process.env.SAASUS_API_URL_BASE || 'https://api.saasus.io';
    this.basePath = `${baseUrl}/v1/auth`;
    this.stripeBasePath = `${baseUrl}/v1/stripe`;

    this.axios = getAxiosInstance('', referer, xSaaSusReferer);
    this.basicInfoApi = new BasicInfoApi(undefined, this.basePath, this.axios);
    this.authInfoApi = new AuthInfoApi(undefined, this.basePath, this.axios);
    this.saasUserApi = new SaasUserApi(undefined, this.basePath, this.axios);
    this.roleApi = new RoleApi(undefined, this.basePath, this.axios);
    this.userAttributeApi = new UserAttributeApi(undefined, this.basePath, this.axios);
    this.tenantAttributeApi = new TenantAttributeApi(undefined, this.basePath, this.axios);
    this.envApi = new EnvApi(undefined, this.basePath, this.axios);
    this.tenantApi = new TenantApi(undefined, this.basePath, this.axios);
    this.tenantUserApi = new TenantUserApi(undefined, this.basePath, this.axios);
    this.userInfoApi = new UserInfoApi(undefined, this.basePath, this.axios);
    this.singleTenantApi = new SingleTenantApi(undefined, this.basePath, this.axios);
    this.billingClient = new BillingClient(referer, xSaaSusReferer);
    this.pricingClient = new PricingClient(referer, xSaaSusReferer);
  }

  private getStripeSecretKey(): string | null {
    const key = process.env.STRIPE_SECRET_KEY;
    if (typeof key !== 'string') {
      return null;
    }
    const trimmed = key.trim();
    return trimmed.length > 0 ? trimmed : null;
  }

  private async resolveUserInfoToken(_token?: string): Promise<string> {
    const username = process.env.E2E_COGNITO_USERNAME;
    const password = process.env.E2E_COGNITO_PASSWORD;
    if (!username || !password) {
      throw new Error(
        'GetUserInfo requires Cognito credentials via AWS SDK. Set E2E_COGNITO_USER_POOL_ID, E2E_COGNITO_CLIENT_ID, E2E_COGNITO_USERNAME, E2E_COGNITO_PASSWORD, and AWS credentials.'
      );
    }

    try {
      const tokens = await CognitoTokenProvider.obtainUserTokens(username, password);
      if (tokens?.idToken) {
        return tokens.idToken;
      }
    } catch (error: any) {
      throw new Error(`Failed to obtain Cognito ID token for GetUserInfo: ${error?.message || String(error)}`);
    }

    throw new Error('Failed to resolve ID token for GetUserInfo.');
  }

  private async delay(ms: number): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, ms));
  }

  async GetBasicInfo(): Promise<AxiosResponse<BasicInfo>> {
    return this.basicInfoApi.getBasicInfo();
  }

  async GetAuthInfo(): Promise<AxiosResponse<AuthInfo>> {
    return this.authInfoApi.getAuthInfo();
  }

  async GetCustomizePages(): Promise<AxiosResponse<CustomizePages>> {
    return this.basicInfoApi.getCustomizePages();
  }

  async UpdateCustomizePages(
    payload?: UpdateCustomizePagesParam
  ): Promise<AxiosResponse<void>> {
    const defaultPayload = payload || {
      sign_in_page: {
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
        background_color: "#ffffff",
        button_color: "#007bff",
        button_text_color: "#ffffff"
      }
    };
    return this.basicInfoApi.updateCustomizePages(defaultPayload);
  }

  async GetCustomizePageSettings(): Promise<AxiosResponse<CustomizePageSettings>> {
    return this.basicInfoApi.getCustomizePageSettings();
  }

  async UpdateCustomizePageSettings(
    payload: UpdateCustomizePageSettingsParam
  ): Promise<AxiosResponse<void>> {
    return this.basicInfoApi.updateCustomizePageSettings(payload);
  }

  async GetSaasUsers(): Promise<AxiosResponse<SaasUsers>> {
    return this.saasUserApi.getSaasUsers();
  }

  async CreateSaasUser(payload: CreateSaasUserParam): Promise<AxiosResponse<SaasUser>> {
    return this.saasUserApi.createSaasUser(payload);
  }

  async GetSaasUser(userId?: string): Promise<AxiosResponse<SaasUser>> {
    // userIdが指定されていない場合は、GetSaasUsersから最初のユーザーを取得
    if (!userId) {
      const usersResponse = await this.GetSaasUsers();
      const users = usersResponse.data.users;
      if (users && users.length > 0) {
        userId = users[0].id;
      } else {
        throw new Error('No SaaS users available');
      }
    }
    return this.saasUserApi.getSaasUser(userId);
  }

  async DeleteSaasUser(userId: string): Promise<AxiosResponse<void>> {
    return this.saasUserApi.deleteSaasUser(userId);
  }

  async GetRoles(): Promise<AxiosResponse<Roles>> {
    return this.roleApi.getRoles();
  }

  async CreateRole(payload?: any): Promise<AxiosResponse<Role>> {
    const defaultPayload = payload || {
      role_name: `role-${Date.now()}`,
      display_name: `Role ${Date.now()}`
    };
    return this.roleApi.createRole(defaultPayload);
  }

  async DeleteRole(roleName: string): Promise<AxiosResponse<void>> {
    return this.roleApi.deleteRole(roleName);
  }

  async UpdateRole(roleName: string, payload?: UpdateRoleParam): Promise<AxiosResponse<void>> {
    return this.roleApi.updateRole(roleName, payload);
  }

  async GetUserAttributes(): Promise<AxiosResponse<UserAttributes>> {
    return this.userAttributeApi.getUserAttributes();
  }

  async CreateUserAttribute(payload?: Attribute): Promise<AxiosResponse<Attribute>> {
    const defaultPayload = payload || {
      attribute_name: `user-attr-${Date.now()}`,
      display_name: `User Attribute ${Date.now()}`,
      attribute_type: 'string'
    };
    return this.userAttributeApi.createUserAttribute(defaultPayload);
  }

  async DeleteUserAttribute(attributeName: string): Promise<AxiosResponse<void>> {
    return this.userAttributeApi.deleteUserAttribute(attributeName);
  }

  async GetTenantAttributes(): Promise<AxiosResponse<TenantAttributes>> {
    return this.tenantAttributeApi.getTenantAttributes();
  }

  async CreateTenantAttribute(payload?: Attribute): Promise<AxiosResponse<Attribute>> {
    const defaultPayload = payload || {
      attribute_name: `tenant-attr-${Date.now()}`,
      display_name: `Tenant Attribute ${Date.now()}`,
      attribute_type: 'string'
    };
    return this.tenantAttributeApi.createTenantAttribute(defaultPayload);
  }

  async DeleteTenantAttribute(attributeName: string): Promise<AxiosResponse<void>> {
    return this.tenantAttributeApi.deleteTenantAttribute(attributeName);
  }

  async GetEnvs(): Promise<AxiosResponse<Envs>> {
    return this.envApi.getEnvs();
  }

  async CreateEnv(payload?: Env): Promise<AxiosResponse<Env>> {
    const defaultPayload = payload || {
      id: Math.floor(Math.random() * 1000000),
      name: `env-${Date.now()}`,
      display_name: `Environment ${Date.now()}`
    };
    return this.envApi.createEnv(defaultPayload);
  }

  async GetEnv(envId?: number): Promise<AxiosResponse<Env>> {
    if (!envId) {
      const envsResponse = await this.GetEnvs();
      const envs = envsResponse.data.envs;
      if (envs && envs.length > 0) {
        envId = envs[0].id;
      } else {
        throw new Error('No environments available');
      }
    }
    return this.envApi.getEnv(envId);
  }

  async UpdateEnv(envId?: number, payload?: UpdateEnvParam): Promise<AxiosResponse<void>> {
    if (!envId) {
      const envsResponse = await this.GetEnvs();
      const envs = envsResponse.data.envs;
      if (envs && envs.length > 0) {
        envId = envs[0].id;
      } else {
        throw new Error('No environments available');
      }
    }
    const defaultPayload = payload || {
      name: `updated-env-${Date.now()}`,
      display_name: `Updated Environment ${Date.now()}`
    };
    return this.envApi.updateEnv(envId, defaultPayload);
  }

  async DeleteEnv(envId: number): Promise<AxiosResponse<void>> {
    return this.envApi.deleteEnv(envId);
  }

  async GetSignInSettings(): Promise<AxiosResponse<SignInSettings>> {
    return this.authInfoApi.getSignInSettings();
  }

  async UpdateSignInSettings(
    payload: UpdateSignInSettingsParam
  ): Promise<AxiosResponse<void>> {
    return this.authInfoApi.updateSignInSettings(payload);
  }

  async GetTenants(): Promise<AxiosResponse<Tenants>> {
    return this.tenantApi.getTenants();
  }

  async CreateTenant(payload?: TenantProps): Promise<AxiosResponse<Tenant>> {
    const defaultPayload = payload || {
      name: `tenant-${Date.now()}`,
      attributes: {},
      back_office_staff_email: `staff-${Date.now()}@example.com`
    };
    return this.tenantApi.createTenant(defaultPayload);
  }

  async GetTenant(tenantId: string): Promise<AxiosResponse<TenantDetail>> {
    return this.tenantApi.getTenant(tenantId);
  }

  async UpdateTenant(tenantId: string, payload: TenantProps): Promise<AxiosResponse<void>> {
    return this.tenantApi.updateTenant(tenantId, payload);
  }

  async DeleteTenant(tenantId: string): Promise<AxiosResponse<void>> {
    return this.tenantApi.deleteTenant(tenantId);
  }

  async CreateTenantUser(
    tenantId?: string,
    payload?: CreateTenantUserParam
  ): Promise<AxiosResponse<User>> {
    if (!tenantId) {
      const tenantsResponse = await this.GetTenants();
      const tenants = tenantsResponse.data.tenants;
      if (tenants && tenants.length > 0) {
        tenantId = tenants[0].id;
      } else {
        throw new Error('No tenants available');
      }
    }
    const defaultPayload = payload || {
      email: `tenant-user-${Date.now()}@example.com`,
      attributes: {}
    };
    return this.tenantUserApi.createTenantUser(tenantId, defaultPayload);
  }

  async GetTenantUsers(tenantId: string): Promise<AxiosResponse<Users>> {
    return this.tenantUserApi.getTenantUsers(tenantId);
  }

  async GetTenantUser(tenantId: string, userId: string): Promise<AxiosResponse<User>> {
    return this.tenantUserApi.getTenantUser(tenantId, userId);
  }

  async UpdateTenantUser(
    tenantId: string,
    userId: string,
    payload: UpdateTenantUserParam
  ): Promise<AxiosResponse<void>> {
    return this.tenantUserApi.updateTenantUser(tenantId, userId, payload);
  }

  async CreateTenantUserRoles(
    tenantId: string,
    userId: string,
    envId: number,
    payload: CreateTenantUserRolesParam
  ): Promise<AxiosResponse<void>> {
    const tenantUser = await this.GetTenantUser(tenantId, userId);
    const existingEnv = tenantUser.data?.envs?.find(env => env.id === envId);
    const existingRoleNames = existingEnv?.roles?.map(role => role.role_name) || [];
    const targetRoles = payload.role_names || [];
    const missingRoles = targetRoles.filter(role => !existingRoleNames.includes(role));

    if (missingRoles.length === 0) {
      return {
        data: undefined,
        status: 200,
        statusText: 'OK',
        headers: tenantUser.headers,
        config: tenantUser.config,
        request: tenantUser.request
      } as AxiosResponse<void>;
    }

    return this.tenantUserApi.createTenantUserRoles(tenantId, userId, envId, payload);
  }

  async DeleteTenantUserRole(
    tenantId: string,
    userId: string,
    envId: number,
    roleName: string
  ): Promise<AxiosResponse<void>> {
    return this.tenantUserApi.deleteTenantUserRole(tenantId, userId, envId, roleName);
  }

  async DeleteTenantUser(tenantId: string, userId: string): Promise<AxiosResponse<void>> {
    return this.tenantUserApi.deleteTenantUser(tenantId, userId);
  }

  // MFA関連メソッド
  async CreateSecretCode(userId?: string, payload?: any): Promise<AxiosResponse<any>> {
    if (!userId) {
      const usersResponse = await this.GetSaasUsers();
      const users = usersResponse.data.users;
      if (users && users.length > 0) {
        userId = users[0].id;
      } else {
        throw new Error('No SaaS users available');
      }
    }
    // MFAが有効でない場合のエラーを回避するため、まずMFAを有効化
    try {
      await this.axios.put(`${this.basePath}/users/${userId}/mfa/preference`, {
        software_token_mfa_enabled: true
      });
    } catch (e) {
      // MFA設定エラーは無視
    }
    
    const defaultPayload = payload || {};
    return this.axios.post(`${this.basePath}/users/${userId}/mfa/software-token`, defaultPayload);
  }

  async UpdateSoftwareToken(userId?: string, payload?: any): Promise<AxiosResponse<void>> {
    if (!userId) {
      const usersResponse = await this.GetSaasUsers();
      const users = usersResponse.data.users;
      if (users && users.length > 0) {
        userId = users[0].id;
      } else {
        throw new Error('No SaaS users available');
      }
    }
    const defaultPayload = payload || { access_token: 'dummy-token', verification_code: '000000' };
    return this.saasUserApi.updateSoftwareToken(userId, defaultPayload);
  }

  async UpdateUserMfaPreference(userId?: string, payload?: any): Promise<AxiosResponse<void>> {
    if (!userId) {
      const usersResponse = await this.GetSaasUsers();
      const users = usersResponse.data.users;
      if (users && users.length > 0) {
        userId = users[0].id;
      } else {
        throw new Error('No SaaS users available');
      }
    }
    const defaultPayload = payload || { enabled: false };
    return this.saasUserApi.updateUserMfaPreference(userId, defaultPayload);
  }

  async GetUserMfaPreference(userId: string): Promise<AxiosResponse<any>> {
    return this.axios.get(`${this.basePath}/users/${userId}/mfa/preference`);
  }

  // 認証情報管理メソッド
  async CreateAuthCredentials(payload: any): Promise<AxiosResponse<any>> {
    return this.axios.post(`${this.basePath}/credentials`, payload);
  }

  async GetAuthCredentials(params: any): Promise<AxiosResponse<any>> {
    const queryParams = new URLSearchParams();
    if (params.code) queryParams.append('code', params.code);
    if (params['refresh-token']) queryParams.append('refresh-token', params['refresh-token']);
    if (params['auth-flow']) queryParams.append('auth-flow', params['auth-flow']);
    
    return this.axios.get(`${this.basePath}/credentials?${queryParams.toString()}`);
  }

  async GetUserInfo(token?: string): Promise<AxiosResponse<any>> {
    const resolvedToken = await this.resolveUserInfoToken(token);
    return this.userInfoApi.getUserInfo(resolvedToken);
  }

  // Stripe統合メソッド (Billing API)
  async GetStripeInfo(): Promise<AxiosResponse<any>> {
    try {
      return await this.billingClient.stripeApi.getStripeInfo();
    } catch (error: any) {
      const status = error?.response?.status;
      const message = String(error?.response?.data?.message || '').toLowerCase();
      if (status === 404 || (status === 400 && message.includes('stripe key is not registered'))) {
        const stripeKey = this.getStripeSecretKey();
        if (stripeKey) {
          await this.UpdateStripeInfo({ secret_key: stripeKey });
          return this.billingClient.stripeApi.getStripeInfo();
        }
      }
      throw error;
    }
  }

  async UpdateStripeInfo(payload: any): Promise<AxiosResponse<void>> {
    try {
      return await this.billingClient.stripeApi.updateStripeInfo(payload);
    } catch (error: any) {
      const status = error?.response?.status;
      const message = String(error?.response?.data?.message || '');
      const lowerMessage = message.toLowerCase();
      const isAlreadyLinked = status === 400 && lowerMessage.includes('already data linked with stripe');
      const isStripeKeyNotRegistered = status === 400 && lowerMessage.includes('stripe key is not registered');
      if (isAlreadyLinked || isStripeKeyNotRegistered) {
        try {
          await this.ResetStripeLink();
        } catch (resetError: any) {
          console.warn(`⚠️ Stripe reset failed: ${resetError?.message || 'unknown error'}`);
        }
        try {
          await this.DeleteStripeTenantAndPricing();
        } catch (deleteError: any) {
          const deleteMessage = String(deleteError?.response?.data?.message || '');
          if (!deleteMessage.toLowerCase().includes('stripe key is not registered')) {
            throw deleteError;
          }
        }
        try {
          await this.DeleteStripeInfo();
        } catch (deleteError: any) {
          const deleteMessage = String(deleteError?.response?.data?.message || '');
          if (!deleteMessage.toLowerCase().includes('stripe key is not registered')) {
            throw deleteError;
          }
        }
        return this.billingClient.stripeApi.updateStripeInfo(payload);
      }
      throw error;
    }
  }

  async DeleteStripeInfo(): Promise<AxiosResponse<void>> {
    try {
      return await this.billingClient.stripeApi.deleteStripeInfo();
    } catch (error: any) {
      const status = error.response?.status;
      const message = String(error?.response?.data?.message || '').toLowerCase();
      // 404や未登録は正常な状態として扱う（既に削除済み）
      if (status === 404 || (status === 400 && message.includes('stripe key is not registered'))) {
        return {
          status: 200,
          statusText: 'OK',
          data: null,
          headers: {},
          config: error.config
        } as AxiosResponse<void>;
      }
      throw error;
    }
  }

  async ResetStripeLink(): Promise<AxiosResponse<void>> {
    return this.axios.delete(`${this.stripeBasePath}/reset`);
  }

  async EnsurePricingPlan(payload?: { plan_id?: string }): Promise<{ plan_id: string; plan_name?: string; created: boolean }> {
    const planKey = typeof payload?.plan_id === 'string' && payload.plan_id.trim().length > 0
      ? payload.plan_id.trim()
      : 'auth-e2e-plan';

    try {
      const plansResponse = await this.pricingClient.pricingPlansApi.getPricingPlans();
      const plans = plansResponse.data?.pricing_plans || [];
      let selected = plans.find(plan => plan.id === planKey || plan.name === planKey);
      if (!selected) {
        selected = plans.find(plan => plan.used) || plans[0];
      }

      if (selected) {
        if (!selected.used) {
          const usedPlanIds = plans.filter(plan => plan.used).map(plan => plan.id);
          if (!usedPlanIds.includes(selected.id)) {
            await this.pricingClient.pricingPlansApi.updatePricingPlansUsed({
              plan_ids: [...usedPlanIds, selected.id]
            });
          }
        }
        return { plan_id: selected.id, plan_name: selected.name, created: false };
      }

      // Create a minimal pricing plan if none exist.
      const unitName = `${planKey}-unit`;
      const menuName = `${planKey}-menu`;

      const unitResponse = await this.pricingClient.pricingUnitsApi.createPricingUnit({
        type: 'fixed',
        currency: 'JPY',
        name: unitName,
        display_name: unitName,
        description: 'Auth E2E pricing unit',
        unit_amount: 1000,
        recurring_interval: 'month'
      });

      if (!unitResponse.data?.id) {
        throw new Error('Failed to create pricing unit');
      }

      const menuResponse = await this.pricingClient.pricingMenusApi.createPricingMenu({
        name: menuName,
        display_name: menuName,
        description: 'Auth E2E pricing menu',
        unit_ids: [unitResponse.data.id]
      });

      if (!menuResponse.data?.id) {
        throw new Error('Failed to create pricing menu');
      }

      const planResponse = await this.pricingClient.pricingPlansApi.createPricingPlan({
        name: planKey,
        display_name: planKey,
        description: 'Auth E2E pricing plan',
        menu_ids: [menuResponse.data.id]
      });

      if (!planResponse.data?.id) {
        throw new Error('Failed to create pricing plan');
      }

      await this.pricingClient.pricingPlansApi.updatePricingPlansUsed({
        plan_ids: [planResponse.data.id]
      });

      return { plan_id: planResponse.data.id, plan_name: planKey, created: true };
    } catch (error: any) {
      const status = error?.response?.status;
      if (status === 501 || status === 404) {
        return { plan_id: planKey, plan_name: planKey, created: false };
      }
      throw error;
    }
  }

  async GetStripeInfo(): Promise<AxiosResponse<any>> {
    const billingBaseUrl = process.env.SAASUS_API_URL_BASE || 'https://api.saasus.io';
    const billingBasePath = `${billingBaseUrl}/v1/billing`;
    
    return this.axios.get(`${billingBasePath}/stripe/info`);
  }

  // 基本設定・認証情報メソッド
  async UpdateBasicInfo(payload?: any): Promise<AxiosResponse<void>> {
    const defaultPayload = payload || {
      company_name: `Test Company ${Date.now()}`,
      contact_email: `contact-${Date.now()}@example.com`
    };
    return this.basicInfoApi.updateBasicInfo(defaultPayload);
  }

  async UpdateAuthInfo(payload: any): Promise<AxiosResponse<void>> {
    return this.authInfoApi.updateAuthInfo(payload);
  }

  // ユーザー管理メソッド（拡張）
  async UpdateSaasUserPassword(userId?: string, payload?: any): Promise<AxiosResponse<void>> {
    if (!userId) {
      const usersResponse = await this.GetSaasUsers();
      const users = usersResponse.data.users;
      if (users && users.length > 0) {
        userId = users[0].id;
      } else {
        throw new Error('No SaaS users available');
      }
    }
    const defaultPayload = payload || {
      password: `NewPass${Date.now()}!`
    };
    return this.saasUserApi.updateSaasUserPassword(userId, defaultPayload);
  }

  async UpdateSaasUserEmail(userId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.saasUserApi.updateSaasUserEmail(userId, payload);
  }

  async UpdateSaasUserAttributes(userId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.saasUserApi.updateSaasUserAttributes(userId, payload);
  }

  // メール更新メソッド
  async RequestEmailUpdate(userId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.saasUserApi.requestEmailUpdate(userId, payload);
  }

  async ConfirmEmailUpdate(userId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.saasUserApi.confirmEmailUpdate(userId, payload);
  }

  // 通知・カスタマイズメソッド
  async FindNotificationMessages(): Promise<AxiosResponse<any>> {
    return this.basicInfoApi.findNotificationMessages();
  }

  async UpdateNotificationMessages(payload?: any): Promise<AxiosResponse<void>> {
    const defaultPayload = payload || {
      items: [
        {
          type: "email_verification",
          subject: `Test Subject ${Date.now()}`,
          body: `Test notification body ${Date.now()}`
        }
      ]
    };
    return this.basicInfoApi.updateNotificationMessages(defaultPayload);
  }

  // テナント管理拡張メソッド
  async GetAllTenantUsers(): Promise<AxiosResponse<any>> {
    return this.tenantUserApi.getAllTenantUsers();
  }

  async GetAllTenantUser(userId: string): Promise<AxiosResponse<any>> {
    return this.tenantUserApi.getAllTenantUser(userId);
  }

  async UpdateTenantPlan(tenantId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.tenantApi.updateTenantPlan(tenantId, payload);
  }

  async UpdateTenantBillingInfo(tenantId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.tenantApi.updateTenantBillingInfo(tenantId, payload);
  }

  // Stripe連携メソッド
  async CreateTenantAndPricing(tenantId?: string): Promise<AxiosResponse<any>> {
    try {
      return await this.tenantApi.createTenantAndPricing();
    } catch (error: any) {
      const status = error.response?.status;
      const message = String(error?.response?.data?.message || '').toLowerCase();
      if (status === 400 && message.includes('stripe key is not registered')) {
        const stripeKey = this.getStripeSecretKey();
        if (stripeKey) {
          await this.UpdateStripeInfo({ secret_key: stripeKey });
          return await this.tenantApi.createTenantAndPricing();
        }
      }
      if (status === 400 && tenantId) {
        try {
          const customer = await this.tenantApi.getStripeCustomer(tenantId);
          if (customer?.status === 200) {
            return customer;
          }
        } catch (customerError: any) {
          if (customerError.response?.status !== 404) {
            throw customerError;
          }
        }
      }
      throw error;
    }
  }

  async GetStripeCustomer(tenantId: string): Promise<AxiosResponse<any>> {
    return this.tenantApi.getStripeCustomer(tenantId);
  }

  async DeleteStripeTenantAndPricing(tenantId?: string): Promise<AxiosResponse<void>> {
    try {
      return await this.tenantApi.deleteStripeTenantAndPricing();
    } catch (error: any) {
      const status = error.response?.status;
      const message = String(error?.response?.data?.message || '').toLowerCase();
      if (status === 400 && message.includes('stripe key is not registered')) {
        try {
          await this.ResetStripeLink();
        } catch (resetError: any) {
          console.warn(`⚠️ Stripe reset failed: ${resetError?.message || 'unknown error'}`);
        }
        return {
          status: 200,
          statusText: 'OK',
          data: null,
          headers: {},
          config: error.config
        } as AxiosResponse<void>;
      }
      if ((status === 400 || status === 404) && tenantId) {
        try {
          await this.tenantApi.getStripeCustomer(tenantId);
        } catch (customerError: any) {
          if (customerError.response?.status === 404) {
            return {
              status: 200,
              statusText: 'OK',
              data: null,
              headers: {},
              config: error.config
            } as AxiosResponse<void>;
          }
          throw customerError;
        }
      }
      throw error;
    }
  }

  // プランリセットメソッド
  async ResetPlan(): Promise<AxiosResponse<void>> {
    return this.tenantApi.resetPlan();
  }

  // IDプロバイダーメソッド
  async GetIdentityProviders(): Promise<AxiosResponse<any>> {
    return this.authInfoApi.getIdentityProviders();
  }

  async UpdateIdentityProvider(provider: string, payload: any): Promise<AxiosResponse<void>> {
    // 生成されたAPIはproviderパラメータを取らない
    return this.authInfoApi.updateIdentityProvider(payload);
  }

  async GetTenantIdentityProviders(tenantId: string): Promise<AxiosResponse<any>> {
    return this.tenantApi.getTenantIdentityProviders(tenantId);
  }

  async UpdateTenantIdentityProvider(tenantId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.tenantApi.updateTenantIdentityProvider(tenantId, payload);
  }

  // 外部ユーザーリンクメソッド
  async RequestExternalUserLink(payload: any): Promise<AxiosResponse<void>> {
    return this.axios.post(`${this.basePath}/external-users/link`, payload);
  }

  async ConfirmExternalUserLink(payload: any): Promise<AxiosResponse<void>> {
    return this.axios.post(`${this.basePath}/external-users/link/confirm`, payload);
  }

  // サインアップメソッド
  async SignUp(payload: any): Promise<AxiosResponse<any>> {
    try {
      return await this.saasUserApi.signUp(payload);
    } catch (error: any) {
      const status = error?.response?.status;
      const data = error?.response?.data;
      if (data !== undefined) {
        console.error(`SignUp failed (status ${status ?? 'unknown'}):`, data);
      } else {
        console.error(`SignUp failed (status ${status ?? 'unknown'}): ${error?.message || 'unknown error'}`);
      }
      throw error;
    }
  }

  async ResendSignUpConfirmationEmail(payload: any): Promise<AxiosResponse<void>> {
    return this.saasUserApi.resendSignUpConfirmationEmail(payload);
  }

  async SignIn(payload?: SignInParam): Promise<AxiosResponse<SignInResult>> {
    return this.saasUserApi.signIn(payload);
  }

  async RespondToSignInChallenge(payload?: RespondToSignInChallengeParam): Promise<AxiosResponse<RespondToSignInChallengeResult>> {
    return this.saasUserApi.respondToSignInChallenge(payload);
  }

  // AWS Marketplaceメソッド
  async SignUpWithAwsMarketplace(payload: any): Promise<AxiosResponse<any>> {
    const awsMarketplaceBaseUrl = process.env.SAASUS_API_URL_BASE || 'https://api.saasus.io';
    const awsMarketplaceBasePath = `${awsMarketplaceBaseUrl}/v1/awsmarketplace`;
    
    return this.axios.post(`${awsMarketplaceBasePath}/sign-up`, payload);
  }

  async ConfirmSignUpWithAwsMarketplace(payload: any): Promise<AxiosResponse<any>> {
    const awsMarketplaceBaseUrl = process.env.SAASUS_API_URL_BASE || 'https://api.saasus.io';
    const awsMarketplaceBasePath = `${awsMarketplaceBaseUrl}/v1/awsmarketplace`;
    
    return this.axios.post(`${awsMarketplaceBasePath}/sign-up/confirm`, payload);
  }

  async LinkAwsMarketplace(payload: any): Promise<AxiosResponse<void>> {
    const awsMarketplaceBaseUrl = process.env.SAASUS_API_URL_BASE || 'https://api.saasus.io';
    const awsMarketplaceBasePath = `${awsMarketplaceBaseUrl}/v1/awsmarketplace`;
    
    return this.axios.post(`${awsMarketplaceBasePath}/link`, payload);
  }

  // プロバイダー管理メソッド
  async UnlinkProvider(providerName: string, userId: string): Promise<AxiosResponse<void>> {
    return this.axios.delete(`${this.basePath}/users/${userId}/providers/${providerName}`);
  }

  // Single Tenantメソッド
  async GetCloudFormationLaunchStackLinkForSingleTenant(): Promise<AxiosResponse<any>> {
    return this.axios.get(`${this.basePath}/single-tenant/cloudformation-launch-stack-link`);
  }

  async GetSingleTenantSettings(): Promise<AxiosResponse<any>> {
    return this.axios.get(`${this.basePath}/single-tenant/settings`);
  }

  async UpdateSingleTenantSettings(payload: any): Promise<AxiosResponse<void>> {
    return this.singleTenantApi.updateSingleTenantSettings(payload);
  }

  // SaaSユーザー属性メソッド
  async CreateSaasUserAttribute(payload: any): Promise<AxiosResponse<any>> {
    return this.userAttributeApi.createSaasUserAttribute(payload);
  }

  // テナント招待メソッド
  async GetTenantInvitations(tenantId: string): Promise<AxiosResponse<any>> {
    return this.axios.get(`${this.basePath}/tenants/${tenantId}/invitations`);
  }

  async CreateTenantInvitation(tenantId: string, payload: any): Promise<AxiosResponse<any>> {
    return this.axios.post(`${this.basePath}/tenants/${tenantId}/invitations`, payload);
  }

  async GetTenantInvitation(tenantId: string, invitationId: string): Promise<AxiosResponse<any>> {
    return this.axios.get(`${this.basePath}/tenants/${tenantId}/invitations/${invitationId}`);
  }

  async DeleteTenantInvitation(tenantId: string, invitationId: string): Promise<AxiosResponse<void>> {
    return this.axios.delete(`${this.basePath}/tenants/${tenantId}/invitations/${invitationId}`);
  }

  async GetInvitationValidity(invitationId: string): Promise<AxiosResponse<any>> {
    return this.axios.get(`${this.basePath}/invitations/${invitationId}/validity`);
  }

  async ValidateInvitation(invitationId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.axios.post(`${this.basePath}/invitations/${invitationId}/validate`, payload);
  }

  // AWS Marketplace統合メソッド
  async UpdateSettings(payload: any): Promise<AxiosResponse<void>> {
    const awsMarketplaceBaseUrl = process.env.SAASUS_API_URL_BASE || 'https://api.saasus.io';
    const awsMarketplaceBasePath = `${awsMarketplaceBaseUrl}/v1/awsmarketplace`;
    
    return this.axios.put(`${awsMarketplaceBasePath}/settings`, payload);
  }

  async GetSettings(): Promise<AxiosResponse<any>> {
    const awsMarketplaceBaseUrl = process.env.SAASUS_API_URL_BASE || 'https://api.saasus.io';
    const awsMarketplaceBasePath = `${awsMarketplaceBaseUrl}/v1/awsmarketplace`;
    
    return this.axios.get(`${awsMarketplaceBasePath}/settings`);
  }

  async UpdateListingStatus(payload: any): Promise<AxiosResponse<void>> {
    const awsMarketplaceBaseUrl = process.env.SAASUS_API_URL_BASE || 'https://api.saasus.io';
    const awsMarketplaceBasePath = `${awsMarketplaceBaseUrl}/v1/awsmarketplace`;
    
    return this.axios.put(`${awsMarketplaceBasePath}/listing-status`, payload);
  }

  async GetListingStatus(): Promise<AxiosResponse<any>> {
    const awsMarketplaceBaseUrl = process.env.SAASUS_API_URL_BASE || 'https://api.saasus.io';
    const awsMarketplaceBasePath = `${awsMarketplaceBaseUrl}/v1/awsmarketplace`;
    
    return this.axios.get(`${awsMarketplaceBasePath}/listing-status`);
  }

  // WithBodyメソッド（Go版準拠）
  async UpdateBasicInfoWithBody(payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateBasicInfo(payload);
  }

  async UpdateAuthInfoWithBody(payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateAuthInfo(payload);
  }

  async CreateSaasUserWithBody(payload: any): Promise<AxiosResponse<any>> {
    return this.CreateSaasUser(payload);
  }

  async UpdateSaasUserPasswordWithBody(userId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateSaasUserPassword(userId, payload);
  }

  async UpdateSaasUserEmailWithBody(userId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateSaasUserEmail(userId, payload);
  }

  async UpdateSaasUserAttributesWithBody(userId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateSaasUserAttributes(userId, payload);
  }

  async RequestEmailUpdateWithBody(userId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.RequestEmailUpdate(userId, payload);
  }

  async ConfirmEmailUpdateWithBody(userId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.ConfirmEmailUpdate(userId, payload);
  }

  async UpdateUserMfaPreferenceWithBody(userId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateUserMfaPreference(userId, payload);
  }

  async UpdateSoftwareTokenWithBody(userId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateSoftwareToken(userId, payload);
  }

  async CreateSecretCodeWithBody(userId: string, payload: any): Promise<AxiosResponse<any>> {
    return this.CreateSecretCode(userId, payload);
  }

  async CreateRoleWithBody(payload: any): Promise<AxiosResponse<any>> {
    return this.CreateRole(payload);
  }

  async CreateUserAttributeWithBody(payload: any): Promise<AxiosResponse<any>> {
    return this.CreateUserAttribute(payload);
  }

  async CreateSaasUserAttributeWithBody(payload: any): Promise<AxiosResponse<any>> {
    return this.CreateSaasUserAttribute(payload);
  }

  async CreateTenantAttributeWithBody(payload: any): Promise<AxiosResponse<any>> {
    return this.CreateTenantAttribute(payload);
  }

  async UpdateNotificationMessagesWithBody(payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateNotificationMessages(payload);
  }

  async UpdateCustomizePagesWithBody(payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateCustomizePages(payload);
  }

  async UpdateCustomizePageSettingsWithBody(payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateCustomizePageSettings(payload);
  }

  async CreateEnvWithBody(payload: any): Promise<AxiosResponse<any>> {
    return this.CreateEnv(payload);
  }

  async UpdateEnvWithBody(envId: number, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateEnv(envId, payload);
  }

  async UpdateSignInSettingsWithBody(payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateSignInSettings(payload);
  }

  async SignUpWithBody(payload: any): Promise<AxiosResponse<any>> {
    return this.SignUp(payload);
  }

  async ResendSignUpConfirmationEmailWithBody(payload: any): Promise<AxiosResponse<void>> {
    return this.ResendSignUpConfirmationEmail(payload);
  }

  async SignInWithBody(payload: any): Promise<AxiosResponse<any>> {
    return this.SignIn(payload);
  }

  async RespondToSignInChallengeWithBody(payload: any): Promise<AxiosResponse<any>> {
    return this.RespondToSignInChallenge(payload);
  }

  async UpdateRoleWithBody(roleName: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateRole(roleName, payload);
  }

  async CreateTenantWithBody(payload: any): Promise<AxiosResponse<any>> {
    return this.CreateTenant(payload);
  }

  async UpdateTenantWithBody(tenantId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateTenant(tenantId, payload);
  }

  async CreateTenantUserWithBody(tenantId: string, payload: any): Promise<AxiosResponse<any>> {
    return this.CreateTenantUser(tenantId, payload);
  }

  async UpdateTenantUserWithBody(tenantId: string, userId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateTenantUser(tenantId, userId, payload);
  }

  async CreateTenantUserRolesWithBody(tenantId: string, userId: string, envId: number, payload: any): Promise<AxiosResponse<void>> {
    return this.CreateTenantUserRoles(tenantId, userId, envId, payload);
  }

  async CreateTenantInvitationWithBody(tenantId: string, payload: any): Promise<AxiosResponse<any>> {
    return this.CreateTenantInvitation(tenantId, payload);
  }

  async ValidateInvitationWithBody(invitationId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.ValidateInvitation(invitationId, payload);
  }

  async UpdateTenantPlanWithBody(tenantId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateTenantPlan(tenantId, payload);
  }

  async UpdateTenantBillingInfoWithBody(tenantId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateTenantBillingInfo(tenantId, payload);
  }

  async CreateAuthCredentialsWithBody(payload: any): Promise<AxiosResponse<any>> {
    return this.CreateAuthCredentials(payload);
  }

  async UpdateIdentityProviderWithBody(provider: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateIdentityProvider(provider, payload);
  }

  async UpdateTenantIdentityProviderWithBody(tenantId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateTenantIdentityProvider(tenantId, payload);
  }

  async RequestExternalUserLinkWithBody(payload: any): Promise<AxiosResponse<void>> {
    return this.RequestExternalUserLink(payload);
  }

  async ConfirmExternalUserLinkWithBody(payload: any): Promise<AxiosResponse<void>> {
    return this.ConfirmExternalUserLink(payload);
  }

  async SignUpWithAwsMarketplaceWithBody(payload: any): Promise<AxiosResponse<any>> {
    return this.SignUpWithAwsMarketplace(payload);
  }

  async ConfirmSignUpWithAwsMarketplaceWithBody(payload: any): Promise<AxiosResponse<any>> {
    return this.ConfirmSignUpWithAwsMarketplace(payload);
  }

  async LinkAwsMarketplaceWithBody(payload: any): Promise<AxiosResponse<void>> {
    return this.LinkAwsMarketplace(payload);
  }

  async UpdateSingleTenantSettingsWithBody(payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateSingleTenantSettings(payload);
  }

  // WithResponseメソッド（Go版準拠）
  async GetBasicInfoWithResponse(): Promise<AxiosResponse<any>> {
    return this.GetBasicInfo();
  }

  async UpdateBasicInfoWithResponse(payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateBasicInfo(payload);
  }

  async GetAuthInfoWithResponse(): Promise<AxiosResponse<any>> {
    return this.GetAuthInfo();
  }

  async UpdateAuthInfoWithResponse(payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateAuthInfo(payload);
  }

  async GetSaasUsersWithResponse(): Promise<AxiosResponse<any>> {
    return this.GetSaasUsers();
  }

  async GetSaasUserWithResponse(userId: string): Promise<AxiosResponse<any>> {
    return this.GetSaasUser(userId);
  }

  async CreateSaasUserWithResponse(payload: any): Promise<AxiosResponse<any>> {
    return this.CreateSaasUser(payload);
  }

  async DeleteSaasUserWithResponse(userId: string): Promise<AxiosResponse<void>> {
    return this.DeleteSaasUser(userId);
  }

  async UpdateSaasUserPasswordWithResponse(userId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateSaasUserPassword(userId, payload);
  }

  async UpdateSaasUserEmailWithResponse(userId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateSaasUserEmail(userId, payload);
  }

  async UpdateSaasUserAttributesWithResponse(userId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateSaasUserAttributes(userId, payload);
  }

  async RequestEmailUpdateWithResponse(userId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.RequestEmailUpdate(userId, payload);
  }

  async ConfirmEmailUpdateWithResponse(userId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.ConfirmEmailUpdate(userId, payload);
  }

  async GetUserMfaPreferenceWithResponse(userId: string): Promise<AxiosResponse<any>> {
    return this.GetUserMfaPreference(userId);
  }

  async UpdateUserMfaPreferenceWithResponse(userId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateUserMfaPreference(userId, payload);
  }

  async UpdateSoftwareTokenWithResponse(userId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateSoftwareToken(userId, payload);
  }

  async CreateSecretCodeWithResponse(userId: string, payload: any): Promise<AxiosResponse<any>> {
    return this.CreateSecretCode(userId, payload);
  }

  async GetRolesWithResponse(): Promise<AxiosResponse<any>> {
    return this.GetRoles();
  }

  async CreateRoleWithResponse(payload: any): Promise<AxiosResponse<any>> {
    return this.CreateRole(payload);
  }

  async DeleteRoleWithResponse(roleName: string): Promise<AxiosResponse<void>> {
    return this.DeleteRole(roleName);
  }

  async GetUserAttributesWithResponse(): Promise<AxiosResponse<any>> {
    return this.GetUserAttributes();
  }

  async CreateUserAttributeWithResponse(payload: any): Promise<AxiosResponse<any>> {
    return this.CreateUserAttribute(payload);
  }

  async DeleteUserAttributeWithResponse(attributeName: string): Promise<AxiosResponse<void>> {
    return this.DeleteUserAttribute(attributeName);
  }

  async CreateSaasUserAttributeWithResponse(payload: any): Promise<AxiosResponse<any>> {
    return this.CreateSaasUserAttribute(payload);
  }

  async GetTenantAttributesWithResponse(): Promise<AxiosResponse<any>> {
    return this.GetTenantAttributes();
  }

  async CreateTenantAttributeWithResponse(payload: any): Promise<AxiosResponse<any>> {
    return this.CreateTenantAttribute(payload);
  }

  async DeleteTenantAttributeWithResponse(attributeName: string): Promise<AxiosResponse<void>> {
    return this.DeleteTenantAttribute(attributeName);
  }

  async FindNotificationMessagesWithResponse(): Promise<AxiosResponse<any>> {
    return this.FindNotificationMessages();
  }

  async UpdateNotificationMessagesWithResponse(payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateNotificationMessages(payload);
  }

  async GetCustomizePagesWithResponse(): Promise<AxiosResponse<any>> {
    return this.GetCustomizePages();
  }

  async UpdateCustomizePagesWithResponse(payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateCustomizePages(payload);
  }

  async GetCustomizePageSettingsWithResponse(): Promise<AxiosResponse<any>> {
    return this.GetCustomizePageSettings();
  }

  async UpdateCustomizePageSettingsWithResponse(payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateCustomizePageSettings(payload);
  }

  async GetEnvsWithResponse(): Promise<AxiosResponse<any>> {
    return this.GetEnvs();
  }

  async CreateEnvWithResponse(payload: any): Promise<AxiosResponse<any>> {
    return this.CreateEnv(payload);
  }

  async GetEnvWithResponse(envId: number): Promise<AxiosResponse<any>> {
    return this.GetEnv(envId);
  }

  async UpdateEnvWithResponse(envId: number, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateEnv(envId, payload);
  }

  async DeleteEnvWithResponse(envId: number): Promise<AxiosResponse<void>> {
    return this.DeleteEnv(envId);
  }

  async GetSignInSettingsWithResponse(): Promise<AxiosResponse<any>> {
    return this.GetSignInSettings();
  }

  async UpdateSignInSettingsWithResponse(payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateSignInSettings(payload);
  }

  async SignUpWithResponse(payload: any): Promise<AxiosResponse<any>> {
    return this.SignUp(payload);
  }

  async ResendSignUpConfirmationEmailWithResponse(payload: any): Promise<AxiosResponse<void>> {
    return this.ResendSignUpConfirmationEmail(payload);
  }

  async SignInWithResponse(payload: any): Promise<AxiosResponse<any>> {
    return this.SignIn(payload);
  }

  async RespondToSignInChallengeWithResponse(payload: any): Promise<AxiosResponse<any>> {
    return this.RespondToSignInChallenge(payload);
  }

  async UpdateRoleWithResponse(roleName: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateRole(roleName, payload);
  }

  async GetTenantsWithResponse(): Promise<AxiosResponse<any>> {
    return this.GetTenants();
  }

  async CreateTenantWithResponse(payload: any): Promise<AxiosResponse<any>> {
    return this.CreateTenant(payload);
  }

  async GetTenantWithResponse(tenantId: string): Promise<AxiosResponse<any>> {
    return this.GetTenant(tenantId);
  }

  async UpdateTenantWithResponse(tenantId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateTenant(tenantId, payload);
  }

  async DeleteTenantWithResponse(tenantId: string): Promise<AxiosResponse<void>> {
    return this.DeleteTenant(tenantId);
  }

  async CreateTenantUserWithResponse(tenantId: string, payload: any): Promise<AxiosResponse<any>> {
    return this.CreateTenantUser(tenantId, payload);
  }

  async GetAllTenantUsersWithResponse(): Promise<AxiosResponse<any>> {
    return this.GetAllTenantUsers();
  }

  async GetAllTenantUserWithResponse(userId: string): Promise<AxiosResponse<any>> {
    return this.GetAllTenantUser(userId);
  }

  async GetTenantUsersWithResponse(tenantId: string): Promise<AxiosResponse<any>> {
    return this.GetTenantUsers(tenantId);
  }

  async GetTenantUserWithResponse(tenantId: string, userId: string): Promise<AxiosResponse<any>> {
    return this.GetTenantUser(tenantId, userId);
  }

  async UpdateTenantUserWithResponse(tenantId: string, userId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateTenantUser(tenantId, userId, payload);
  }

  async DeleteTenantUserWithResponse(tenantId: string, userId: string): Promise<AxiosResponse<void>> {
    return this.DeleteTenantUser(tenantId, userId);
  }

  async CreateTenantUserRolesWithResponse(tenantId: string, userId: string, envId: number, payload: any): Promise<AxiosResponse<void>> {
    return this.CreateTenantUserRoles(tenantId, userId, envId, payload);
  }

  async DeleteTenantUserRoleWithResponse(tenantId: string, userId: string, envId: number, roleName: string): Promise<AxiosResponse<void>> {
    return this.DeleteTenantUserRole(tenantId, userId, envId, roleName);
  }

  async GetTenantInvitationsWithResponse(tenantId: string): Promise<AxiosResponse<any>> {
    return this.GetTenantInvitations(tenantId);
  }

  async CreateTenantInvitationWithResponse(tenantId: string, payload: any): Promise<AxiosResponse<any>> {
    return this.CreateTenantInvitation(tenantId, payload);
  }

  async GetTenantInvitationWithResponse(tenantId: string, invitationId: string): Promise<AxiosResponse<any>> {
    return this.GetTenantInvitation(tenantId, invitationId);
  }

  async DeleteTenantInvitationWithResponse(tenantId: string, invitationId: string): Promise<AxiosResponse<void>> {
    return this.DeleteTenantInvitation(tenantId, invitationId);
  }

  async GetInvitationValidityWithResponse(invitationId: string): Promise<AxiosResponse<any>> {
    return this.GetInvitationValidity(invitationId);
  }

  async ValidateInvitationWithResponse(invitationId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.ValidateInvitation(invitationId, payload);
  }

  async UpdateTenantPlanWithResponse(tenantId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateTenantPlan(tenantId, payload);
  }

  async UpdateTenantBillingInfoWithResponse(tenantId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateTenantBillingInfo(tenantId, payload);
  }

  async CreateTenantAndPricingWithResponse(tenantId?: string): Promise<AxiosResponse<any>> {
    return this.CreateTenantAndPricing(tenantId);
  }

  async DeleteStripeTenantAndPricingWithResponse(tenantId?: string): Promise<AxiosResponse<void>> {
    return this.DeleteStripeTenantAndPricing(tenantId);
  }

  async GetStripeCustomerWithResponse(tenantId: string): Promise<AxiosResponse<any>> {
    return this.GetStripeCustomer(tenantId);
  }

  async ResetPlanWithResponse(): Promise<AxiosResponse<void>> {
    return this.ResetPlan();
  }

  async GetUserInfoWithResponse(token?: string): Promise<AxiosResponse<any>> {
    return this.GetUserInfo(token);
  }

  async GetAuthCredentialsWithResponse(params: any): Promise<AxiosResponse<any>> {
    return this.GetAuthCredentials(params);
  }

  async CreateAuthCredentialsWithResponse(payload: any): Promise<AxiosResponse<any>> {
    return this.CreateAuthCredentials(payload);
  }

  async GetIdentityProvidersWithResponse(): Promise<AxiosResponse<any>> {
    return this.GetIdentityProviders();
  }

  async UpdateIdentityProviderWithResponse(provider: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateIdentityProvider(provider, payload);
  }

  async GetTenantIdentityProvidersWithResponse(tenantId: string): Promise<AxiosResponse<any>> {
    return this.GetTenantIdentityProviders(tenantId);
  }

  async UpdateTenantIdentityProviderWithResponse(tenantId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateTenantIdentityProvider(tenantId, payload);
  }

  async RequestExternalUserLinkWithResponse(payload: any): Promise<AxiosResponse<void>> {
    return this.RequestExternalUserLink(payload);
  }

  async ConfirmExternalUserLinkWithResponse(payload: any): Promise<AxiosResponse<void>> {
    return this.ConfirmExternalUserLink(payload);
  }

  async UnlinkProviderWithResponse(providerName: string, userId: string): Promise<AxiosResponse<void>> {
    return this.UnlinkProvider(providerName, userId);
  }

  async SignUpWithAwsMarketplaceWithResponse(payload: any): Promise<AxiosResponse<any>> {
    return this.SignUpWithAwsMarketplace(payload);
  }

  async ConfirmSignUpWithAwsMarketplaceWithResponse(payload: any): Promise<AxiosResponse<any>> {
    return this.ConfirmSignUpWithAwsMarketplace(payload);
  }

  async LinkAwsMarketplaceWithResponse(payload: any): Promise<AxiosResponse<void>> {
    return this.LinkAwsMarketplace(payload);
  }

  async GetCloudFormationLaunchStackLinkForSingleTenantWithResponse(): Promise<AxiosResponse<any>> {
    return this.GetCloudFormationLaunchStackLinkForSingleTenant();
  }

  async GetSingleTenantSettingsWithResponse(): Promise<AxiosResponse<any>> {
    return this.GetSingleTenantSettings();
  }

  async UpdateSingleTenantSettingsWithResponse(payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateSingleTenantSettings(payload);
  }

  // WithBodyWithResponseメソッド（Go版準拠）
  async UpdateBasicInfoWithBodyWithResponse(payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateBasicInfo(payload);
  }

  async UpdateAuthInfoWithBodyWithResponse(payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateAuthInfo(payload);
  }

  async CreateSaasUserWithBodyWithResponse(payload: any): Promise<AxiosResponse<any>> {
    return this.CreateSaasUser(payload);
  }

  async UpdateSaasUserPasswordWithBodyWithResponse(userId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateSaasUserPassword(userId, payload);
  }

  async UpdateSaasUserEmailWithBodyWithResponse(userId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateSaasUserEmail(userId, payload);
  }

  async UpdateSaasUserAttributesWithBodyWithResponse(userId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateSaasUserAttributes(userId, payload);
  }

  async RequestEmailUpdateWithBodyWithResponse(userId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.RequestEmailUpdate(userId, payload);
  }

  async ConfirmEmailUpdateWithBodyWithResponse(userId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.ConfirmEmailUpdate(userId, payload);
  }

  async UpdateUserMfaPreferenceWithBodyWithResponse(userId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateUserMfaPreference(userId, payload);
  }

  async UpdateSoftwareTokenWithBodyWithResponse(userId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateSoftwareToken(userId, payload);
  }

  async CreateSecretCodeWithBodyWithResponse(userId: string, payload: any): Promise<AxiosResponse<any>> {
    return this.CreateSecretCode(userId, payload);
  }

  async CreateRoleWithBodyWithResponse(payload: any): Promise<AxiosResponse<any>> {
    return this.CreateRole(payload);
  }

  async CreateUserAttributeWithBodyWithResponse(payload: any): Promise<AxiosResponse<any>> {
    return this.CreateUserAttribute(payload);
  }

  async CreateSaasUserAttributeWithBodyWithResponse(payload: any): Promise<AxiosResponse<any>> {
    return this.CreateSaasUserAttribute(payload);
  }

  async CreateTenantAttributeWithBodyWithResponse(payload: any): Promise<AxiosResponse<any>> {
    return this.CreateTenantAttribute(payload);
  }

  async UpdateNotificationMessagesWithBodyWithResponse(payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateNotificationMessages(payload);
  }

  async UpdateCustomizePagesWithBodyWithResponse(payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateCustomizePages(payload);
  }

  async UpdateCustomizePageSettingsWithBodyWithResponse(payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateCustomizePageSettings(payload);
  }

  async CreateEnvWithBodyWithResponse(payload: any): Promise<AxiosResponse<any>> {
    return this.CreateEnv(payload);
  }

  async UpdateEnvWithBodyWithResponse(envId: number, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateEnv(envId, payload);
  }

  async UpdateSignInSettingsWithBodyWithResponse(payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateSignInSettings(payload);
  }

  async SignUpWithBodyWithResponse(payload: any): Promise<AxiosResponse<any>> {
    return this.SignUp(payload);
  }

  async ResendSignUpConfirmationEmailWithBodyWithResponse(payload: any): Promise<AxiosResponse<void>> {
    return this.ResendSignUpConfirmationEmail(payload);
  }

  async SignInWithBodyWithResponse(payload: any): Promise<AxiosResponse<any>> {
    return this.SignIn(payload);
  }

  async RespondToSignInChallengeWithBodyWithResponse(payload: any): Promise<AxiosResponse<any>> {
    return this.RespondToSignInChallenge(payload);
  }

  async UpdateRoleWithBodyWithResponse(roleName: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateRole(roleName, payload);
  }

  async CreateTenantWithBodyWithResponse(payload: any): Promise<AxiosResponse<any>> {
    return this.CreateTenant(payload);
  }

  async UpdateTenantWithBodyWithResponse(tenantId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateTenant(tenantId, payload);
  }

  async CreateTenantUserWithBodyWithResponse(tenantId: string, payload: any): Promise<AxiosResponse<any>> {
    return this.CreateTenantUser(tenantId, payload);
  }

  async UpdateTenantUserWithBodyWithResponse(tenantId: string, userId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateTenantUser(tenantId, userId, payload);
  }

  async CreateTenantUserRolesWithBodyWithResponse(tenantId: string, userId: string, envId: number, payload: any): Promise<AxiosResponse<void>> {
    return this.CreateTenantUserRoles(tenantId, userId, envId, payload);
  }

  async CreateTenantInvitationWithBodyWithResponse(tenantId: string, payload: any): Promise<AxiosResponse<any>> {
    return this.CreateTenantInvitation(tenantId, payload);
  }

  async ValidateInvitationWithBodyWithResponse(invitationId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.ValidateInvitation(invitationId, payload);
  }

  async UpdateTenantPlanWithBodyWithResponse(tenantId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateTenantPlan(tenantId, payload);
  }

  async UpdateTenantBillingInfoWithBodyWithResponse(tenantId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateTenantBillingInfo(tenantId, payload);
  }

  async CreateAuthCredentialsWithBodyWithResponse(payload: any): Promise<AxiosResponse<any>> {
    return this.CreateAuthCredentials(payload);
  }

  async UpdateIdentityProviderWithBodyWithResponse(provider: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateIdentityProvider(provider, payload);
  }

  async UpdateTenantIdentityProviderWithBodyWithResponse(tenantId: string, payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateTenantIdentityProvider(tenantId, payload);
  }

  async RequestExternalUserLinkWithBodyWithResponse(payload: any): Promise<AxiosResponse<void>> {
    return this.RequestExternalUserLink(payload);
  }

  async ConfirmExternalUserLinkWithBodyWithResponse(payload: any): Promise<AxiosResponse<void>> {
    return this.ConfirmExternalUserLink(payload);
  }

  async SignUpWithAwsMarketplaceWithBodyWithResponse(payload: any): Promise<AxiosResponse<any>> {
    return this.SignUpWithAwsMarketplace(payload);
  }

  async ConfirmSignUpWithAwsMarketplaceWithBodyWithResponse(payload: any): Promise<AxiosResponse<any>> {
    return this.ConfirmSignUpWithAwsMarketplace(payload);
  }

  async LinkAwsMarketplaceWithBodyWithResponse(payload: any): Promise<AxiosResponse<void>> {
    return this.LinkAwsMarketplace(payload);
  }

  async UpdateSingleTenantSettingsWithBodyWithResponse(payload: any): Promise<AxiosResponse<void>> {
    return this.UpdateSingleTenantSettings(payload);
  }

  // 追加のメソッド（Go版で見つからなかったが、完全性のため追加）
  async GetUserInfoByEmail(email: string): Promise<AxiosResponse<any>> {
    const maxAttempts = 5;
    let lastError: any;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        return await this.axios.get(`${this.basePath}/userinfo/search/email?email=${encodeURIComponent(email)}`);
      } catch (error: any) {
        lastError = error;
        if (error?.response?.status === 404 && attempt < maxAttempts) {
          await this.delay(500 * attempt);
          continue;
        }
        throw error;
      }
    }

    throw lastError;
  }

  async GetUserInfoByEmailWithResponse(email: string): Promise<AxiosResponse<any>> {
    return this.GetUserInfoByEmail(email);
  }
}

export const getAuthMethods = (): string[] => [
  // Standard メソッド（Go版準拠）
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

  // WithBody メソッド（Go版準拠）
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

  // WithResponse メソッド（Go版準拠）
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

  // WithBodyWithResponse メソッド（Go版準拠）
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

export const createAuthE2EClient = (): AuthE2EClient => {
  return new AuthE2EClient();
};
