import { TypeSchema } from './class/TypeSchema';

export async function generateSchema(payload: any): Promise<string> {
  const payloadSchema = TypeSchema.from(payload);
  const payloadSchemaString = payloadSchema.toString();
  return payloadSchemaString;
}
