import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation, type Variants, animate } from 'framer-motion';


// Helper hook for typing animation (reused from AboutUs.tsx and OurProcess.tsx)
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

  useEffect(() => {
    setDisplayedText('');
    setIndex(0);
    setIsTypingComplete(false);
  }, [text]);

  return { displayedText, isTypingComplete };
};



const textItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};


// Variants for the main campaign lifecycle stages
const campaignStageVariants: Variants = {
  hidden: (i: number) => ({
    opacity: 0,
    // Alternating entry from left/right for desktop, simple scale-up for mobile
    x: window.innerWidth >= 768 ? (i % 2 === 0 ? -100 : 100) : 0,
    scale: window.innerWidth >= 768 ? 1 : 0.8,
    rotate: window.innerWidth >= 768 ? (i % 2 === 0 ? -5 : 5) : 0,
  }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    rotate: 0,
    transition: {
      delay: i * 0.15, // Stagger delay
      duration: 0.7,
      type: "spring",
      stiffness: 100,
      damping: 10,
      ease: "easeOut"
    }
  }),
  hover: { // Enhanced hover effect for cards
    scale: 1.05,
    y: -8,
    boxShadow: "0px 15px 30px rgba(0,0,0,0.2), 0px 0px 10px rgba(0, 191, 255, 0.5)", // Blue glow on hover
    transition: { duration: 0.3 }
  }
};

// New variant for the inner icon circle's continuous glow
const campaignIconGlowVariants: Variants = {
  pulse: (index: number) => ({
    boxShadow: [
      `0 0 5px rgba(255,255,255,0.4), 0 0 10px ${['#3B82F6', '#06B6D4', '#22C55E', '#FACC15'][index]}`, // Blue, Cyan, Green, Yellow
      `0 0 10px rgba(255,255,255,0.6), 0 0 20px ${['#3B82F6', '#06B6D4', '#22C55E', '#FACC15'][index]}`,
      `0 0 5px rgba(255,255,255,0.4), 0 0 10px ${['#3B82F6', '#06B6D4', '#22C55E', '#FACC15'][index]}`
    ],
    transition: {
      duration: 2.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror" as const,
      delay: 0.7 // Start after card entry animation
    }
  })
};




const SocialMediaMarketing: React.FC = () => {
  const campaignLifecycleRef = useRef(null);
  const platformIconsRef = useRef(null);
  const analyticsRef = useRef(null);
  const emailRef = useRef(null);
  const contentRef = useRef(null);
  const audienceRef = useRef(null);

  const isCampaignLifecycleInView = useInView(campaignLifecycleRef, { once: true, amount: 0.2 });
  const isPlatformIconsInView = useInView(platformIconsRef, { once: true, amount: 0.4 });
  const isAnalyticsInView = useInView(analyticsRef, { once: true, amount: 0.4 });
  const isEmailInView = useInView(emailRef, { once: true, amount: 0.4 });
  const isContentInView = useInView(contentRef, { once: true, amount: 0.4 });
  const isAudienceInView = useInView(audienceRef, { once: true, amount: 0.4 });

  const campaignControls = useAnimation();
  const platformControls = useAnimation();
  const statControls = useAnimation(); // For the number and chart
  const emailControls = useAnimation();
  const contentControls = useAnimation();
  const audienceControls = useAnimation();

  // Removed isMobile state as it's not being used.
  // const [isMobile, setIsMobile] = useState(false);

  // Typing animation for the main heading
  const { displayedText: displayedMainHeading, isTypingComplete: mainHeadingTypingComplete } = useTypingAnimation(
    "Social Media Marketing & Campaigns", // The full heading text
    50, // Start delay: very fast
    10 // Typing speed: very fast
  );


  // Removed the useEffect and handleResize related to isMobile as it's no longer needed.
  // useEffect(() => {
  //   const checkMobile = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };
  //   checkMobile();
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  // const handleResize = () => {
  //   setIsMobile(window.innerWidth < 768);
  // };


  useEffect(() => {
    if (isCampaignLifecycleInView) campaignControls.start("visible");
  }, [isCampaignLifecycleInView, campaignControls]);

  useEffect(() => {
    if (isPlatformIconsInView) platformControls.start("visible");
  }, [isPlatformIconsInView, platformControls]);

  useEffect(() => {
    if (isAnalyticsInView) statControls.start("visible");
  }, [isAnalyticsInView, statControls]);

  useEffect(() => {
    if (isEmailInView) emailControls.start("visible");
  }, [isEmailInView, emailControls]);

  useEffect(() => {
    if (isContentInView) contentControls.start("visible");
  }, [isContentInView, contentControls]);

  useEffect(() => {
    if (isAudienceInView) audienceControls.start("visible");
  }, [isAudienceInView, audienceControls]);


  // Effect for the number animation (using Framer Motion's animate)
  useEffect(() => {
    if (isAnalyticsInView) {
      const node = document.getElementById("engagement-stat");
      if (node) {
        const controls = animate(0, 80, {
          duration: 2,
          delay: 1.5,
          onUpdate: (value) => {
            node.textContent = `${Math.round(value)}%`;
          },
        });
        return () => controls.stop();
      }
    }
  }, [isAnalyticsInView]);


  return (
    <section id="social-media-marketing" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-gray-900 dark:to-blue-950 text-gray-800 dark:text-gray-200 overflow-hidden relative font-sans">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-blue-800 dark:text-blue-400 mb-12 md:mb-16 leading-tight font-display"
          initial={{ opacity: 0, y: -50 }} // Initial animation for the container
          animate={{ opacity: 1, y: 0 }} // Animate the container in
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {displayedMainHeading}
          {mainHeadingTypingComplete ? null : ( // Blinking cursor for main title
            <motion.span
              className="inline-block ml-1"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "loop" }}
            >
              |
            </motion.span>
          )}
        </motion.h2>

        {/* Campaign Lifecycle Visual */}
        <div ref={campaignLifecycleRef} className="mb-16 md:mb-20 flex flex-col items-center">
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-300 mb-8 text-center font-display"
            initial={{ opacity: 0, y: 20 }}
            animate={campaignControls}
            variants={textItemVariants}
          >
            Our Campaign Journey
          </motion.h3>
          <div className="relative w-full max-w-4xl h-auto">
            {/* Desktop Labels */}
            <div className="hidden md:flex justify-between items-center text-lg font-semibold text-gray-700 dark:text-gray-300 w-full mb-4">
              {['Strategy', 'Content Creation', 'Deployment', 'Analysis & Optimization'].map((label, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={campaignControls} variants={textItemVariants} className="flex-1 text-center">
                  {label}
                </motion.div>
              ))}
            </div>
            <div className="relative flex flex-col md:flex-row justify-between items-stretch md:items-center w-full">
              {/* Desktop Horizontal Line */}
              <div className="absolute hidden md:block top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 dark:from-blue-600 dark:to-cyan-600 -translate-y-1/2"></div>
              {/* Mobile Vertical Line */}
              <div className="absolute md:hidden left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>

              {['💡', '✍️', '🚀', '📈'].map((icon, index) => (
                <motion.div
                  key={index}
                  className={`relative z-10 p-4 md:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-xl dark:border dark:border-gray-700 ${index < 3 ? 'mb-6 md:mb-0 md:mr-4' : ''} flex-1 text-center
                                transform hover:-translate-y-2 transition-transform duration-300`}
                  initial="hidden"
                  animate={campaignControls} // Control by parent animation
                  variants={campaignStageVariants} // Use the new campaign stage variants
                  custom={index} // Pass index as custom prop
                  whileHover="hover" // Trigger hover animation
                  whileTap="hover" // Trigger hover animation on tap for mobile
                >
                  {/* Mobile Label (visible on small screens) */}
                  <p className="md:hidden text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    {['Strategy', 'Content Creation', 'Deployment', 'Analysis & Optimization'][index]}
                  </p>
                  <motion.div
                    className={`w-20 h-20 md:w-24 md:h-24 rounded-full ${['bg-blue-500', 'bg-cyan-500', 'bg-green-500', 'bg-yellow-500'][index]} text-white flex items-center justify-center font-bold text-5xl mx-auto mb-4
                                     shadow-lg dark:shadow-none`} // Removed dark:animate-pulse-glow here
                    animate={campaignControls} // Use campaignControls to trigger pulse
                    variants={campaignIconGlowVariants} // Apply the new glow variants
                    custom={index} // Pass index for color customization
                  >
                    {icon}
                  </motion.div>
                  <p className={`font-semibold text-lg md:text-xl ${['text-blue-800 dark:text-blue-300', 'text-cyan-800 dark:text-cyan-300', 'text-green-800 dark:text-green-300', 'text-yellow-800 dark:text-yellow-300'][index]}`}>
                    {['Strategy & Planning', 'Content Creation', 'Deployment & Engagement', 'Analytics & Optimization'][index]}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mt-2">
                    {['Define goals, audience, and platform strategy.', 'Craft compelling visuals and copy tailored for each platform.', 'Schedule, post, and actively engage with your audience.', 'Track performance, report, and refine strategies.'][index]}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
}

export default SocialMediaMarketing;