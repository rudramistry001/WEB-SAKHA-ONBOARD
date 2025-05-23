import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation, type Variants, animate } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb, faPenNib, faUsers, faEnvelope, faArrowUp
} from '@fortawesome/free-solid-svg-icons';

// Define Framer Motion Variants for various animations
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const textItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// ENHANCED VARIANTS FOR SIDE SECTIONS

// Content Strategy & Creation
const contentVisualVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotateX: 90 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.3
    }
  }
};

const contentIconSpinVariants: Variants = {
  hidden: { scale: 0, opacity: 0, rotate: -180 },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 150, damping: 10, delay: 0.8 }
  },
  float: {
    y: [0, -5, 0], // Subtle float
    transition: { duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
  }
};

const contentLineTextVariants: Variants = {
  hidden: { opacity: 0, width: 0, scaleY: 0 },
  visible: {
    opacity: 1,
    width: '60%',
    scaleY: 1,
    transition: (delay: number) => ({
      delay: delay,
      duration: 0.8,
      ease: "easeOut",
      type: "spring",
      stiffness: 100
    })
  }
};


// Audience Targeting & Engagement
const audienceVisualVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: 90 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.3
    }
  }
};

const audienceMainIconVariants: Variants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 150, damping: 10, delay: 0.6 }
  },
  float: {
    y: [0, -7, 0], // More pronounced float
    transition: { duration: 2.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
  }
};

const audiencePulseVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0.5 },
  visible: (isMobile: boolean) => ({
    scale: [0.8, 1.05, 1],
    opacity: [0.5, 0.9, 0.6],
    transition: {
      scale: { repeat: Infinity, duration: isMobile ? 1.5 : 2, ease: "easeOut" },
      opacity: { repeat: Infinity, duration: isMobile ? 1.5 : 2, ease: "easeOut" }
    }
  })
};


// Analytics & Reporting
const analyticsVisualVariants: Variants = {
  hidden: { opacity: 0, y: 50, x: -50 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.3
    }
  }
};

const analyticsChartVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut",
      delay: 0.7
    }
  }
};

const analyticsArrowVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.8, // After chart and number
      duration: 0.5,
      type: "spring",
      stiffness: 200
    }
  },
  bounce: {
    y: [0, -10, 0],
    transition: { repeat: Infinity, duration: 1.2, ease: "easeOut", delay: 2.5 } // Continuous bounce
  }
};


// Email Marketing Campaigns
const emailVisualVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.3
    }
  }
};

const emailEnvelopeVariants: Variants = {
  hidden: { x: -100, opacity: 0, rotateY: -90 },
  visible: {
    x: 0,
    opacity: 1,
    rotateY: 0,
    transition: { type: "spring", stiffness: 120, damping: 15, delay: 0.5 }
  },
  float: {
    y: [0, -5, 0],
    transition: { repeat: Infinity, duration: 2, ease: "easeInOut" }
  }
};

const emailSubIconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (delay: number) => ({
    opacity: 1, scale: 1,
    transition: { delay: delay, duration: 0.5, type: "spring", stiffness: 150 }
  }),
  jiggle: {
    rotate: [0, 5, -5, 0],
    transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.2 }
  }
};


const SocialMediaMarketing: React.FC = () => {
  // Removed unused refs: campaignLifecycleRef, platformIconsRef
  const analyticsRef = useRef(null);
  const emailRef = useRef(null);
  const contentRef = useRef(null);
  const audienceRef = useRef(null);

  // Removed unused useInView hooks: isCampaignLifecycleInView, isPlatformIconsInView
  const isAnalyticsInView = useInView(analyticsRef, { once: true, amount: 0.4 });
  const isEmailInView = useInView(emailRef, { once: true, amount: 0.4 });
  const isContentInView = useInView(contentRef, { once: true, amount: 0.4 });
  const isAudienceInView = useInView(audienceRef, { once: true, amount: 0.4 });

  // Removed unused useAnimation controls: campaignControls, platformControls
  const statControls = useAnimation(); // For the number and chart
  const emailControls = useAnimation();
  const contentControls = useAnimation();
  const audienceControls = useAnimation();
  const analyticsControls = useAnimation();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile); // Changed handleResize to checkMobile for simplicity
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Removed unused useEffect for campaignControls and platformControls
  useEffect(() => {
    if (isAnalyticsInView) {
      analyticsControls.start("visible");
      statControls.start("visible");
    }
  }, [isAnalyticsInView, statControls, analyticsControls]);

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
        {/* Removed empty divs */}

        {/* Content Strategy & Creation */}
        <motion.div
          className="mb-16 md:mb-20 grid md:grid-cols-2 gap-10 md:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.div variants={textItemVariants}>
            <h3 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-6 leading-tight font-display">Content Strategy & Creation</h3>
            <p className="text-lg dark:text-gray-300 mb-4">
              Captivating content is the cornerstone of successful social media engagement. Our team of creative professionals specializes in developing a holistic **content strategy** that aligns with your brand narrative and resonates deeply with your target audience. We meticulously plan, produce, and curate a diverse range of content formats, including visually stunning graphics, compelling videos, informative blog posts, and interactive stories, all tailored to the unique nuances of each social media platform.
            </p>
            <ul className="list-disc list-inside text-lg dark:text-gray-300 space-y-2">
              <li><strong className="text-blue-600 dark:text-blue-300">Strategic Content Planning:</strong> Defining content themes, formats, and distribution schedules based on audience insights and campaign goals.</li>
              <li><strong className="text-blue-600 dark:text-blue-300">High-Quality Content Production:</strong> Crafting visually appealing and engaging content, from professional photography and videography to expertly written copy.</li>
              <li><strong className="text-blue-600 dark:text-blue-300">Platform-Optimized Content:</strong> Tailoring content specifications and creative approaches to maximize impact on Facebook, Instagram, LinkedIn, X/Twitter, YouTube, and other relevant channels.</li>
            </ul>
          </motion.div>
          <motion.div
            ref={contentRef}
            className="relative w-full h-64 md:h-80 bg-gradient-to-r from-blue-300 to-purple-300 dark:from-blue-700 dark:to-purple-800 rounded-xl shadow-xl dark:shadow-2xl flex items-center justify-center text-white text-2xl font-bold overflow-hidden"
            initial="hidden"
            animate={contentControls}
            variants={contentVisualVariants}
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="absolute top-4 left-4 text-sm font-normal opacity-80">Creative Storytelling</span>
            {/* Custom Animated Icon for Content Strategy */}
            <motion.div
              className="flex flex-col items-center justify-center w-full h-full text-blue-500 dark:text-blue-300"
              initial="hidden"
              animate={isContentInView ? ["visible", "float"] : "hidden"}
              variants={contentIconSpinVariants}
            >
              <FontAwesomeIcon icon={faPenNib} className="text-6xl md:text-7xl mb-4" />
              <motion.div
                initial="hidden"
                animate={isContentInView ? "visible" : "hidden"}
                variants={contentLineTextVariants}
                custom={0.8}
                className="h-1 bg-blue-500 dark:bg-blue-400 rounded-full"
              />
              <motion.div
                initial="hidden"
                animate={isContentInView ? "visible" : "hidden"}
                variants={contentLineTextVariants}
                custom={1.2}
                className="mt-4 text-base md:text-lg font-semibold"
              >
                Ideate & Design
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Audience Targeting & Engagement */}
        <motion.div
          className="mb-16 md:mb-20 grid md:grid-cols-2 gap-10 md:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.div className="md:order-2" variants={textItemVariants}>
            <h3 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-6 leading-tight font-display">Audience Targeting & Engagement</h3>
            <p className="text-lg dark:text-gray-300 mb-4">
              Connecting with the right audience is crucial for social media success. We employ sophisticated **audience targeting** methodologies, leveraging demographic, psychographic, and behavioral data to pinpoint your ideal customer profiles. Beyond just reaching them, we focus on fostering genuine **engagement** through interactive content, active community management, and personalized communication strategies that cultivate a loyal and active following around your brand.
            </p>
            <ul className="list-disc list-inside text-lg dark:text-gray-300 space-y-2">
              <li><strong className="text-blue-600 dark:text-blue-300">Precision Audience Segmentation:</strong> Identifying and segmenting your target audience with laser-like accuracy for tailored messaging.</li>
              <li><strong className="text-blue-600 dark:text-blue-300">Proactive Community Management:</strong> Monitoring conversations, responding to comments and messages promptly, and fostering a positive brand environment.</li>
              <li><strong className="text-blue-600 dark:text-blue-300">Influencer Marketing & Collaborations:</strong> Strategically partnering with relevant influencers to amplify your brand message and reach new, engaged audiences.</li>
            </ul>
          </motion.div>
          <motion.div
            ref={audienceRef}
            className="md:order-1 relative w-full h-64 md:h-80 bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-700 dark:to-pink-800 rounded-xl shadow-xl dark:shadow-2xl flex items-center justify-center text-white text-2xl font-bold overflow-hidden"
            initial="hidden"
            animate={audienceControls}
            variants={audienceVisualVariants}
            whileHover={{ scale: 1.02, rotate: -1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="absolute top-4 left-4 text-sm font-normal opacity-80">Connect & Grow</span>
            {/* Custom Animated Icon for Audience Targeting */}
            <motion.div
              className="flex items-center justify-center relative w-full h-full"
              initial="hidden"
              animate={isAudienceInView ? "visible" : "hidden"}
              variants={{ visible: { opacity: 1, transition: { delay: 0.3 } } }}
            >
              <motion.div
                className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full bg-blue-500 dark:bg-blue-400 opacity-60"
                animate={isAudienceInView ? "visible" : "hidden"}
                variants={audiencePulseVariants}
                custom={isMobile}
              />
              <motion.div
                className="absolute w-20 h-20 md:w-28 md:h-28 rounded-full bg-blue-600 dark:bg-blue-500 opacity-80"
                animate={isAudienceInView ? "visible" : "hidden"}
                variants={{
                  visible: (isMobile: boolean) => ({
                    scale: [0.9, 1.03, 0.9],
                    transition: { repeat: Infinity, duration: isMobile ? 1.7 : 2.2, ease: "easeOut", delay: 0.1 }
                  })
                }}
                custom={isMobile}
              />
              <motion.div
                initial="hidden"
                animate={isAudienceInView ? ["visible", "float"] : "hidden"}
                variants={audienceMainIconVariants}
              >
                <FontAwesomeIcon icon={faUsers} className="relative z-10 text-white text-5xl md:text-6xl" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isAudienceInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute bottom-8 text-white text-sm md:text-base font-medium"
              >
                <FontAwesomeIcon icon={faLightbulb} className="mr-2 text-yellow-300" /> Insightful Targeting
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Analytics & Reporting */}
        <motion.div
          className="mb-16 md:mb-20 grid md:grid-cols-2 gap-10 md:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.div variants={textItemVariants}>
            <h3 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-6 leading-tight font-display">Analytics & Reporting</h3>
            <p className="text-lg dark:text-gray-300 mb-4">
              Data is at the heart of our social media strategy. We provide **comprehensive analytics and transparent reporting** that track the performance of your campaigns against key objectives. Our analysis goes beyond surface-level metrics, delving into actionable insights that inform future strategies and optimize your return on investment. You'll receive regular, easy-to-understand reports detailing progress, audience behavior, and areas for continuous improvement.
            </p>
            <ul className="list-disc list-inside text-lg dark:text-gray-300 space-y-2">
              <li><strong className="text-blue-600 dark:text-blue-300">In-Depth Performance Tracking:</strong> Monitoring and analyzing critical metrics such as reach, impressions, engagement rates, website clicks, conversions, and cost-per-acquisition.</li>
              <li><strong className="text-blue-600 dark:text-blue-300">Customized Reporting Dashboards:</strong> Providing clear and visually appealing reports tailored to your specific business goals and KPIs.</li>
              <li><strong className="text-blue-600 dark:text-blue-300">Actionable Insights & Recommendations:</strong> Translating data into strategic recommendations to refine your campaigns, optimize content, and improve overall performance.</li>
            </ul>
          </motion.div>
          <motion.div
            ref={analyticsRef}
            className="relative w-full h-64 md:h-80 bg-gradient-to-r from-cyan-300 to-blue-300 dark:from-cyan-700 dark:to-blue-800 rounded-xl shadow-xl dark:shadow-2xl flex items-center justify-center text-white text-2xl font-bold overflow-hidden"
            initial="hidden"
            animate={analyticsControls}
            variants={analyticsVisualVariants}
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="absolute top-4 left-4 text-sm font-normal opacity-80">Data-Driven Growth</span>
            {/* Custom Animated Chart for Analytics */}
            <svg className="absolute inset-0 w-full h-full p-8" viewBox="0 0 100 100">
              {/* Base grid lines (optional, for visual context) */}
              <line x1="10" y1="90" x2="90" y2="90" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
              <line x1="10" y1="90" x2="10" y2="10" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />

              {/* Animated Line Graph */}
              <motion.path
                d="M 15 80 Q 30 50, 45 60 T 75 30 Q 80 20, 90 25"
                fill="none"
                stroke="url(#gradientChart)"
                strokeWidth="3"
                strokeLinecap="round"
                initial="hidden"
                animate={isAnalyticsInView ? "visible" : "hidden"}
                variants={analyticsChartVariants}
              />

              {/* SVG Gradient Definition */}
              <defs>
                <linearGradient id="gradientChart" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Upward Arrow (positioned over SVG) */}
            <motion.div
              className="absolute top-1/4 right-1/4 text-blue-400 text-3xl md:text-4xl z-20"
              initial="hidden"
              animate={isAnalyticsInView ? ["visible", "bounce"] : "hidden"}
              variants={analyticsArrowVariants}
            >
              <FontAwesomeIcon icon={faArrowUp} />
            </motion.div>

            {/* Campaign Stat Reveal - Overlay on SVG */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10"
              initial="hidden"
              animate={statControls}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2, type: "spring" } }
              }}
            >
              <span id="engagement-stat" className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg dark:text-blue-200">0%</span>
              <span className="text-xl md:text-2xl text-white opacity-90 dark:text-blue-100">Engagement Increase</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Email Marketing Campaigns */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.div className="md:order-2" variants={textItemVariants}>
            <h3 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-6 leading-tight font-display">Email Marketing Campaigns</h3>
            <p className="text-lg dark:text-gray-300 mb-4">
              Harness the power of direct communication with targeted **email marketing campaigns**. We craft compelling email sequences, from engaging newsletters to automated lead nurturing flows, designed to connect with your audience on a personal level, drive conversions, and foster lasting customer relationships. Our strategies encompass list segmentation, personalized content creation, and rigorous A/B testing to maximize the effectiveness of every email sent.
            </p>
            <ul className="list-disc list-inside text-lg dark:text-gray-300 space-y-2">
              <li><strong className="text-blue-600 dark:text-blue-300">Strategic Email Planning:</strong> Developing targeted email campaigns aligned with your marketing objectives and audience segments.</li>
              <li><strong className="text-blue-600 dark:text-blue-300">Compelling Email Content Creation:</strong> Writing engaging and persuasive email copy, designing visually appealing templates, and personalizing content for maximum impact.</li>
              <li><strong className="text-blue-600 dark:text-blue-300">Email Automation & Segmentation:</strong> Setting up sophisticated automated email workflows for lead nurturing, onboarding, and customer retention, leveraging list segmentation for personalized messaging.</li>
              <li><strong className="text-blue-600 dark:text-blue-300">Performance Analysis & Optimization:</strong> Tracking key email marketing metrics suchs as open rates, click-through rates, and conversions, and conducting A/B tests to refine campaign performance.</li>
            </ul>
          </motion.div>
          <motion.div
            ref={emailRef}
            className="md:order-1 relative w-full h-64 md:h-80 bg-gradient-to-r from-pink-300 to-blue-300 dark:from-pink-700 dark:to-blue-800 rounded-xl shadow-xl dark:shadow-2xl flex items-center justify-center overflow-hidden"
            initial="hidden"
            animate={emailControls}
            variants={emailVisualVariants}
            whileHover={{ scale: 1.02, rotate: -1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="absolute top-4 left-4 text-sm font-normal opacity-80">Direct Impact</span>
            {/* Custom Animated Icon for Email Marketing */}
            <motion.div
              className="flex items-center justify-center w-full h-full"
              initial="hidden"
              animate={isEmailInView ? ["visible", "float"] : "hidden"}
              variants={emailEnvelopeVariants}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-32 h-32 md:w-48 md:h-48 text-white opacity-80 dark:brightness-125 dark:text-gray-300"
              />
              <motion.span
                className="absolute right-1/4 top-1/4 text-white text-2xl"
                initial="hidden"
                animate={isEmailInView ? ["visible", "jiggle"] : "hidden"}
                variants={emailSubIconVariants}
                custom={isMobile ? 0.6 : 0.8}
              >
                <FontAwesomeIcon icon={faLightbulb} className="text-yellow-300" />
              </motion.span>
              <motion.span
                className="absolute left-1/4 bottom-1/4 text-white text-xl"
                initial="hidden"
                animate={isEmailInView ? ["visible", "jiggle"] : "hidden"}
                variants={emailSubIconVariants}
                custom={isMobile ? 0.7 : 1}
              >
                <FontAwesomeIcon icon={faArrowUp} className="text-green-300" />
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default SocialMediaMarketing;