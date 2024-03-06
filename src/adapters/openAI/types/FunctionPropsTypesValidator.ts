import z from 'zod';

export const FunctionPropsTypesValidator = z.union([z.string(), z.number()]);
