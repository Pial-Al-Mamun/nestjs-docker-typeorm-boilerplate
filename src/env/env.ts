import z from 'zod';

export const envSchema = z.object({
  DB_URL: z.url(),
  JWT_SECRET: z.string().nonempty(),
  PORT: z.coerce.number().optional().default(3000),
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
});

export type Env = z.infer<typeof envSchema>;
