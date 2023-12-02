import { z } from "zod";

const schemaEnv = z.object({
  DATABASE_URL: z.string(),
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  JWT_SECRET: z.string().default("secret"),
});

const _env = schemaEnv.safeParse(process.env);

if (!_env.success) {
  console.error(`enviorment variables are not set correctly; ${_env.error}`);

  throw new Error(_env.error.message);
}

export const env = _env.data;