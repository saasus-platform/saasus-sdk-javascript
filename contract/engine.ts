/**
 * Round-trips the generated clients against a Prism mock started from the spec.
 *
 * Operations are enumerated from the spec at run time and resolved to generated
 * methods by name, so an SDK that lacks an operation simply has no case for it.
 * That is what lets the same suite run against a previously released SDK, which
 * is test (C).
 *
 * Synthetic data only: a constant bearer token and request values taken from the
 * spec. No response body, token or PII is logged.
 */
import * as fs from "fs";
import * as path from "path";
import { Operation, Spec, isObject, loadSpec, paramName } from "./spec";

/**
 * The specs declare a bearer scheme and the mock rejects requests without
 * credentials, but it does not validate the value. The hand-written signing
 * wrapper (`src/modules/interceptor.ts`) is deliberately bypassed: this suite
 * verifies the generated client against the spec, and the authentication layer
 * is out of scope.
 */
const SYNTHETIC_TOKEN = "synthetic-bearer-token";

const GENERATED_ROOT = path.join(__dirname, "..", "src", "generated");

/** The axios config argument every generated method takes last. */
const OPTIONS_ARGUMENT = "options";

export type Method = (...args: unknown[]) => Promise<{ status: number; data: unknown }>;

type Constructor = new (argument: unknown) => Record<string, unknown>;

export interface Case {
  readonly id: string;
  readonly spec: Spec;
  readonly operation: Operation;
  readonly api: Record<string, unknown>;
  readonly method: Method;
  readonly variantIndex: number;
}

export interface Plan {
  readonly cases: Case[];
  /** Spec operations with no matching generated method, as `<module>.<id>`. */
  readonly missing: string[];
  /** Generated modules absent from the mocked module list. */
  readonly untested: string[];
}

/**
 * Builds one case per operation and request-body variant.
 *
 * `CONTRACT_MODULES` decides what is tested. It carries the same list the Prism
 * setup consumed, so the modules mocked and the modules tested cannot drift
 * apart. A module without a `PRISM_URL_<MODULE>` contributes no case, which is
 * what lets a single module be run locally.
 */
export function buildPlan(): Plan {
  const specDir = process.env.CONTRACT_SPEC_DIR ?? "";
  const modules = (process.env.CONTRACT_MODULES ?? "").split(/\s+/).filter((name) => name !== "");
  if (specDir === "" || modules.length === 0) {
    throw new Error(
      "CONTRACT_SPEC_DIR and CONTRACT_MODULES are required; they carry the spec" +
        " directory and the module list from the fetch-openapi-spec action" +
        " (locally: CONTRACT_SPEC_DIR=/tmp/openapi-spec CONTRACT_MODULES=billing" +
        " PRISM_URL_BILLING=http://127.0.0.1:4010" +
        " npx jest --config jest.contract.config.js)"
    );
  }

  const directories = generatedDirectories();
  const cases: Case[] = [];
  const missing: string[] = [];

  for (const module of modules) {
    const directory = directories.get(module);
    if (directory === undefined) {
      // No generated code for the module: for the candidate SDK a module this
      // suite cannot reach, for a previously released one a module that did not
      // exist yet. Either way its operations go unverified.
      missing.push(`${module}.*`);
      continue;
    }
    const basePath = process.env[`PRISM_URL_${module.toUpperCase()}`] ?? "";
    if (basePath === "") {
      continue;
    }

    const spec = loadSpec(specDir, module);
    const generated = require(path.join(GENERATED_ROOT, directory)) as Record<string, unknown>;
    const configuration = new (generated.Configuration as Constructor)({
      basePath,
      accessToken: SYNTHETIC_TOKEN,
    });
    const methods = methodIndex(generated);
    const apis = new Map<Constructor, Record<string, unknown>>();

    for (const id of [...spec.operations.keys()].sort()) {
      const operation = spec.operations.get(id) as Operation;
      const binding = methods.get(normalizeName(id));
      if (binding === undefined) {
        missing.push(`${module}.${id}`);
        continue;
      }
      const api = apis.get(binding.constructor) ?? new binding.constructor(configuration);
      apis.set(binding.constructor, api);
      const labels = spec.bodyVariants(operation) ?? [""];
      labels.forEach((label, variantIndex) => {
        cases.push({
          id: `${module}.${id}${label === "" ? "" : `(${label})`}`,
          spec,
          operation,
          api,
          method: api[binding.methodName] as Method,
          variantIndex,
        });
      });
    }
  }

  const untested = [...directories.keys()].filter((module) => !modules.includes(module)).sort();
  return { cases, missing, untested };
}

/** Maps a spec module name to the directory holding its generated client. */
function generatedDirectories(): Map<string, string> {
  const directories = new Map<string, string>();
  for (const entry of fs.readdirSync(GENERATED_ROOT, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      directories.set(entry.name.toLowerCase(), entry.name);
    }
  }
  return directories;
}

interface Binding {
  readonly methodName: string;
  readonly constructor: Constructor;
}

/**
 * Indexes the generated `*Api` classes by operation.
 *
 * A module splits its operations across one class per spec tag, so every class
 * has to be searched. `*ApiFactory`, `*ApiFp` and `*ApiAxiosParamCreator` do not
 * match the suffix and are skipped: only the class method is exercised, because
 * the other three share its single implementation and differ merely in where
 * `axios` and `basePath` come from, and the param creator sends no request at
 * all.
 */
function methodIndex(generated: Record<string, unknown>): Map<string, Binding> {
  const index = new Map<string, Binding>();
  for (const className of Object.keys(generated).sort()) {
    const exported = generated[className];
    if (!/Api$/.test(className) || typeof exported !== "function") {
      continue;
    }
    const constructor = exported as Constructor;
    for (const methodName of Object.getOwnPropertyNames(constructor.prototype)) {
      if (methodName === "constructor" || typeof constructor.prototype[methodName] !== "function") {
        continue;
      }
      const key = normalizeName(methodName);
      if (!index.has(key)) {
        index.set(key, { methodName, constructor });
      }
    }
  }
  return index;
}

/**
 * Compares names without their casing and separators, so that a spec
 * `GetStripeInfo` reaches the generated `getStripeInfo` and a spec parameter
 * `X-Saasus-Referer` reaches the argument `xSaasusReferer`.
 */
export function normalizeName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

/**
 * Fills the generated argument list by name.
 *
 * Name binding rather than position means a release generated from an older
 * spec revision still gets its values in the right arguments, and an operation
 * whose first optional parameter the spec added later simply has one fewer
 * argument to fill. An argument the spec cannot explain fails here rather than
 * being sent with a wrong value that would look legitimate.
 */
export function bindArguments(
  spec: Spec,
  operation: Operation,
  method: Method,
  variantIndex: number
): unknown[] {
  const names = parameterNames(method);
  if (names[names.length - 1] !== OPTIONS_ARGUMENT) {
    throw new Error(
      `${operation.id}: the last argument is "${names[names.length - 1] ?? ""}", expected "${OPTIONS_ARGUMENT}"`
    );
  }

  const byName = new Map<string, Record<string, unknown>>();
  for (const param of [...operation.pathParams, ...operation.otherParams]) {
    const key = normalizeName(paramName(param));
    if (byName.has(key)) {
      throw new Error(`${operation.id}: two parameters are indistinguishable once normalized: ${key}`);
    }
    byName.set(key, param);
  }

  const args: unknown[] = [];
  const unexplained: number[] = [];
  for (const name of names.slice(0, -1)) {
    const param = byName.get(normalizeName(name));
    if (param === undefined) {
      unexplained.push(args.length);
      args.push(undefined);
      continue;
    }
    args.push(spec.paramValue(param));
  }

  // The request body is the one argument the spec does not name: the generator
  // derives its name from the schema, which a release may have been generated
  // from a different revision of.
  if (operation.bodySchema !== null && unexplained.length === 1) {
    args[unexplained[0]] = spec.bodyValue(operation, variantIndex);
    return args;
  }
  if (unexplained.length > 0) {
    const unknownNames = unexplained.map((index) => names[index]);
    throw new Error(`${operation.id}: arguments not explained by the spec: ${unknownNames.join(", ")}`);
  }
  // A body the spec declares but the method has no argument for belongs to an
  // operation the release predates; the mock reports it if it was required.
  return args;
}

/**
 * Reads the argument names off the compiled function. TypeScript erases types
 * but keeps names, and the generated methods declare plain identifiers.
 *
 * A name that is not a plain identifier, or a list whose last entry is not the
 * axios config, makes the caller fail rather than bind fewer arguments.
 */
export function parameterNames(method: Method): string[] {
  const source = method.toString();
  const open = source.indexOf("(");
  const close = source.indexOf(")", open);
  if (open < 0 || close < 0) {
    throw new Error("cannot read the argument names of a generated method");
  }
  const names = source
    .slice(open + 1, close)
    .split(",")
    .map((name) => name.trim())
    .filter((name) => name !== "");
  for (const name of names) {
    if (!/^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name)) {
      throw new Error(`cannot read the argument names of a generated method: "${name}"`);
    }
  }
  return names;
}

/**
 * Sends the request and judges the outcome.
 *
 * Prism runs with `--errors`, so a 4xx means the mock rejected a request it
 * validated against the same spec the request was built from, and a 5xx means
 * it could not produce a response the spec declares. Both leave the operation
 * unverified, so both fail.
 *
 * Unlike the other SDKs there is no response-side check beyond this:
 * `typescript-axios` performs no runtime deserialization, so the payload is
 * whatever `JSON.parse` produced and nothing about it can fail. Only its
 * presence can be required.
 */
export async function roundTrip(testCase: Case): Promise<void> {
  const { id, spec, operation, api, method, variantIndex } = testCase;
  const args = bindArguments(spec, operation, method, variantIndex);

  let status: number;
  let data: unknown;
  try {
    const response = await method.apply(api, args);
    status = response.status;
    data = response.data;
  } catch (error) {
    const failed = statusOf(error);
    if (failed === null) {
      // Report the type only: an error carrying the response body must not put
      // it in the test output.
      throw new Error(`${id}: round trip failed (${describeError(error)})`);
    }
    // An operation that declares no success response is expected to surface one
    // of the errors it does declare.
    if (operation.hasSuccess || !operation.statuses.has(failed)) {
      throw new Error(`${id}: unexpected status ${failed}`);
    }
    return;
  }

  // The success path needs the same check the error path above makes: a status
  // the spec does not declare leaves the declared responses, and the body check
  // below, unverified. An operation with no numeric success status is exempt,
  // because the indexing records no status for a non-numeric response key.
  if (operation.hasSuccess && !operation.statuses.has(status)) {
    throw new Error(`${id}: unexpected status ${status}`);
  }

  if (operation.jsonBodyStatuses.has(status) && (data === null || data === undefined || data === "")) {
    throw new Error(`${id}: status ${status}: the response body the spec declares is missing`);
  }
}

function statusOf(error: unknown): number | null {
  if (isObject(error) && isObject(error.response) && typeof error.response.status === "number") {
    return error.response.status;
  }
  return null;
}

/**
 * Identifies a failure without quoting it: an error raised while handling a
 * response may carry the body in its message, which must not reach the test
 * output. The type and the transport code are enough to reproduce it by hand.
 */
function describeError(error: unknown): string {
  if (!isObject(error)) {
    return typeof error;
  }
  const type =
    typeof error.constructor === "function" && typeof error.constructor.name === "string"
      ? error.constructor.name
      : String(error.name ?? "Error");
  return typeof error.code === "string" ? `${type} ${error.code}` : type;
}
