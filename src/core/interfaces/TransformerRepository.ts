import { SavedTransformer, Transformer } from '../types';

export interface TransformerRepository {
  get(id: string): Promise<SavedTransformer | undefined>;
  getByOwnerId(id: string): Promise<SavedTransformer[]>;
  save(transformer: Transformer | SavedTransformer): Promise<SavedTransformer>;
}
