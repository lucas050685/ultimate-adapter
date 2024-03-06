import { TransformerRepository } from './interfaces';
import { SavedTransformer } from './types';

export async function getTransformerByOwner(id: string, adapters: Adapters): Promise<SavedTransformer[]> {
  const { transformerRepository } = adapters;
  const transformers = await transformerRepository.getByOwnerId(id);
  return transformers;
}

type Adapters = getTransformerByOwner.Adapters;

export namespace getTransformerByOwner {
  export type Adapters = {
    transformerRepository: TransformerRepository;
  };
}
