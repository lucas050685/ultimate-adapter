console.log(import.meta.env.VITE_SERVER_HOST);

export const frontConfig = {
  serverHost: import.meta?.env?.VITE_SERVER_HOST ?? '',
}