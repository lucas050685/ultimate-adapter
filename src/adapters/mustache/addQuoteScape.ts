export function addQuoteScape<T = any>(input: T): T {
  const slash = '\\"';
  if (!input) return input;
  if (input instanceof Date) return input;

  if (typeof input === 'string') {
    return input.split('"').join(slash) as T;
  }

  if (Array.isArray(input)) {
    return input.map((attr) => {
      return addQuoteScape(attr);
    }) as T;
  }

  if (typeof input === 'object') {
    const inputString = JSON.stringify(input);
    const clone = JSON.parse(inputString);
    const keys = Object.keys(clone);
    keys.forEach((key) => {
      if (!clone.hasOwnProperty(key)) return;
      clone[key] = addQuoteScape(clone[key]);
    });
    return clone;
  }

  return input;
}
