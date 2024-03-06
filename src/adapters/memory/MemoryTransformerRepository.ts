import { v4 as uuid } from 'uuid';
import { TransformerRepository } from '~/core/interfaces';
import { SavedTransformer, Transformer } from '~/core/types';

const transformerDatabase: Map<string, SavedTransformer> = new Map();

export class MemoryTransformerRepository implements TransformerRepository {
  async get(id: string): Promise<SavedTransformer | undefined> {
    return transformerDatabase.get(id);
  }

  async getByOwnerId(id: string): Promise<SavedTransformer[]> {
    const arrayDatabase = [...transformerDatabase.values()];
    return arrayDatabase.filter((transformer) => {
      return transformer.owner === id;
    });
  }

  async save(transformer: SavedTransformer | Transformer): Promise<SavedTransformer> {
    const id = transformer.id ?? uuid();
    const savedTransformer = { ...transformer, id };
    transformerDatabase.set(id, savedTransformer);
    return savedTransformer;
  }
}
