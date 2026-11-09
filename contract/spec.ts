/**
 * Parses an OpenAPI document and synthesizes the request inputs from it.
 *
 * Values come from the spec rather than being hardcoded, so they are acceptable
 * by construction: the Prism mock validates requests against the same document.
 * The synthesis rules are language independent and match the other SDKs'
 * contract suites, so a failure means the spec and the SDK disagree rather than
 * that this harness guessed a different value than its Go/Python counterparts.
 */
import * as fs from "fs";
import * as path from "path";
import * as yaml from "js-yaml";

export type Json = unknown;
export type JsonObject = Record<string, Json>;

/** Fallback for a string with neither example nor enum. */
const SYNTHETIC_VALUE = "synthetic";

const HTTP_METHODS = ["get", "put", "post", "delete", "patch", "head", "options"];

const PATH_PARAM_PATTERN = /\{([^}]+)\}/g;

/** A single operation of the document, reduced to what the suite needs. */
export interface Operation {
  readonly id: string;
  /**
   * Path parameters in path-template order. Kept apart from the others because
   * the generator emits them as the leading arguments of the method.
   */
  readonly pathParams: JsonObject[];
  /** Query and header parameters, each of which is a separate argument too. */
  readonly otherParams: JsonObject[];
  readonly bodySchema: JsonObject | null;
  readonly statuses: Set<number>;
  readonly hasSuccess: boolean;
  /** Statuses that declare an `application/json` response body. */
  readonly jsonBodyStatuses: Set<number>;
}

export function isObject(value: Json): value is JsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function paramName(param: JsonObject): string {
  return typeof param.name === "string" ? param.name : "";
}

export class Spec {
  readonly operations = new Map<string, Operation>();

  constructor(private readonly root: JsonObject) {
    this.index();
  }

  // --- indexing -------------------------------------------------------------

  private index(): void {
    const paths = this.root.paths;
    if (!isObject(paths)) {
      return;
    }
    for (const [pathTemplate, rawPathItem] of Object.entries(paths)) {
      if (!isObject(rawPathItem)) {
        continue;
      }
      for (const method of HTTP_METHODS) {
        const rawOperation = rawPathItem[method];
        if (!isObject(rawOperation) || typeof rawOperation.operationId !== "string") {
          continue;
        }
        const { pathParams, otherParams } = this.loadParams(pathTemplate, rawPathItem, rawOperation);
        const { statuses, hasSuccess, jsonBodyStatuses } = this.loadResponses(rawOperation);
        this.operations.set(rawOperation.operationId, {
          id: rawOperation.operationId,
          pathParams,
          otherParams,
          bodySchema: this.bodySchema(rawOperation),
          statuses,
          hasSuccess,
          jsonBodyStatuses,
        });
      }
    }
  }

  private loadParams(
    pathTemplate: string,
    rawPathItem: JsonObject,
    rawOperation: JsonObject
  ): { pathParams: JsonObject[]; otherParams: JsonObject[] } {
    const byName = new Map<string, JsonObject>();
    const otherParams: JsonObject[] = [];
    // Path-level parameters apply to every operation of the path item.
    for (const list of [rawPathItem.parameters, rawOperation.parameters]) {
      if (!Array.isArray(list)) {
        continue;
      }
      for (const raw of list) {
        if (!isObject(raw)) {
          continue;
        }
        const param = this.resolve(raw);
        if (param.in === "path") {
          byName.set(paramName(param), param);
        } else if (param.in === "query" || param.in === "header") {
          otherParams.push(param);
        }
      }
    }
    const pathParams: JsonObject[] = [];
    for (const match of pathTemplate.matchAll(PATH_PARAM_PATTERN)) {
      const param = byName.get(match[1]);
      if (param) {
        pathParams.push(param);
      }
    }
    return { pathParams, otherParams };
  }

  private bodySchema(rawOperation: JsonObject): JsonObject | null {
    if (!isObject(rawOperation.requestBody)) {
      return null;
    }
    const schema = this.jsonSchemaOf(this.resolve(rawOperation.requestBody));
    return schema === null ? null : this.resolve(schema);
  }

  private loadResponses(rawOperation: JsonObject): {
    statuses: Set<number>;
    hasSuccess: boolean;
    jsonBodyStatuses: Set<number>;
  } {
    const statuses = new Set<number>();
    const jsonBodyStatuses = new Set<number>();
    let hasSuccess = false;
    const responses = rawOperation.responses;
    if (isObject(responses)) {
      for (const [key, rawResponse] of Object.entries(responses)) {
        // "default" and the like carry no status.
        if (!/^\d+$/.test(key)) {
          continue;
        }
        const status = Number(key);
        statuses.add(status);
        if (status >= 200 && status < 300) {
          hasSuccess = true;
        }
        if (isObject(rawResponse) && this.jsonSchemaOf(this.resolve(rawResponse)) !== null) {
          jsonBodyStatuses.add(status);
        }
      }
    }
    return { statuses, hasSuccess, jsonBodyStatuses };
  }

  /** The `application/json` schema of a requestBody or response, if any. */
  private jsonSchemaOf(node: JsonObject): JsonObject | null {
    const content = node.content;
    if (!isObject(content)) {
      return null;
    }
    const json = content["application/json"];
    if (!isObject(json) || !isObject(json.schema)) {
      return null;
    }
    return json.schema;
  }

  // --- $ref resolution ------------------------------------------------------

  /** Follows `$ref` chains; a cap keeps a cyclic document from hanging. */
  resolve(node: JsonObject): JsonObject {
    let current = node;
    for (let i = 0; i < 32; i++) {
      if (typeof current.$ref !== "string") {
        return current;
      }
      const next = this.resolveRef(current.$ref);
      if (next === null) {
        return {};
      }
      current = next;
    }
    return current;
  }

  private resolveRef(ref: string): JsonObject | null {
    if (!ref.startsWith("#/")) {
      return null;
    }
    let current: Json = this.root;
    for (const rawSegment of ref.slice(2).split("/")) {
      const segment = rawSegment.replace(/~1/g, "/").replace(/~0/g, "~");
      if (!isObject(current)) {
        return null;
      }
      current = current[segment];
    }
    return isObject(current) ? current : null;
  }

  // --- value synthesis ------------------------------------------------------

  paramValue(param: JsonObject): Json {
    if ("example" in param) {
      return param.example;
    }
    return this.synth(isObject(param.schema) ? param.schema : null);
  }

  /**
   * Labels of the request body's top-level `oneOf`/`anyOf` members, or null
   * when the body is neither. Each member becomes its own case so that every
   * variant is actually sent.
   */
  bodyVariants(operation: Operation): string[] | null {
    const members = variantsOf(operation.bodySchema);
    if (members === null) {
      return null;
    }
    const discriminator = operation.bodySchema?.discriminator;
    return members.map((member) => discriminatorValue(discriminator, refOf(member)));
  }

  /** Synthesizes the request body, selecting one top-level variant. */
  bodyValue(operation: Operation, variantIndex: number): Json {
    const members = variantsOf(operation.bodySchema);
    if (members !== null && variantIndex < members.length) {
      return stripNull(this.synthVariant(operation.bodySchema, members[variantIndex]));
    }
    return stripNull(this.synth(operation.bodySchema));
  }

  synth(schema: JsonObject | null): Json {
    if (schema === null) {
      return null;
    }
    const resolved = this.resolve(schema);
    if ("example" in resolved) {
      return resolved.example;
    }
    if (Array.isArray(resolved.enum) && resolved.enum.length > 0) {
      return resolved.enum[0];
    }
    const members = variantsOf(resolved);
    if (members !== null) {
      return this.synthVariant(resolved, members[0]);
    }
    if (Array.isArray(resolved.allOf)) {
      return this.synthObject(this.mergeAllOf(resolved.allOf));
    }
    let kind = typeof resolved.type === "string" ? resolved.type : "";
    if (kind === "" && isObject(resolved.properties)) {
      kind = "object";
    }
    if (kind === "object") {
      return this.synthObject(resolved);
    }
    if (kind === "array") {
      const item = this.synth(isObject(resolved.items) ? resolved.items : null);
      return item === null ? [] : [item];
    }
    return synthScalar(resolved);
  }

  /**
   * Fills every declared property, not just the required ones: an optional
   * property that is never sent leaves its own serialization, and the required
   * fields nested below it, unverified.
   */
  private synthObject(schema: JsonObject): JsonObject {
    const out: JsonObject = {};
    if (isObject(schema.properties)) {
      for (const [name, raw] of Object.entries(schema.properties)) {
        if (isObject(raw)) {
          out[name] = this.synth(raw);
        }
      }
    }
    return out;
  }

  /** Composes the members' properties, which is what `allOf` is used for here. */
  private mergeAllOf(members: Json[]): JsonObject {
    const properties: JsonObject = {};
    for (const raw of members) {
      if (!isObject(raw)) {
        continue;
      }
      const part = this.resolve(raw);
      if (isObject(part.properties)) {
        Object.assign(properties, part.properties);
      }
    }
    return { properties };
  }

  /**
   * Synthesizes one variant and, when the parent declares a discriminator, sets
   * the discriminator property so that the value resolves to that variant.
   */
  private synthVariant(parent: JsonObject | null, member: Json): Json {
    if (!isObject(member)) {
      return {};
    }
    const value = this.synth(member);
    const discriminator = parent?.discriminator;
    if (!isObject(discriminator) || !isObject(value) || typeof discriminator.propertyName !== "string") {
      return value;
    }
    value[discriminator.propertyName] = discriminatorValue(discriminator, refOf(member));
    return value;
  }
}

export function loadSpec(dir: string, module: string): Spec {
  const document = yaml.load(fs.readFileSync(path.join(dir, `${module}.yml`), "utf8"));
  if (!isObject(document)) {
    throw new Error(`${module}: not an OpenAPI document`);
  }
  return new Spec(document);
}

function synthScalar(schema: JsonObject): Json {
  if (schema.type === "integer" || schema.type === "number") {
    return 1;
  }
  if (schema.type === "boolean") {
    return true;
  }
  if (schema.format === "date") {
    return "2024-01-01";
  }
  if (schema.format === "date-time") {
    return "2024-01-01T00:00:00Z";
  }
  // A string with no example still has to clear the declared length floor or
  // the mock rejects it. Padding with an alphanumeric also satisfies the
  // character patterns these specs declare.
  let value = SYNTHETIC_VALUE;
  const minLength = typeof schema.minLength === "number" ? schema.minLength : 0;
  while (value.length < minLength) {
    value += "x";
  }
  return value;
}

/** The schema's `oneOf` or `anyOf` members, or null when it is neither. */
function variantsOf(schema: JsonObject | null): Json[] | null {
  if (schema === null) {
    return null;
  }
  for (const keyword of ["oneOf", "anyOf"]) {
    const members = schema[keyword];
    if (Array.isArray(members) && members.length > 0) {
      return members;
    }
  }
  return null;
}

/**
 * The value whose mapping points at the given member reference, falling back to
 * the referenced schema name.
 */
function discriminatorValue(discriminator: Json, ref: string): string {
  if (isObject(discriminator) && isObject(discriminator.mapping) && ref !== "") {
    for (const [value, target] of Object.entries(discriminator.mapping)) {
      if (target === ref) {
        return value;
      }
    }
  }
  const slash = ref.lastIndexOf("/");
  return slash >= 0 ? ref.slice(slash + 1) : SYNTHETIC_VALUE;
}

function refOf(member: Json): string {
  return isObject(member) && typeof member.$ref === "string" ? member.$ref : "";
}

/**
 * Drops null-valued properties from a synthesized body.
 *
 * A spec example may null one of two mutually-exclusive fields (e.g. email vs
 * sign_in_id). The other SDKs' generated clients omit a null/unset field on the
 * wire (Go `omitempty`, Python `exclude_none`), so the mock never sees it;
 * typescript-axios instead serializes `null` literally, which violates a
 * non-nullable `type: string` and the mock rejects. Stripping null here matches
 * the request those clients actually send.
 */
function stripNull(value: Json): Json {
  if (Array.isArray(value)) {
    return value.map(stripNull);
  }
  if (isObject(value)) {
    const out: JsonObject = {};
    for (const [key, item] of Object.entries(value)) {
      if (item !== null) {
        out[key] = stripNull(item);
      }
    }
    return out;
  }
  return value;
}
