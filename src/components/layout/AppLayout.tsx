import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { AppStep } from '@/types';
import About from '@/components/features/About';
import PrivacyPolicy from '@/components/features/PrivacyPolicy';
import Contact from '@/components/features/Contact';
import { X } from 'lucide-react';

interface AppLayoutProps {
  children: React.ReactNode;
  step: AppStep;
}

type InfoPage = 'about' | 'privacy' | 'contact' | null;

const AppLayout: React.FC<AppLayoutProps> = ({ children, step }) => {
  const [activeInfo, setActiveInfo] = useState<InfoPage>(null);

  // Define background colors based on step
  const getBgColor = () => {
    switch (step) {
      case 'landing':
      case 'writing':
        return '#0a0a0a'; // Deep Charcoal
      case 'burning':
        return '#1a0505'; // Slightly warmer dark during burning
      case 'completed':
        return '#fdfcf0'; // Warm Beige / Sunrise Start
      default:
        return '#0a0a0a';
    }
  };

  const renderInfoContent = () => {
    switch (activeInfo) {
      case 'about': return <About />;
      case 'privacy': return <PrivacyPolicy />;
      case 'contact': return <Contact />;
      default: return null;
    }
  };

  return (
    <motion.div
      className="min-h-screen w-full flex flex-col items-center transition-colors duration-1000 overflow-y-auto"
      animate={{ backgroundColor: getBgColor() }}
    >
      <div className="flex-1 w-full flex flex-col items-center justify-center container max-w-4xl px-4 py-6 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col items-center justify-center"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>

      <footer className="w-full text-center py-6 text-[11px] text-neutral-400 space-x-6 opacity-70 hover:opacity-100 transition-opacity z-20">
        <button onClick={() => setActiveInfo('about')} className="cursor-help hover:text-white transition-colors">About</button>
        <button onClick={() => setActiveInfo('privacy')} className="cursor-help hover:text-white transition-colors">Privacy Policy</button>
        <button onClick={() => setActiveInfo('contact')} className="cursor-help hover:text-white transition-colors">Contact</button>
      </footer>

      {/* INFO MODAL OVERLAY */}
      <AnimatePresence>
        {activeInfo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl p-8 md:p-12 overflow-y-auto max-h-[85vh]"
            >
              <button 
                onClick={() => setActiveInfo(null)}
                className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              {renderInfoContent()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AppLayout;
