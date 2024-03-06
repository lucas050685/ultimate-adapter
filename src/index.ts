import 'module-alias/register';
import dotenv from 'dotenv';
import { TypeSchema } from '~/core/class/TypeSchema';
import { origin } from './origin';
import { destiny } from './destiny';
import { instructions } from './instructions';
// import { template } from './template';
import { render } from 'mustache';
import { OpenAITemplateGeneratorAdapter } from './adapters/openAI/OpenAITemplateGeneratorAdapter';

dotenv.config();

const originSchema = TypeSchema.from(origin, { name: 'Origin' });
const destinySchema = TypeSchema.from(destiny, { name: 'Destiny' });

const templateGenerator = new OpenAITemplateGeneratorAdapter({
  apiKey: process.env.OPENAI_API_KEY ?? '',
});
const template = templateGenerator.generateTemplate(originSchema, destinySchema);
template.then(console.log);
//console.log(template);

// console.log(gptInstruction);
// const renderedString = render(template, origin);
// const removeCommaPatter = /,\s*(?=])/gm;
// const unscaptedQuotesPattern = /(?<!\\)"(?!(([^\\"]|\\")*\\"))/gm;
// const normalizedString = renderedString.split(removeCommaPatter).join('').split(unscaptedQuotesPattern).join('\\"');
// //const renderedObject = JSON.parse(normalizedString);
// console.log(normalizedString);

const a = {
  address: '123 Main St, Springfield, IL, 12345',
  age: 32,
  company: 'Tech Innovations Inc.',
  created_at: '2024-03-06T03:06:45.593Z',
  email: 'alice.johnson@example.com',
  interests: [
    'hiking and other',
    'reading',
    'cooking',
    'photography',
    'hiking and other',
    'reading',
    'cooking',
    'photography',
  ],
  job: 'Senior Software Engineer',
  name: 'Alice X Johnson',
};
