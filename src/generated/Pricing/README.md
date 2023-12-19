# Pricing

詳細(引数、戻り値)は API ドキュメントを[参照](https://docs.saasus.io/reference/getpricingunits)

## プライシングユニット

- getPricingUnits ・・・プライシングユニットの一覧を取得

- getPricingUnit ・・・プライシングユニットを取得
- createPricingUnit ・・・プライシングユニットを作成

## 機能メニュー

- getPricingMenus ・・・プライシング機能メニュー一覧を取得

- getPricingMenu ・・・プライシング機能メニューを取得
- createPricingMenu ・・・プライシング機能メニューを作成

## 料金プラン

- getPricingPlans ・・・料金プラン一覧を取得

- getPricingPlan ・・・料金プランを取得
- createPricingPlan ・・・料金プランを作成

- deleteAllPlansAndMenusAndUnitsAndMetersAndTaxRates ・・・全ての Plans,Menus,Units,Meters,Tax Rates の削除

## メータリング

- getMeteringUnitDateCountByTenantIdAndUnitNameAndDate ・・・指定した日付のメータリングユニットカウントを取得
- updateMeteringUnitTimestampCount ・・・指定したタイムスタンプのメータリングユニットカウントを更新
- deleteMeteringUnitTimestampCount ・・・指定したタイムスタンプのメータリングユニットカウントを削除

- getMeteringUnitDateCountByTenantIdAndUnitNameToday ・・・当日のメータリングユニットカウントを取得
- updateMeteringUnitTimestampCountNow ・・・現在時刻のメータリングユニットカウントを更新

- getMeteringUnitMonthCountByTenantIdAndUnitNameThisMonth ・・・当月のメータリングユニットカウントを取得
- getMeteringUnitMonthCountByTenantIdAndUnitNameAndMonth ・・・指定月のメータリングユニットカウントを取得

- getMeteringUnitDateCountsByTenantIdAndDate ・・・指定日の全メータリングユニットカウントを取得
- getMeteringUnitMonthCountsByTenantIdAndMonth ・・・指定月の全メータリングユニットカウントを取得
- getMeteringUnitDateCountByTenantIdAndUnitNameAndDatePeriod・・・指定した日時期間のメータリングユニットカウントを取得

## 税率

- createTaxRate ・・・税率の作成
- getTaxRates ・・・税率を取得します
- updateTaxRate ・・・税率を更新