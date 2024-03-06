import { TemplateSchemaRepository, TransformerRepository } from './interfaces';
import { SavedTemplateSchema } from './types';
import { TransformerNotFound } from './errors';

export async function getTemplatesByTransformer(
  transformerId: string,
  adapters: Adapters,
): Promise<SavedTemplateSchema[]> {
  const { templateSchemaRepository, transformerRepository } = adapters;
  const transformer = await transformerRepository.get(transformerId);
  if (!transformer) throw new TransformerNotFound(transformerId);
  const destinySchemaString = transformer.destinySchema;
  const templates = await templateSchemaRepository.getByDestiny(destinySchemaString);
  return templates;
}

type Adapters = getTemplatesByTransformer.Adapters;

export namespace getTemplatesByTransformer {
  export type Adapters = {
    transformerRepository: TransformerRepository;
    templateSchemaRepository: TemplateSchemaRepository;
  };
}
