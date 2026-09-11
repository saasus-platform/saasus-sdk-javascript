# Communication API E2E Tests

SaaSus Communication API (フィードバック機能) の E2E / スナップショットテストを TypeScript 版 SDK で再現するためのスイートです。`saasus-sdk-go/tests/e2e/communicationapi` の標準ストーリーをベースにしつつ、要望に合わせて WithBody/WithResponse 系のシナリオは実装していません。

## 📁 構成

```
tests/e2e/communication/
├── client.ts                    # Communication API 向け E2E クライアント
├── helpers.ts                   # 共有ステートとリクエスト生成ヘルパー
├── state.ts                     # フィードバックのクリーンアップ処理
├── stories.ts                   # ストーリー定義（標準メソッドのみ）
├── validation.ts                # レスポンス検証ロジック
├── communication.e2e.ts         # E2E テスト実行エントリーポイント
├── communication.snapshot.ts    # スナップショットテスト実行エントリーポイント
├── run-communication-e2e.js     # npm script 用ランナー
└── run-communication-snapshot.js# npm script 用ランナー
```

スナップショットは `tests/e2e/snapshot/communication/` 配下に保存され、`story_snapshots/tags` ディレクトリにタグ付き JSON が生成されます。

## 🚀 実行方法

`.env` に SaaSus 認証情報を設定した上で実行します。すべての API 呼び出しは 200 系ステータスで成功することを前提にしています。

```bash
# Communication API E2E
npm run test:e2e:communication

# Communication API スナップショット
npm run test:e2e:communication:snapshot -- --snapshot-mode=full
```

`--stories` でストーリー名をカンマ区切り指定、`--snapshot-output` でスナップショット出力先を上書きできます。

## 📚 カバレッジ / ストーリー

- **Postman Collection Story - Standard Methods**
  - GetFeedbacks → CreateFeedback → GetFeedback → UpdateFeedback → UpdateFeedbackStatus
  - CreateFeedbackComment → GetFeedbackComment → UpdateFeedbackComment
  - CreateVoteUser → DeleteVoteForFeedback → DeleteFeedbackComment → DeleteFeedback

Go 版と同じ標準 API フローを TypeScript SDK でも再現し、全てのメソッドが 200 系レスポンスを返すことを検証します。WithResponse/WithBody 系メソッドはリクエスト要件により除外しています。

## 🔐 必須環境変数

```
SAASUS_SAAS_ID=your-saas-id
SAASUS_API_KEY=your-api-key
SAASUS_SECRET_KEY=your-secret-key
SAASUS_API_URL_BASE=https://api.saasus.io       # 任意
TEST_USER_ID=00000000-0000-0000-0000-000000000000
```

`TEST_USER_ID` を指定しない場合はデフォルト値を使用します。テストで生成されるフィードバックは `ts-sdk-e2e-feedback-*` プレフィックスを付与し、実行前後に自動クリーンアップを行います。
