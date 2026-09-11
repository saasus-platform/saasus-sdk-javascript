/**
 * スナップショットテスト用のステータスコードフィルター
 * 200系のステータスコードのみを許可するフィルター
 */

export class SnapshotStatusFilter {
  /**
   * 200系のステータスコードのみを通すフィルター
   */
  static filterSuccessOnly(statusCode: number): boolean {
    return statusCode >= 200 && statusCode < 300;
  }

  /**
   * スナップショット結果から非200系のエントリを除外
   */
  static filterSnapshotResults(snapshotData: any): any {
    if (!snapshotData || !snapshotData.steps) {
      return snapshotData;
    }

    // 200系のステータスコードを持つステップのみを保持
    const filteredSteps = snapshotData.steps.filter((step: any) => {
      const statusCode = step.status_code || step.return_value?.status_code;
      return this.filterSuccessOnly(statusCode);
    });

    return {
      ...snapshotData,
      steps: filteredSteps,
      filtered_count: snapshotData.steps.length - filteredSteps.length
    };
  }

  /**
   * エラーケースを除外したテスト実行
   */
  static shouldSkipErrorCase(step: any): boolean {
    // エラーケースを示すキーワードをチェック
    const errorKeywords = ['error', 'fail', 'invalid', 'unauthorized', 'forbidden', 'not_found'];
    const stepName = (step.method_name || step.description || '').toLowerCase();
    
    return errorKeywords.some(keyword => stepName.includes(keyword));
  }
}
