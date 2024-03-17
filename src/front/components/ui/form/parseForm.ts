export function parseForm(form?: HTMLFormElement) {
  if (!form) return {};
  try {
    const result: Record<string, any> = {};
    const formData = new FormData(form);
    for (const [key, value] of formData.entries()) result[key] = value;
    return result;
  } catch {
    return {};
  }
};
