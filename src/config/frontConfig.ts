const env = import.meta.env;

export const frontConfig = {
  serverHost: env?.VITE_SERVER_HOST ?? '',
}