/**
 * 統合機能のテスト
 */

import { TestParams } from '../types';
import { AwsMarketplaceIntegration } from './aws-marketplace';
import { checkIntegrationAvailability } from './index';
import { StripeIntegration } from './stripe';

describe('統合機能テスト', () => {
  // モックのテストパラメータ
  const mockTestParams: TestParams = {
    SignUpWithAwsMarketplace: {
      createParams: {
        email: 'test@example.com',
        listing_status: 'public',
        product_code: 'test-product-code',
        registration_token: 'test-token',
        role_arn: 'arn:aws:iam::123456789012:role/test-role',
        sns_topic_arn: 'arn:aws:sns:us-east-1:123456789012:test-topic',
        seller_sns_topic_arn: 'arn:aws:sns:us-east-1:123456789012:seller-topic',
        cas_bucket_name: 'test-cas-bucket',
        cas_sns_topic_arn: 'arn:aws:sns:us-east-1:123456789012:cas-topic',
        sqs_arn: 'arn:aws:sqs:us-east-1:123456789012:test-queue',
        role_external_id: 'test-external-id'
      }
    }
  } as TestParams;

  describe('Stripe統合', () => {
    test('STRIPE_SECRET_KEY環境変数の確認', () => {
      // 環境変数が設定されていない場合のテスト
      const originalStripeKey = process.env.STRIPE_SECRET_KEY;
      delete process.env.STRIPE_SECRET_KEY;

      expect(StripeIntegration.getStripeSecretKey()).toBe('');
      expect(StripeIntegration.isStripeIntegrationAvailable()).toBe(false);

      // 環境変数を復元
      if (originalStripeKey) {
        process.env.STRIPE_SECRET_KEY = originalStripeKey;
      }
    });

    test('Stripe Secret Keyの形式検証', () => {
      const originalStripeKey = process.env.STRIPE_SECRET_KEY;
      
      // 正しい形式のテスト
      process.env.STRIPE_SECRET_KEY = 'sk_test_1234567890abcdef';
      expect(() => StripeIntegration.getStripeSecretKey()).not.toThrow();
      expect(StripeIntegration.isStripeIntegrationAvailable()).toBe(true);

      // 間違った形式のテスト
      process.env.STRIPE_SECRET_KEY = 'invalid_key';
      expect(() => StripeIntegration.getStripeSecretKey()).toThrow();

      // 環境変数を復元
      if (originalStripeKey) {
        process.env.STRIPE_SECRET_KEY = originalStripeKey;
      } else {
        delete process.env.STRIPE_SECRET_KEY;
      }
    });
  });

  describe('AWS Marketplace統合', () => {
    test('AWS Marketplace統合の利用可能性チェック', () => {
      // 有効なパラメータでのテスト
      expect(AwsMarketplaceIntegration.isAwsMarketplaceIntegrationAvailable(mockTestParams)).toBe(true);

      // 無効なパラメータでのテスト
      const invalidParams = {
        SignUpWithAwsMarketplace: {
          createParams: {
            email: 'test@example.com'
            // product_codeとrole_arnが不足
          }
        }
      } as TestParams;

      expect(AwsMarketplaceIntegration.isAwsMarketplaceIntegrationAvailable(invalidParams)).toBe(false);
    });

    test('Registration tokenの検証', () => {
      // 有効なトークン
      expect(AwsMarketplaceIntegration.validateRegistrationToken('valid-token-123')).toBe(true);
      expect(AwsMarketplaceIntegration.validateRegistrationToken('abc123-def456_ghi789')).toBe(true);

      // 無効なトークン
      expect(AwsMarketplaceIntegration.validateRegistrationToken('')).toBe(false);
      expect(AwsMarketplaceIntegration.validateRegistrationToken('short')).toBe(false);
      expect(AwsMarketplaceIntegration.validateRegistrationToken('invalid@token')).toBe(false);
    });

    test('環境変数からの設定読み込み', () => {
      const originalEnvVars = {
        AWS_MARKETPLACE_PRODUCT_CODE: process.env.AWS_MARKETPLACE_PRODUCT_CODE,
        AWS_MARKETPLACE_ROLE_ARN: process.env.AWS_MARKETPLACE_ROLE_ARN
      };

      // テスト用環境変数を設定
      process.env.AWS_MARKETPLACE_PRODUCT_CODE = 'test-product';
      process.env.AWS_MARKETPLACE_ROLE_ARN = 'test-role-arn';

      const config = AwsMarketplaceIntegration.loadConfigFromEnv();
      expect(config.productCode).toBe('test-product');
      expect(config.roleArn).toBe('test-role-arn');

      // 環境変数を復元
      if (originalEnvVars.AWS_MARKETPLACE_PRODUCT_CODE) {
        process.env.AWS_MARKETPLACE_PRODUCT_CODE = originalEnvVars.AWS_MARKETPLACE_PRODUCT_CODE;
      } else {
        delete process.env.AWS_MARKETPLACE_PRODUCT_CODE;
      }

      if (originalEnvVars.AWS_MARKETPLACE_ROLE_ARN) {
        process.env.AWS_MARKETPLACE_ROLE_ARN = originalEnvVars.AWS_MARKETPLACE_ROLE_ARN;
      } else {
        delete process.env.AWS_MARKETPLACE_ROLE_ARN;
      }
    });
  });

  describe('統合可用性チェック', () => {
    test('統合可用性の確認', () => {
      const availability = checkIntegrationAvailability(mockTestParams);
      
      expect(typeof availability.stripe).toBe('boolean');
      expect(typeof availability.awsMarketplace).toBe('boolean');
    });
  });
});