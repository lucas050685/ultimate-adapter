import { TypeSchema } from './class/TypeSchema';
import { generateSysObject } from './generateSysObject';
import {
  TransformerRepository,
  TemplateSchemaRepository,
  TemplateGeneratorAdapter,
  TemplateRenderAdapter,
} from './interfaces';
import { Template, TemplateSchema } from './types';
import { TransformerNotFound } from './errors';

export async function transform(input: transform.Input, adapters: transform.Adapters): Promise<any> {
  const { payload, transformerId } = input;
  const { transformerRepository, templateRenderAdapter } = adapters;
  const transformer = await transformerRepository.get(transformerId);
  if (!transformer) throw new TransformerNotFound(transformerId);
  const sys = await generateSysObject();
  const payloadSchema = TypeSchema.from({ sys, payload });
  const destinySchema = TypeSchema.parse(transformer.destinySchema);
  const template = await getTemplate(payloadSchema, destinySchema, adapters);
  if (!template) throw new Error('It was not possible to trieve or generate a template for the given payload');
  const transformedPayload = await templateRenderAdapter.render(template, { sys, payload });
  return transformedPayload;
}

async function getTemplate(
  payloadSchema: TypeSchema,
  destinySchema: TypeSchema,
  adapters: transform.Adapters,
): Promise<Template | undefined> {
  const { templateSchemaRepository, templateGeneratorAdapter } = adapters;
  const payloadSchemaString = payloadSchema.toString();
  const destinySchemaString = destinySchema.toString();
  const templateSchema = await templateSchemaRepository.get(payloadSchemaString, destinySchemaString);
  const template = templateSchema?.template;
  if (template) return template;
  const newTemplate = await templateGeneratorAdapter.generateTemplate(payloadSchema, destinySchema);
  if (!newTemplate) return undefined;
  const newTemplateSchema: TemplateSchema = {
    template: newTemplate,
    originSchema: payloadSchemaString,
    destinySchema: destinySchemaString,
  };
  await templateSchemaRepository.save(newTemplateSchema);
  return newTemplate;
}

export namespace transform {
  export type Input = {
    payload: any;
    transformerId: string;
  };

  export type Adapters = {
    transformerRepository: TransformerRepository;
    templateSchemaRepository: TemplateSchemaRepository;
    templateGeneratorAdapter: TemplateGeneratorAdapter;
    templateRenderAdapter: TemplateRenderAdapter;
  };
}
