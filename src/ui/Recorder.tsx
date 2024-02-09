"use client";
import React, { useEffect, useRef, useState, forwardRef } from "react";
import recorder from "node-record-lpcm16";
import { AssemblyAI } from "assemblyai";

// eslint-disable-next-line react/display-name
const TranscriptionService = forwardRef((props, ref) => {
  const [transcript, setTranscript] = useState("");
  const recordingRef = useRef(null);

  useEffect(() => {
    const client = new AssemblyAI({
      apiKey: "db1c61a00264449f8966b949195261fa",
    });

    const transcriber = client.realtime.transcriber({
      sampleRate: 16_000,
    });

    transcriber.on("transcript", (transcriptData) => {
      if (transcriptData.text) {
        setTranscript(transcriptData.text);
      }
    });

    const startRecording = async () => {
      recordingRef.current = recorder.record({
        channels: 1,
        sampleRate: 16_000,
        audioType: "wav",
      });

      recordingRef.current.stream().pipeTo(transcriber.stream());
    };

    startRecording();

    return () => {
      if (recordingRef.current) {
        recordingRef.current.stop();
      }
      transcriber.close();
    };
  }, []);

  // Expose the transcript text via the ref
  useEffect(() => {
    if (ref && typeof ref === "function") {
      ref(transcript);
    }
  }, [transcript, ref]);

  return (
    <div>
      <p>{transcript}</p>
    </div>
  );
});

export default TranscriptionService;
