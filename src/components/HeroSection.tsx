import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import emailAnimation from '../assets/animations/mail-animation.json';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  
  useEffect(() => {
    // Set a timer to show content after animation plays for a bit
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-24 px-8 overflow-hidden">
      {/* Full-screen animation that starts immediately */}
      <div className={`absolute inset-0 flex items-center justify-center ${animationComplete ? 'opacity-20' : 'opacity-100'} transition-opacity duration-1000`}>
        <Lottie 
          animationData={emailAnimation} 
          loop={!animationComplete}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content layer that appears after animation */}
      <AnimatePresence>
        {animationComplete && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 max-w-7xl mx-auto flex flex-col items-center"
          >
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold mb-6 text-center"
            >
              Simplify Your <span className="text-purple-300">Marketing</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-xl mb-10 text-center max-w-2xl"
            >
              Streamline your email campaigns with our powerful bulk email solution. Reach more customers with less effort.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-3 bg-white text-indigo-600 font-bold rounded-lg shadow-lg hover:bg-purple-100 transition-all duration-300">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300">
                Try Demo
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSection; 