import { AuthE2EClient } from './client';
import { AUTH_E2E_PREFIX } from './helpers';
import { AuthE2EError, ErrorType, ResourceTracker } from './types';

const isTestString = (value?: string | null): boolean =>
  typeof value === 'string' && value.startsWith(AUTH_E2E_PREFIX);

const safeDelete = async (action: () => Promise<unknown>, label: string): Promise<void> => {
  try {
    await action();
    console.log(`✅ 削除完了: ${label}`);
  } catch (error) {
    console.warn(`⚠️ 削除失敗: ${label}: ${(error as Error).message}`);
  }
};

/**
 * StateManagerクラス
 * リソース追跡とクリーンアップ機能を提供する
 */
export class StateManager {
  private static resources: ResourceTracker = {
    saasUsers: [],
    tenants: [],
    environments: [],
    roles: [],
    userAttributes: [],
    tenantAttributes: [],
    tenantUsers: [],
    tenantInvitations: [],
    stripeResources: [],
    awsMarketplaceResources: []
  };

  private static creationOrder: Array<{type: keyof ResourceTracker, id: any}> = [];

  /**
   * リソースを追跡リストに追加する
   */
  static trackResource(type: keyof ResourceTracker, id: any): void {
    try {
      switch (type) {
        case 'saasUsers':
          if (typeof id === 'string' && !this.resources.saasUsers.includes(id)) {
            this.resources.saasUsers.push(id);
            this.creationOrder.push({type, id});
            console.log(`📝 リソース追跡: SaaSユーザー ${id}`);
          }
          break;

        case 'tenants':
          if (typeof id === 'string' && !this.resources.tenants.includes(id)) {
            this.resources.tenants.push(id);
            this.creationOrder.push({type, id});
            console.log(`📝 リソース追跡: テナント ${id}`);
          }
          break;

        case 'environments':
          if (typeof id === 'number' && !this.resources.environments.includes(id)) {
            this.resources.environments.push(id);
            this.creationOrder.push({type, id});
            console.log(`📝 リソース追跡: 環境 ${id}`);
          }
          break;

        case 'roles':
          if (typeof id === 'string' && !this.resources.roles.includes(id)) {
            this.resources.roles.push(id);
            this.creationOrder.push({type, id});
            console.log(`📝 リソース追跡: ロール ${id}`);
          }
          break;

        case 'userAttributes':
          if (typeof id === 'string' && !this.resources.userAttributes.includes(id)) {
            this.resources.userAttributes.push(id);
            this.creationOrder.push({type, id});
            console.log(`📝 リソース追跡: ユーザー属性 ${id}`);
          }
          break;

        case 'tenantAttributes':
          if (typeof id === 'string' && !this.resources.tenantAttributes.includes(id)) {
            this.resources.tenantAttributes.push(id);
            this.creationOrder.push({type, id});
            console.log(`📝 リソース追跡: テナント属性 ${id}`);
          }
          break;

        case 'tenantUsers':
          if (typeof id === 'object' && id.tenantId && id.userId) {
            const exists = this.resources.tenantUsers.some(
              tu => tu.tenantId === id.tenantId && tu.userId === id.userId
            );
            if (!exists) {
              this.resources.tenantUsers.push(id);
              this.creationOrder.push({type, id});
              console.log(`📝 リソース追跡: テナントユーザー ${id.tenantId}/${id.userId}`);
            }
          }
          break;

        case 'tenantInvitations':
          if (typeof id === 'object' && id.tenantId && id.invitationId) {
            const exists = this.resources.tenantInvitations.some(
              ti => ti.tenantId === id.tenantId && ti.invitationId === id.invitationId
            );
            if (!exists) {
              this.resources.tenantInvitations.push(id);
              this.creationOrder.push({type, id});
              console.log(`📝 リソース追跡: テナント招待 ${id.tenantId}/${id.invitationId}`);
            }
          }
          break;

        case 'stripeResources':
          if (typeof id === 'string' && !this.resources.stripeResources.includes(id)) {
            this.resources.stripeResources.push(id);
            this.creationOrder.push({type, id});
            console.log(`📝 リソース追跡: Stripeリソース ${id}`);
          }
          break;

        case 'awsMarketplaceResources':
          if (typeof id === 'string' && !this.resources.awsMarketplaceResources.includes(id)) {
            this.resources.awsMarketplaceResources.push(id);
            this.creationOrder.push({type, id});
            console.log(`📝 リソース追跡: AWS Marketplaceリソース ${id}`);
          }
          break;

        default:
          console.warn(`⚠️ 未知のリソースタイプ: ${type}`);
      }
    } catch (error) {
      console.error(`❌ リソース追跡エラー (${type}): ${(error as Error).message}`);
    }
  }

  /**
   * リソースを削除済みとしてマークする（二重削除を防ぐ）
   */
  static markResourceAsDeleted(type: string, id: any): void {
    try {
      switch (type) {
        case 'saasUsers':
          this.resources.saasUsers = this.resources.saasUsers.filter(userId => userId !== id);
          break;
        case 'tenants':
          this.resources.tenants = this.resources.tenants.filter(tenantId => tenantId !== id);
          break;
        case 'environments':
          this.resources.environments = this.resources.environments.filter(envId => envId !== id);
          break;
        case 'roles':
          this.resources.roles = this.resources.roles.filter(roleName => roleName !== id);
          break;
        case 'userAttributes':
          this.resources.userAttributes = this.resources.userAttributes.filter(attrName => attrName !== id);
          break;
        case 'tenantAttributes':
          this.resources.tenantAttributes = this.resources.tenantAttributes.filter(attrName => attrName !== id);
          break;
        case 'tenantUsers':
          this.resources.tenantUsers = this.resources.tenantUsers.filter(
            tu => !(tu.tenantId === id.tenantId && tu.userId === id.userId)
          );
          break;
        case 'stripeResources':
          this.resources.stripeResources = this.resources.stripeResources.filter(res => res !== id);
          break;
        default:
          console.warn(`⚠️ 未知のリソースタイプ: ${type}`);
      }
      
      // 作成順序からも削除
      this.creationOrder = this.creationOrder.filter(
        item => !(item.type === type && JSON.stringify(item.id) === JSON.stringify(id))
      );
      
      console.log(`🗑️ リソース削除済みマーク: ${type} ${JSON.stringify(id)}`);
    } catch (error) {
      console.error(`❌ リソース削除済みマークエラー (${type}): ${(error as Error).message}`);
    }
  }

  /**
   * 削除の確実性を向上させるためのヘルパー
   */
  static async ensureResourceDeleted(client: any, type: string, id: any, deleteFunc: () => Promise<any>): Promise<boolean> {
    try {
      const result = await deleteFunc();
      const status = result?.status || result?.response?.status;
      
      if (status === 200) {
        console.log(`✅ リソース削除成功: ${type} ${JSON.stringify(id)}`);
        this.markResourceAsDeleted(type, id);
        return true;
      } else if (status === 404) {
        console.log(`ℹ️ リソース既に削除済み: ${type} ${JSON.stringify(id)}`);
        this.markResourceAsDeleted(type, id);
        return true;
      } else {
        console.warn(`⚠️ リソース削除で予期しないステータス: ${type} ${JSON.stringify(id)} - Status: ${status}`);
        return false;
      }
    } catch (error: any) {
      if (error.response?.status === 404) {
        console.log(`ℹ️ リソース既に削除済み: ${type} ${JSON.stringify(id)}`);
        this.markResourceAsDeleted(type, id);
        return true;
      }
      console.error(`❌ リソース削除エラー: ${type} ${JSON.stringify(id)} - ${error.message}`);
      return false;
    }
  }

  /**
   * 全てのリソースをクリーンアップする（作成順序の逆順）
   */
  static async cleanupAllResources(): Promise<void> {
    console.log('🧹 全リソースのクリーンアップを開始します...');
    
    try {
      const client = new AuthE2EClient();
      
      // 作成順序の逆順でクリーンアップ
      const reversedOrder = [...this.creationOrder].reverse();
      
      for (const {type, id} of reversedOrder) {
        await this.cleanupSingleResource(client, type, id);
      }

      // 最後にStripe統合とAWS Marketplace統合をクリーンアップ
      await this.cleanupStripeIntegration(client);
      await this.cleanupAwsMarketplaceIntegration(client);

      console.log('✅ 全リソースのクリーンアップが完了しました');
      
    } catch (error) {
      console.error(`❌ クリーンアップ中にエラーが発生しました: ${(error as Error).message}`);
      throw new AuthE2EError(
        `リソースクリーンアップに失敗しました: ${(error as Error).message}`,
        ErrorType.RESOURCE_ERROR,
        'StateManager.cleanupAllResources',
        error as Error
      );
    } finally {
      // クリーンアップ後は状態をリセット
      this.resetState();
    }
  }

  /**
   * 特定のリソースタイプをクリーンアップする
   */
  static async cleanupResourceType(type: keyof ResourceTracker): Promise<void> {
    console.log(`🧹 ${type}リソースのクリーンアップを開始します...`);
    
    try {
      const client = new AuthE2EClient();
      
      switch (type) {
        case 'saasUsers':
          for (const userId of this.resources.saasUsers) {
            await safeDelete(() => client.DeleteSaasUser(userId), `SaaSユーザー ${userId}`);
          }
          this.resources.saasUsers = [];
          break;

        case 'tenants':
          for (const tenantId of this.resources.tenants) {
            await safeDelete(() => client.DeleteTenant(tenantId), `テナント ${tenantId}`);
          }
          this.resources.tenants = [];
          break;

        case 'environments':
          for (const envId of this.resources.environments) {
            await safeDelete(() => client.DeleteEnv(envId), `環境 ${envId}`);
          }
          this.resources.environments = [];
          break;

        case 'roles':
          for (const roleName of this.resources.roles) {
            await safeDelete(() => client.DeleteRole(roleName), `ロール ${roleName}`);
          }
          this.resources.roles = [];
          break;

        case 'userAttributes':
          for (const attributeName of this.resources.userAttributes) {
            await safeDelete(() => client.DeleteUserAttribute(attributeName), `ユーザー属性 ${attributeName}`);
          }
          this.resources.userAttributes = [];
          break;

        case 'tenantAttributes':
          for (const attributeName of this.resources.tenantAttributes) {
            await safeDelete(() => client.DeleteTenantAttribute(attributeName), `テナント属性 ${attributeName}`);
          }
          this.resources.tenantAttributes = [];
          break;

        case 'tenantUsers':
          for (const {tenantId, userId} of this.resources.tenantUsers) {
            await safeDelete(() => client.DeleteTenantUser(tenantId, userId), `テナントユーザー ${tenantId}/${userId}`);
          }
          this.resources.tenantUsers = [];
          break;

        case 'tenantInvitations':
          for (const {tenantId, invitationId} of this.resources.tenantInvitations) {
            await safeDelete(() => client.DeleteTenantInvitation(tenantId, invitationId), `テナント招待 ${tenantId}/${invitationId}`);
          }
          this.resources.tenantInvitations = [];
          break;

        case 'stripeResources':
          await this.cleanupStripeIntegration(client);
          this.resources.stripeResources = [];
          break;

        case 'awsMarketplaceResources':
          await this.cleanupAwsMarketplaceIntegration(client);
          this.resources.awsMarketplaceResources = [];
          break;

        default:
          console.warn(`⚠️ 未知のリソースタイプ: ${type}`);
      }

      console.log(`✅ ${type}リソースのクリーンアップが完了しました`);
      
    } catch (error) {
      console.error(`❌ ${type}リソースのクリーンアップ中にエラーが発生しました: ${(error as Error).message}`);
      throw new AuthE2EError(
        `${type}リソースのクリーンアップに失敗しました: ${(error as Error).message}`,
        ErrorType.RESOURCE_ERROR,
        'StateManager.cleanupResourceType',
        error as Error
      );
    }
  }

  /**
   * 単一リソースをクリーンアップする
   */
  private static async cleanupSingleResource(client: AuthE2EClient, type: keyof ResourceTracker, id: any): Promise<void> {
    try {
      switch (type) {
        case 'saasUsers':
          await safeDelete(() => client.DeleteSaasUser(id), `SaaSユーザー ${id}`);
          break;

        case 'tenants':
          await safeDelete(() => client.DeleteTenant(id), `テナント ${id}`);
          break;

        case 'environments':
          await safeDelete(() => client.DeleteEnv(id), `環境 ${id}`);
          break;

        case 'roles':
          await safeDelete(() => client.DeleteRole(id), `ロール ${id}`);
          break;

        case 'userAttributes':
          await safeDelete(() => client.DeleteUserAttribute(id), `ユーザー属性 ${id}`);
          break;

        case 'tenantAttributes':
          await safeDelete(() => client.DeleteTenantAttribute(id), `テナント属性 ${id}`);
          break;

        case 'tenantUsers':
          await safeDelete(() => client.DeleteTenantUser(id.tenantId, id.userId), `テナントユーザー ${id.tenantId}/${id.userId}`);
          break;

        case 'tenantInvitations':
          await safeDelete(() => client.DeleteTenantInvitation(id.tenantId, id.invitationId), `テナント招待 ${id.tenantId}/${id.invitationId}`);
          break;

        case 'stripeResources':
        case 'awsMarketplaceResources':
          // これらは別途処理される
          break;

        default:
          console.warn(`⚠️ 未知のリソースタイプ: ${type}`);
      }
    } catch (error) {
      console.warn(`⚠️ 単一リソースクリーンアップ失敗 (${type}): ${(error as Error).message}`);
    }
  }

  /**
   * Stripe連携リソースをクリーンアップする
   */
  private static async cleanupStripeIntegration(client: AuthE2EClient): Promise<void> {
    try {
      console.log('🧹 Stripe連携リソースのクリーンアップを開始します...');
      
      // DeleteStripeTenantAndPricingを呼び出す
      await safeDelete(() => client.DeleteStripeTenantAndPricing(), 'Stripeテナント・プライシング連携');
      
      // DeleteStripeInfoを呼び出す
      await safeDelete(() => client.DeleteStripeInfo(), 'Stripe統合設定');
      
      console.log('✅ Stripe連携リソースのクリーンアップが完了しました');
      
    } catch (error) {
      console.warn(`⚠️ Stripe連携リソースのクリーンアップ中に警告: ${(error as Error).message}`);
    }
  }

  /**
   * AWS Marketplace連携リソースをクリーンアップする
   */
  private static async cleanupAwsMarketplaceIntegration(client: AuthE2EClient): Promise<void> {
    try {
      console.log('🧹 AWS Marketplace連携リソースのクリーンアップを開始します...');
      
      // AWS Marketplace関連のクリーンアップ処理
      // 現在は特定のクリーンアップAPIがないため、ログ出力のみ
      console.log('ℹ️ AWS Marketplace連携リソースのクリーンアップは現在サポートされていません');
      
    } catch (error) {
      console.warn(`⚠️ AWS Marketplace連携リソースのクリーンアップ中に警告: ${(error as Error).message}`);
    }
  }

  /**
   * 状態をリセットする
   */
  static resetState(): void {
    this.resources = {
      saasUsers: [],
      tenants: [],
      environments: [],
      roles: [],
      userAttributes: [],
      tenantAttributes: [],
      tenantUsers: [],
      tenantInvitations: [],
      stripeResources: [],
      awsMarketplaceResources: []
    };
    this.creationOrder = [];
    console.log('🔄 StateManagerの状態がリセットされました');
  }

  /**
   * 現在の追跡リソース数を取得する
   */
  static getResourceCounts(): Record<keyof ResourceTracker, number> {
    return {
      saasUsers: this.resources.saasUsers.length,
      tenants: this.resources.tenants.length,
      environments: this.resources.environments.length,
      roles: this.resources.roles.length,
      userAttributes: this.resources.userAttributes.length,
      tenantAttributes: this.resources.tenantAttributes.length,
      tenantUsers: this.resources.tenantUsers.length,
      tenantInvitations: this.resources.tenantInvitations.length,
      stripeResources: this.resources.stripeResources.length,
      awsMarketplaceResources: this.resources.awsMarketplaceResources.length
    };
  }

  /**
   * ストーリー失敗時の自動クリーンアップ
   */
  static async handleStoryFailure(error: Error): Promise<void> {
    console.error(`❌ ストーリー実行中にエラーが発生しました: ${error.message}`);
    console.log('🧹 失敗時の自動クリーンアップを開始します...');
    
    try {
      await this.cleanupAllResources();
      console.log('✅ 失敗時の自動クリーンアップが完了しました');
    } catch (cleanupError) {
      console.error(`❌ 失敗時のクリーンアップ中にエラーが発生しました: ${(cleanupError as Error).message}`);
    }
    
    // 元のエラーを再スローする
    throw error;
  }
}

// 既存の関数（後方互換性のため保持）
const cleanupSaasUsers = async (client: AuthE2EClient): Promise<void> => {
  const response = await client.GetSaasUsers();
  const users = response.data?.users || [];
  for (const user of users) {
    if (!user?.id || !isTestString(user.email)) {
      continue;
    }
    await safeDelete(() => client.DeleteSaasUser(user.id), `SaaS user ${user.id}`);
  }
};

const cleanupTenants = async (client: AuthE2EClient): Promise<void> => {
  const response = await client.GetTenants();
  const tenants = response.data?.tenants || [];
  for (const tenant of tenants) {
    if (!tenant?.id || !isTestString(tenant.name)) {
      continue;
    }
    await cleanupTenantUsers(client, tenant.id);
    await safeDelete(() => client.DeleteTenant(tenant.id), `tenant ${tenant.id}`);
  }
};

const cleanupTenantUsers = async (client: AuthE2EClient, tenantId: string): Promise<void> => {
  const response = await client.GetTenantUsers(tenantId);
  const users = response.data?.users || [];
  for (const user of users) {
    if (!user?.id || !isTestString(user.email)) {
      continue;
    }
    await safeDelete(
      () => client.DeleteTenantUser(tenantId, user.id),
      `tenant user ${tenantId}/${user.id}`
    );
  }
};

const cleanupEnvs = async (client: AuthE2EClient): Promise<void> => {
  const response = await client.GetEnvs();
  const envs = response.data?.envs || [];
  for (const env of envs) {
    if (typeof env?.id !== 'number' || !isTestString(env.name)) {
      continue;
    }
    await safeDelete(() => client.DeleteEnv(env.id), `env ${env.id}`);
  }
};

const cleanupRoles = async (client: AuthE2EClient): Promise<void> => {
  const response = await client.GetRoles();
  const roles = response.data?.roles || [];
  for (const role of roles) {
    if (!role?.role_name || !isTestString(role.role_name)) {
      continue;
    }
    await safeDelete(() => client.DeleteRole(role.role_name), `role ${role.role_name}`);
  }
};

const cleanupUserAttributes = async (client: AuthE2EClient): Promise<void> => {
  const response = await client.GetUserAttributes();
  const attributes = response.data?.user_attributes || [];
  for (const attribute of attributes) {
    if (!attribute?.attribute_name || !isTestString(attribute.attribute_name)) {
      continue;
    }
    await safeDelete(
      () => client.DeleteUserAttribute(attribute.attribute_name),
      `user attribute ${attribute.attribute_name}`
    );
  }
};

const cleanupTenantAttributes = async (client: AuthE2EClient): Promise<void> => {
  const response = await client.GetTenantAttributes();
  const attributes = response.data?.tenant_attributes || [];
  for (const attribute of attributes) {
    if (!attribute?.attribute_name || !isTestString(attribute.attribute_name)) {
      continue;
    }
    await safeDelete(
      () => client.DeleteTenantAttribute(attribute.attribute_name),
      `tenant attribute ${attribute.attribute_name}`
    );
  }
};

export const cleanupAuthTestArtifacts = async (client: AuthE2EClient): Promise<void> => {
  await cleanupTenants(client);
  await cleanupEnvs(client);
  await cleanupRoles(client);
  await cleanupUserAttributes(client);
  await cleanupTenantAttributes(client);
  await cleanupSaasUsers(client);
};

export const ensureAuthTestPreconditions = async (client: AuthE2EClient): Promise<void> => {
  await cleanupAuthTestArtifacts(client);
};
