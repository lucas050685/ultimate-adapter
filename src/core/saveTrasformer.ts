import { TransformerRepository } from './interfaces';
import { Transformer, SavedTransformer } from './types';

export async function saveTrasnformer(transformer: Transformer, adapters: Adapters): Promise<SavedTransformer> {
  const { transformerRepository } = adapters;
  const savedTransformer = await transformerRepository.save(transformer);
  return savedTransformer;
}

type Adapters = saveTrasnformer.Adapters;

export namespace saveTrasnformer {
  export type Adapters = {
    transformerRepository: TransformerRepository;
  };
}
