export function getTemplateFromStringResponse(response: string): string | undefined {
  const firstIndex = response.indexOf('{');
  const lastIndex = response.lastIndexOf('}');
  const template = response.substring(firstIndex, lastIndex + 1);
  return template;
}
