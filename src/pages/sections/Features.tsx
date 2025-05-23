// FeaturesOverview.tsx

import React from 'react';
import { motion } from 'framer-motion';
// Import all necessary constants and types from the constants file
import { 
  CARD_GRADIENTS, 
  FEATURES_OVERVIEW_TITLE_SPAN, 
  FEATURES_OVERVIEW_MAIN_TITLE_PART1, 
  FEATURES_OVERVIEW_MAIN_TITLE_PART2, 
  FEATURES_OVERVIEW_DESCRIPTION, 
  FEATURES_LIST,
  type Feature // Import the Feature interface
 // Import the Feature interface
} from '../constants/demo-constants'; // Adjust path if your constants file is in a different directory

// Define the props interface for FeatureCard component
interface FeatureCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; 
  title: string; 
  description: string; 
  index: number;
}

// Feature card component
const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  index 
}) => {
  const gradientClass = CARD_GRADIENTS[index % CARD_GRADIENTS.length];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: 0.1 * index,
        ease: "easeOut" 
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.2)" 
      }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300
                  flex flex-col h-full border border-gray-100 dark:border-gray-700"
    >
      <div className={`h-2 w-full bg-gradient-to-r ${gradientClass}`}></div>
      <div className="p-6 flex-grow">
        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${gradientClass} mb-5`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

// Main FeaturesOverview component
const FeaturesOverview: React.FC = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">
            {FEATURES_OVERVIEW_TITLE_SPAN}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {FEATURES_OVERVIEW_MAIN_TITLE_PART1} <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              {FEATURES_OVERVIEW_MAIN_TITLE_PART2}
            </span>
          </h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {FEATURES_OVERVIEW_DESCRIPTION}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {FEATURES_LIST.map((feature: Feature, index: number) => ( // Explicitly type 'feature'
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;
