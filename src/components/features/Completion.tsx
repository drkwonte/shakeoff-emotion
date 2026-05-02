import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';


interface CompletionProps {
  onReset: () => void;
}

const Completion: React.FC<CompletionProps> = ({ onReset }) => {
  return (
    <div className="text-center space-y-16 py-12 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="space-y-6"
      >

        
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 tracking-tight">
          이제 좀 후련하신가요?
        </h2>
        <p className="text-neutral-500 text-lg">
          당신의 마음 한 켠이 조금은 가벼워졌기를 바랍니다.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <Button
          variant="outline"
          onClick={onReset}
          className="border-neutral-300 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 px-8 py-6 text-lg rounded-full transition-all"
        >
          하나 더
        </Button>
      </motion.div>
    </div>
  );
};

export default Completion;
