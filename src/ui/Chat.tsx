"use client";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import { useState } from "react";
import type { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { env } from "@/env.mjs";

import { chat } from "@/lib/openai";

export default function Chat() {
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([
    { role: "system", content: env.NEXT_PUBLIC_CHAT_SYSTEM_MESSAGE },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendRequest = async (newMessageContent: string) => {
    setIsTyping(true);
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: newMessageContent },
    ]);

    try {
      const chatCompletion = await chat(messages);

      const assistantMessageContent = chatCompletion.choices[0].message.content;
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: assistantMessageContent },
      ]);
    } catch (error) {
      console.error("Error processing message:", error);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="ChatBox">
      <MainContainer>
        <ChatContainer>
          <MessageList
            scrollBehavior="smooth"
            typingIndicator={
              isTyping ? (
                <TypingIndicator content="Assistant is typing..." />
              ) : null
            }
          >
            {messages.map((message, i) => (
              <Message
                key={i}
                model={{
                  message:
                    message.content instanceof Array
                      ? message.content.join(" ")
                      : message.content ?? "",
                  sentTime: "just now",
                  sender: "Joe",
                  direction: i % 2 === 0 ? "incoming" : "outgoing",
                  position: "single",
                }}
              />
            ))}
          </MessageList>
          <MessageInput
            placeholder="Type your message here..."
            onSend={handleSendRequest}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
}
