import { TypeSchema } from '../class/TypeSchema';
import { Template } from '../types';

export interface TemplateGeneratorAdapter {
  generateTemplate: (originSchema: TypeSchema, destinySchema: TypeSchema) => Promise<Template | undefined>;
}
