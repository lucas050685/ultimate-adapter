import { Type } from '../types/Type';

export class TypeSchema {
  public type: Type = 'unknow';
  public attrs: Map<string, TypeSchema> = new Map();
  public name: string | undefined;

  static defaultTabSize = 4;
  static defaultName = 'Payload';

  constructor() {}

  setType(type: Type) {
    this.type = type;
  }

  static from(o: any, options?: TypeSchema.FromOptions) {
    const schema = new TypeSchema();
    schema.setType(TypeSchema.typeof(o));

    if (schema.type === 'object') {
      const attrs = Object.keys(o);
      attrs.forEach((attr) => {
        const attrObject = o[attr];
        const attrTypeSchema = TypeSchema.from(attrObject);
        schema.attrs.set(attr, attrTypeSchema);
      });
    }

    if (schema.type === 'array') {
      const value = (o as any[])[0];
      const valueSchema = TypeSchema.from(value);
      schema.attrs.set('value', valueSchema);
    }

    const { name } = options ?? {};
    schema.name = name ?? TypeSchema.defaultName;

    return schema;
  }

  static removeDeclaration(schemaString: string): string {
    const hasDeclaration = schemaString.indexOf('=') !== -1;
    if (!hasDeclaration) return schemaString.trim();
    const parts = schemaString.split('=');
    const valuePart = parts[1];
    return valuePart.trim();
  }

  private static parseToArray(schemaString: string) {
    const schema = new TypeSchema();
    schema.setType('array');

    const firstIndex = schemaString.indexOf('<');
    const lastIndex = schemaString.lastIndexOf('>');
    const valueString = schemaString.substring(firstIndex + 1, lastIndex);
    const valueSchema = TypeSchema.parse(valueString);

    schema.attrs.set('value', valueSchema);
    return schema;
  }

  private static parseObject(schemaString: string) {
    const schema = new TypeSchema();
    schema.setType('object');

    const startIndex = schemaString.indexOf('{');
    const lastIndex = schemaString.lastIndexOf('}');
    const cleanString = schemaString.substring(startIndex + 1, lastIndex).trim();

    const splitPattern = /;(?![^{}]*})/gm;
    const parts = cleanString.split(splitPattern);
    parts.forEach((part) => {
      const separatorIndex = part.indexOf(':');
      if (separatorIndex === -1) return;
      const attr = part.substring(0, separatorIndex);
      const value = part.substring(separatorIndex + 1);
      if (!attr || !value) return;
      const attrName = attr.trim();
      const valueSchema = TypeSchema.parse(value.trim());
      schema.attrs.set(attrName, valueSchema);
    });
    return schema;
  }

  static parse(schemaString: string) {
    const normalizedSchema = TypeSchema.removeDeclaration(schemaString);
    if (normalizedSchema.startsWith('{')) return TypeSchema.parseObject(normalizedSchema);
    if (normalizedSchema.startsWith('Array')) return TypeSchema.parseToArray(normalizedSchema);
    const schema = new TypeSchema();
    const type = normalizedSchema.split(';').filter(Boolean).join('') as Type;
    schema.setType(type);
    return schema;
  }

  static typeof(o: any): Type {
    if (typeof o === 'string') return 'string';
    if (typeof o === 'number') return 'number';
    if (typeof o === 'boolean') return 'boolean';
    if (typeof o === 'undefined') return 'any';
    if (o === null) return 'any';
    if (Array.isArray(o)) return 'array';
    if (o instanceof Date) return 'date';
    return 'object';
  }

  getDeclaration() {
    const name = this.name ?? TypeSchema.defaultName;
    return `type ${name} = `;
  }

  private toStringArray(options?: TypeSchema.ToStringOptions): string {
    const value = this.attrs.get('value') ?? TypeSchema.from(undefined);
    const valueString = value.toString({ noDeclaration: true, ...options });
    const normalizedValueString = valueString.substring(0, valueString.length - 1);
    const declaration = options?.noDeclaration ? '' : this.getDeclaration();
    return `${declaration}Array<${normalizedValueString}>;`;
  }

  private toStringObject({
    tabSize = TypeSchema.defaultTabSize,
    noDeclaration,
    level = 0,
  }: TypeSchema.ToStringOptions = {}): string {
    const tabSpace = ''.padStart(tabSize * (level + 1), ' ');
    const declaration = noDeclaration ? '' : this.getDeclaration();

    const newOptions: TypeSchema.ToStringOptions = {
      tabSize,
      noDeclaration: true,
      level: level + 1,
    };

    const lines = [`${declaration}{`];

    const attrNames = [...this.attrs.keys()].sort();
    attrNames.forEach((attrName) => {
      const schema = this.attrs.get(attrName);
      if (!schema) return;
      lines.push(`${tabSpace}${attrName}: ${schema.toString(newOptions)}`);
    });

    const finalTabSpace = ''.padStart(tabSize * level, ' ');
    lines.push(`${finalTabSpace}};`);

    return lines.join('\n');
  }

  toString(options?: TypeSchema.ToStringOptions) {
    if (this.type === 'object') return this.toStringObject(options);
    if (this.type === 'array') return this.toStringArray(options);
    const { noDeclaration } = options ?? {};
    const declaration = noDeclaration ? '' : this.getDeclaration();
    return `${declaration}${this.type};`;
  }
}

export namespace TypeSchema {
  export type FromOptions = {
    name?: string;
  };

  export type ToStringOptions = {
    tabSize?: number;
    noDeclaration?: boolean;
    level?: number;
  };
}
