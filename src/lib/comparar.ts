"use server";
import { env } from "@/env.mjs";
import { chat } from "@/lib/openai";

export async function compare(str1: string, str2: string) {
  // Preparar los mensajes para enviar al modelo GPT-3
  const messages = [
    { role: "system", content: "Comparar dos cadenas de texto." },
    {
      role: "user",
      content: `Cuál es la diferencia entre "${str1}" y "${str2}"?`,
    },
  ] as const;

  try {
    // Llamar a la función chat con los mensajes
    const response = await chat([
      { role: "system", content: env.NEXT_PUBLIC_CHAT_SYSTEM_MESSAGE },
      ...messages,
    ]);

    // Obtener la respuesta del modelo
    const content = response.choices[0].message.content;

    // Devolver la respuesta del modelo
    return content;
  } catch (error) {
    console.error("Error al obtener la respuesta del modelo:", error);
    throw error;
  }
}
