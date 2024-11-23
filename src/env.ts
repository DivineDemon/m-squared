/* eslint-disable n/no-process-env */
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    // DATABASE_URL: z.string().url(),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    // CLERK_SECRET_KEY: z.string().regex(/^sk_test_[A-Za-z0-9-\.]+$/, {
    //   message: "Invalid CLERK_SECRET_KEY format",
    // }),
    // VERCEL_URL: z.string(),
    // DISCORD_BOT_TOKEN: z
    //   .string()
    //   .regex(
    //     /^[A-Za-z0-9_\-]{26}\.[A-Za-z0-9_\-]{6}\.[A-Za-z0-9_\-]{38}$/,
    //     "Invalid Discord bot token format"
    //   ),
    // STRIPE_SECRET_KEY: z
    //   .string()
    //   .regex(
    //     /^sk_(test|live)_[0-9a-zA-Z]{24,}$/,
    //     "Invalid Stripe secret key format"
    //   ),
    // STRIPE_WEBHOOK_SECRET: z
    //   .string()
    //   .regex(
    //     /^whsec_[a-zA-Z0-9]{32}$/,
    //     "Invalid Stripe Webhook Secret Format!"
    //   ),
  },
  client: {
    // NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z
    //   .string()
    //   .regex(/^pk_test_[A-Za-z0-9]+$/, {
    //     message: "Invalid NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY format",
    //   }),
    // NEXT_PUBLIC_APP_URL: z.string(),
  },
  runtimeEnv: {
    // NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    // STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    // VERCEL_URL: process.env.VERCEL_URL,
    // DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    // CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    // NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
    //   process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    // DISCORD_BOT_TOKEN: process.env.DISCORD_BOT_TOKEN,
    // STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
