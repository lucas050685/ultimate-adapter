import Mustache from 'mustache';
import { TypeSchema } from './class/TypeSchema';
import { TransformerRepository, TemplateRepository } from './interfaces';

export async function transform(payload: any, transformerId: string, adapters: transform.Adapters): Promise<any> {
  const { transformerRepository, templateRepository } = adapters;
  const transformer = await transformerRepository.get(transformerId);
  if (!transformer) throw new Error(`Transformer no found. Transformer id: ${transformerId}`);
  const payloadSchema = TypeSchema.form(payload);
  const payloadSchemaString = payloadSchema.toString();
  const destinySchemaString = transformer.destinySchema;
  const template = await templateRepository.get(payloadSchemaString, destinySchemaString);
  const transformedPayload = Mustache.render(template, { payload });
  return transformedPayload;
}

export namespace transform {
  export type Adapters = {
    transformerRepository: TransformerRepository;
    templateRepository: TemplateRepository;
  };
}
