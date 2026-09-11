/**
 * Jest セットアップファイル
 * スナップショットモード指定オプションをサポート
 */

// スナップショットモードの環境変数を処理
const snapshotMode = process.env.SNAPSHOT_MODE;

if (snapshotMode) {
  console.log(`🔧 スナップショットモード: ${snapshotMode}`);
  
  switch (snapshotMode) {
    case 'capture':
      console.log('📸 スナップショットをキャプチャします');
      break;
    case 'compare':
      console.log('🔍 スナップショットを比較します');
      break;
    case 'report':
      console.log('📊 レポートを生成します');
      break;
    case 'full':
      console.log('🚀 完全スナップショットテストを実行します');
      break;
    default:
      console.log(`⚠️  不明なスナップショットモード: ${snapshotMode}`);
  }
}

// テストタイムアウトの設定
jest.setTimeout(300000); // 5分

// グローバルなテスト設定
beforeAll(() => {
  console.log('🧪 Auth E2E テストを開始します');
});

afterAll(() => {
  console.log('✅ Auth E2E テストが完了しました');
});