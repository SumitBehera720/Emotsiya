import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 25) + 15;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f4fbfb] text-[#164e63]"
        >
          <div className="relative flex flex-col items-center space-y-6 px-6 text-center">
            
            {/* Logo scaling pulse */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative"
            >
              <img
                src="/logo.png"
                alt="Emotsiya Logo"
                className="h-16 sm:h-20 w-auto object-contain drop-shadow-md"
              />
              <div className="absolute -inset-4 bg-teal-500/10 rounded-full blur-xl pointer-events-none animate-pulse" />
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-1"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-[#0d9488]">
                Every Emotion Matters
              </p>
              <p className="text-sm font-serif italic text-slate-600">
                Building Great Citizens • Building a Great Nation
              </p>
            </motion.div>

            {/* Progress Bar & Percentage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="w-48 sm:w-64 space-y-2 pt-2"
            >
              <div className="h-1.5 w-full bg-slate-200/80 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#0d9488] rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              <p className="text-[11px] font-bold text-slate-500 font-mono">
                Loading Movement... {progress}%
              </p>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
