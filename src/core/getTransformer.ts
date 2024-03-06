import { TransformerNotFound } from './errors';
import { TransformerRepository } from './interfaces';
import { SavedTransformer } from './types';

export async function getTransformer(id: string, adapters: Adapters): Promise<SavedTransformer> {
  const { transformerRepository } = adapters;
  const transformer = await transformerRepository.get(id);
  if (!transformer) throw new TransformerNotFound(id);
  return transformer;
}

type Adapters = getTransformer.Adapters;

export namespace getTransformer {
  export type Adapters = {
    transformerRepository: TransformerRepository;
  };
}
