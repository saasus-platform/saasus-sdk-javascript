# Auth
  詳細(引数、戻り値)はAPIドキュメントを[参照](https://docs.saasus.io/reference/getuserinfo)

## ユーザー情報
- getUserInfo ・・・ユーザー情報取得

## 基本情報
- getBasicInfo  ・・・基本設定情報の取得
- updateBasicInfo ・・・基本設定情報の更新

- findNotificationMessages  ・・・通知メールテンプレートを取得
- updateNotificationMessages  ・・・通知メールテンプレートを更新

- getCustomizePages ・・・認証系画面設定情報取得
- updateCustomizePages  ・・・認証系画面設定情報設定

- getCustomizePageSettings  ・・・認証認可基本情報取得
- updateCustomizePageSettings ・・・認証認可基本情報更新

- getEventBridgeSettings  ・・・イベント連携設定を取得
- saveEventBridgeSettings ・・・イベント連携設定を更新
- deleteEventBridgeSettings ・・・イベント連携設定を削除
- createEventBridgeTestEvent・・・イベント連携のテスト送信

## 認証情報
- getAuthInfo ・・・認証情報を取得
- updateAuthInfo  ・・・認証情報を更
- getSignInSettings ・・・パスワード要件を取得
- updateSignInSettings  ・・・パスワード要件を更新

## SaaSユーザー情報
- getSaasUsers  ・・・ユーザー一覧を取得

- getSaasUser ・・・ユーザー情報を取得
- createSaasUser  ・・・SaaSにユーザーを作成
- deleteSaasUser  ・・・ユーザー情報を削除

- updateSaasUserPassword  ・・・パスワードを変更

- updateSaasUserEmail ・・・メールアドレスを変更

- createSecretCode  ・・・認証アプリケーション登録用のシークレットコードを作成
- updateSoftwareToken ・・・認証アプリケーションを登録

- getUserMfaPreference  ・・・ユーザーのMFA設定を取得
- updateUserMfaPreference ・・・ユーザーのMFA設定を更新


### Tenant情報
- getAllTenantUsers ・・・ユーザー一覧を取得
- getAllTenantUser  ・・・ユーザー情報を取得

- getTenantUsers  ・・・テナントのユーザー一覧を取得

- getTenantUse  ・・・テナントのユーザー情報を取得
- createTenantUser  ・・・テナントにユーザーを作成

- updateTenantUser  ・・・テナントのユーザー属性情報を更新
- deleteTenantUser  ・・・テナントのユーザー情報を削除

- createTenantUserRoles ・・・テナントのユーザー情報に役割(ロール)を作成
- deleteTenantUserRole  ・・・テナントのユーザーから役割(ロール)を削除

## 役割(ロール)情報
- getRoles  ・・・役割(ロール)一覧を取得
- createRole  ・・・役割(ロール)を作成
- deleteRole  ・・・役割(ロール)を削除

## ユーザーの追加属性情報
- getUserAttributes ・・・ユーザー属性の一覧を取得
- createUserAttribute ・・・ユーザー属性の作成
- deleteUserAttribute ・・・ユーザー属性の削除

## Tenantの追加属性情報
- getTenantAttributes ・・・テナント属性の一覧を取得
- createTenantAttribute ・・・テナント属性の作成
- deleteTenantAttribute ・・・テナント属性の削除

## Tenant情報
- getTenants  ・・・テナント一覧取得
- getTenant ・・・テナントを作成
- createTenant  ・・・テナント情報を取得
- updateTenant  ・・・テナント情報を更新
- deleteTenant  ・・・テナント情報を削除

## SaaSus情報
- getApiKeys  ・・・APIキー一覧を取
- createApiKey  ・・・APIキーを作成
- deleteApiKey  ・・・APIキーを削除
- getSaasId ・・・SaasIDを取得
- updateSaasId  ・・・SaasIDを更新
- getClientSecret ・・・クライアントシークレットを取得
- updateClientSecret  ・・・クライアントシークレットを更新

## 環境情報
- getEnvs ・・・環境情報一覧を取得

- getEnv ・・・環境情報の取得
- createEnv ・・・環境情報を作成
- updateEnv ・・・環境情報を更新
- deleteEnv ・・・環境情報を削除

## 認証・認可情報
- getAuthCredentials  ・・・認証・認可情報の取得
- createAuthCredentials ・・・認証・認可情報の保存

