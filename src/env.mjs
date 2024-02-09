import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  emptyStringAsUndefined: false,

  server: {
    OPENAI_API_KEY: z.string(),
    ASSEMBLY_AI_API_KEY: z.string(),
  },
  client: {
    NEXT_PUBLIC_CHAT_SYSTEM_MESSAGE: z.string(),
  },
  runtimeEnv: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    ASSEMBLY_AI_API_KEY: process.env.ASSEMBLY_AI_API_KEY,
    NEXT_PUBLIC_CHAT_SYSTEM_MESSAGE:
      process.env.NEXT_PUBLIC_CHAT_SYSTEM_MESSAGE,
  },
});
