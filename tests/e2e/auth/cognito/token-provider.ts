import {
    AdminCreateUserCommand,
    AdminCreateUserCommandInput,
    AdminInitiateAuthCommand,
    AdminInitiateAuthCommandInput,
    AdminSetUserPasswordCommand,
    AdminSetUserPasswordCommandInput,
    AuthFlowType,
    CognitoIdentityProviderClient,
    MessageActionType
} from '@aws-sdk/client-cognito-identity-provider';
import { MemoryCache } from '../performance';
import { CognitoConfig, CognitoTokens } from '../types';

/**
 * Cognitoトークンプロバイダー
 * .envファイルからCognito設定を読み込み、ユーザートークンの取得とユーザー作成を行う
 * メモリキャッシュ機能付き
 */
export class CognitoTokenProvider {
  private static client: CognitoIdentityProviderClient | null = null;
  private static tokenCache: MemoryCache<string, CognitoTokens> = new MemoryCache<string, CognitoTokens>(1800); // 30分キャッシュ

  /**
   * 環境変数からCognito設定を読み込む
   */
  static loadConfigFromEnv(): CognitoConfig {
    const userPoolId = process.env.E2E_COGNITO_USER_POOL_ID;
    const clientId = process.env.E2E_COGNITO_CLIENT_ID;
    const region = process.env.E2E_COGNITO_REGION || 'ap-northeast-1';
    const endpoint = process.env.E2E_COGNITO_ENDPOINT;

    if (!userPoolId) {
      throw new Error('E2E_COGNITO_USER_POOL_ID環境変数が設定されていません');
    }
    if (!clientId) {
      throw new Error('E2E_COGNITO_CLIENT_ID環境変数が設定されていません');
    }

    return {
      userPoolId,
      clientId,
      region,
      endpoint
    };
  }

  /**
   * Cognitoクライアントのインスタンスを取得
   */
  private static getClient(): CognitoIdentityProviderClient {
    if (!this.client) {
      const config = this.loadConfigFromEnv();
      this.client = new CognitoIdentityProviderClient({
        region: config.region,
        ...(config.endpoint && { endpoint: config.endpoint })
      });
    }
    return this.client;
  }

  /**
   * ユーザートークンを取得する
   * ユーザーが存在しない場合は自動的に作成する
   * メモリキャッシュを使用してパフォーマンスを向上
   */
  static async obtainUserTokens(email: string, password: string): Promise<CognitoTokens> {
    // キャッシュをチェック
    const cacheKey = `${email}:${password}`;
    const cachedTokens = this.tokenCache.get(cacheKey);
    if (cachedTokens) {
      console.log(`キャッシュからCognitoトークンを取得: ${email}`);
      return cachedTokens;
    }

    const config = this.loadConfigFromEnv();
    const client = this.getClient();

    try {
      // まず認証を試行
      const authParams: AdminInitiateAuthCommandInput = {
        UserPoolId: config.userPoolId,
        ClientId: config.clientId,
        AuthFlow: AuthFlowType.ADMIN_NO_SRP_AUTH,
        AuthParameters: {
          USERNAME: email,
          PASSWORD: password
        }
      };

      const authCommand = new AdminInitiateAuthCommand(authParams);
      const authResult = await client.send(authCommand);

      if (!authResult.AuthenticationResult) {
        throw new Error('認証結果が取得できませんでした');
      }

      const { AccessToken, IdToken, RefreshToken } = authResult.AuthenticationResult;

      if (!AccessToken || !IdToken || !RefreshToken) {
        throw new Error('必要なトークンが取得できませんでした');
      }

      const tokens = {
        accessToken: AccessToken,
        idToken: IdToken,
        refreshToken: RefreshToken
      };

      // キャッシュに保存
      this.tokenCache.set(cacheKey, tokens);
      console.log(`Cognitoトークンをキャッシュに保存: ${email}`);

      return tokens;

    } catch (error: any) {
      // ユーザーが存在しない場合は作成を試行
      if (error.name === 'UserNotFoundException' || error.message?.includes('User does not exist')) {
        console.log(`ユーザー ${email} が存在しないため、新規作成します`);
        await this.createCognitoUser(email, password);
        
        // 再度認証を試行
        const authParams: AdminInitiateAuthCommandInput = {
          UserPoolId: config.userPoolId,
          ClientId: config.clientId,
          AuthFlow: AuthFlowType.ADMIN_NO_SRP_AUTH,
          AuthParameters: {
            USERNAME: email,
            PASSWORD: password
          }
        };

        const authCommand = new AdminInitiateAuthCommand(authParams);
        const authResult = await client.send(authCommand);

        if (!authResult.AuthenticationResult) {
          throw new Error('ユーザー作成後の認証結果が取得できませんでした');
        }

        const { AccessToken, IdToken, RefreshToken } = authResult.AuthenticationResult;

        if (!AccessToken || !IdToken || !RefreshToken) {
          throw new Error('ユーザー作成後に必要なトークンが取得できませんでした');
        }

        const tokens = {
          accessToken: AccessToken,
          idToken: IdToken,
          refreshToken: RefreshToken
        };

        // キャッシュに保存
        this.tokenCache.set(cacheKey, tokens);
        console.log(`新規作成ユーザーのCognitoトークンをキャッシュに保存: ${email}`);

        return tokens;
      }

      throw error;
    }
  }

  /**
   * Cognitoユーザーを作成する
   */
  static async createCognitoUser(email: string, password: string): Promise<void> {
    const config = this.loadConfigFromEnv();
    const client = this.getClient();

    try {
      // ユーザー作成
      const createUserParams: AdminCreateUserCommandInput = {
        UserPoolId: config.userPoolId,
        Username: email,
        UserAttributes: [
          {
            Name: 'email',
            Value: email
          },
          {
            Name: 'email_verified',
            Value: 'true'
          }
        ],
        MessageAction: MessageActionType.SUPPRESS, // ウェルカムメールを送信しない
        TemporaryPassword: password + '_temp'
      };

      const createCommand = new AdminCreateUserCommand(createUserParams);
      await client.send(createCommand);

      // パスワードを永続的に設定
      const setPasswordParams: AdminSetUserPasswordCommandInput = {
        UserPoolId: config.userPoolId,
        Username: email,
        Password: password,
        Permanent: true
      };

      const setPasswordCommand = new AdminSetUserPasswordCommand(setPasswordParams);
      await client.send(setPasswordCommand);

      console.log(`Cognitoユーザー ${email} を正常に作成しました`);

    } catch (error: any) {
      if (error.name === 'UsernameExistsException') {
        console.log(`ユーザー ${email} は既に存在します`);
        return;
      }
      throw new Error(`Cognitoユーザーの作成に失敗しました: ${error.message}`);
    }
  }

  /**
   * SaaSusトークンと交換する
   * CreateAuthCredentials → GetAuthCredentialsフローを実行
   */
  static async exchangeForSaaSusTokens(cognitoTokens: CognitoTokens): Promise<CognitoTokens> {
    try {
      // AuthE2EClientをインポートして使用する必要があるが、循環参照を避けるため
      // 直接axiosを使用してAPIを呼び出す
      const axios = require('axios');
      const baseUrl = process.env.SAASUS_API_URL_BASE || 'https://api.saasus.io';
      const basePath = `${baseUrl}/v1/auth`;

      // CreateAuthCredentialsを呼び出してtemporary codeを取得
      const createCredentialsPayload = {
        id_token: cognitoTokens.idToken,
        access_token: cognitoTokens.accessToken,
        refresh_token: cognitoTokens.refreshToken
      };

      const createResponse = await axios.post(`${basePath}/credentials`, createCredentialsPayload, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const tempCode = createResponse.data?.code;
      if (!tempCode) {
        throw new Error('CreateAuthCredentialsからtemporary codeが取得できませんでした');
      }

      // GetAuthCredentialsを呼び出してSaaSusトークンを取得
      const getCredentialsParams = new URLSearchParams();
      getCredentialsParams.append('code', tempCode);
      getCredentialsParams.append('auth-flow', 'tempCodeAuth');

      const getResponse = await axios.get(`${basePath}/credentials?${getCredentialsParams.toString()}`, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const saasusTokens = getResponse.data;
      if (!saasusTokens?.access_token || !saasusTokens?.id_token || !saasusTokens?.refresh_token) {
        throw new Error('GetAuthCredentialsからSaaSusトークンが取得できませんでした');
      }

      return {
        accessToken: saasusTokens.access_token,
        idToken: saasusTokens.id_token,
        refreshToken: saasusTokens.refresh_token
      };

    } catch (error: any) {
      console.error('SaaSusトークン交換中にエラーが発生しました:', error.message);
      // エラーが発生した場合は元のCognitoトークンを返す
      return cognitoTokens;
    }
  }

  /**
   * トークンキャッシュをクリア
   */
  static clearTokenCache(): void {
    this.tokenCache.clear();
    console.log('Cognitoトークンキャッシュをクリアしました');
  }

  /**
   * キャッシュサイズを取得
   */
  static getCacheSize(): number {
    return this.tokenCache.size();
  }

  /**
   * 特定のユーザーのトークンをキャッシュから削除
   */
  static evictUserTokens(email: string, password: string): void {
    const cacheKey = `${email}:${password}`;
    this.tokenCache.delete(cacheKey);
    console.log(`ユーザー ${email} のトークンをキャッシュから削除しました`);
  }
}