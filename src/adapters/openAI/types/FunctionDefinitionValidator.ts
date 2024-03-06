import z from 'zod';

import { FunctionPropsValidator } from './FunctionPropsValidator';

export const FunctionDefinitionValidator = z.object({
  name: z.string(),
  description: z.string(),
  parameters: z.object({
    type: z.enum(['object']),
    properties: FunctionPropsValidator,
    required: z.string().array(),
  }),
});
