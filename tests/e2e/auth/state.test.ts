/**
 * StateManagerのテスト
 * StateManagerクラスの基本機能をテストします
 */

import { StateManager } from './state';

describe('StateManager', () => {
  beforeEach(() => {
    // 各テスト前に状態をリセット
    StateManager.resetState();
  });

  afterEach(() => {
    // 各テスト後に状態をリセット
    StateManager.resetState();
  });

  describe('trackResource', () => {
    it('SaaSユーザーを正しく追跡する', () => {
      const userId = 'test-user-123';
      StateManager.trackResource('saasUsers', userId);
      
      const counts = StateManager.getResourceCounts();
      expect(counts.saasUsers).toBe(1);
    });

    it('テナントを正しく追跡する', () => {
      const tenantId = 'test-tenant-123';
      StateManager.trackResource('tenants', tenantId);
      
      const counts = StateManager.getResourceCounts();
      expect(counts.tenants).toBe(1);
    });

    it('環境を正しく追跡する', () => {
      const envId = 12345;
      StateManager.trackResource('environments', envId);
      
      const counts = StateManager.getResourceCounts();
      expect(counts.environments).toBe(1);
    });

    it('ロールを正しく追跡する', () => {
      const roleName = 'test-role';
      StateManager.trackResource('roles', roleName);
      
      const counts = StateManager.getResourceCounts();
      expect(counts.roles).toBe(1);
    });

    it('ユーザー属性を正しく追跡する', () => {
      const attributeName = 'test-attribute';
      StateManager.trackResource('userAttributes', attributeName);
      
      const counts = StateManager.getResourceCounts();
      expect(counts.userAttributes).toBe(1);
    });

    it('テナント属性を正しく追跡する', () => {
      const attributeName = 'test-tenant-attribute';
      StateManager.trackResource('tenantAttributes', attributeName);
      
      const counts = StateManager.getResourceCounts();
      expect(counts.tenantAttributes).toBe(1);
    });

    it('テナントユーザーを正しく追跡する', () => {
      const tenantUser = { tenantId: 'tenant-123', userId: 'user-456' };
      StateManager.trackResource('tenantUsers', tenantUser);
      
      const counts = StateManager.getResourceCounts();
      expect(counts.tenantUsers).toBe(1);
    });

    it('テナント招待を正しく追跡する', () => {
      const invitation = { tenantId: 'tenant-123', invitationId: 'invitation-456' };
      StateManager.trackResource('tenantInvitations', invitation);
      
      const counts = StateManager.getResourceCounts();
      expect(counts.tenantInvitations).toBe(1);
    });

    it('Stripeリソースを正しく追跡する', () => {
      const stripeResource = 'stripe-resource-123';
      StateManager.trackResource('stripeResources', stripeResource);
      
      const counts = StateManager.getResourceCounts();
      expect(counts.stripeResources).toBe(1);
    });

    it('AWS Marketplaceリソースを正しく追跡する', () => {
      const awsResource = 'aws-resource-123';
      StateManager.trackResource('awsMarketplaceResources', awsResource);
      
      const counts = StateManager.getResourceCounts();
      expect(counts.awsMarketplaceResources).toBe(1);
    });

    it('重複するリソースを追跡しない', () => {
      const userId = 'test-user-123';
      StateManager.trackResource('saasUsers', userId);
      StateManager.trackResource('saasUsers', userId); // 重複
      
      const counts = StateManager.getResourceCounts();
      expect(counts.saasUsers).toBe(1);
    });

    it('複数の異なるリソースタイプを追跡する', () => {
      StateManager.trackResource('saasUsers', 'user-1');
      StateManager.trackResource('tenants', 'tenant-1');
      StateManager.trackResource('environments', 123);
      StateManager.trackResource('roles', 'role-1');
      
      const counts = StateManager.getResourceCounts();
      expect(counts.saasUsers).toBe(1);
      expect(counts.tenants).toBe(1);
      expect(counts.environments).toBe(1);
      expect(counts.roles).toBe(1);
    });
  });

  describe('resetState', () => {
    it('全てのリソース追跡をリセットする', () => {
      // リソースを追加
      StateManager.trackResource('saasUsers', 'user-1');
      StateManager.trackResource('tenants', 'tenant-1');
      StateManager.trackResource('environments', 123);
      
      // リセット前の確認
      let counts = StateManager.getResourceCounts();
      expect(counts.saasUsers).toBe(1);
      expect(counts.tenants).toBe(1);
      expect(counts.environments).toBe(1);
      
      // リセット実行
      StateManager.resetState();
      
      // リセット後の確認
      counts = StateManager.getResourceCounts();
      expect(counts.saasUsers).toBe(0);
      expect(counts.tenants).toBe(0);
      expect(counts.environments).toBe(0);
      expect(counts.roles).toBe(0);
      expect(counts.userAttributes).toBe(0);
      expect(counts.tenantAttributes).toBe(0);
      expect(counts.tenantUsers).toBe(0);
      expect(counts.tenantInvitations).toBe(0);
      expect(counts.stripeResources).toBe(0);
      expect(counts.awsMarketplaceResources).toBe(0);
    });
  });

  describe('getResourceCounts', () => {
    it('正確なリソース数を返す', () => {
      StateManager.trackResource('saasUsers', 'user-1');
      StateManager.trackResource('saasUsers', 'user-2');
      StateManager.trackResource('tenants', 'tenant-1');
      
      const counts = StateManager.getResourceCounts();
      expect(counts.saasUsers).toBe(2);
      expect(counts.tenants).toBe(1);
      expect(counts.environments).toBe(0);
    });
  });

  describe('handleStoryFailure', () => {
    it('エラーを再スローする', async () => {
      const testError = new Error('Test error');
      
      await expect(StateManager.handleStoryFailure(testError)).rejects.toThrow('Test error');
    });
  });
});