import { Type } from '../types/Type';

export class TypeSchema {
  constructor() {}

  static form(o: any) {
    const t = new TypeSchema();
    return t;
  }

  static typeof(o: any): Type {
    if (typeof o === 'string') return 'string';
    if (typeof o === 'number') return 'number';
    if (Array.isArray(o)) return 'array';
    if (o instanceof Date) return 'date';
    return 'object';
  }

  toString() {
    return '';
  }
}
