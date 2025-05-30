// OurServices.tsx

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react'; // Import useState and useEffect

// Adjust path as per your constants file location
import {
  OUR_SERVICES_TITLE_SPAN,
  OUR_SERVICES_MAIN_TITLE,
  OUR_SERVICES_DESCRIPTION,
  SERVICES,
  type ServiceItem
} from '../constants/services';

// Helper hook for typing animation (reused from AboutUs.tsx)
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


const OurServices: React.FC = () => {
  // Ref for the main section to trigger animations when in view
  const sectionRef = useRef<HTMLElement>(null);
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.3 }); // Trigger once when 30% in view

  // Typing animation for the span title
  const { displayedText: displayedSpanTitle, isTypingComplete: spanTitleTypingComplete } = useTypingAnimation(OUR_SERVICES_TITLE_SPAN, 100, 15); // Fast typing, minimal delay

  // Typing animation for the main title
  const { displayedText: displayedMainTitle, isTypingComplete: mainTitleTypingComplete } = useTypingAnimation(OUR_SERVICES_MAIN_TITLE, 300, 15); // Fast typing, slight delay after span

  // Variants for the section's main title and description
  const textContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  // Variants for the grid container to stagger card entries
  const cardsGridVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      },
    },
  };

  // UNIQUE CARD ENTRY ANIMATION VARIANTS - WAVY SLIDE-IN
  const serviceCardVariants = {
    hidden: {
      opacity: 0,
      x: -200,
      y: 50,
      rotate: -15,
      scale: 0.8
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 14,
        mass: 1,
        duration: 0.8,
        ease: [0.68, -0.55, 0.26, 1.55]
      }
    },
    hover: {
      scale: 1.08,
      y: -20,
      rotate: 2,
      boxShadow: "0px 30px 60px rgba(0, 0, 0, 0.4), 0px 0px 20px rgba(0, 0, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 12
      }
    }
  };

  // ENHANCED ICON ANIMATION VARIANTS: Spin-in and subtle continuous glow
  const iconVariants = {
    initial: { opacity: 0, scale: 0.5, rotate: -180 }, // Start invisible, small, and rotated
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
        delay: 0.5 // Delay icon spin after card appears
      }
    },
    pulseGlow: { // Continuous subtle glow for the icon background
      boxShadow: [
        "0 0 10px rgba(0, 191, 255, 0.4), 0 0 20px rgba(0, 191, 255, 0.2)", // Shining blue glow
        "0 0 15px rgba(0, 191, 255, 0.6), 0 0 25px rgba(0, 191, 255, 0.3)",
        "0 0 10px rgba(0, 191, 255, 0.4), 0 0 20px rgba(0, 191, 255, 0.2)"
      ],
      transition: {
        duration: 2.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror" as const
      }
    },
    float: { // Retained subtle float for depth
      y: [0, -5, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror" as const
      }
    }
  };


  return (
    <section ref={sectionRef} className="relative w-full py-24 bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-950 dark:to-blue-900 transition-colors duration-300 overflow-hidden">
      {/* Enhanced Decorative background elements - more vibrant and interactive */}
      {/* Large pulsating blob (Blue/Cyan) */}
      <motion.div
        className="absolute top-1/4 left-0 w-80 h-80 bg-gradient-to-br from-blue-500 to-cyan-400 dark:from-blue-800 dark:to-cyan-700 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse-slow"
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 0.25, x: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      ></motion.div>
      {/* Large pulsating blob (Cyan/Blue) */}
      <motion.div
        className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-br from-cyan-500 to-blue-400 dark:from-cyan-800 dark:to-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse-slow animation-delay-2000"
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 0.25, x: 0 }}
        transition={{ duration: 2, delay: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
      ></motion.div>
      {/* Smaller, faster moving blob (Sky/Indigo) */}
      <motion.div
        className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-br from-sky-400 to-indigo-300 dark:from-sky-700 dark:to-indigo-600 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-1000"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.9 }}
        viewport={{ once: true, amount: 0.3 }}
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={sectionInView ? "show" : "hidden"} // Animate based on section visibility
          variants={textContainerVariants}
        >
          <motion.span
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-4 shadow-md"
            initial={{ opacity: 0, y: 20 }} // Initial animation for the span container
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }} // Reduced delay for span container fade-in
          >
            {displayedSpanTitle}
            {spanTitleTypingComplete ? null : ( // Blinking cursor for span title
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
            initial={{ opacity: 0, y: 20 }} // Initial animation for the h2 container
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }} // Reduced delay for h2 container fade-in
          >
            {displayedMainTitle}
            {mainTitleTypingComplete ? null : ( // Blinking cursor for main title
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
            variants={textItemVariants}
          >
            {OUR_SERVICES_DESCRIPTION}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={sectionInView ? "show" : "hidden"} // Animate based on section visibility
          variants={cardsGridVariants} // Apply stagger to children
        >
          {SERVICES.map((service: ServiceItem, index: number) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700 transform-gpu cursor-pointer group transition-all duration-300 overflow-hidden"
              variants={serviceCardVariants} // Apply unique card variants
              whileHover="hover" // Trigger hover animation
              whileTap="hover" // Apply hover animation on tap for mobile consistency
            >
              {/* Colorful Glow Effect (on hover) - positioned behind content */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0
                ${service.gradient || 'from-blue-500 to-cyan-400'} blur-xl scale-125`} // Added default blue gradient
                style={{ filter: 'brightness(1.5) blur(40px)', background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
              ></div>
              {/* Inner content wrapper to ensure it's above the glow */}
              <div className="relative z-10 flex flex-col items-center">
                <motion.div
                  className={`inline-flex items-center justify-center w-28 h-28 rounded-full ${service.gradient || 'from-blue-500 to-cyan-400'} mb-6 shadow-lg relative`} // Added default blue gradient
                  // NEW: Apply iconVariants for complex animation
                  variants={iconVariants}
                  initial="initial"
                  animate={sectionInView ? ["animate", "pulseGlow", "float"] : "initial"} // Animate on section view, then continuously pulse and float
                  whileHover={{ scale: 1.15, rotate: 15, transition: { type: "spring", stiffness: 300 } }} // Enhanced hover for icon
                >
                  {/* NEW: Ensure icon text color adapts to dark mode. If SVG fills are currentColor, this is automatic */}
                  <service.icon className="w-14 h-14 text-white dark:text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;
