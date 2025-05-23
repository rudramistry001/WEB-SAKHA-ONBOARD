import { motion } from 'framer-motion';
import logoImage from '../../assets/images/logo.png';

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-indigo-950 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center z-10"> {/* Added z-10 for layering */}
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
            className="h-64 w-64 md:h-80 md:w-80 rounded-full shadow-2xl" // Increased size, added rounded-full for potential round logos and strong shadow
            initial={{ rotate: -10, scale: 0.8, filter: 'drop-shadow(0 0 0px rgba(0, 0, 0, 0))' }}
            animate={{
              rotate: 0,
              scale: 1,
              filter: 'drop-shadow(0 0 35px rgba(79, 70, 229, 0.8))', // Enhanced glow effect
              transition: {
                type: "spring",
                stiffness: 200,
                delay: 0.4,
                duration: 1, // Longer duration for a smoother glow in
                filter: { delay: 0.6, duration: 0.7 }
              }
            }}
            whileHover={{
              rotate: [0, -5, 5, -5, 0],
              scale: 1.05, // Slightly enlarge on hover
              filter: 'drop-shadow(0 0 50px rgba(79, 70, 229, 1))', // Even stronger glow on hover
              transition: { duration: 0.5 }
            }}
          />

          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-blue-600 dark:from-indigo-400 dark:to-blue-300 leading-tight tracking-wide drop-shadow-lg" // Enhanced text styling for impact
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1.2, // Adjusted delay to appear after logo animation is significant
              duration: 1.2,
              type: "spring",
              stiffness: 70
            }}
          >
            Web Sakha: Your Trusted Partner in Software Innovation and Digital Outreach.
          </motion.p>
        </motion.div>
      </div>

      {/* Subtle Background Animation (Optional) */}
      <motion.div
        className="absolute inset-0 z-0 opacity-20"
        initial={{ scale: 1.2, rotate: -15, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 0.2 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
      >
        {/* This could be a subtle pattern, or a simple shape */}
        <div className="w-full h-full bg-indigo-200 dark:bg-indigo-800 rounded-full blur-3xl opacity-50 transform scale-150"></div>
      </motion.div>


      {/* Scroll Indicator - repositioned for clarity */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className="w-6 h-10 border-2 border-gray-600 dark:border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="w-1.5 h-3 bg-gray-600 dark:bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}