import { authenticator } from 'otplib';
import { StoryVariables } from '../types';

/**
 * MFA（多要素認証）管理クラス
 * TOTP（Time-based One-Time Password）の生成とMFAフローの管理を行う
 */
export class MFAManager {
  /**
   * TOTPコードを生成する
   * @param secret シークレットキー（Base32エンコード）
   * @returns 6桁のTOTPコード
   */
  static generateTOTPCode(secret: string): string {
    try {
      // otplibのauthenticatorを使用してTOTPコードを生成
      const token = authenticator.generate(secret);
      
      if (!token || token.length !== 6) {
        throw new Error(`無効なTOTPコードが生成されました: ${token}`);
      }
      
      return token;
    } catch (error: any) {
      throw new Error(`TOTPコードの生成に失敗しました: ${error.message}`);
    }
  }

  /**
   * Cognitoソフトウェアトークンの準備を確認し、必要に応じてTOTPコードを生成
   * @param variables ストーリー変数（software_token_secretを含む）
   */
  static ensureCognitoSoftwareTokenPrepared(variables: StoryVariables): void {
    const secret = variables.software_token_secret;
    
    if (!secret) {
      throw new Error('software_token_secretが変数マップに設定されていません。CreateSecretCodeを先に実行してください。');
    }

    try {
      // TOTPコードを生成してverification_codeとして設定
      const totpCode = this.generateTOTPCode(secret);
      variables.verification_code = totpCode;
      
      console.log(`TOTP verification code generated: ${totpCode}`);
    } catch (error: any) {
      throw new Error(`Cognitoソフトウェアトークンの準備に失敗しました: ${error.message}`);
    }
  }

  /**
   * CreateSecretCodeのレスポンスからシークレットコードを抽出
   * @param response CreateSecretCodeのAPIレスポンス
   * @returns 抽出されたシークレットコード、見つからない場合はnull
   */
  static extractSecretCodeFromResponse(response: any): string | null {
    try {
      // レスポンスの構造を確認してsecret_codeを抽出
      if (response && response.data && response.data.secret_code) {
        return response.data.secret_code;
      }
      
      if (response && response.secret_code) {
        return response.secret_code;
      }
      
      // レスポンスボディ全体をログ出力してデバッグ
      console.log('CreateSecretCode response structure:', JSON.stringify(response, null, 2));
      
      return null;
    } catch (error: any) {
      console.error(`シークレットコードの抽出中にエラーが発生しました: ${error.message}`);
      return null;
    }
  }

  /**
   * MFAフローの実行順序を検証
   * CreateSecretCode → UpdateSoftwareToken → UpdateUserMfaPreferenceの順序を確認
   */
  static validateMFAFlowOrder(variables: StoryVariables, currentStep: 'CreateSecretCode' | 'UpdateSoftwareToken' | 'UpdateUserMfaPreference'): void {
    switch (currentStep) {
      case 'CreateSecretCode':
        // 最初のステップなので特に検証不要
        break;
        
      case 'UpdateSoftwareToken':
        if (!variables.software_token_secret) {
          throw new Error('UpdateSoftwareTokenを実行する前にCreateSecretCodeを実行してsoftware_token_secretを設定してください');
        }
        break;
        
      case 'UpdateUserMfaPreference':
        if (!variables.software_token_secret) {
          throw new Error('UpdateUserMfaPreferenceを実行する前にCreateSecretCodeを実行してsoftware_token_secretを設定してください');
        }
        if (!variables.verification_code) {
          throw new Error('UpdateUserMfaPreferenceを実行する前にUpdateSoftwareTokenを実行してverification_codeを設定してください');
        }
        break;
        
      default:
        throw new Error(`未知のMFAフローステップ: ${currentStep}`);
    }
  }

  /**
   * TOTPコードの有効性を検証（テスト用）
   * @param secret シークレットキー
   * @param token 検証するTOTPコード
   * @param window 時間窓（デフォルト: 1）
   * @returns 有効な場合true
   */
  static verifyTOTPCode(secret: string, token: string, window: number = 1): boolean {
    try {
      return authenticator.verify({
        token,
        secret
      });
    } catch (error: any) {
      console.error(`TOTPコードの検証中にエラーが発生しました: ${error.message}`);
      return false;
    }
  }

  /**
   * シークレットキーからQRコード用のURIを生成（デバッグ用）
   * @param secret シークレットキー
   * @param label ラベル（通常はユーザー名）
   * @param issuer 発行者名
   * @returns QRコード用のURI
   */
  static generateQRCodeURI(secret: string, label: string, issuer: string = 'SaaSus'): string {
    try {
      return authenticator.keyuri(label, issuer, secret);
    } catch (error: any) {
      throw new Error(`QRコードURIの生成に失敗しました: ${error.message}`);
    }
  }
}