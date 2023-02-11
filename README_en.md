# JavaScript SDK for SaaSus Platform

[Japanese page is here.](./README.md)

---

# Preparing to use the SDK

## Install

```
yarn add saasus-sdk
```

or

```
npm install saasus-sdk
```

### Define Environment Variables

```ini
### for SaaSus Platform
SAASUS_SAAS_ID="(SaaS ID on Screen)"
SAASUS_API_KEY="(API KEY on Screen)"
SAASUS_SECRET_KEY="(Client Secret on Screen)"
SAASUS_LOGIN_URL="https://auth.sample.saasus.jp/ (Login Screen URL)"
SAASUS_AUTH_MODE="api"
```

SAASUS_SAAS_ID, SAASUS_API_KEY, SAASUS_SECRET_KEY are the SaaS ID, API key and client secret displayed on the SaaS development console screen,
SAASUS_LOGIN_URL sets the URL of the login screen created in the SaaS development console.
SAASUS_AUTH_MODE sets the api when the front side is implemented with a non-Express template engine such as React.

### Incorporating callback functions

api/routes/callback.ts

```typescript
import { CallbackRouteFunction } from "saasus-sdk";

// Set the SaaS SDK standard Callback Function to the Callback URL Route
router.get("/", CallbackRouteFunction);
```

### Incorporating the authentication module

api/app.ts

```typescript
import { AuthMiddleware } from "saasus-sdk";

// Use Auth Middleware of SaaSus SDK standard
app.use(
  // Set routes that require Middleware authentication
  ["/chat", "/api/board", "/api/post", "/api/plan", "/api/tenant"],
  AuthMiddleware
);
```

---

## JavaScript SDK

- [Auth](./src/generated/Auth/README_en.md)

  It is used for referencing/updating user information, basic information, authentication information, tenant information, role information, etc.

- [Pricing](./src/generated/Pricing/README_en.md)

  It is used to refer to and update information related to charges, such as pricing units, function menus, charge plans, and metering unit counts.

- [Billing](./src/generated/Billing/README_en.md)

  It is used for referencing/updating information related to external SaaS used in billing operations.

---

## Use Case Sample

In Preparation···
