/**
 * Cognito Token Provider for E2E Tests
 * Go SDK の token_provider_user.go と同等の機能を提供
 */

import { 
  CognitoIdentityProviderClient, 
  AdminInitiateAuthCommand,
  RespondToAuthChallengeCommand,
  AdminCreateUserCommand,
  AdminSetUserPasswordCommand,
  ListUsersCommand,
  AuthFlowType,
  ChallengeNameType 
} from '@aws-sdk/client-cognito-identity-provider';
import * as crypto from 'crypto';

export interface UserAuthTokens {
  accessToken: string;
  idToken: string;
  refreshToken: string;
}

export interface CognitoConfig {
  userPoolId: string;
  clientId: string;
  region: string;
  endpoint?: string;
}

/**
 * 環境変数からCognito設定を読み込む
 */
export function loadCognitoConfigFromEnv(): CognitoConfig | null {
  const userPoolId = process.env.E2E_COGNITO_USER_POOL_ID;
  const clientId = process.env.E2E_COGNITO_CLIENT_ID;
  const region = process.env.E2E_COGNITO_REGION || 'ap-northeast-1';
  const endpoint = process.env.E2E_COGNITO_ENDPOINT;

  if (!userPoolId || !clientId) {
    return null;
  }

  return {
    userPoolId,
    clientId,
    region,
    endpoint,
  };
}

/**
 * SaaSユーザーをCognitoで認証してトークンを取得
 */
export async function obtainUserTokens(
  email: string,
  password: string
): Promise<UserAuthTokens | null> {
  const config = loadCognitoConfigFromEnv();
  if (!config) {
    return null;
  }

  try {
    const clientConfig: any = { region: config.region };
    if (config.endpoint) {
      clientConfig.endpoint = config.endpoint;
    }

    const client = new CognitoIdentityProviderClient(clientConfig);

    const input = {
      AuthFlow: AuthFlowType.ADMIN_USER_PASSWORD_AUTH,
      ClientId: config.clientId,
      UserPoolId: config.userPoolId,
      AuthParameters: {
        USERNAME: email,
        PASSWORD: password,
      },
    };

    let response = await client.send(new AdminInitiateAuthCommand(input));

    // NEW_PASSWORD_REQUIRED チャレンジの処理
    if (response.ChallengeName === ChallengeNameType.NEW_PASSWORD_REQUIRED) {
      const challengeResponse = await client.send(
        new RespondToAuthChallengeCommand({
          ChallengeName: response.ChallengeName,
          ClientId: config.clientId,
          ChallengeResponses: {
            USERNAME: email,
            NEW_PASSWORD: password,
          },
          Session: response.Session,
        })
      );
      response.AuthenticationResult = challengeResponse.AuthenticationResult;
    }

    if (!response.AuthenticationResult) {
      return null;
    }

    return {
      accessToken: response.AuthenticationResult.AccessToken || '',
      idToken: response.AuthenticationResult.IdToken || '',
      refreshToken: response.AuthenticationResult.RefreshToken || '',
    };
  } catch (err: any) {
    // エラーは呼び出し元で処理
    throw err;
  }
}

/**
 * メールアドレスから安定したCognitoユーザー名を生成（Go版と同等）
 */
function buildStableCognitoUsername(email: string): string {
  const hash = crypto.createHash('sha1').update(email.toLowerCase()).digest('hex');
  return `e2e-${hash}`;
}

/**
 * メールアドレスでCognitoユーザーを検索
 */
async function lookupCognitoUsernameByEmail(
  client: CognitoIdentityProviderClient,
  userPoolId: string,
  email: string
): Promise<string | null> {
  try {
    const filter = `email = "${email.replace(/"/g, '\\"')}"`;
    const response = await client.send(new ListUsersCommand({
      UserPoolId: userPoolId,
      Filter: filter,
      Limit: 1,
    }));
    if (response.Users && response.Users.length > 0 && response.Users[0].Username) {
      return response.Users[0].Username;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Cognitoユーザーを作成（存在しない場合）
 * Go版と同様に、メールエイリアス対応のユーザー名を使用
 */
export async function createCognitoUser(
  email: string,
  password: string
): Promise<string | null> {
  const config = loadCognitoConfigFromEnv();
  if (!config) {
    return null;
  }

  try {
    const clientConfig: any = { region: config.region };
    if (config.endpoint) {
      clientConfig.endpoint = config.endpoint;
    }

    const client = new CognitoIdentityProviderClient(clientConfig);

    // 既存ユーザーを検索
    const existingUsername = await lookupCognitoUsernameByEmail(client, config.userPoolId, email);
    if (existingUsername) {
      return existingUsername;
    }

    // メールエイリアス対応のユーザー名を生成
    const username = buildStableCognitoUsername(email);

    // ユーザー作成
    await client.send(
      new AdminCreateUserCommand({
        UserPoolId: config.userPoolId,
        Username: username,
        UserAttributes: [
          { Name: 'email', Value: email },
          { Name: 'email_verified', Value: 'true' },
        ],
        MessageAction: 'SUPPRESS',
      })
    );

    // パスワード設定
    await client.send(
      new AdminSetUserPasswordCommand({
        UserPoolId: config.userPoolId,
        Username: username,
        Password: password,
        Permanent: true,
      })
    );

    return username;
  } catch (err: any) {
    // UsernameExistsException または AliasExistsException は無視
    if (err.name === 'UsernameExistsException' || err.name === 'AliasExistsException') {
      return buildStableCognitoUsername(email);
    }
    console.warn(`Warning: Failed to create Cognito user: ${err.message}`);
    return null;
  }
}

/**
 * ユーザートークンを取得し、変数に設定
 * Go SDK の updateUserTokensFromCognito と同等
 * 
 * 動的ユーザー（vars.email/password）を優先し、
 * 存在しない場合は環境変数ユーザーにフォールバック
 */
export async function updateUserTokensFromCognito(
  variables: Record<string, any>
): Promise<void> {
  // Cognito設定がない場合はスキップ
  const config = loadCognitoConfigFromEnv();
  if (!config) {
    return;
  }

  // 動的ユーザー（CreateSaasUserで作成したユーザー）を優先
  const email = variables.email as string;
  const password = variables.password as string;

  if (email && password) {
    try {
      let tokens = await obtainUserTokens(email, password);

      // トークン取得失敗時、ユーザーを作成してリトライ
      if (!tokens) {
        console.log(`Info: User ${email} not found in Cognito, attempting to create...`);
        const username = await createCognitoUser(email, password);
        if (username) {
          tokens = await obtainUserTokens(username, password);
        }
      }

      if (tokens) {
        setTokenVariables(variables, tokens);
        return;
      }
    } catch (err: any) {
      // NotAuthorizedException の場合、ユーザーを作成してリトライ
      if (err.name === 'NotAuthorizedException' || err.name === 'UserNotFoundException') {
        console.log(`Info: User ${email} auth failed, attempting to create...`);
        const username = await createCognitoUser(email, password);
        if (username) {
          try {
            // 作成したユーザー名でログイン（メールエイリアスの場合はユーザー名を使用）
            const tokens = await obtainUserTokens(username, password);
            if (tokens) {
              setTokenVariables(variables, tokens);
              return;
            }
          } catch (retryErr: any) {
            console.warn(`Warning: failed to obtain user tokens after creation: ${retryErr.message}`);
          }
        }
      } else {
        console.warn(`Warning: failed to obtain user tokens for ${email}: ${err.message}`);
      }
    }
  }

  // 動的ユーザーがない場合、環境変数ユーザーにフォールバック
  const envUsername = process.env.E2E_COGNITO_USERNAME;
  const envPassword = process.env.E2E_COGNITO_PASSWORD;

  if (envUsername && envPassword) {
    try {
      const tokens = await obtainUserTokens(envUsername, envPassword);
      if (tokens) {
        setTokenVariables(variables, tokens);
        return;
      }
    } catch (err: any) {
      console.warn(`Warning: failed to obtain tokens for env user: ${err.message}`);
    }
  }
}

/**
 * トークンを変数に設定するヘルパー
 */
function setTokenVariables(variables: Record<string, any>, tokens: UserAuthTokens): void {
  variables.user_access_token = tokens.accessToken;
  variables.user_id_token = tokens.idToken;
  variables.user_refresh_token = tokens.refreshToken;
  variables.cognito_access_token = tokens.accessToken;
  variables.cognito_id_token = tokens.idToken;
  variables.access_token = tokens.accessToken;
  variables.token = tokens.idToken;
}
