// OurProcess.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react'; // Import useState and useEffect

import {
  OUR_PROCESS_TITLE_SPAN,
  OUR_PROCESS_MAIN_TITLE_PART1,
  OUR_PROCESS_MAIN_TITLE_PART2,
  OUR_PROCESS_DESCRIPTION,
  PROCESS_STEPS,
  type ProcessStep
} from '../constants/demo-constants'; // Adjust path as per your constants file location

// Helper hook for typing animation (reused from AboutUs.tsx and OurServices.tsx)
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


const OurProcess: React.FC = () => {
  // Ref for the main section to trigger animations when in view
  const sectionRef = useRef<HTMLElement>(null);

  // Combine main title parts for a single typing animation
  const fullMainTitle = `${OUR_PROCESS_MAIN_TITLE_PART1} ${OUR_PROCESS_MAIN_TITLE_PART2}`;

  // Typing animation for the span title
  const { displayedText: displayedSpanTitle, isTypingComplete: spanTitleTypingComplete } = useTypingAnimation(OUR_PROCESS_TITLE_SPAN, 50, 10); // Very fast typing, minimal delay

  // Typing animation for the main title
  const { displayedText: displayedMainTitle, isTypingComplete: mainTitleTypingComplete } = useTypingAnimation(fullMainTitle, 150, 10); // Very fast typing, slight delay after span

  // Variants for the main section title and description
  const textContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger delay for children (span, h2, p)
      },
    },
  };

  // Variants for text elements (p) - h2 and span will use typing logic
  const textItemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  // Variants for the step icons (hover and continuous float)
  const iconHoverVariants = {
    hover: {
      scale: 1.25,
      rotate: 10,
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

  const iconFloatVariants = {
    float: {
      y: [0, -8, 0], // Float up and down
      transition: {
        duration: 2.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror" as const
      }
    }
  };

  // NEW: Parent variants for the grid to control staggering
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each card's animation start
        delayChildren: 0.3 // Optional: delay for the first child to start
      },
    },
  };

  // Enhanced variants for the individual step cards - for "train-like" movement
  const stepCardVariants = {
    // Corrected: `hidden` now accepts `custom` prop (which will be the index)
    hidden: (custom: number) => ({
      opacity: 0,
      x: custom % 2 === 0 ? -300 : 300, // Even index from left, odd from right
      rotate: custom % 2 === 0 ? -15 : 15, // Slight initial rotation
      scale: 0.8
    }),
    show: {
      opacity: 1,
      x: 0, // Animate to final position (no horizontal offset)
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring", // Use spring for natural bounce
        damping: 12,    // Controls how quickly the spring comes to rest
        stiffness: 90,  // Controls the spring's rigidity (faster movement)
        mass: 0.8,      // Adds weight to the animation
        ease: "easeOut" // Use a standard ease for the x movement
      }
    },
    // Continuous pulse animation when in view (only if not hovered)
    pulse: {
      boxShadow: [
        "0px 20px 40px rgba(0, 0, 0, 0.3), 0px 0px 15px rgba(0, 0, 0, 0.1)",
        "0px 25px 55px rgba(0, 0, 0, 0.4), 0px 0px 25px rgba(0, 0, 0, 0.2)",
        "0px 20px 40px rgba(0, 0, 0, 0.3), 0px 0px 15px rgba(0, 0, 0, 0.1)"
      ],
      transition: {
        duration: 2.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror" as const
      }
    }
  };


  return (
    <section ref={sectionRef} className="relative w-full py-24 bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-950 dark:to-blue-900 transition-colors duration-300 overflow-hidden">
      {/* Decorative background elements - subtle and themed */}
      <motion.div
        className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-cyan-300 dark:from-blue-700 dark:to-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-to-br from-cyan-400 to-blue-300 dark:from-cyan-700 dark:to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 2, delay: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          // Changed from `animate={sectionInView ? "show" : "hidden"}` to `whileInView="show"`
          // This ensures the header animates in once and then remains visible.
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }} // Ensure viewport prop is on the element using whileInView
          variants={textContainerVariants}
        >
          <motion.span
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-4 shadow-md"
            initial={{ opacity: 0, y: 20 }} // Initial animation for the span container
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
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
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            {/* Split the displayed text to apply gradient only to the second part */}
            {displayedMainTitle.includes(OUR_PROCESS_MAIN_TITLE_PART2) ?
              <>
                {displayedMainTitle.split(OUR_PROCESS_MAIN_TITLE_PART2)[0]}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                  {OUR_PROCESS_MAIN_TITLE_PART2}
                </span>
              </>
              : displayedMainTitle // If PART2 hasn't started typing yet, just show the whole typed string
            }
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
            {OUR_PROCESS_DESCRIPTION}
          </motion.p>
        </motion.div>

        {/* Process Timeline Grid - Now a motion.div to control staggering */}
        <motion.div
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-x-8 lg:gap-x-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the grid is in view
          variants={gridContainerVariants} // Apply grid container variants for stagger
        >
          {/* Vertical line for larger screens - slightly thicker */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          <div className="hidden lg:block absolute left-1/3 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
          <div className="hidden lg:block absolute left-2/3 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>


          {PROCESS_STEPS.map((step: ProcessStep, index: number) => {
            return (
              <motion.div
                key={index}
                className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700 transform-gpu cursor-pointer"
                variants={stepCardVariants} // Pass the variants object directly
                custom={index} // Pass the index via the custom prop
                initial="hidden" // Explicitly set initial for clarity
                animate="show" // Controlled by parent gridContainerVariants stagger
                whileHover="hover" // Trigger hover animation
                whileTap="hover" // Apply hover animation on tap for mobile consistency
              >
                {/* Step Number Circle (for visual timeline) */}
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-blue-300 to-blue-400 dark:from-blue-600 dark:to-blue-700 flex items-center justify-center text-white font-bold text-sm shadow-md z-20">
                  {index + 1}
                </div>

                <motion.div
                  className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br ${step.gradient || 'from-blue-500 to-cyan-400'} mb-6 shadow-lg relative z-10`}
                  variants={{ ...iconHoverVariants, ...iconFloatVariants }}
                  whileHover="hover"
                  whileTap="tap" // Add whileTap for icon as well
                  animate="float" // Continuous float for icon
                >
                  <step.icon className="w-12 h-12 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 relative z-10">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 relative z-10">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default OurProcess;
