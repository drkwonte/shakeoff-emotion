import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BurningRitualProps {
  text: string;
  onComplete: () => void;
}

const BurningRitual: React.FC<BurningRitualProps> = ({ text, onComplete }) => {
  const [phase, setPhase] = useState<'burning' | 'ashing'>('burning');

  useEffect(() => {
    // Phase 1: Burning for 8 seconds (matching typical fire video duration)
    const timer1 = setTimeout(() => {
      setPhase('ashing');
    }, 8000);

    // Phase 2: Complete
    const timer2 = setTimeout(() => {
      onComplete();
    }, 11000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center overflow-hidden bg-black z-[100]">
      
      {/* THE FIRE VIDEO OVERLAY */}
      <AnimatePresence>
        {phase === 'burning' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, delay: 1.2 }} // Increased delay to 1.2s as requested
            className="absolute inset-0 z-50 pointer-events-none"
          >
            <video 
              autoPlay 
              muted 
              playsInline 
              loop
              className="w-full h-full object-cover" // object-cover ensures it fills the screen
              style={{ mixBlendMode: 'screen' }}
            >
              <source src="/fire1.mp4" type="video/mp4" />
            </video>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PAPER CONTAINER */}
      <div className="relative z-10 w-full max-w-4xl h-[600px] flex items-center justify-center p-4">
        <AnimatePresence>
          {phase === 'burning' && (
            <div className="relative w-full h-full flex items-center justify-center">
              
              {/* THE PAPER */}
              <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ 
                  // Much more gradual fade out over 8 seconds
                  opacity: [0, 1, 1, 0.8, 0],
                  scale: [0.98, 1, 1, 1, 0.97],
                  filter: [
                    'brightness(1) grayscale(0)', 
                    'brightness(0.9) grayscale(0.1)', 
                    'brightness(0.5) grayscale(0.5)', 
                    'brightness(0.1) grayscale(1)',
                    'brightness(0) grayscale(1)'
                  ],
                }}
                transition={{ duration: 8.5, times: [0, 0.1, 0.4, 0.8, 1], ease: "linear" }}
                className="relative w-full h-full bg-[#f4f1ea] p-16 shadow-2xl flex flex-col items-center justify-center text-center overflow-hidden"
                style={{ 
                  borderRadius: '2px',
                  boxShadow: '0 0 50px rgba(0,0,0,1)'
                }}
              >
                <motion.p
                  animate={{
                    color: ['#171717', '#171717', '#ff4400', '#000000'],
                    opacity: [1, 1, 0.7, 0],
                    filter: ['blur(0px)', 'blur(0px)', 'blur(2px)', 'blur(15px)'],
                  }}
                  transition={{ duration: 8, times: [0, 0.4, 0.8, 1] }}
                  className="text-2xl md:text-4xl font-serif leading-relaxed whitespace-pre-wrap italic text-neutral-800 z-10"
                >
                  {text}
                </motion.p>
                
                {/* Burnt texture overlay that intensifies very slowly */}
                <motion.div 
                  className="absolute inset-0 pointer-events-none bg-black"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.2, 0.6, 1] }}
                  transition={{ duration: 8.5, times: [0, 0.3, 0.7, 1] }}
                  style={{ mixBlendMode: 'multiply' }}
                />
              </motion.div>
            </div>
          )}

          {phase === 'ashing' && (
            <div />
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};

export default BurningRitual;
