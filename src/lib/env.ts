import { z } from 'zod'

const envSchema = z.object({
  POSTGRES_URL_NON_POOLING: z.string().url(),
  POSTGRES_PRISMA_URL: z.string().url(),
  NEXT_PUBLIC_BASE_URL: z
    .string()
    .optional()
    .default(
      process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : 'http://localhost:3000',
    ),
  NEXT_PUBLIC_BASE_PATH: z
    .string()
    .optional()
    .default(process.env.NEXT_PUBLIC_BASE_PATH ? process.env.NEXT_PUBLIC_BASE_PATH : '/')
})

export const env = envSchema.parse(process.env)
