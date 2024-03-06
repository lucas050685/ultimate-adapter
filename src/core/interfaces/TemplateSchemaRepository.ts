import { SavedTemplateSchema, TemplateSchema } from '../types';

export interface TemplateSchemaRepository {
  get(originSchema: string, destinySchema: string): Promise<SavedTemplateSchema | undefined>;
  getByDestiny(destinySchema: string): Promise<SavedTemplateSchema[]>;
  save(templateSchema: TemplateSchema): Promise<SavedTemplateSchema>;
}
