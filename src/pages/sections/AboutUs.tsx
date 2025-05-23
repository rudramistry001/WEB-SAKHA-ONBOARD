// AboutUs.tsx

import React from 'react';
import { motion } from 'framer-motion';
// Import all necessary constants and types from the constants file
import { 
  ABOUT_US_TITLE_SPAN, 
  ABOUT_US_MAIN_TITLE_PART1, 
  ABOUT_US_MAIN_TITLE_PART2, 
  ABOUT_US_DESCRIPTION, 
  ABOUT_US_CARDS,
  type AboutUsCard 
} from '../constants/demo-constants'; // Adjust path if your constants file is in a different directory

// Main AboutUs component
const AboutUs: React.FC = () => {
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

  // Variants for text elements (span, h2, p)
  const textVariants = {
    hidden: { opacity: 0, y: 40 }, // Start even lower for a more pronounced slide-up
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }, // Custom bezier curve for smoother ease
  };

  // Variants for the individual cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 60 }, // Start smaller and lower
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }, // Smooth entry
  };

  // Variants for icon animation on card hover
  const iconHoverVariants = {
    hover: {
      scale: 1.25, // Even larger scale on hover
      rotate: 10, // More rotation
      // Enhanced glow effect using brightness and drop-shadow
      filter: "brightness(1.5) drop-shadow(0 0 10px rgba(255,255,255,0.8)) drop-shadow(0 0 20px rgba(255,255,255,0.4))", 
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300 overflow-hidden">
      {/* Decorative background elements - More dynamic and vibrant */}
      <motion.div 
        className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-cyan-300 dark:from-blue-700 dark:to-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-300 dark:from-purple-700 dark:to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 2, delay: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-green-400 to-yellow-300 dark:from-green-700 dark:to-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
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
            className="bg-gradient-to-r from-teal-500 to-green-400 text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-4 shadow-md"
            variants={textVariants}
          >
            {ABOUT_US_TITLE_SPAN}
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight" // Added font-extrabold and leading-tight
            variants={textVariants}
          >
            {ABOUT_US_MAIN_TITLE_PART1} <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-green-400">
              {ABOUT_US_MAIN_TITLE_PART2}
            </span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light" // Added font-light
            variants={textVariants}
          >
            {ABOUT_US_DESCRIPTION}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ABOUT_US_CARDS.map((card: AboutUsCard, index: number) => (
            <motion.div
              key={index}
              // Changed bg-white to bg-gray-50 for light mode, and dark:bg-gray-800 for dark mode for better contrast and theme adherence
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-gray-100 dark:border-gray-700 cursor-pointer transform-gpu overflow-hidden relative" 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.1 * index }}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.04, // Slightly larger scale on hover
                y: -8, // More lift effect
                boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.3), 0px 0px 15px rgba(0, 0, 0, 0.1)", // Enhanced shadow
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Card background overlay for subtle effect */}
              <div className={`absolute inset-0 rounded-2xl opacity-10 transition-opacity duration-300 ${card.gradient}`}></div>
              
              <motion.div 
                className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${card.gradient} mb-6 shadow-lg relative z-10`} // Larger icon container, added shadow
                variants={iconHoverVariants}
                whileHover="hover"
              >
                <card.icon className="w-10 h-10 text-white" /> {/* Larger icon */}
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
