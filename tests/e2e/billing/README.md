# Billing API E2E Tests (TypeScript)

SaaSus Billing API の E2E / スナップショットテストを TypeScript 版 SDK でも実行できるようにするためのテストスイートです。Go 版 (`../private-saasus-sdk-go/tests/e2e/billingapi`) と同じストーリー構成を testlib ベースで再現しています。

## 📁 構成

```
tests/e2e/billing/
├── billing.e2e.ts         # 通常のE2E実行エントリーポイント
├── billing.snapshot.ts    # スナップショット実行エントリーポイント
├── client.ts              # Billing API用のE2Eクライアントラッパー
├── helpers.ts             # Stripeキーなどのヘルパー
├── stories.ts             # ストーリー定義
├── validation.ts          # 検証ロジック
└── README.md
```

## 🚀 実行方法

`.env` に SaaSus 認証情報と Stripe のテストキーを設定した上で、以下を実行します。

```bash
# Billing API E2E
npm run test:e2e:billing

# Billing API スナップショット
npm run test:e2e:billing:snapshot -- --snapshot-mode=full
```

### 必須環境変数

```
SAASUS_SAAS_ID=your-saas-id
SAASUS_API_KEY=your-api-key
SAASUS_SECRET_KEY=your-secret-key
STRIPE_SECRET_KEY=sk_test_your_stripe_key
```

オプションとして `SAASUS_API_URL_BASE` や `E2E_SNAPSHOT_*` を上書きできます。

## 📚 ストーリー概要

Go 版と同様の構成を目指していますが、TypeScript 版では以下の2ストーリーで Postman コレクションを再現しています。

1. **Postman Collection Story - Standard Methods**
2. **Postman Collection Story - Standard Methods With Body**

いずれも `tests/__tests__/testlib` の StoryRunner を利用しており、Billing API の主要メソッドをカバーします。

## 📸 スナップショットオプション

`billing.snapshot.ts` では `--snapshot-mode` フラグで挙動を切り替えられます。

| モード | 説明 |
|--------|------|
| `capture` | キャプチャのみ (`E2E_SNAPSHOT_CAPTURE=true`) |
| `compare` | 比較のみ (`E2E_SNAPSHOT_COMPARISON=true`) |
| `report` | レポートのみ (`E2E_SNAPSHOT_REPORTING=true`) |
| `full` | 上記すべてを有効化 |

`--snapshot-output` で出力ディレクトリ、`--stories story1,story2` でストーリーのフィルタリングが可能です。

## ✅ 実装上のポイント

- `tests/__tests__/testlib` の `E2EEngine` を再利用し、Go 版と同じメソッド名でクライアントラッパーを用意
- `setup` / `cleanup` ステップで Stripe 情報をクリーンな状態に保つ
- `testlib` 付属のスナップショットエンジンがそのまま利用出来るよう、環境変数でモードを切り替え

必要に応じてストーリーの追加やバリデーション拡張を行ってください。
