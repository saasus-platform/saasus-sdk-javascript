# ApiLogs API E2E Tests (TypeScript)

SaaSus ApiLogs API の E2E / スナップショットテストを TypeScript 版 SDK でも実行できるようにするためのスイートです。Billing API 用の仕組みと同じく `tests/__tests__/testlib` のエンジンを利用しています。

## 📁 構成

```
tests/e2e/apilogs/
├── apilogs.e2e.ts          # 通常の E2E 実行エントリーポイント
├── apilogs.snapshot.ts     # スナップショット実行エントリーポイント
├── client.ts               # ApiLogs API 用の E2E クライアント
├── helpers.ts              # 日付計算やレスポンス抽出ヘルパー
├── stories.ts              # ストーリー定義
├── validation.ts           # レスポンス検証
├── run-apilogs-e2e.js      # npm script 用ランナー
└── run-apilogs-snapshot.js # npm script 用ランナー
```

## 🚀 実行方法

`.env` に SaaSus 認証情報を設定した上で以下を実行します。

```bash
# ApiLogs API E2E
npm run test:e2e:apilogs

# ApiLogs API スナップショット
npm run test:e2e:apilogs:snapshot -- --snapshot-mode=full
```

### 必須環境変数

```
SAASUS_SAAS_ID=your-saas-id
SAASUS_API_KEY=your-api-key
SAASUS_SECRET_KEY=your-secret-key
```

`SAASUS_API_URL_BASE` や `E2E_SNAPSHOT_*` 系の環境変数でエンドポイントやスナップショットの出力先を調整できます。

## 📚 ストーリー概要

1. **Postman Collection Story - Standard Methods**
   - `GetLogs` → `GetLogs`(再実行) → `GetLogs`(クエリ付き) → `GetLog` の4ステップ
   - TypeScript 版 SDK では自動生成される `WithResponse` 系メソッドが存在しないため、標準メソッドのみでフローを再現しています。

最初の `GetLogs` ステップで取得した API ログ情報（`api_log_id`, `created_date`, `created_at`, `cursor`）を共有状態に保存し、後続のクエリパラメータ付き取得や個別ログ参照で再利用します。Go 版 (`saasus-sdk-go/tests/e2e/apilogapi`) やスナップショット (`tests/e2e/snapshot/apilog`) と同じ標準フローを TypeScript でも再現しています。

## 📸 スナップショットオプション

`apilogs.snapshot.ts` では Billing API と同じフラグを利用できます。

| モード | 説明 |
|--------|------|
| `capture` | キャプチャのみ (`E2E_SNAPSHOT_CAPTURE=true`) |
| `compare` | 比較のみ (`E2E_SNAPSHOT_COMPARISON=true`) |
| `report` | レポートのみ (`E2E_SNAPSHOT_REPORTING=true`) |
| `full` | 上記すべてを有効化 |

`--snapshot-output` で出力ディレクトリ、`--stories story1,story2` で対象ストーリーを絞り込めます。
