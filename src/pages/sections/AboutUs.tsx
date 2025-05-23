// AboutUs.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react'; // Import useState and useEffect
// Import all necessary constants and types from the constants file
import {
  ABOUT_US_TITLE_SPAN,
  ABOUT_US_MAIN_TITLE_PART1,
  ABOUT_US_MAIN_TITLE_PART2,
  ABOUT_US_DESCRIPTION,
  ABOUT_US_CARDS,
  type AboutUsCard
} from '../constants/demo-constants'; // Adjust path if your constants file is in a different directory

// Helper hook for typing animation
const useTypingAnimation = (text: string, startDelay: number = 0, typingSpeed = 50) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let initialDelayTimeout: number;
    let typingTimeout: number;

    const startTyping = () => {
      if (index < text.length) {
        typingTimeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text.charAt(index));
          setIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        setIsTypingComplete(true);
      }
    };

    if (startDelay > 0) {
      initialDelayTimeout = setTimeout(startTyping, startDelay);
    } else {
      startTyping();
    }

    return () => {
      clearTimeout(initialDelayTimeout);
      clearTimeout(typingTimeout);
    };
  }, [index, text, typingSpeed, startDelay]);

  // Reset when text changes (e.g., if props change, though unlikely for static titles)
  useEffect(() => {
    setDisplayedText('');
    setIndex(0);
    setIsTypingComplete(false);
  }, [text]);

  return { displayedText, isTypingComplete };
};


// Main AboutUs component
const AboutUs: React.FC = () => {
  // Combine main title parts for a single typing animation
  const fullMainTitle = `${ABOUT_US_MAIN_TITLE_PART1} ${ABOUT_US_MAIN_TITLE_PART2}`;

  // Typing animation for the span title (starts first)
  // OPTIMIZED: Reduced start delay and typing speed
  const { displayedText: displayedSpanTitle, isTypingComplete: spanTitleTypingComplete } = useTypingAnimation(ABOUT_US_TITLE_SPAN, 100, 20); // Faster typing, reduced start delay

  // Typing animation for the main title (starts after span title or with a fixed delay)
  // OPTIMIZED: Reduced start delay and typing speed for faster appearance
  const { displayedText: displayedMainTitle, isTypingComplete: mainTitleTypingComplete } = useTypingAnimation(fullMainTitle, 300, 20); // Reduced from 600ms to 300ms, typing speed to 20ms

  // Variants for the main container to stagger children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Faster stagger for a more dynamic entry
      },
    },
  };

  // Variants for text elements (p) - h2 and span will use typing logic
  const textVariants = {
    hidden: { opacity: 0, y: 40 }, // Start even lower for a more pronounced slide-up
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }, // Custom bezier curve for smoother ease
  };

  // Variants for the individual cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 60 }, // Start smaller and lower
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }, // Smooth entry
  };

  // Variants for icon animation on card hover and tap
  const iconHoverTapVariants = {
    hover: {
      scale: 1.25, // Even larger scale on hover
      rotate: 10, // More rotation
      // Enhanced blue glow effect using brightness and drop-shadow
      filter: "brightness(1.5) drop-shadow(0 0 20px rgba(0, 191, 255, 1)) drop-shadow(0 0 40px rgba(0, 191, 255, 0.7))",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: { // Added tap animation for mobile
      scale: 1.1, // Slightly less scale than hover for a distinct tap feel
      filter: "brightness(1.5) drop-shadow(0 0 15px rgba(0, 191, 255, 0.9))",
      transition: {
        duration: 0.1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-950 dark:to-blue-900 transition-colors duration-300 overflow-hidden">
      {/* Decorative background elements - More dynamic and vibrant */}
      <motion.div
        className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-cyan-300 dark:from-blue-700 dark:to-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-br from-cyan-400 to-blue-300 dark:from-cyan-700 dark:to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 2, delay: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
      ></motion.div>
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-indigo-400 to-sky-300 dark:from-indigo-700 dark:to-sky-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, delay: 0.9 }}
        viewport={{ once: true, amount: 0.3 }}
      ></motion.div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.span
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-4 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {displayedSpanTitle}
            {spanTitleTypingComplete ? null : (
              <motion.span
                className="inline-block ml-1"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "loop" }}
              >
                |
              </motion.span>
            )}
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            // OPTIMIZED: Reduced delay for the h2 container fade-in
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }} // Reduced from 0.8s to 0.5s
          >
            {displayedMainTitle.includes(ABOUT_US_MAIN_TITLE_PART2) ?
              <>
                {displayedMainTitle.split(ABOUT_US_MAIN_TITLE_PART2)[0]}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
                  {ABOUT_US_MAIN_TITLE_PART2}
                </span>
              </>
              : displayedMainTitle
            }
            {mainTitleTypingComplete ? null : (
              <motion.span
                className="inline-block ml-1"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "loop" }}
              >
                |
              </motion.span>
            )}
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light"
            variants={textVariants}
          >
            {ABOUT_US_DESCRIPTION}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ABOUT_US_CARDS.map((card: AboutUsCard, index: number) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-100 dark:border-gray-700 cursor-pointer transform-gpu overflow-hidden relative"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.1 * index }}
              variants={cardVariants}
              whileHover={{
                scale: 1.04,
                y: -8,
                boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.3), 0px 0px 15px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Card background overlay for subtle effect - uses card.gradient or a default blue */}
              <div className={`absolute inset-0 rounded-2xl opacity-10 transition-opacity duration-300 ${card.gradient || 'bg-gradient-to-br from-blue-500 to-cyan-400'}`}></div>

              <motion.div
                className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${card.gradient || 'from-blue-500 to-cyan-400'} mb-6 shadow-lg relative z-10`}
                variants={iconHoverTapVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <card.icon className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 relative z-10">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
