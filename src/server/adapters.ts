import config from '~/config';
import { MemoryTemplateSchemaRepository } from '~/adapters/memory/MemoryTemplateSchemaRepository';
import { MemoryTransformerRepository } from '~/adapters/memory/MemoryTransformerRepository';
import { OpenAITemplateGeneratorAdapter } from '~/adapters/openAI/OpenAITemplateGeneratorAdapter';
import { MustacheTemplateRenderAdapter } from '~/adapters/mustache/MustacheTemplateRenderAdapter';

const templateGeneratorAdapter = new OpenAITemplateGeneratorAdapter({ apiKey: config.openAiApiKey });

export const adapters = {
  transformerRepository: new MemoryTransformerRepository(),
  templateSchemaRepository: new MemoryTemplateSchemaRepository(),
  templateRenderAdapter: new MustacheTemplateRenderAdapter(),
  templateGeneratorAdapter,
};
