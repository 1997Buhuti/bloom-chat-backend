import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  GEMINI_API_KEY: z.string().min(1, 'GEMINI_API_KEY is required'),
  GEMINI_MODEL: z.string().default('gemini-2.5-flash'),
  PORT: z.coerce.number().int().positive().default(3000),
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error('Invalid environment variables:', parsed.error.format());
  process.exit(1);
}

export const config = {
  gemini: {
    apiKey: parsed.data.GEMINI_API_KEY,
    model: parsed.data.GEMINI_MODEL,
  },
  port: parsed.data.PORT,
  nodeEnv: parsed.data.NODE_ENV,
};

export type Config = typeof config;