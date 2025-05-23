import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailAnimation from '../assets/animations/mail-animation.json';
import logoImage from '../assets/images/logo.png';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [animationPhase, setAnimationPhase] = useState<'mail' | 'logo' | 'complete'>('mail');
  
  useEffect(() => {
    // Show mail animation for 2.5 seconds
    const mailTimer = setTimeout(() => {
      setAnimationPhase('logo');
      
      // Show logo and app name for 2 seconds, then complete
      const logoTimer = setTimeout(() => {
        setAnimationPhase('complete');
        onLoadingComplete();
      }, 2000);
      
      return () => clearTimeout(logoTimer);
    }, 2500);
    
    return () => clearTimeout(mailTimer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-[#111827] flex items-center justify-center z-50">
      <AnimatePresence mode="wait">
        {animationPhase === 'mail' && (
          <motion.div
            key="mail-animation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex items-center justify-center"
          >
            <Lottie 
              animationData={emailAnimation} 
              loop={true}
              className="w-64 h-64 md:w-96 md:h-96"
            />
          </motion.div>
        )}
        
        {animationPhase === 'logo' && (
          <motion.div
            key="logo-animation"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <motion.img 
              src={logoImage} 
              alt="App Logo" 
              className="h-100 w-100 md:h-30 md:w-30 mb-6"
              initial={{ rotate: -10 }}
              animate={{ 
                rotate: 0,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  duration: 0.8 
                }
              }}
            />
           
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoadingScreen; 