import { useState } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import Landing from '@/components/features/Landing';
import EmotionInput from '@/components/features/EmotionInput';
import BurningRitual from '@/components/features/BurningRitual';
import Completion from '@/components/features/Completion';
import type { AppStep, EmotionData } from '@/types';

function App() {
  const [step, setStep] = useState<AppStep>('landing');
  const [emotionData, setEmotionData] = useState<EmotionData>({ text: '', tags: [] });

  const handleStart = () => {
    setStep('writing');
  };

  const handleBurn = (text: string, tags: string[]) => {
    setEmotionData({ text, tags });
    setStep('burning');
  };

  const handleRitualComplete = () => {
    setStep('completed');
  };

  const handleReset = () => {
    // Completely clear state - no trace left
    setEmotionData({ text: '', tags: [] });
    setStep('writing');
  };

  return (
    <AppLayout step={step}>
      {step === 'landing' && <Landing onStart={handleStart} />}
      {step === 'writing' && <EmotionInput onBurn={handleBurn} />}
      {step === 'burning' && (
        <BurningRitual 
          text={emotionData.text} 
          onComplete={handleRitualComplete} 
        />
      )}
      {step === 'completed' && <Completion onReset={handleReset} />}
    </AppLayout>
  );
}

export default App;
