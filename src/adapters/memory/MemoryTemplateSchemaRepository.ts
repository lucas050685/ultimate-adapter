import { v4 as uuid } from 'uuid';
import { TemplateSchemaRepository } from '~/core/interfaces';
import { SavedTemplateSchema, TemplateSchema } from '~/core/types';

const templateSchemaDatabase: Map<string, SavedTemplateSchema> = new Map();

export class MemoryTemplateSchemaRepository implements TemplateSchemaRepository {
  async get(originSchema: string, destinySchema: string): Promise<SavedTemplateSchema | undefined> {
    const arrayDataBase = [...templateSchemaDatabase.values()];
    return arrayDataBase.find((templateSchema) => {
      return (
        templateSchema.originSchema.trim() === originSchema.trim() &&
        templateSchema.destinySchema.trim() === destinySchema.trim()
      );
    });
  }

  async getByDestiny(destinySchema: string): Promise<SavedTemplateSchema[]> {
    const arrayDataBase = [...templateSchemaDatabase.values()];
    return arrayDataBase.filter((templateSchema) => {
      return templateSchema.destinySchema.trim() === destinySchema.trim();
    });
  }

  async save(templateSchema: TemplateSchema): Promise<SavedTemplateSchema> {
    const id = templateSchema?.id ?? uuid();
    const savedTemplate = { ...templateSchema, id };
    templateSchemaDatabase.set(id, savedTemplate);
    return savedTemplate;
  }
}
