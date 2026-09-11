import process from 'process';
import { MFAManager } from './mfa';
import { CognitoTokenProvider } from './token-provider';

describe('Cognito機能テスト', () => {
  describe('CognitoTokenProvider', () => {
    test('環境変数からCognito設定を読み込める', () => {
      // 環境変数を一時的に設定
      const originalUserPoolId = process.env.E2E_COGNITO_USER_POOL_ID;
      const originalClientId = process.env.E2E_COGNITO_CLIENT_ID;
      
      process.env.E2E_COGNITO_USER_POOL_ID = 'test-pool-id';
      process.env.E2E_COGNITO_CLIENT_ID = 'test-client-id';
      
      try {
        const config = CognitoTokenProvider.loadConfigFromEnv();
        
        expect(config.userPoolId).toBe('test-pool-id');
        expect(config.clientId).toBe('test-client-id');
        expect(config.region).toBeDefined();
      } finally {
        // 環境変数を復元
        if (originalUserPoolId) {
          process.env.E2E_COGNITO_USER_POOL_ID = originalUserPoolId;
        } else {
          delete process.env.E2E_COGNITO_USER_POOL_ID;
        }
        if (originalClientId) {
          process.env.E2E_COGNITO_CLIENT_ID = originalClientId;
        } else {
          delete process.env.E2E_COGNITO_CLIENT_ID;
        }
      }
    });

    test('必要な環境変数が不足している場合はエラーを投げる', () => {
      // 一時的に環境変数を削除
      const originalUserPoolId = process.env.E2E_COGNITO_USER_POOL_ID;
      delete process.env.E2E_COGNITO_USER_POOL_ID;

      expect(() => {
        CognitoTokenProvider.loadConfigFromEnv();
      }).toThrow('E2E_COGNITO_USER_POOL_ID環境変数が設定されていません');

      // 環境変数を復元
      if (originalUserPoolId) {
        process.env.E2E_COGNITO_USER_POOL_ID = originalUserPoolId;
      }
    });
  });

  describe('MFAManager', () => {
    test('TOTPコードを生成できる', () => {
      const secret = 'JBSWY3DPEHPK3PXP'; // テスト用のBase32シークレット
      const totpCode = MFAManager.generateTOTPCode(secret);
      
      expect(totpCode).toMatch(/^\d{6}$/); // 6桁の数字
    });

    test('無効なシークレットでもTOTPコードを生成する（otplibの仕様）', () => {
      const invalidSecret = 'invalid-secret';
      
      // otplibは無効なシークレットでもTOTPコードを生成する
      const totpCode = MFAManager.generateTOTPCode(invalidSecret);
      expect(totpCode).toMatch(/^\d{6}$/);
    });

    test('レスポンスからシークレットコードを抽出できる', () => {
      const response = {
        data: {
          secret_code: 'test-secret-code'
        }
      };
      
      const secretCode = MFAManager.extractSecretCodeFromResponse(response);
      expect(secretCode).toBe('test-secret-code');
    });

    test('シークレットコードが見つからない場合はnullを返す', () => {
      const response = {
        data: {}
      };
      
      const secretCode = MFAManager.extractSecretCodeFromResponse(response);
      expect(secretCode).toBeNull();
    });

    test('MFAフローの順序を検証できる', () => {
      const variables = {
        software_token_secret: 'test-secret'
      };

      // CreateSecretCodeは常に成功
      expect(() => {
        MFAManager.validateMFAFlowOrder(variables, 'CreateSecretCode');
      }).not.toThrow();

      // UpdateSoftwareTokenはsoftware_token_secretが必要
      expect(() => {
        MFAManager.validateMFAFlowOrder(variables, 'UpdateSoftwareToken');
      }).not.toThrow();

      // UpdateUserMfaPreferenceはverification_codeも必要
      expect(() => {
        MFAManager.validateMFAFlowOrder(variables, 'UpdateUserMfaPreference');
      }).toThrow('verification_codeを設定してください');
    });

    test('QRコードURIを生成できる', () => {
      const secret = 'JBSWY3DPEHPK3PXP';
      const label = 'test@example.com';
      const issuer = 'SaaSus';
      
      const uri = MFAManager.generateQRCodeURI(secret, label, issuer);
      
      expect(uri).toContain('otpauth://totp/');
      expect(uri).toContain('test%40example.com'); // URLエンコードされた@
      expect(uri).toContain(issuer);
      expect(uri).toContain(secret);
    });
  });
});