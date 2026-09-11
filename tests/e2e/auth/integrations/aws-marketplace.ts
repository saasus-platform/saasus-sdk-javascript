import console from 'console';
import { AuthE2EError, AwsMarketplaceConfig, ErrorType, TestParams } from '../types';
import { AuthE2EClient } from '../client';

/**
 * AWS Marketplace統合管理クラス
 * ストーリー実行前にAWS Marketplace設定を自動的に更新する
 */
export class AwsMarketplaceIntegration {
  /**
   * AWS Marketplace統合を確認し、必要に応じて設定する
   */
  static async ensureAwsMarketplaceIntegration(params: TestParams): Promise<void> {
    try {
      console.log('AWS Marketplace統合を設定中...');
      
      // テストパラメータからAWS Marketplace設定を取得
      const awsMarketplaceParams = params.SignUpWithAwsMarketplace?.createParams;
      
      if (!awsMarketplaceParams) {
        console.log('AWS Marketplaceパラメータが見つからないため、統合をスキップします');
        return;
      }

      // AWS Marketplace設定を更新
      await this.updateSettings({
        productCode: awsMarketplaceParams.product_code,
        roleArn: awsMarketplaceParams.role_arn,
        snsTopicArn: awsMarketplaceParams.sns_topic_arn,
        sellerSnsTopicArn: awsMarketplaceParams.seller_sns_topic_arn,
        casBucketName: awsMarketplaceParams.cas_bucket_name,
        casSnsTopicArn: awsMarketplaceParams.cas_sns_topic_arn,
        sqsArn: awsMarketplaceParams.sqs_arn,
        roleExternalId: awsMarketplaceParams.role_external_id
      });

      // Listing statusを更新
      if (awsMarketplaceParams.listing_status) {
        await this.updateListingStatus(awsMarketplaceParams.listing_status);
      }

      console.log('AWS Marketplace統合の設定が完了しました');

    } catch (error: any) {
      throw new AuthE2EError(
        `AWS Marketplace統合の確認に失敗しました: ${error.message}`,
        ErrorType.EXTERNAL_SERVICE_ERROR,
        'AwsMarketplaceIntegration.ensureAwsMarketplaceIntegration',
        error
      );
    }
  }

  /**
   * AWS Marketplace設定を更新する
   */
  static async updateSettings(config: AwsMarketplaceConfig): Promise<void> {
    try {
      const { AuthE2EClient } = await import('../client');
      const client = new AuthE2EClient();

      const payload = {
        product_code: config.productCode,
        role_arn: config.roleArn,
        sns_topic_arn: config.snsTopicArn,
        seller_sns_topic_arn: config.sellerSnsTopicArn,
        cas_bucket_name: config.casBucketName,
        cas_sns_topic_arn: config.casSnsTopicArn,
        sqs_arn: config.sqsArn,
        role_external_id: config.roleExternalId
      };

      // 未定義の値を除外
      const filteredPayload = Object.fromEntries(
        Object.entries(payload).filter(([_, value]) => value !== undefined)
      );

      await client.UpdateSettings(filteredPayload);
      console.log('AWS Marketplace設定が正常に更新されました');

    } catch (error: any) {
      throw new AuthE2EError(
        `AWS Marketplace設定の更新に失敗しました: ${error.message}`,
        ErrorType.EXTERNAL_SERVICE_ERROR,
        'AwsMarketplaceIntegration.updateSettings',
        error
      );
    }
  }

  /**
   * AWS Marketplace listing statusを更新する
   */
  static async updateListingStatus(status: string): Promise<void> {
    try {
      const { AuthE2EClient } = await import('../client');
      const client = new AuthE2EClient();

      const payload = {
        listing_status: status
      };

      await client.UpdateListingStatus(payload);
      console.log(`AWS Marketplace listing statusが ${status} に更新されました`);

    } catch (error: any) {
      throw new AuthE2EError(
        `AWS Marketplace listing statusの更新に失敗しました: ${error.message}`,
        ErrorType.EXTERNAL_SERVICE_ERROR,
        'AwsMarketplaceIntegration.updateListingStatus',
        error
      );
    }
  }

  /**
   * AWS Marketplace設定の現在の状態を取得する
   */
  static async getSettings(): Promise<any> {
    try {
      const { AuthE2EClient } = await import('../client');
      const client = new AuthE2EClient();

      const response = await client.GetSettings();
      return response.data;

    } catch (error: any) {
      if (error.response?.status === 404) {
        return null; // 設定されていない
      }
      throw error;
    }
  }

  /**
   * AWS Marketplace listing statusの現在の状態を取得する
   */
  static async getListingStatus(): Promise<any> {
    try {
      const { AuthE2EClient } = await import('../client');
      const client = new AuthE2EClient();

      const response = await client.GetListingStatus();
      return response.data;

    } catch (error: any) {
      if (error.response?.status === 404) {
        return null; // 設定されていない
      }
      throw error;
    }
  }

  /**
   * AWS Marketplace統合が利用可能かチェックする
   */
  static isAwsMarketplaceIntegrationAvailable(params: TestParams): boolean {
    const awsMarketplaceParams = params.SignUpWithAwsMarketplace?.createParams;
    return !!(awsMarketplaceParams?.product_code && awsMarketplaceParams?.role_arn);
  }

  /**
   * AWS Marketplace関連リソースをクリーンアップする
   */
  static async cleanupAwsMarketplaceResources(): Promise<void> {
    try {
      // 現在のところ、特定のクリーンアップ処理は不要
      // 将来的に必要になった場合はここに実装
      console.log('AWS Marketplace関連リソースのクリーンアップは不要です');

    } catch (error: any) {
      // クリーンアップ時のエラーは警告として扱う
      console.warn(`AWS Marketplace関連リソースのクリーンアップ中に警告: ${error.message}`);
    }
  }

  /**
   * 環境変数からAWS Marketplace設定を読み込む
   */
  static loadConfigFromEnv(): AwsMarketplaceConfig {
    return {
      productCode: process.env.AWS_MARKETPLACE_PRODUCT_CODE,
      roleArn: process.env.AWS_MARKETPLACE_ROLE_ARN,
      snsTopicArn: process.env.AWS_MARKETPLACE_SNS_TOPIC_ARN,
      sellerSnsTopicArn: process.env.AWS_MARKETPLACE_SELLER_SNS_TOPIC_ARN,
      casBucketName: process.env.AWS_MARKETPLACE_CAS_BUCKET_NAME,
      casSnsTopicArn: process.env.AWS_MARKETPLACE_CAS_SNS_TOPIC_ARN,
      sqsArn: process.env.AWS_MARKETPLACE_SQS_ARN,
      roleExternalId: process.env.AWS_MARKETPLACE_ROLE_EXTERNAL_ID
    };
  }

  /**
   * AWS Marketplace registration tokenを検証する
   */
  static validateRegistrationToken(token: string): boolean {
    if (!token) {
      return false;
    }

    // 基本的な形式チェック（実際のトークン形式に応じて調整）
    return token.length > 10 && /^[a-zA-Z0-9\-_]+$/.test(token);
  }
}