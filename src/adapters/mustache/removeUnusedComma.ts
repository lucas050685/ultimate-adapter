export function removeUnusedComma(objectString: string): string {
  const pattern = /,\s*(?=])/gm;
  return objectString.split(pattern).join('');
}
