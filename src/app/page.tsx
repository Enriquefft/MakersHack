import React from 'react';
import Card from '../ui/Card';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <Card children={"The quick brown fox jumps over the lazy dog."} />
      </div>
    </div>
      
    </main>
  );
}
