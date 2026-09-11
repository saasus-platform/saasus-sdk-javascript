import { AuthE2EError, ErrorType } from '../types';

/**
 * Stripe統合管理クラス
 * ストーリー実行前にStripe Secret Keyの設定を自動的に更新する
 */
export class StripeIntegration {
  /**
   * Stripe統合を確認し、必要に応じて設定する
   */
  static async ensureStripeIntegration(): Promise<void> {
    try {
      const stripeSecretKey = this.getStripeSecretKey();
      
      if (!stripeSecretKey) {
        throw new Error('STRIPE_SECRET_KEYが設定されていません。Stripe統合には必須です。');
      }

      console.log('Stripe統合を設定中...');
      await this.configureStripeIntegration();
      console.log('✅ Stripe統合の設定が完了しました');

    } catch (error: any) {
      throw new AuthE2EError(
        `Stripe統合の確認に失敗しました: ${error.message}`,
        ErrorType.EXTERNAL_SERVICE_ERROR,
        'StripeIntegration.ensureStripeIntegration',
        error
      );
    }
  }

  /**
   * Stripe統合を設定する
   */
  static async configureStripeIntegration(): Promise<void> {
    try {
      const stripeSecretKey = this.getStripeSecretKey();
      
      if (!stripeSecretKey) {
        throw new Error('STRIPE_SECRET_KEY環境変数が設定されていません');
      }

      // AuthE2EClientを使用してUpdateStripeInfoを呼び出す
      const { AuthE2EClient } = await import('../client');
      const client = new AuthE2EClient();

      const payload = {
        secret_key: stripeSecretKey
      };

      try {
        await client.UpdateStripeInfo(payload);
        console.log('Stripe統合が正常に設定されました');

      } catch (error: any) {
        if (error.response?.status === 400) {
          try {
            const info = await client.GetStripeInfo();
            if (info?.status === 200) {
              console.log('Stripe統合は既に設定されています（既存設定を確認済み）');
              return;
            }
          } catch (infoError) {
            // GetStripeInfoが失敗する場合は元のエラーを優先する
          }
        }
        throw error;
      }

    } catch (error: any) {
      throw new AuthE2EError(
        `Stripe統合の設定に失敗しました: ${error.message}`,
        ErrorType.EXTERNAL_SERVICE_ERROR,
        'StripeIntegration.configureStripeIntegration',
        error
      );
    }
  }

  /**
   * Stripe統合をリセットする
   */
  static async resetStripeIntegration(): Promise<void> {
    try {
      const { AuthE2EClient } = await import('../client');
      const client = new AuthE2EClient();

      await client.DeleteStripeInfo();
      console.log('Stripe統合がリセットされました');

    } catch (error: any) {
      // リセット時のエラーは警告として扱う
      console.warn(`Stripe統合のリセット中に警告: ${error.message}`);
    }
  }

  /**
   * STRIPE_SECRET_KEY環境変数を取得する
   */
  static getStripeSecretKey(): string {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    
    if (!stripeSecretKey) {
      return '';
    }

    // Stripeのシークレットキーの形式を簡単に検証
    if (!stripeSecretKey.startsWith('sk_')) {
      throw new AuthE2EError(
        'STRIPE_SECRET_KEYの形式が正しくありません（sk_で始まる必要があります）',
        ErrorType.CONFIG_ERROR,
        'StripeIntegration.getStripeSecretKey'
      );
    }

    return stripeSecretKey;
  }

  /**
   * Stripe統合が利用可能かチェックする
   */
  static isStripeIntegrationAvailable(): boolean {
    try {
      const stripeSecretKey = this.getStripeSecretKey();
      return stripeSecretKey.length > 0;
    } catch (error) {
      return false;
    }
  }

  /**
   * Stripeテナントリンクをクリーンアップする
   */
  static async cleanupStripeTenantLinks(): Promise<void> {
    try {
      const { AuthE2EClient } = await import('../client');
      const client = new AuthE2EClient();

      // DeleteStripeTenantAndPricingを呼び出す
      await client.DeleteStripeTenantAndPricing();
      console.log('Stripeテナント・プライシング連携がクリーンアップされました');

    } catch (error: any) {
      // クリーンアップ時のエラーは警告として扱う
      console.warn(`Stripeテナントリンクのクリーンアップ中に警告: ${error.message}`);
    }
  }

  /**
   * Stripe統合の現在の状態を取得する
   */
  static async getStripeIntegrationStatus(): Promise<any> {
    try {
      const { AuthE2EClient } = await import('../client');
      const client = new AuthE2EClient();

      const response = await client.GetStripeInfo();
      return response.data;

    } catch (error: any) {
      if (error.response?.status === 404) {
        return null; // 設定されていない
      }
      throw error;
    }
  }
}
