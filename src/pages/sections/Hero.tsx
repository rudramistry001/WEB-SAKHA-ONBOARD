import { motion } from 'framer-motion';
import logoImage from '../../assets/images/logo.png';
import { useState, useEffect } from 'react';

export default function Hero() {
  const tagline = "Web Sakha: Your Trusted Partner in Software Innovation and Digital Outreach.";
  const [displayedTagline, setDisplayedTagline] = useState('');
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    if (taglineIndex < tagline.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedTagline((prev) => prev + tagline.charAt(taglineIndex));
        setTaglineIndex((prev) => prev + 1);
      }, 50); // Adjust typing speed here (milliseconds per character)
      return () => clearTimeout(timeoutId);
    }
  }, [taglineIndex, tagline]);

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-cyan-200 dark:from-gray-950 dark:to-blue-900 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center z-10">
        {/* Company Logo and Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
          className="mb-8 flex flex-col items-center justify-center gap-6"
        >
          <motion.img
            src={logoImage}
            alt="Web Sakha Logo"
            className="h-64 w-64 md:h-80 md:w-80 rounded-full shadow-2xl"
            initial={{ rotate: -10, scale: 0.8, filter: 'drop-shadow(0 0 0px rgba(0, 0, 0, 0))' }}
            animate={{
              rotate: 0,
              scale: 1,
              filter: 'drop-shadow(0 0 60px rgba(0, 191, 255, 1)) drop-shadow(0 0 100px rgba(0, 191, 255, 0.8))', // Even brighter blue glow for logo
              transition: {
                type: "spring",
                stiffness: 180, // Slightly less stiff for more "fluid" glow
                delay: 0.4,
                duration: 1.5, // Longer duration for a more pronounced glow in
                filter: { delay: 0.6, duration: 1.2 } // Longer filter animation
              }
            }}
            whileHover={{
              rotate: [0, -5, 5, -5, 0],
              scale: 1.05,
              filter: 'drop-shadow(0 0 80px rgba(0, 191, 255, 1)) drop-shadow(0 0 120px rgba(0, 191, 255, 0.9))', // Even stronger glow on hover
              transition: { duration: 0.6 } // Slightly longer hover transition
            }}
          />

          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 dark:from-blue-200 dark:to-cyan-100 leading-tight tracking-wide drop-shadow-[0_0_15px_rgba(0,191,255,0.9)] dark:drop-shadow-[0_0_15px_rgba(173,216,230,0.9)]" // More vibrant text gradient and stronger glow
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.2,
              duration: 0.5,
            }}
          >
            {displayedTagline}
            <motion.span
              className="inline-block"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "loop" }}
            >
              |
            </motion.span>
          </motion.p>
        </motion.div>
      </div>

      {/* Subtle Background Animation */}
      <motion.div
        className="absolute inset-0 z-0 opacity-20"
        initial={{ scale: 1.2, rotate: -15, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 0.2 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
      >
        <div className="w-full h-full bg-blue-300 dark:bg-blue-800 rounded-full blur-3xl opacity-50 transform scale-150"></div> {/* Enhanced shining blue background blur */}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className="w-6 h-10 border-2 border-blue-600 dark:border-blue-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="w-1.5 h-3 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}