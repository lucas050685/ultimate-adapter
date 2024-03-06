import OpenAI from 'openai';
import { TypeSchema } from '~/core/class/TypeSchema';
import { TemplateGeneratorAdapter } from '~/core/interfaces';
import { Model } from './types/Model';
import { getTemplateFromStringResponse } from './getTemplateFromStringResponse';
import { addMissingCommas } from './addMissingCommas';

export class OpenAITemplateGeneratorAdapter implements TemplateGeneratorAdapter {
  private engine: OpenAI;

  constructor(config: Config) {
    this.engine = new OpenAI(config);
  }

  async generateTemplate(originSchema: TypeSchema, destinySchema: TypeSchema): Promise<string | undefined> {
    const originSchemaString = originSchema.toString();
    const destinySchemaString = destinySchema.toString();

    const instruction_0 = `
    Generate a mustache template that generates a json object.
    This json object must meet the following typing:`;

    const instruction_1 = `
    The source payload for this template must comply with the following typing:`;

    const instruction_2 = `
    In the destination object, try to group fields with the same characteristics 
    or objectives from the source payload.
    
    If any field in the destination does not have a clear match in the source,
    create a validation so that this field is not created in the destination.
    That is, treat the field as an optional field and only insert it in the destination 
    if there is corresponding information in the source.
    
    Use the pattern triple mustache: {{{name}}} to not scape any special chars.
    Ensure the the result of this template generates a new json object.

    In arrays avoid nested loops, try to use just simples loops.
    In array do not forget to insert the comma separator inside the loop.

    In the response do not add any comment before or after, send just the mustache template.
    `;

    const instruction = `
      ${instruction_0}

      ${destinySchemaString}

      ${instruction_1}

      ${originSchemaString}

      ${instruction_2}
    `;

    const completion = await this.engine.chat.completions.create({
      messages: [{ role: 'user', content: instruction }],
      model: Model.Gpt35Turbo0613,
    });

    const message = completion.choices[0].message;
    const { content } = message;
    if (!content) throw new Error('It was not possible to generate a template');
    const template = getTemplateFromStringResponse(content);
    if (!template) throw new Error('It was not possible to parse the chatGPT response');

    const fixedTemplate = addMissingCommas(template);

    console.log('>>>>>> New Template <<<<<<<<<<');
    console.log(fixedTemplate);

    return fixedTemplate;
  }
}

export namespace OpenAITemplateGeneratorAdapter {
  export type Config = {
    apiKey: string;
  };
}

type Config = OpenAITemplateGeneratorAdapter.Config;
