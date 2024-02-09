"use server";
import { env } from "@/env.mjs";
import { chat } from "@/lib/openai";

export async function compare(str1: string, str2: string) {
  // Preparar los mensajes para enviar al modelo GPT-3
  const messages = [
    {
      role: "system",
      content:
        "You are an english teacher, briefly mention how the second string differs from the first one.",
    },
    {
      role: "user",
      content: `First: "${str1}".    Second: "${str2}"`,
    },
  ] as const;

  try {
    // Llamar a la función chat con los mensajes
    const response = await chat([...messages]);

    // Obtener la respuesta del modelo
    const content = response.choices[0].message.content;

    // Devolver la respuesta del modelo
    return content;
  } catch (error) {
    console.error("Error al obtener la respuesta del modelo:", error);
    throw error;
  }
}
