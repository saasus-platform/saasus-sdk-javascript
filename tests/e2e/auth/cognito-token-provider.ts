import { CognitoIdentityProviderClient, AdminInitiateAuthCommand, AuthFlowType } from '@aws-sdk/client-cognito-identity-provider';

export interface AuthTokens {
  accessToken: string;
  idToken: string;
  refreshToken: string;
}

export interface CognitoConfig {
  userPoolId: string;
  clientId: string;
  username: string;
  password: string;
  region: string;
}

let cachedTokens: AuthTokens | null = null;

export async function getCognitoTokens(): Promise<AuthTokens> {
  if (cachedTokens) {
    return cachedTokens;
  }

  const config = loadCognitoConfigFromEnv();
  const client = new CognitoIdentityProviderClient({ region: config.region });

  const command = new AdminInitiateAuthCommand({
    AuthFlow: AuthFlowType.ADMIN_USER_PASSWORD_AUTH,
    AuthParameters: {
      USERNAME: config.username,
      PASSWORD: config.password,
    },
    ClientId: config.clientId,
    UserPoolId: config.userPoolId,
  });

  try {
    const response = await client.send(command);
    
    if (!response.AuthenticationResult) {
      throw new Error('Authentication result is empty');
    }

    cachedTokens = {
      accessToken: response.AuthenticationResult.AccessToken!,
      idToken: response.AuthenticationResult.IdToken!,
      refreshToken: response.AuthenticationResult.RefreshToken!,
    };

    return cachedTokens;
  } catch (error) {
    throw new Error(`Failed to get Cognito tokens: ${(error as Error).message}`);
  }
}

function loadCognitoConfigFromEnv(): CognitoConfig {
  const missing: string[] = [];

  const config = {
    userPoolId: process.env.E2E_COGNITO_USER_POOL_ID || '',
    clientId: process.env.E2E_COGNITO_CLIENT_ID || '',
    username: process.env.E2E_COGNITO_USERNAME || '',
    password: process.env.E2E_COGNITO_PASSWORD || '',
    region: process.env.E2E_COGNITO_REGION || 'ap-northeast-1',
  };

  if (!config.userPoolId) missing.push('E2E_COGNITO_USER_POOL_ID');
  if (!config.clientId) missing.push('E2E_COGNITO_CLIENT_ID');
  if (!config.username) missing.push('E2E_COGNITO_USERNAME');
  if (!config.password) missing.push('E2E_COGNITO_PASSWORD');

  if (missing.length > 0) {
    throw new Error(`Missing required Cognito env vars: ${missing.join(', ')}`);
  }

  return config;
}
