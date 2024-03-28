# JavaScript SDK for SaaSus Platform

[English page is here.](./README_en.md)

---

# SDK 利用の準備

## インストール

```
yarn add saasus-sdk
```

または

```
npm install saasus-sdk
```

### 環境変数を定義

```ini
### for SaaSus Platform
SAASUS_SAAS_ID="（画面のSaaS ID）"
SAASUS_API_KEY="（画面のAPI KEY）"
SAASUS_SECRET_KEY="（画面のクライアントシークレット）"
SAASUS_LOGIN_URL="https://auth.sample.saasus.jp/　（ログイン画面のURL）"
SAASUS_AUTH_MODE="api"
```

SAASUS_SAAS_ID, SAASUS_API_KEY, SAASUS_SECRET_KEY は SaaS 開発コンソール画面に表示されている SaaS ID、 API キー 　と　クライアントシークレットを、
SAASUS_LOGIN_URL は、SaaSus コンソールで作成したログイン画面の URL を設定します。
SAASUS_AUTH_MODE は、フロントサイドを React 等の Express のテンプレートエンジン以外で実装している場合に api と設定します。

### コールバック関数の組み込み

api/routes/callback.ts

```typescript
import { CallbackRouteFunction } from "saasus-sdk";

// SaaSus SDK標準のCallback FunctionをCallback URLのRouteに設定する
router.get("/", CallbackRouteFunction);
```

### 認証モジュールの組み込み

api/app.ts

```typescript
import { AuthMiddleware } from "saasus-sdk";

// SaaSus SDK標準のAuth Middlewareを利用する
app.use(
  // Middleware認証が必要なルートを設定
  ["/chat", "/api/board", "/api/post", "/api/plan", "/api/tenant"],
  AuthMiddleware
);
```

---

## JavaScript SDK

- [Auth](./docs/modules/Auth.md)

  ユーザ情報、基本情報、認証情報、テナント情報、役割(ロール)情報などに参照・更新に利用します。

- [Pricing](./docs/modules/Pricing.md)

  プライシングユニット、機能メニュー、料金プラン、メータリングユニットカウントなど料金に関連する情報の参照・更新に利用します。

- [Billing](./docs/modules/Billing.md)

  請求業務で使う外部 SaaS との連携情報の参照・更新に利用します。

- [Integration](./docs/modules/Integration.md)

  EventBridge 連携設定の参照・更新に利用します。

- [AwsMarketplace](./docs/modules/AwsMarketplace.md)

  AWS Marketplace 連携設定の参照・更新に利用します。

- [Communication](./docs/modules/Communication.md)

  フィードバック、コメント、投票などの参照・更新に利用します。

- [ApiLog](./docs/modules/ApiLog.md)

  API ログの参照に利用します。

---

## ユースケースサンプル

準備中・・・
