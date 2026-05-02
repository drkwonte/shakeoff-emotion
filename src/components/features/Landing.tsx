import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface LandingProps {
  onStart: () => void;
}

const Landing: React.FC<LandingProps> = ({ onStart }) => {
  return (
    <div className="text-center space-y-8 flex flex-col items-center w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full flex justify-center mt-16"
      >

        <img 
          src="/shakeoff_horizontal.png" 
          alt="ShakeOff Logo" 
          className="w-4/5 max-w-2xl h-auto mb-2"
        />

      </motion.div>
      <div className="space-y-6">

        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight md:leading-[1.4]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          힘든 일이 있나요?<br />
          저에게 털어놓으세요.
        </motion.h1>
        <motion.p 
          className="text-neutral-400 text-lg md:text-xl max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          판단도, 조언도, 기록도 없습니다.<br />
          마음껏 쏟아내고 불태우세요.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Button 
          size="lg" 
          onClick={onStart}
          className="bg-white text-black hover:bg-neutral-200 text-xl px-8 py-6 rounded-full transition-all hover:scale-105 active:scale-95"
        >
          시작하기
        </Button>
      </motion.div>
    </div>
  );
};

export default Landing;
