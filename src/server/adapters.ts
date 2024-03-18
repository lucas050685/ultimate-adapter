import config from '~/config';
import { MemoryTemplateSchemaRepository } from '~/adapters/memory/MemoryTemplateSchemaRepository';
import { OpenAITemplateGeneratorAdapter } from '~/adapters/openAI/OpenAITemplateGeneratorAdapter';
import { MustacheTemplateRenderAdapter } from '~/adapters/mustache/MustacheTemplateRenderAdapter';
import { MongoTransformerRepository } from '~/adapters/mongodb/MongoTransformerRepository';

const templateGeneratorAdapter = new OpenAITemplateGeneratorAdapter({ apiKey: config.openAiApiKey });

export const adapters = {
  transformerRepository: new MongoTransformerRepository(),
  templateSchemaRepository: new MemoryTemplateSchemaRepository(),
  templateRenderAdapter: new MustacheTemplateRenderAdapter(),
  templateGeneratorAdapter,
};
