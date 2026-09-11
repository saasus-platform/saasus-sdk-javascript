export type JsonSchemaNode =
  | { type: 'object'; properties: Record<string, JsonSchemaNode>; required: string[] }
  | { type: 'array'; items: JsonSchemaNode; minItems: number }
  | { type: 'string' }
  | { type: 'number' }
  | { type: 'boolean' }
  | { type: 'null' }
  | { anyOf: JsonSchemaNode[] }
  | { type: 'unknown' };

const isRecord = (value: unknown): value is Record<string, any> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

export class SchemaBuilder {
  build(value: unknown): JsonSchemaNode {
    return this.buildNode(value);
  }

  private buildNode(value: unknown): JsonSchemaNode {
    if (Array.isArray(value)) {
      return this.buildArraySchema(value);
    }

    if (isRecord(value)) {
      return this.buildObjectSchema(value);
    }

    switch (typeof value) {
      case 'string':
        return { type: 'string' };
      case 'number':
        return { type: 'number' };
      case 'boolean':
        return { type: 'boolean' };
      case 'undefined':
        return { type: 'unknown' };
      default:
        return { type: 'null' };
    }
  }

  private buildObjectSchema(value: Record<string, any>): JsonSchemaNode {
    const properties: Record<string, JsonSchemaNode> = {};
    const required: string[] = [];

    for (const [key, child] of Object.entries(value)) {
      properties[key] = this.buildNode(child);
      required.push(key);
    }

    return {
      type: 'object',
      properties,
      required
    };
  }

  private buildArraySchema(items: any[]): JsonSchemaNode {
    if (items.length === 0) {
      return {
        type: 'array',
        items: { type: 'unknown' },
        minItems: 0
      };
    }

    const schemas = items.map(item => this.buildNode(item));
    const mergedSchema = this.mergeSchemas(schemas);

    return {
      type: 'array',
      items: mergedSchema,
      minItems: items.length
    };
  }

  private mergeSchemas(schemas: JsonSchemaNode[]): JsonSchemaNode {
    if (schemas.length === 0) {
      return { type: 'unknown' };
    }

    if (schemas.length === 1) {
      return schemas[0];
    }

    const serialized = new Map<string, JsonSchemaNode>();
    for (const schema of schemas) {
      const key = JSON.stringify(schema);
      if (!serialized.has(key)) {
        serialized.set(key, schema);
      }
    }

    const uniqueSchemas = [...serialized.values()];
    if (uniqueSchemas.length === 1) {
      return uniqueSchemas[0];
    }

    return { anyOf: uniqueSchemas };
  }
}
