"use client"
import React, { useState } from 'react';
import Card from '../ui/Card';
import SkipButton from '../ui/SkipButton';
import RecordButton from '../ui/RecordButton';
import BookButton from '@/ui/BookButton';
import ChatBox from '@/ui/ChatBox';


export default function Home() {
  // Manejar el evento "skip"
  const handleSkip = () => {
    console.log('Skipping...');
  };

  // Manejar el evento "Record"
  const handleRecord = () => {
    console.log('Recording...');
  };

  // Abrir chatBox al usar botón "learn more"
  const [showChat, setShowChat] = useState(false);
  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <Card children={"The quick brown fox jumps over the lazy dog."} />
        <RecordButton onClick={handleRecord} />
        <SkipButton onClick={handleSkip} />

        <BookButton onClick={toggleChat} />
        {showChat && <ChatBox />}
      </div>
    </div>
      
    </main>
  );
}
