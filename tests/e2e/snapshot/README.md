# Snapshot Test Artifacts

このディレクトリにはスナップショットテストの実行結果が保存されます。

## ディレクトリ構造

```
tests/e2e/snapshot/
├── docs/                         # ドキュメント類
├── <module>/                     # モジュール単位 (`billing`, `communication` など)
│   ├── story_snapshots/          # キャプチャしたスナップショット
│   │   └── tags/                 # バージョンタグ付きスナップショット
│   ├── story_comparisons/        # バージョン間の比較結果（Git管理対象外）
│   ├── story_reports/            # HTML / JSON レポート（Git管理対象外）
│   └── story_validations/        # バリデーション結果（Git管理対象外）
└── README.md
```

## セキュリティ注意事項

⚠️ **重要:** 実際の API レスポンスやテストデータが含まれるため、コミット前に常に内容を確認してください。

- `<module>/story_snapshots/` 配下の JSON は自動的にシークレットをマスクします。レビューの上であれば Git で管理できます。
- `<module>/story_comparisons/`・`<module>/story_reports/`・`<module>/story_validations/` は `.gitignore` で追跡対象外にしています。
- CI/CD では必要に応じてアーティファクトとして保存してください。

## 使い方

詳細は `tests/e2e/billingapi/SNAPSHOT_TESTING.md` を参照してください。
