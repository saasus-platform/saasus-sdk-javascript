# TypeScript版 Auth E2Eテスト完全移植

SaaSus Auth API の Go版E2Eテストを TypeScript版に完全移植した包括的なテストスイートです。Go版の全機能（テストデータローダー、Cognito MFA、Stripe/AWS Marketplace統合、包括的なストーリー、クリーンアップロジック等）を再現し、250メソッドの完全なテストカバレッジを提供します。

## 📁 ディレクトリ構成

```
tests/e2e/auth/
├── testdata/
│   ├── loader.ts             # テストデータローダー（Go版buildBaseStoryVariables相当）
│   └── test_params.json     # テストパラメータ（Postman分析結果）
├── cognito/
│   ├── token-provider.ts    # Cognitoトークン管理
│   └── mfa.ts               # MFA機能（TOTP生成）
├── integrations/
│   ├── stripe.ts            # Stripe統合セットアップ
│   └── aws-marketplace.ts   # AWS Marketplace統合セットアップ
├── client.ts                # Auth API クライアント（250メソッド対応）
├── helpers.ts               # リクエスト生成ヘルパー（250メソッド対応）
├── stories.ts               # ストーリー定義（4ストーリー）
├── validation.ts            # レスポンス検証ロジック
├── state.ts                 # State管理とクリーンアップ
├── types.ts                 # TypeScript型定義
├── error-handler.ts         # エラーハンドリング
├── auth.e2e.ts             # E2E実行エントリーポイント
├── auth.snapshot.ts        # スナップショット実行エントリーポイント
└── METHOD_COVERAGE_CHECKLIST.md # 250メソッドカバレッジ状況
```

スナップショット成果物は `tests/e2e/snapshot/auth/` に保存されます。

## 🚀 実行方法

### 基本実行コマンド

```bash
# Auth API E2E テスト実行（順次実行）
npm run test:e2e:auth

# Auth API E2E テスト実行（並列実行）
npm run test:e2e:auth:parallel

# Auth API E2E テスト実行（パフォーマンス最適化）
npm run test:e2e:auth:performance

# Auth API スナップショットテスト実行
npm run test:e2e:auth:snapshot

# スナップショットモード指定実行
npm run test:e2e:auth:snapshot -- --snapshot-mode=capture    # スナップショットキャプチャ
npm run test:e2e:auth:snapshot -- --snapshot-mode=compare    # スナップショット比較
npm run test:e2e:auth:snapshot -- --snapshot-mode=report     # レポート生成
npm run test:e2e:auth:snapshot -- --snapshot-mode=full       # 完全スナップショットテスト
```

### パフォーマンス最適化オプション

```bash
# 並列実行設定
E2E_ENABLE_PARALLEL=true          # 並列実行を有効化
E2E_MAX_CONCURRENCY=4             # 最大同時実行数（デフォルト: 4）

# タイムアウト設定
E2E_REQUEST_TIMEOUT=30000         # APIリクエストタイムアウト（ミリ秒、デフォルト: 30秒）
E2E_STORY_TIMEOUT=300000          # ストーリータイムアウト（ミリ秒、デフォルト: 5分）

# リトライ設定
E2E_MAX_RETRIES=3                 # 最大リトライ回数（デフォルト: 3）
E2E_RETRY_DELAY=1000              # 初期リトライ間隔（ミリ秒、デフォルト: 1秒）

# キャッシュ設定
DISABLE_CACHE=false               # Cognitoトークンキャッシュを無効化（デフォルト: false）

# 例: 高速実行設定
E2E_ENABLE_PARALLEL=true E2E_MAX_CONCURRENCY=6 E2E_REQUEST_TIMEOUT=15000 npm run test:e2e:auth
```

### 実行オプション

```bash
# 特定ストーリーのみ実行
npm run test:e2e:auth:snapshot -- --stories="Postman Collection Story - Standard Methods"

# スナップショット出力先指定
npm run test:e2e:auth:snapshot -- --snapshot-output=custom/path
```

## 📚 ストーリー概要

### 実装済みストーリー（4ストーリー）

1. **Postman Collection Story - Standard Methods**
   - Go版のGetPostmanStoryStandardMethodsと同等
   - 基本設定、認証情報、ユーザー管理、ロール管理、属性管理
   - 環境管理、サインイン設定、テナント管理、テナントユーザー管理
   - MFA設定（CreateSecretCode → UpdateSoftwareToken → UpdateUserMfaPreference）
   - Stripe統合（STRIPE_SECRET_KEY設定時のみ実行）

2. **SaaS User Attributes Management Story**
   - SaaSユーザー属性の作成、更新、削除
   - UpdateSaasUserAttributes系とCreateSaasUserAttribute系をカバー

3. **External User Link and Email Update Story**
   - 外部ユーザーリンク機能
   - メールアドレス更新確認機能

4. **Sign Up and Provider Management Story**
   - サインアップ機能
   - AWS Marketplace連携
   - プロバイダー管理

## 🔐 環境変数設定

### 必須環境変数

```bash
# SaaSus Platform 認証情報（必須）
SAASUS_SAAS_ID=your-saas-id
SAASUS_API_KEY=your-api-key
SAASUS_SECRET_KEY=your-secret-key

# Cognito設定（必須、.envに設定済み）
E2E_COGNITO_USER_POOL_ID=ap-northeast-1_xxxxxxxxx
E2E_COGNITO_CLIENT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxx
E2E_COGNITO_REGION=ap-northeast-1
E2E_COGNITO_USERNAME=your-test-username
E2E_COGNITO_PASSWORD=your-test-password
```

### オプション環境変数

```bash
# SaaSus Platform API URL（オプション）
SAASUS_BASE_URL=https://api.saasus.io/v1

# Cognito エンドポイント（オプション、.envに設定済み）
E2E_COGNITO_ENDPOINT=https://cognito-idp.ap-northeast-1.amazonaws.com

# Stripe統合テスト用（Stripe統合テスト実行時のみ必要）
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxx

# AWS Marketplace統合テスト用（AWS Marketplace統合テスト実行時のみ必要）
AWS_MARKETPLACE_REGISTRATION_TOKEN=your-registration-token

# ログレベル設定（オプション）
LOG_LEVEL=DEBUG  # DEBUG, INFO, WARN, ERROR

# テスト用設定（オプション）
TEST_USER_EMAIL=test@example.com
TEST_USER_PASSWORD=TestPassword123!
TEST_TENANT_NAME="Test Tenant"

# サインアップのメール送信制限回避（オプション）
AUTH_E2E_SKIP_SIGNUP_ON_COGNITO_EMAIL_LIMIT=true
```

## ⚠️ 既知の問題

### 201エラーについて
SaaSus Auth API では、HTTPステータスコードが200/201でも、レスポンスJSONの `status` フィールドに `"201 Error"` のような文字列が含まれる場合があります。これは正常なレスポンスであり、本テストスイートではHTTPステータスコード（`status_code`）を判定基準としています。

### MFA関連テストの制限
- `CreateSecretCode` 系メソッドは実際のTOTPコード生成が必要なため、一部制限があります
- MFAフローは CreateSecretCode → UpdateSoftwareToken → UpdateUserMfaPreference の順序で実行されます
- 実際の認証アプリとの連携テストは環境依存のため、自動化には制限があります

### テナント招待テストのスキップ理由
- テナント招待の一部機能は外部JWTトークンが必要なため、現在はスキップされています
- `ValidateInvitation` 等の確認系メソッドは実際の招待メールからの確認コードが必要です

### Confirm系メソッドの制限
- `ConfirmEmailUpdate`、`ConfirmExternalUserLink` 等の確認系メソッドは実際の確認コードが必要です
- メール経由で送信される確認コードはテスト環境では取得困難なため、一部制限があります
- これらのメソッドは要求送信までをテストし、確認処理は手動テストが推奨されます

### Stripe統合の注意事項
- Stripe統合テストは `STRIPE_SECRET_KEY` 環境変数が設定されている場合のみ実行されます
- 未設定の場合は自動的にスキップされ、テストは正常に完了します
- Stripe APIの制限により、一部のテストで500エラーが発生する場合があります

### AWS Marketplace統合の注意事項
- AWS Marketplace統合テストは有効な登録トークンが必要です
- テスト環境では実際のマーケットプレイス連携は困難なため、基本的な設定更新のみをテストします

## 🚀 パフォーマンス最適化機能

### 並列実行
- **独立したストーリーの並列実行**: リソース競合のないストーリーを同時実行
- **リソース競合回避**: 同じリソースを使用するストーリーは順次実行
- **最大同時実行数制限**: システムリソースを考慮した同時実行数制御

### タイムアウト設定
- **APIリクエストタイムアウト**: 各API呼び出しに30秒のタイムアウト
- **ストーリータイムアウト**: ストーリー全体に5分のタイムアウト
- **カスタマイズ可能**: 環境変数で設定変更可能

### リトライ機能
- **指数バックオフ**: 1秒 → 2秒 → 4秒 → 8秒の間隔でリトライ
- **一時的エラー検出**: ネットワークエラーやサーバーエラーを自動判定
- **最大3回リトライ**: 永続的エラーの場合は早期終了

### キャッシュ機能
- **Cognitoトークンキャッシュ**: 同じユーザーのトークンを30分間キャッシュ
- **メモリ効率**: 期限切れトークンの自動削除
- **キャッシュクリア**: テスト完了時の自動クリーンアップ

### ストリーミング処理
- **大きなレスポンス対応**: 1MB以上のレスポンスを効率的に処理
- **メモリ使用量削減**: チャンク単位での処理でメモリ使用量を抑制
- **自動検出**: レスポンスサイズに応じた自動切り替え

### 実行時間測定
- **詳細な統計情報**: 各ステップの実行時間を記録
- **パフォーマンス分析**: 最も遅いステップと速いステップを特定
- **リトライ・タイムアウト統計**: 失敗パターンの分析

### 使用例

```bash
# 基本的な並列実行（推奨設定）
npm run test:e2e:auth:parallel

# 高速実行（リスクあり）
E2E_MAX_CONCURRENCY=8 E2E_REQUEST_TIMEOUT=15000 npm run test:e2e:auth:parallel

# 安定実行（低速だが確実）
E2E_MAX_CONCURRENCY=2 E2E_REQUEST_TIMEOUT=60000 E2E_MAX_RETRIES=5 npm run test:e2e:auth:parallel
```
