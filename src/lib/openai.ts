"use server";
import { env } from "@/env.mjs";

import OpenAI from "openai";
import type { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});

export async function chat(messages: ChatCompletionMessageParam[]) {
  return await openai.chat.completions.create({
    messages: messages,
    model: "gpt-3.5-turbo",
  });
}
