/**
 * Covers the input synthesis and the argument binding on their own, without a
 * mock. The specs in use declare no header parameters and no `anyOf` request
 * body, and they are always consistent with the SDK they generated, so the
 * contract suite exercises neither path.
 */
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
import { StripeApi } from "../src/generated/Billing";
import { Spec, loadSpec, paramName } from "./spec";
import { Case, Method, bindArguments, normalizeName, parameterNames, roundTrip } from "./engine";

/** Writes a document and loads it through the entry point the suite uses. */
function writeSpec(document: string): Spec {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "contract-spec-"));
  fs.writeFileSync(path.join(dir, "test.yml"), document);
  return loadSpec(dir, "test");
}

/** Stands in for a generated method answering with a given response. */
function respondingMethod(status: number, data: unknown, ...names: string[]): Method {
  return new Function(
    ...names,
    `return Promise.resolve({ status: ${status}, data: ${JSON.stringify(data)} });`
  ) as Method;
}

/** Stands in for a generated method; only its argument names are read. */
function generatedMethod(...names: string[]): Method {
  return respondingMethod(200, null, ...names);
}

const USERS_DOCUMENT = `
openapi: 3.0.0
paths:
  /tenants/{tenant_id}/users:
    parameters:
      - name: tenant_id
        in: path
        schema:
          type: string
        example: tenant-1
    get:
      operationId: GetUsers
      parameters:
        - name: limit
          in: query
          schema:
            type: integer
          example: 10
        - name: X-Saasus-Referer
          in: header
          schema:
            type: string
          example: referer-1
      responses:
        200:
          description: ok
          content:
            application/json:
              schema:
                type: object
`;

const UNITS_DOCUMENT = `
openapi: 3.0.0
paths:
  /units:
    post:
      operationId: SaveUnit
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/UnitForSave'
      responses:
        200:
          description: ok
components:
  schemas:
    UnitForSave:
      KEYWORD:
        - $ref: '#/components/schemas/FixedUnit'
        - $ref: '#/components/schemas/UsageUnit'
      discriminator:
        propertyName: type
        mapping:
          fixed: '#/components/schemas/FixedUnit'
          usage: '#/components/schemas/UsageUnit'
    FixedUnit:
      type: object
      properties:
        name:
          type: string
          example: fixed-unit
    UsageUnit:
      type: object
      properties:
        name:
          type: string
          example: usage-unit
`;

describe("operation indexing", () => {
  const spec = writeSpec(USERS_DOCUMENT);
  const operation = spec.operations.get("GetUsers");

  test("path parameters stay apart from the query and header ones", () => {
    expect(operation?.pathParams.map(paramName)).toEqual(["tenant_id"]);
    expect(operation?.otherParams.map(paramName)).toEqual(["limit", "X-Saasus-Referer"]);
  });

  test("a status declaring a JSON body is recorded as such", () => {
    expect(operation?.hasSuccess).toBe(true);
    expect([...(operation?.jsonBodyStatuses ?? [])]).toEqual([200]);
  });
});

describe("argument binding", () => {
  const spec = writeSpec(USERS_DOCUMENT);
  const operation = spec.operations.get("GetUsers");

  test("header parameters are bound as well as path and query ones", () => {
    // Dropping the headers would leave the request incomplete, and an operation
    // whose only parameters are headers would get no value at all.
    const method = generatedMethod("tenantId", "limit", "xSaasusReferer", "options");
    expect(bindArguments(spec, operation!, method, 0)).toEqual(["tenant-1", 10, "referer-1"]);
  });

  test("an argument the spec added later is simply absent", () => {
    // A release generated before the header parameter existed has one fewer
    // argument; that backward-compatible change must not fail before the
    // request is sent.
    const method = generatedMethod("tenantId", "limit", "options");
    expect(bindArguments(spec, operation!, method, 0)).toEqual(["tenant-1", 10]);
  });

  test("an argument the spec cannot explain fails", () => {
    // Binding by position instead would send a legitimate-looking request with
    // the values in the wrong arguments.
    const method = generatedMethod("tenantId", "limit", "cursor", "options");
    expect(() => bindArguments(spec, operation!, method, 0)).toThrow(
      /arguments not explained by the spec: cursor/
    );
  });

  test("a method whose last argument is not the axios config fails", () => {
    const method = generatedMethod("tenantId", "limit");
    expect(() => bindArguments(spec, operation!, method, 0)).toThrow(/expected "options"/);
  });

  test("the request body goes to the one argument the spec does not name", () => {
    // The generator names the body argument after the schema, which a release
    // may have been generated from a different revision of.
    const bodySpec = writeSpec(UNITS_DOCUMENT.replace("KEYWORD", "oneOf"));
    const saveUnit = bodySpec.operations.get("SaveUnit");
    const method = generatedMethod("unitForSaveOfAnEarlierName", "options");
    expect(bindArguments(bodySpec, saveUnit!, method, 1)).toEqual([
      { name: "usage-unit", type: "usage" },
    ]);
  });
});

describe("request body variants", () => {
  // A body whose members are reachable only through anyOf would otherwise be
  // synthesized as an empty object.
  test.each(["oneOf", "anyOf"])("every %s member is sent with its discriminator", (keyword) => {
    const spec = writeSpec(UNITS_DOCUMENT.replace("KEYWORD", keyword));
    const operation = spec.operations.get("SaveUnit");
    expect(spec.bodyVariants(operation!)).toEqual(["fixed", "usage"]);
    expect(spec.bodyValue(operation!, 0)).toEqual({ name: "fixed-unit", type: "fixed" });
    expect(spec.bodyValue(operation!, 1)).toEqual({ name: "usage-unit", type: "usage" });
  });
});

describe("value synthesis", () => {
  const spec = writeSpec(`
openapi: 3.0.0
paths:
  /things:
    post:
      operationId: SaveThing
      requestBody:
        content:
          application/json:
            schema:
              allOf:
                - type: object
                  properties:
                    kind:
                      type: string
                      enum: [primary, secondary]
                - type: object
                  properties:
                    code:
                      type: string
                      minLength: 12
                    created_at:
                      type: string
                      format: date-time
                    starts_on:
                      type: string
                      format: date
                    count:
                      type: integer
                    enabled:
                      type: boolean
                    tags:
                      type: array
                      items:
                        type: string
                        example: tag-1
      responses:
        204:
          description: no content
`);
  const operation = spec.operations.get("SaveThing");

  test("allOf members are composed and every declared property is filled", () => {
    // Optional properties are sent too: one that is never sent leaves its own
    // serialization, and the required fields nested below it, unverified.
    expect(spec.bodyValue(operation!, 0)).toEqual({
      kind: "primary",
      code: "syntheticxxx",
      created_at: "2024-01-01T00:00:00Z",
      starts_on: "2024-01-01",
      count: 1,
      enabled: true,
      tags: ["tag-1"],
    });
  });

  test("a status with no declared body is not required to return one", () => {
    expect([...operation!.jsonBodyStatuses]).toEqual([]);
  });
});

describe("response judgement", () => {
  const spec = writeSpec(USERS_DOCUMENT);
  const operation = spec.operations.get("GetUsers");

  function responseCase(status: number, data: unknown): Case {
    return {
      id: "test.GetUsers",
      spec,
      operation: operation!,
      api: {},
      method: respondingMethod(status, data, "tenantId", "limit", "xSaasusReferer", "options"),
      variantIndex: 0,
    };
  }

  test("a success status the spec does not declare fails", async () => {
    // Otherwise the declared status and its body both go unverified.
    await expect(roundTrip(responseCase(204, ""))).rejects.toThrow(/unexpected status 204/);
  });

  test("a declared status with its body passes", async () => {
    await expect(roundTrip(responseCase(200, { id: "user-1" }))).resolves.toBeUndefined();
  });
});

describe("name normalization", () => {
  test.each([
    ["GetStripeInfo", "getStripeInfo"],
    ["X-Saasus-Referer", "xSaasusReferer"],
    ["auth_flow", "authFlow"],
  ])("%s and %s are the same name", (specName, generatedName) => {
    expect(normalizeName(specName)).toBe(normalizeName(generatedName));
  });
});

describe("argument names", () => {
  test("a generated method still carries its argument names after compilation", () => {
    // The binding depends on TypeScript keeping argument names; if a future
    // toolchain mangles them this fails instead of silently binding nothing.
    const method = StripeApi.prototype.updateStripeInfo as unknown as Method;
    expect(parameterNames(method)).toEqual(["updateStripeInfoParam", "options"]);
  });
});
