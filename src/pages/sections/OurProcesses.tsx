// OurProcess.tsx

import React from 'react';
import { motion, useInView } from 'framer-motion'; // Import useInView
import { useRef } from 'react'; // Import useRef

import { 
  OUR_PROCESS_TITLE_SPAN, 
  OUR_PROCESS_MAIN_TITLE_PART1, 
  OUR_PROCESS_MAIN_TITLE_PART2, 
  OUR_PROCESS_DESCRIPTION, 
  PROCESS_STEPS,
  type ProcessStep
} from '../constants/demo-constants'; // Adjust path as per your constants file location

const OurProcess: React.FC = () => {
  // Variants for the main section title and description
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger delay for children (span, h2, p)
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  // Variants for the step icons (hover and continuous float)
  const iconHoverVariants = {
    hover: {
      scale: 1.25,
      rotate: 10,
      filter: "brightness(1.5) drop-shadow(0 0 10px rgba(255,255,255,0.8)) drop-shadow(0 0 20px rgba(255,255,255,0.4))", 
      transition: {
        duration: 0.3,
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
    hidden: { 
      opacity: 0, 
      x: 300, // Start far to the right, off-screen
      rotate: 5 // Slight initial rotation
    }, 
    show: { 
      opacity: 1, 
      x: 0, // Animate to final position (no horizontal offset)
      rotate: 0, 
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
    <section className="relative w-full py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 transition-colors duration-300 overflow-hidden">
      {/* Decorative background elements - subtle and themed */}
      <motion.div 
        className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-br from-green-400 to-blue-300 dark:from-green-700 dark:to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-1/4 left-0 w-64 h-64 bg-gradient-to-br from-red-400 to-orange-300 dark:from-red-700 dark:to-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 2, delay: 0.7 }}
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
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-4 shadow-md"
            variants={textVariants}
          >
            {OUR_PROCESS_TITLE_SPAN}
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight"
            variants={textVariants}
          >
            {OUR_PROCESS_MAIN_TITLE_PART1} <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
              {OUR_PROCESS_MAIN_TITLE_PART2}
            </span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light"
            variants={textVariants}
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
            const ref = useRef<HTMLDivElement>(null);
            const isInView = useInView(ref, { once: false, amount: 0.5 }); 

            return (
              <motion.div
                key={index}
                ref={ref} 
                className="relative flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700 transform-gpu cursor-pointer"
                variants={stepCardVariants} // Use the new step card variants
                
                // Animate for continuous active pulse if in view, otherwise use the 'show' state from parent stagger
                animate={isInView ? "pulse" : "show"} 

                // Hover animation for interactive feedback
                whileHover={{ 
                  scale: 1.07, 
                  y: -15,      
                  boxShadow: "0px 30px 60px rgba(0, 0, 0, 0.5), 0px 0px 25px rgba(0, 0, 0, 0.2)", 
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                {/* Step Number Circle (for visual timeline) */}
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center text-white font-bold text-sm shadow-md z-20">
                  {index + 1}
                </div>

                <motion.div 
                  className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br ${step.gradient} mb-6 shadow-lg relative z-10`}
                  variants={{ ...iconHoverVariants, ...iconFloatVariants }} 
                  whileHover="hover" 
                  animate="float" 
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