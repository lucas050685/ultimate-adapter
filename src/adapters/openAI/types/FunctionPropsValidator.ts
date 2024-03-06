import z from 'zod';
import { FunctionPropsTypesValidator } from './FunctionPropsTypesValidator';

export const FunctionPropValidator = z.object({
  type: FunctionPropsTypesValidator,
  description: z.string(),
  enum: z.union([z.string(), z.number()]).array().optional(),
});

export const FunctionPropsValidator = z.record(FunctionPropValidator);
