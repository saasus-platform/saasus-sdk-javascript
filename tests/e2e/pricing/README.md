# Pricing Module E2E Tests

## Overview

This directory contains E2E snapshot tests for the Pricing module of the SaaSus SDK.

## Test Structure

- `client.ts` - E2E client wrapper for Pricing API
- `validation.ts` - Response validation functions
- `stories.ts` - Test scenarios (stories) definition
- `pricing.snapshot.ts` - Main snapshot test runner
- `run-pricing-snapshot.js` - CLI entry point
- `testdata/` - Test data and parameters

## Running Tests

### Capture Mode (Default)
```bash
node tests/e2e/pricing/run-pricing-snapshot.js
```

### Compare Mode
```bash
node tests/e2e/pricing/run-pricing-snapshot.js --snapshot-mode=compare
```

### Full Mode (Capture + Compare + Report)
```bash
node tests/e2e/pricing/run-pricing-snapshot.js --snapshot-mode=full
```

### Filter Specific Stories
```bash
node tests/e2e/pricing/run-pricing-snapshot.js --stories="Postman Collection Story - Standard Methods"
```

## Test Stories

### 1. Postman Collection Story - Standard Methods
End-to-end flow that exercises CRUD operations for metering units, pricing units, menus, and tax rates:
- Create / Get Metering Units
- Create / Update / Get Pricing Units
- Create helper units for detach scenarios
- Create / Get Pricing Menus
- Create / Get Tax Rates
- Update Pricing Menu + Tax Rate
- Delete Pricing Menu, Pricing Unit, Metering Unit
- DeleteAll cleanup (plans / menus / units / meters / tax rates)

### 2. Additional Coverage Story - Standard Struct Methods
Plan-oriented flow that exercises struct-based payloads and plan updates:
- Create Metering / Pricing Units and Menus
- Create Pricing Plan
- Get Pricing Plans / Plan detail
- Update Pricing Plan & `UpdatePricingPlansUsed` (501 expected)
- Create & Update Tax Rate
- Delete Pricing Plan
- DeleteAll cleanup

## API Coverage

The tests cover the following Pricing API endpoints:

### Pricing Plans
- GetPricingPlans
- GetPricingPlan
- CreatePricingPlan
- UpdatePricingPlan
- UpdatePricingPlansUsed (expected 501)
- DeletePricingPlan
- DeleteAllPlansAndMenusAndUnitsAndMetersAndTaxRates

### Pricing Menus
- GetPricingMenus
- GetPricingMenu
- CreatePricingMenu
- UpdatePricingMenu
- DeletePricingMenu

### Pricing Units
- GetPricingUnits
- GetPricingUnit
- CreatePricingUnit
- UpdatePricingUnit
- DeletePricingUnit

### Metering
- GetMeteringUnits
- CreateMeteringUnit
- DeleteMeteringUnitById

### Tax Rates
- GetTaxRates
- CreateTaxRate
- UpdateTaxRate

## Environment Variables

Required environment variables (set in `.env`):
- `SAASUS_SAAS_ID`
- `SAASUS_API_KEY`
- `SAASUS_SECRET_KEY`

## Test Data

Test parameters are defined in `testdata/test_params.json` and include:
- Metering unit configuration
- Pricing unit configuration
- Pricing menu configuration
- Pricing plan configuration
- Tax rate configuration
