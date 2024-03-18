import 'dotenv/config';

const config = {
  port: parseInt(process.env.PORT ?? '3001', 10),
  openAiApiKey: process.env.OPENAI_API_KEY ?? '',
};

export default config;
