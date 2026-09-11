/**
 * テストデータローダー
 * test_params.jsonの読み込みと変数マップ生成を行います
 */

import * as fs from 'fs';
import * as path from 'path';
import { ErrorHandler } from '../error-handler';
import { CognitoTokens, StoryVariables, TestParams } from '../types';

export class TestDataLoader {
  private static testParamsCache: TestParams | null = null;

  /**
   * test_params.jsonファイルを読み込む
   */
  static loadTestParams(): TestParams {
    if (this.testParamsCache) {
      return this.testParamsCache;
    }

    try {
      const testParamsPath = path.join(__dirname, 'test_params.json');
      
      if (!fs.existsSync(testParamsPath)) {
        throw new Error(`test_params.jsonファイルが見つかりません: ${testParamsPath}`);
      }

      const jsonContent = fs.readFileSync(testParamsPath, 'utf-8');
      const testParams = JSON.parse(jsonContent) as TestParams;
      
      this.testParamsCache = testParams;
      return testParams;
    } catch (error) {
      ErrorHandler.handleConfigError(
        error as Error,
        'test_params.json読み込み'
      );
      throw error; // この行は実行されませんが、TypeScriptの型チェックのため
    }
  }

  /**
   * 基本ストーリー変数を構築
   * Go版のbuildBaseStoryVariables関数と同等の機能を提供
   */
  static buildBaseStoryVariables(
    params: TestParams,
    tokens: CognitoTokens,
    prefix: string = 'e2e'
  ): StoryVariables {
    // Go版と同様のユニーク値生成
    const emailsForUpdates = this.generateEmailList(`${prefix}-update`, 20);
    const primaryEmail = this.uniqueEmail(prefix);
    const uniqueSuffix = Date.now() % 1000000;
    const roleName = `${prefix}-role-${String(uniqueSuffix).padStart(6, '0')}`;
    const roleDisplay = `Role ${String(uniqueSuffix).padStart(6, '0')}`;
    const attributeName = `${prefix}-attr-${String(uniqueSuffix).padStart(6, '0')}`;
    const envName = `${prefix}-env-${String(uniqueSuffix).padStart(6, '0')}`;
    const tenantStaffEmail = this.uniqueEmail(`${prefix}-tenant-staff`);
    const tenantRoleName = roleName;

    // サンプル画像データURL（Go版と同等）
    const sampleImageDataURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==';

    const variables: StoryVariables = {
      // 基本設定（Go版と同じキー名）
      domain_name: params.UpdateBasicInfo?.updateParams?.domain_name,
      from_email_address: params.UpdateBasicInfo?.updateParams?.from_email_address,
      reply_email_address: params.UpdateBasicInfo?.updateParams?.reply_email_address,

      // 認証情報
      callback_url: params.UpdateAuthInfo?.updateParams?.callback_url,

      // ユーザー情報
      email: primaryEmail,
      _email_updates: emailsForUpdates, // Go版と同じキー名
      password: params.CreateSaasUser?.createParams?.password,

      // ロール情報
      role_name: roleName,
      display_name: roleDisplay,

      // 属性情報
      attribute_name: attributeName,
      attribute_type: params.CreateUserAttribute?.createParams?.attribute_type,

      // 環境情報
      env_id: this.uniqueEnvID(),
      name: envName, // Go版と同じキー名（env_nameではなくname）

      // テナント情報
      back_office_staff_email: tenantStaffEmail,
      attributes: {}, // 空のオブジェクト
      tenant_role_name: tenantRoleName, // Go版と同じキー名

      // 通知・カスタマイズ
      notification_messages: params.UpdateNotificationMessages?.updateParams || {},
      customize_pages: params.UpdateCustomizePages?.updateParams || {},

      // 請求情報
      tenant_billing_info: params.UpdateTenantBillingInfo?.updateParams || {},

      // MFA関連
      enabled: true, // Go版と同じデフォルト値
      access_token: tokens.accessToken,
      verification_code: '123456', // Go版と同じデフォルト値

      // カスタマイズページ設定
      favicon: sampleImageDataURL,
      icon: sampleImageDataURL,
      title: params.UpdateCustomizePageSettings?.updateParams?.title,
      terms_of_service_url: params.UpdateCustomizePageSettings?.updateParams?.terms_of_service_url,
      privacy_policy_url: params.UpdateCustomizePageSettings?.updateParams?.privacy_policy_url,
      google_tag_manager_container_id: params.UpdateCustomizePageSettings?.updateParams?.google_tag_manager_container_id,

      // 認証トークン
      token: tokens.idToken, // Go版と同じキー名（IDトークン）

      // 実行時に設定される値（初期値は空）
      user_id: '',
      tenant_id: '',
      software_token_secret: ''
    };

    // AWS Marketplace関連の環境変数チェック（Go版と同等）
    const awsMarketplaceToken = process.env.AWS_MARKETPLACE_REGISTRATION_TOKEN;
    if (awsMarketplaceToken) {
      variables.aws_marketplace_token = awsMarketplaceToken;
    }

    // AWS Marketplace設定からの値取得
    if (params.SignUpWithAwsMarketplace?.createParams) {
      const awsCfg = params.SignUpWithAwsMarketplace.createParams;
      if (awsCfg.registration_token) {
        variables.aws_marketplace_token = awsCfg.registration_token;
      }
      if (awsCfg.email) {
        variables.aws_marketplace_email = awsCfg.email;
      }
    }

    return variables;
  }

  /**
   * ユニークなメールアドレスを生成
   * Go版のuniqueEmail関数と同等の機能
   */
  static uniqueEmail(prefix: string): string {
    const nanoTime = Date.now() * 1000000 + Math.floor(Math.random() * 1000000);
    return `${prefix}+${nanoTime}@example.com`;
  }

  /**
   * ユニークな文字列を生成
   * Go版のuniqueString関数と同等の機能
   */
  static uniqueString(prefix: string): string {
    const nanoTime = Date.now() * 1000000 + Math.floor(Math.random() * 1000000);
    return `${prefix}-${nanoTime}`;
  }

  /**
   * ユニークな環境IDを生成
   * Go版のuniqueEnvID関数と同等の機能
   */
  static uniqueEnvID(): number {
    const nanoTime = Date.now() * 1000000 + Math.floor(Math.random() * 1000000);
    return Math.floor(nanoTime % 900000) + 10000;
  }

  /**
   * メールアドレスリストを生成
   * Go版のgenerateEmailList関数と同等の機能
   */
  static generateEmailList(prefix: string, count: number): string[] {
    const emails: string[] = [];
    for (let i = 0; i < count; i++) {
      emails.push(this.uniqueEmail(`${prefix}-${i}`));
    }
    return emails;
  }

  /**
   * テストパラメータから特定の値を取得
   */
  static getParamValue(params: TestParams, path: string, defaultValue?: any): any {
    const keys = path.split('.');
    let current: any = params;

    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        return defaultValue;
      }
    }

    return current;
  }

  /**
   * 変数マップに動的な値を追加
   */
  static addDynamicVariables(variables: StoryVariables, additionalVars: Record<string, any>): StoryVariables {
    return {
      ...variables,
      ...additionalVars
    };
  }

  /**
   * 変数マップから特定のプレフィックスの変数を抽出
   */
  static extractVariablesByPrefix(variables: StoryVariables, prefix: string): Record<string, any> {
    const result: Record<string, any> = {};
    
    for (const [key, value] of Object.entries(variables)) {
      if (key.startsWith(prefix)) {
        result[key] = value;
      }
    }
    
    return result;
  }

  /**
   * 変数マップの検証
   */
  static validateVariables(variables: StoryVariables, requiredKeys: string[]): void {
    const missing: string[] = [];
    
    for (const key of requiredKeys) {
      if (!(key in variables) || variables[key] === undefined || variables[key] === null) {
        missing.push(key);
      }
    }
    
    if (missing.length > 0) {
      ErrorHandler.handleConfigError(
        new Error(`必要な変数が不足しています: ${missing.join(', ')}`),
        '変数マップ検証'
      );
    }
  }

  /**
   * 変数マップをログ出力（デバッグ用）
   */
  static logVariables(variables: StoryVariables, maskSensitive: boolean = true): void {
    const sensitiveKeys = ['password', 'secret', 'token', 'key'];
    const logVariables = { ...variables };
    
    if (maskSensitive) {
      for (const [key, value] of Object.entries(logVariables)) {
        if (typeof value === 'string' && sensitiveKeys.some(sensitive => key.toLowerCase().includes(sensitive))) {
          logVariables[key] = '***MASKED***';
        }
      }
    }
    
    console.log('=== ストーリー変数 ===');
    console.log(JSON.stringify(logVariables, null, 2));
  }

  /**
   * マップから文字列値を安全に取得
   * Go版のstringFromMap関数と同等の機能
   */
  static stringFromMap(m: Record<string, any> | undefined, key: string): string {
    if (!m || typeof m !== 'object') {
      return '';
    }
    const value = m[key];
    return typeof value === 'string' ? value : '';
  }

  /**
   * マップから数値を安全に取得
   */
  static numberFromMap(m: Record<string, any> | undefined, key: string): number {
    if (!m || typeof m !== 'object') {
      return 0;
    }
    const value = m[key];
    return typeof value === 'number' ? value : 0;
  }

  /**
   * マップからブール値を安全に取得
   */
  static boolFromMap(m: Record<string, any> | undefined, key: string): boolean {
    if (!m || typeof m !== 'object') {
      return false;
    }
    const value = m[key];
    return typeof value === 'boolean' ? value : false;
  }

  /**
   * 変数マップをGo版形式で出力（デバッグ用）
   */
  static logVariablesGoStyle(variables: StoryVariables): void {
    console.log('=== Story Variables (Go Style) ===');
    const sortedKeys = Object.keys(variables).sort();
    for (const key of sortedKeys) {
      const value = variables[key];
      if (typeof value === 'string' && (key.includes('token') || key.includes('secret') || key.includes('password'))) {
        console.log(`${key}: ***MASKED***`);
      } else {
        console.log(`${key}: ${JSON.stringify(value)}`);
      }
    }
  }

  /**
   * 環境変数からAWS Marketplace設定を取得
   */
  static getAwsMarketplaceConfigFromEnv(): Record<string, string> {
    return {
      registration_token: process.env.AWS_MARKETPLACE_REGISTRATION_TOKEN || '',
      product_code: process.env.AWS_MARKETPLACE_PRODUCT_CODE || '',
      role_arn: process.env.AWS_MARKETPLACE_ROLE_ARN || '',
      sns_topic_arn: process.env.AWS_MARKETPLACE_SNS_TOPIC_ARN || '',
      seller_sns_topic_arn: process.env.AWS_MARKETPLACE_SELLER_SNS_TOPIC_ARN || '',
      cas_bucket_name: process.env.AWS_MARKETPLACE_CAS_BUCKET_NAME || '',
      cas_sns_topic_arn: process.env.AWS_MARKETPLACE_CAS_SNS_TOPIC_ARN || '',
      sqs_arn: process.env.AWS_MARKETPLACE_SQS_ARN || '',
      role_external_id: process.env.AWS_MARKETPLACE_ROLE_EXTERNAL_ID || ''
    };
  }

  /**
   * Stripe Secret Keyを環境変数から取得
   */
  static getStripeSecretKey(): string {
    return process.env.STRIPE_SECRET_KEY || '';
  }

  /**
   * キャッシュをクリア
   */
  static clearCache(): void {
    this.testParamsCache = null;
  }
}