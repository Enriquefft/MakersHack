"use client";
import React, { useState } from "react";
import Card from "../ui/Card";
import SkipButton from "../ui/SkipButton";
import RecordButton from "../ui/RecordButton";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { sentences } from "@/lib/sentences";

import { compare } from "@/lib/comparar";

import Chat from "@/ui/Chat";

export default function Home() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [response, setResponse] = useState<string | null>(null);

  const sendAudio = async (sentence: string) => {
    resetTranscript();
    setResponse(await compare(transcript, sentence));
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Your browser does not support speech recognition.</span>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3 className="text-2xl font-bold">Speech Recognition</h3>
      <p className="text-lg">{response}</p>
      <Chat />
      <div className="flex flex-col">
        <div className="flex flex-wrap gap-4">
          {sentences.map((sentence, index) => {
            return (
              <div key={index}>
                <Card>{sentence}</Card>;
                <p>Microphone: {listening ? "on" : "off"}</p>
                <RecordButton onClick={SpeechRecognition.startListening} />
                <button onClick={SpeechRecognition.stopListening}>Stop</button>
                <button
                  onClick={() => {
                    sendAudio(sentence);
                  }}
                >
                  Send
                </button>
                <p>{transcript}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
