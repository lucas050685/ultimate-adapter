import { Transformer } from '../types';

export interface TransformerRepository {
  get(id: string): Promise<Transformer | undefined>;
}
