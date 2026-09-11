/**
 * Cognito統合テスト
 * 実際の環境変数を使用してCognito機能をテストする
 */

import { StoryVariables } from '../types';
import { MFAManager } from './mfa';
import { CognitoTokenProvider } from './token-provider';

describe('Cognito統合テスト', () => {
  // 実際のテストは環境変数が設定されている場合のみ実行
  const shouldRunIntegrationTests = process.env.E2E_COGNITO_USER_POOL_ID && 
                                   process.env.E2E_COGNITO_CLIENT_ID &&
                                   process.env.E2E_COGNITO_USERNAME &&
                                   process.env.E2E_COGNITO_PASSWORD;

  describe('CognitoTokenProvider統合テスト', () => {
    test.skip('実際のCognitoからトークンを取得できる', async () => {
      if (!shouldRunIntegrationTests) {
        console.log('統合テストをスキップ: 必要な環境変数が設定されていません');
        return;
      }

      const email = process.env.E2E_COGNITO_USERNAME!;
      const password = process.env.E2E_COGNITO_PASSWORD!;

      try {
        const tokens = await CognitoTokenProvider.obtainUserTokens(email, password);
        
        expect(tokens.accessToken).toBeDefined();
        expect(tokens.idToken).toBeDefined();
        expect(tokens.refreshToken).toBeDefined();
        
        console.log('Cognitoトークンの取得に成功しました');
      } catch (error) {
        console.error('Cognitoトークンの取得に失敗:', error);
        throw error;
      }
    }, 30000); // 30秒のタイムアウト

    test('設定読み込みが正常に動作する', () => {
      if (!shouldRunIntegrationTests) {
        console.log('統合テストをスキップ: 必要な環境変数が設定されていません');
        return;
      }

      const config = CognitoTokenProvider.loadConfigFromEnv();
      
      expect(config.userPoolId).toBe(process.env.E2E_COGNITO_USER_POOL_ID);
      expect(config.clientId).toBe(process.env.E2E_COGNITO_CLIENT_ID);
      expect(config.region).toBe(process.env.E2E_COGNITO_REGION || 'ap-northeast-1');
    });
  });

  describe('MFAManager統合テスト', () => {
    test('MFAフロー全体が正常に動作する', () => {
      const variables: StoryVariables = {};

      // Step 1: CreateSecretCode（シミュレーション）
      MFAManager.validateMFAFlowOrder(variables, 'CreateSecretCode');
      
      // シークレットコードを設定
      variables.software_token_secret = 'JBSWY3DPEHPK3PXP';

      // Step 2: UpdateSoftwareToken
      MFAManager.validateMFAFlowOrder(variables, 'UpdateSoftwareToken');
      MFAManager.ensureCognitoSoftwareTokenPrepared(variables);
      
      expect(variables.verification_code).toBeDefined();
      expect(variables.verification_code).toMatch(/^\d{6}$/);

      // Step 3: UpdateUserMfaPreference
      MFAManager.validateMFAFlowOrder(variables, 'UpdateUserMfaPreference');
      
      console.log('MFAフロー全体のテストが成功しました');
    });

    test('レスポンス解析が正常に動作する', () => {
      // 正常なレスポンス
      const validResponse = {
        data: {
          secret_code: 'ABCDEFGHIJKLMNOP'
        }
      };
      
      const secretCode = MFAManager.extractSecretCodeFromResponse(validResponse);
      expect(secretCode).toBe('ABCDEFGHIJKLMNOP');

      // 異なる構造のレスポンス
      const alternativeResponse = {
        secret_code: 'QRSTUVWXYZ123456'
      };
      
      const secretCode2 = MFAManager.extractSecretCodeFromResponse(alternativeResponse);
      expect(secretCode2).toBe('QRSTUVWXYZ123456');

      // 無効なレスポンス
      const invalidResponse = {
        data: {
          other_field: 'value'
        }
      };
      
      const secretCode3 = MFAManager.extractSecretCodeFromResponse(invalidResponse);
      expect(secretCode3).toBeNull();
    });
  });

  describe('統合機能テスト', () => {
    test('Cognitoトークンプロバイダーとクライアントの連携', () => {
      // 設定の読み込みテスト
      const config = CognitoTokenProvider.loadConfigFromEnv();
      expect(config).toBeDefined();
      
      // MFAマネージャーとの連携テスト
      const variables: StoryVariables = {
        software_token_secret: 'JBSWY3DPEHPK3PXP'
      };
      
      MFAManager.ensureCognitoSoftwareTokenPrepared(variables);
      expect(variables.verification_code).toBeDefined();
      
      console.log('統合機能テストが成功しました');
    });
  });
});