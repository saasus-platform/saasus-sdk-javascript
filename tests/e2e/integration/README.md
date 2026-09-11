# Integration E2E Tests

This directory contains end-to-end tests for the SaaSus Integration API module.

## Overview

The Integration module provides EventBridge integration functionality for the SaaSus Platform, allowing you to:
- Configure EventBridge settings
- Send events to Amazon EventBridge
- Test EventBridge connections
- Manage EventBridge configurations

## Test Structure

- `client.ts` - Integration E2E client wrapper
- `stories.ts` - Test scenarios and method coverage verification
- `state.ts` - Test state management and cleanup
- `helpers.ts` - Test utility functions
- `validation.ts` - Test result validation logic
- `integration.e2e.ts` - Main E2E test runner
- `integration.snapshot.ts` - Snapshot test runner

## Running Tests

### E2E Tests
```bash
npm run test:integration:e2e
# or
node tests/e2e/integration/run-integration-e2e.js
```

### Snapshot Tests
```bash
npm run test:integration:snapshot
# or
node tests/e2e/integration/run-integration-snapshot.js
```

### Snapshot Modes
- `capture` - Capture new snapshots
- `compare` - Compare against existing snapshots
- `report` - Generate validation reports
- `full` - All modes combined

Example:
```bash
npx ts-node tests/e2e/integration/integration.snapshot.ts --snapshot-mode=full
```

## Environment Variables

Ensure these environment variables are set in your `.env` file:
- `SAASUS_SAAS_ID`
- `SAASUS_API_KEY`
- `SAASUS_SECRET_KEY`
- `SAASUS_API_URL_BASE` (optional, defaults to https://api.saasus.io)
- `TEST_AWS_ACCOUNT_ID` (optional, overrides default EventBridge account used in tests)
- `TEST_AWS_REGION` (optional, overrides default AWS region `ap-northeast-1`)

## Story Coverage

The TypeScript suite mirrors the Go implementation in `saasus-sdk-go/tests/e2e/integrationapi` for the standard Postman story:
- `Postman Collection Story - Standard Methods`

WithResponse系とWithBody系ストーリーは要望により省略していますが、標準メソッドでEventBridgeの主要な操作フローを検証できる構成です。

## Test Coverage

The tests cover these Integration API methods:
- GetEventBridgeSettings
- SaveEventBridgeSettings
- DeleteEventBridgeSettings
- CreateEventBridgeEvent
- CreateEventBridgeTestEvent

> **Note:** Go SDK 側に存在する WithResponse / WithBody メソッドはテスト対象外ですが、標準メソッドを通じて同じ API の動作確認が可能です。`CreateEventBridgeEvent` は EventBridge 連携設定が実環境側で未完了の場合に 500/501 を返すことがあるため、テストではそのステータスも許容しています。

## Expected Validation Output

The snapshot tests generate validation results in this format:
```json
{
  "story_name": "Postman Collection Story - Standard Methods",
  "validation_time": "2025-11-10T13:41:49.586335+09:00",
  "is_valid": true,
  "completion_status": "complete",
  "sequence_errors": null,
  "state_transition_errors": null,
  "timing_errors": null,
  "summary": {
    "total_errors": 0,
    "total_warnings": 0,
    "total_info": 0,
    "is_valid": true
  }
}
```
