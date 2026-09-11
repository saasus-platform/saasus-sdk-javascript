/**
 * 統合機能のエクスポート
 * ストーリー実行前の自動セットアップ機能を提供
 */

import { TestParams } from '../types';
import { AwsMarketplaceIntegration } from './aws-marketplace';
import { StripeIntegration } from './stripe';

/**
 * 全ての統合セットアップを実行する
 * ストーリー実行前に呼び出される
 */
export async function setupAllIntegrations(params: TestParams): Promise<void> {
  console.log('統合セットアップを開始します...');

  try {
    // Stripe統合のセットアップ
    await StripeIntegration.ensureStripeIntegration();
    
    // AWS Marketplace統合のセットアップ
    await AwsMarketplaceIntegration.ensureAwsMarketplaceIntegration(params);
    
    console.log('全ての統合セットアップが完了しました');
  } catch (error: any) {
    console.error('統合セットアップ中にエラーが発生しました:', error.message);
    throw error;
  }
}

/**
 * Stripe統合のみセットアップする
 */
export async function setupStripeIntegration(): Promise<void> {
  console.log('Stripe統合セットアップを開始します...');
  await StripeIntegration.ensureStripeIntegration();
  console.log('Stripe統合セットアップが完了しました');
}

/**
 * AWS Marketplace統合のみセットアップする
 */
export async function setupAwsMarketplaceIntegration(params: TestParams): Promise<void> {
  console.log('AWS Marketplace統合セットアップを開始します...');
  await AwsMarketplaceIntegration.ensureAwsMarketplaceIntegration(params);
  console.log('AWS Marketplace統合セットアップが完了しました');
}

/**
 * 統合が利用可能かチェックする
 */
export function checkIntegrationAvailability(params: TestParams): {
  stripe: boolean;
  awsMarketplace: boolean;
} {
  return {
    stripe: StripeIntegration.isStripeIntegrationAvailable(),
    awsMarketplace: AwsMarketplaceIntegration.isAwsMarketplaceIntegrationAvailable(params)
  };
}

/**
 * 全ての統合リソースをクリーンアップする
 */
export async function cleanupAllIntegrations(): Promise<void> {
  console.log('統合リソースのクリーンアップを開始します...');

  try {
    // Stripe関連リソースのクリーンアップ
    await StripeIntegration.cleanupStripeTenantLinks();
    
    // AWS Marketplace関連リソースのクリーンアップ
    await AwsMarketplaceIntegration.cleanupAwsMarketplaceResources();
    
    console.log('全ての統合リソースのクリーンアップが完了しました');
  } catch (error: any) {
    console.warn('統合リソースのクリーンアップ中に警告:', error.message);
  }
}

// 個別の統合クラスもエクスポート
export { AwsMarketplaceIntegration } from './aws-marketplace';
export { StripeIntegration } from './stripe';
