# testlib - 共通テストライブラリ

**SaaSus SDK JavaScript用共通テストライブラリ** - 全APIモジュールで再利用可能なE2Eテスト基盤

## 📦 パッケージ構成

```
testlib/
├── config.ts           # 設定管理（.env自動読み込み）
├── models.ts           # 共通データ型定義
├── logger.ts           # 拡張ログ機能
├── masker.ts           # 機密情報マスキング
├── coverage.ts         # カバレッジ追跡
├── runner.ts           # ストーリー実行エンジン
├── method-executor.ts  # メソッド実行
├── status-check.ts     # ステータスコード検証
├── reporter.ts         # レポート機能
└── snapshot/           # スナップショットテスト機能
    ├── types.ts        # スナップショット型定義
    ├── config.ts       # スナップショット設定
    ├── capture.ts      # レスポンスキャプチャ
    ├── file-manager.ts # ファイル管理
    ├── validator.ts    # スナップショット検証
    ├── reporter.ts     # スナップショットレポート
    ├── helpers.ts      # ヘルパー関数
    ├── comparator.ts   # スナップショット比較
    ├── engine.ts       # スナップショットエンジン
    └── masker.ts       # スナップショット用マスキング
```

## 🚀 基本使用方法

```bash
# 詳細ログでテスト実行
LOG_LEVEL=DEBUG npm test

# 標準ログでテスト実行
LOG_LEVEL=INFO npm test
```

```typescript
import { Config, TestLogger, StoryRunner, CoverageTracker, Story } from './testlib';

// 設定とロガー作成
const config = Config.fromEnv();
config.validate();
const logger = new TestLogger(config);

// カバレッジトラッカー作成
const methods = ['method1', 'method2', 'method3'];
const coverage = new CoverageTracker(methods);

// ストーリーランナー作成
const client = createYourClient();
const runner = new StoryRunner(client, config, logger, coverage);

// ストーリー定義
const stories: Story[] = [
  {
    name: 'Test Story',
    description: 'Test description',
    module: 'api',
    steps: [
      {
        method_name: 'method1',
        params: {},
        expected_status: 200
      }
    ]
  }
];

// 実行
for (const story of stories) {
  await runner.runStory(story);
}

// カバレッジレポート
coverage.printSummary();
```

## 🎯 主要コンポーネント

### Config

設定管理（環境変数・コマンドライン引数）

```typescript
const config = Config.fromEnv();
config.validate(); // 必須環境変数チェック
```

**機能:**
- `.env`ファイル自動読み込み（複数パス対応）
- 環境変数処理
- ログレベル優先順位制御（`E2E_LOG_LEVEL` > `LOG_LEVEL`）
- バリデーション

### TestLogger

拡張ログ機能

```typescript
const logger = new TestLogger(config);
logger.info('Information');
logger.debug('Debug info');
logger.logObject('Request', data);
```

**機能:**
- ログレベル制御（DEBUG, INFO, WARN, ERROR）
- 機密情報自動マスキング
- 構造化ログ出力

### Masker

機密情報マスキング

```typescript
const masker = new Masker();
const masked = masker.mask(data);
```

**自動マスキング対象:**
- APIキー、シークレット、トークン
- パスワード
- JWTトークン
- 長い英数字文字列

### CoverageTracker

メソッドカバレッジ追跡

```typescript
const coverage = new CoverageTracker(methods);
coverage.recordExecution('method1', 'story', 'step', 200, 0.5, true);
const summary = coverage.getSummary();
coverage.printSummary();
```

**機能:**
- メソッド実行状況追跡
- 成功率・実行時間統計
- 未テストメソッド検出

### StoryRunner

ストーリー実行エンジン

```typescript
const runner = new StoryRunner(client, config, logger, coverage);
const result = await runner.runStory(story);
```

**機能:**
- タイムアウト制御
- リトライロジック（指数バックオフ）
- Fail-fastモード
- カバレッジ自動記録

## 📋 データ型

### Story

```typescript
interface Story {
  name: string;
  description: string;
  module: string;
  setup?: Step[];
  steps: Step[];
  cleanup?: Step[];
  tags?: string[];
  timeout?: number;
}
```

### Step

```typescript
interface Step {
  method_name: string;
  params: Record<string, any> | ((vars: Record<string, any>) => Record<string, any>);
  expected_status?: number;
  allowed_statuses?: number[];
  validation_func?: (response: any) => boolean;
  state_update?: (response: any, variables: Record<string, any>) => void;
  description?: string;
  store_as?: string;
  skip_on_dry_run?: boolean;
}
```

## ⚙️ 設定オプション

### 環境変数

```bash
# 必須
SAASUS_SAAS_ID=your-saas-id
SAASUS_API_KEY=your-api-key
SAASUS_SECRET_KEY=your-secret-key

# オプション
LOG_LEVEL=DEBUG              # ログレベル (DEBUG, INFO, WARN, ERROR)
E2E_LOG_LEVEL=DEBUG          # E2E固有のログレベル（LOG_LEVELをオーバーライド）
E2E_DRY_RUN=true
E2E_TIMEOUT=300
E2E_MAX_RETRIES=3
FAIL_FAST=true
SAASUS_BASE_URL=https://api.dev.saasus.io/v1

# スナップショット
E2E_SNAPSHOT_ENABLE=true
E2E_SNAPSHOT_COMPARISON=true
E2E_SNAPSHOT_REPORTING=true
E2E_SNAPSHOT_OUTPUT_DIR=./snapshots
E2E_SNAPSHOT_CAPTURE_LEVEL=FULL  # FULL or MINIMAL
```

### コマンドライン

```bash
--verbose          # 詳細ログ（LOG_LEVEL=DEBUGと同等）
--dry-run          # ドライラン
--timeout 600      # タイムアウト（秒）
--fail-fast        # 失敗時即停止
```

## 🔧 Go版との主な違い

### JavaScript版の特徴

1. **Promise/async-await**: 非同期処理
2. **タイムアウト制御**: Promise.raceによる実装
3. **リトライロジック**: 指数バックオフ対応
4. **型安全性**: TypeScriptによる型チェック

### Go版の特徴

1. **リフレクション**: 動的メソッド呼び出し
2. **Context**: コンテキスト対応
3. **Goroutine**: 並行処理対応

## 🎯 改善点（Go版から移植）

✅ **設定バリデーション**: 必須環境変数チェック
✅ **ログレベル検証**: 無効な値の警告
✅ **機密情報マスキング**: 自動マスキング機能
✅ **スナップショット設定拡張**: 詳細な設定オプション
✅ **カバレッジ統合**: Runnerへの統合
✅ **詳細な統計**: 実行時間、成功率など

## 📝 使用例

```typescript
// 1. 設定
const config = Config.fromEnv();
config.validate();

// 2. ロガー
const logger = new TestLogger(config);

// 3. カバレッジ
const coverage = new CoverageTracker(['getUser', 'createUser', 'deleteUser']);

// 4. ランナー
const runner = new StoryRunner(client, config, logger, coverage);

// 5. ストーリー実行
const story: Story = {
  name: 'User CRUD',
  description: 'Test user operations',
  module: 'auth',
  steps: [
    {
      method_name: 'createUser',
      params: { email: 'test@example.com' },
      expected_status: 201,
      store_as: 'userId'
    },
    {
      method_name: 'getUser',
      params: (vars) => ({ userId: vars.userId }),
      expected_status: 200
    },
    {
      method_name: 'deleteUser',
      params: (vars) => ({ userId: vars.userId }),
      expected_status: 204
    }
  ]
};

const result = await runner.runStory(story);

// 6. レポート
coverage.printSummary();
```
