import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation, type Variants } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLightbulb, faPenNib, faUsers, faEnvelope, faArrowUp } from '@fortawesome/free-solid-svg-icons';

// Define Framer Motion Variants for various animations (largely unchanged)
const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: 0.15
        }
    }
};

const textItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const platformIconVariants: Variants = {
    hidden: { scale: 0, opacity: 0, rotate: -180 },
    visible: {
        scale: 1,
        opacity: 1,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 250,
            damping: 12,
            duration: 0.6
        }
    }
};

const desktopStageVariants: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.25,
            duration: 0.7,
            ease: "easeOut"
        }
    })
};

const mobileStageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 10
        }
    })
};

// New variants for the custom animations - adjusted for mobile considerations
const contentIconVariants: Variants = {
    hidden: { scale: 0, opacity: 0, rotate: -90 },
    visible: {
        scale: 1,
        opacity: 1,
        rotate: 0,
        transition: { type: "spring", stiffness: 150, damping: 10, delay: 0.5 }
    }
};

const audiencePulseVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0.5 },
    visible: (isMobile: boolean) => ({
        scale: [0.8, 1.05, 1], // Pulse effect
        opacity: [0.5, 0.9, 0.6],
        transition: {
            scale: { repeat: Infinity, duration: isMobile ? 1.5 : 2, ease: "easeOut" }, // Faster pulse on mobile
            opacity: { repeat: Infinity, duration: isMobile ? 1.5 : 2, ease: "easeOut" }
        }
    })
};

const analyticsChartVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
            duration: 1.5,
            ease: "easeOut",
            delay: 0.7 // Delay after stat number starts
        }
    }
};

const emailFlyInVariants: Variants = {
    hidden: { x: -100, opacity: 0, rotateY: -90 },
    visible: {
        x: 0,
        opacity: 1,
        rotateY: 0,
        transition: { type: "spring", stiffness: 120, damping: 15, delay: 0.5 }
    }
};

// Variants for the smaller icons in email section
const emailIdeaIconVariants: Variants = {
    hidden: { opacity: 0, x: -20, y: 10 },
    visible: (isMobile: boolean) => ({
        opacity: 1, x: 0, y: 0,
        transition: { delay: isMobile ? 0.6 : 0.8, duration: 0.5 } // Slightly faster on mobile
    })
};

const emailArrowIconVariants: Variants = {
    hidden: { opacity: 0, x: 20, y: -10 },
    visible: (isMobile: boolean) => ({
        opacity: 1, x: 0, y: 0,
        transition: { delay: isMobile ? 0.7 : 1, duration: 0.5 } // Slightly faster on mobile
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


    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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


    // Function to animate number for "Campaign Stat" (same as before)
    const animateNumber = (target: number, duration: number, elementId: string) => {
        let current = 0;
        const increment = target / (duration * 60);
        const element = document.getElementById(elementId);
        if (!element) return;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.innerText = `${Math.floor(current)}%`;
        }, 1000 / 60);
    };

    useEffect(() => {
        if (isAnalyticsInView) {
            animateNumber(80, 2, 'engagement-stat'); // Changed to 80%
        }
    }, [isAnalyticsInView]);


    return (
        <section id="social-media-marketing" className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-blue-950 text-gray-800 dark:text-gray-200 overflow-hidden relative font-sans">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold text-center text-purple-800 dark:text-purple-400 mb-12 md:mb-16 leading-tight font-display"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    Social Media Marketing & Campaigns
                </motion.h2>

                {/* Campaign Lifecycle Visual (same as before) */}
                <div ref={campaignLifecycleRef} className="mb-16 md:mb-20 flex flex-col items-center">
                    <motion.h3
                        className="text-2xl md:text-3xl font-bold text-purple-700 dark:text-blue-300 mb-8 text-center font-display"
                        initial={{ opacity: 0, y: 20 }}
                        animate={campaignControls}
                        variants={textItemVariants}
                    >
                        Our Campaign Journey
                    </motion.h3>
                    <div className="relative w-full max-w-4xl h-auto">
                        <div className="hidden md:flex justify-between items-center text-lg font-semibold text-gray-700 dark:text-gray-300 w-full mb-4">
                            <motion.div initial={{ opacity: 0 }} animate={campaignControls} variants={textItemVariants} className="flex-1 text-center">Strategy</motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={campaignControls} variants={textItemVariants} className="flex-1 text-center">Content Creation</motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={campaignControls} variants={textItemVariants} className="flex-1 text-center">Deployment</motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={campaignControls} variants={textItemVariants} className="flex-1 text-center">Analysis & Optimization</motion.div>
                        </div>
                        <div className="relative flex flex-col md:flex-row justify-between items-stretch md:items-center w-full">
                            <div className="absolute hidden md:block top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-600 dark:to-blue-600 -translate-y-1/2"></div>
                            {['💡', '✍️', '🚀', '📈'].map((icon, index) => (
                                <motion.div
                                    key={index}
                                    className={`relative z-10 p-4 md:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-xl dark:border dark:border-gray-700 ${index < 3 ? 'mb-6 md:mb-0 md:mr-4' : ''} flex-1 text-center
                                                border-b-4 ${['border-purple-500', 'border-blue-500', 'border-green-500', 'border-yellow-500'][index]}
                                                transform hover:-translate-y-2 transition-transform duration-300`}
                                    initial="hidden"
                                    animate={campaignControls}
                                    variants={isMobile ? mobileStageVariants : desktopStageVariants}
                                    custom={index}
                                    whileHover={{ scale: 1.05, boxShadow: isMobile ? "0px 5px 10px rgba(0,0,0,0.1)" : "0px 10px 20px rgba(0,0,0,0.1)", transition: { duration: 0.3 } }}
                                >
                                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full ${['bg-purple-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'][index]} text-white flex items-center justify-center font-bold text-3xl mx-auto mb-4
                                                    ${isMobile ? '' : (index === 0 && 'shadow-glow-purple') || (index === 1 && 'shadow-glow-blue') || (index === 2 && 'shadow-glow-green') || (index === 3 && 'shadow-glow-yellow')}
                                                    dark:${['animate-pulse-glow-purple', 'animate-pulse-glow-blue', 'animate-pulse-glow-green', 'animate-pulse-glow-yellow'][index]}
                                                    `}>
                                        {icon}
                                    </div>
                                    <p className={`font-semibold text-lg md:text-xl ${['text-purple-800 dark:text-purple-300', 'text-blue-800 dark:text-blue-300', 'text-green-800 dark:text-green-300', 'text-yellow-800 dark:text-yellow-300'][index]}`}>
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

                {/* Social Media Campaign Management */}
                <motion.div
                    className="mb-16 md:mb-20 grid md:grid-cols-2 gap-10 md:gap-16 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={sectionVariants}
                >
                    <motion.div className="md:order-2" variants={textItemVariants}>
                        <h3 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-6 leading-tight font-display">Social Media Campaign Management</h3>
                        <p className="text-lg dark:text-gray-300 mb-4">
                            Our expert team takes the reins of your social media presence, orchestrating campaigns that resonate with your target audience and drive tangible results. From initial conceptualization to daily execution and meticulous monitoring, we ensure every aspect of your social media strategy is handled with precision and care. We focus on creating engaging content, fostering community interaction, and leveraging data-driven insights to optimize your campaign performance continuously.
                        </p>
                        <ul className="list-disc list-inside text-lg dark:text-gray-300 space-y-2">
                            <li><strong className="text-blue-600 dark:text-blue-300">Strategic Planning:</strong> Developing comprehensive social media strategies aligned with your business objectives.</li>
                            <li><strong className="text-blue-600 dark:text-blue-300">Content Calendar & Creation:</strong> Planning and producing high-quality, platform-specific content that captivates your audience.</li>
                            <li><strong className="text-blue-600 dark:text-blue-300">Community Engagement:</strong> Actively managing interactions, responding to inquiries, and building a loyal online community.</li>
                            <li><strong className="text-blue-600 dark:text-blue-300">Performance Monitoring & Reporting:</strong> Tracking key metrics and providing regular reports on campaign progress and ROI.</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        ref={platformIconsRef}
                        className="md:order-1 flex flex-wrap justify-center md:justify-start gap-6 md:gap-8"
                        initial="hidden"
                        animate={platformControls}
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: isMobile ? 0.08 : 0.12
                                }
                            }
                        }}
                    >
                        {[
                            { icon: faFacebookF, bg: 'bg-blue-600', hoverBg: 'hover:bg-blue-700', brand: 'blue' },
                            { icon: faInstagram, bg: 'bg-pink-600', hoverBg: 'hover:bg-pink-700', brand: 'pink' },
                            { icon: faLinkedinIn, bg: 'bg-blue-700', hoverBg: 'hover:bg-blue-800', brand: 'blue' },
                            { icon: faXTwitter, bg: 'bg-black', hoverBg: 'hover:bg-gray-800', brand: 'gray' },
                            { icon: faYoutube, bg: 'bg-red-600', hoverBg: 'hover:bg-red-700', brand: 'red' },
                        ].map((platform, index) => (
                            <motion.div
                                key={index}
                                className={`w-20 h-20 md:w-24 md:h-24 rounded-full ${platform.bg} text-white flex items-center justify-center text-3xl md:text-4xl
                                            shadow-lg transition-all duration-300 ${platform.hoverBg} cursor-pointer
                                            dark:shadow-none dark:animate-pulse-glow-${platform.brand}
                                            `}
                                variants={platformIconVariants}
                                whileHover={{ scale: 1.15, rotate: 10, transition: { type: "spring", stiffness: 300, damping: 15 } }}
                            >
                                <FontAwesomeIcon icon={platform.icon} />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Content Strategy & Creation */}
                <motion.div
                    ref={contentRef}
                    className="mb-16 md:mb-20 grid md:grid-cols-2 gap-10 md:gap-16 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={sectionVariants}
                >
                    <motion.div variants={textItemVariants}>
                        <h3 className="text-3xl md:text-4xl font-bold text-green-700 dark:text-green-400 mb-6 leading-tight font-display">Content Strategy & Creation</h3>
                        <p className="text-lg dark:text-gray-300 mb-4">
                            Captivating content is the cornerstone of successful social media engagement. Our team of creative professionals specializes in developing a holistic **content strategy** that aligns with your brand narrative and resonates deeply with your target audience. We meticulously plan, produce, and curate a diverse range of content formats, including visually stunning graphics, compelling videos, informative blog posts, and interactive stories, all tailored to the unique nuances of each social media platform.
                        </p>
                        <ul className="list-disc list-inside text-lg dark:text-gray-300 space-y-2">
                            <li><strong className="text-green-600 dark:text-green-300">Strategic Content Planning:</strong> Defining content themes, formats, and distribution schedules based on audience insights and campaign goals.</li>
                            <li><strong className="text-green-600 dark:text-green-300">High-Quality Content Production:</strong> Crafting visually appealing and engaging content, from professional photography and videography to expertly written copy.</li>
                            <li><strong className="text-green-600 dark:text-green-300">Platform-Optimized Content:</strong> Tailoring content specifications and creative approaches to maximize impact on Facebook, Instagram, LinkedIn, X/Twitter, YouTube, and other relevant channels.</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className="relative w-full h-64 md:h-80 bg-gradient-to-r from-green-300 to-teal-300 dark:from-green-700 dark:to-teal-800 rounded-xl shadow-xl dark:shadow-2xl flex items-center justify-center text-white text-2xl font-bold overflow-hidden"
                        variants={textItemVariants}
                        whileHover={{ scale: 1.02, rotate: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className="absolute top-4 left-4 text-sm font-normal opacity-80">Creative Storytelling</span>
                        {/* Custom Animated Icon for Content Strategy */}
                        <motion.div
                            className="flex flex-col items-center justify-center w-full h-full text-green-500 dark:text-green-300"
                            initial="hidden"
                            animate={contentControls}
                            variants={contentIconVariants}
                        >
                            <FontAwesomeIcon icon={faPenNib} className="text-6xl md:text-7xl mb-4" />
                            <motion.div
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: '60%' }}
                                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                                className="h-1 bg-green-500 dark:bg-green-400 rounded-full"
                            />
                            <motion.div
                                initial={{ opacity: 0, scaleY: 0 }}
                                animate={{ opacity: 1, scaleY: 1 }}
                                transition={{ delay: 1.2, duration: 0.6, type: "spring", stiffness: 100 }}
                                className="mt-4 text-base md:text-lg font-semibold"
                            >
                                Ideate & Design
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Audience Targeting & Engagement */}
                <motion.div
                    ref={audienceRef}
                    className="mb-16 md:mb-20 grid md:grid-cols-2 gap-10 md:gap-16 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={sectionVariants}
                >
                    <motion.div className="md:order-2" variants={textItemVariants}>
                        <h3 className="text-3xl md:text-4xl font-bold text-purple-700 dark:text-purple-400 mb-6 leading-tight font-display">Audience Targeting & Engagement</h3>
                        <p className="text-lg dark:text-gray-300 mb-4">
                            Connecting with the right audience is crucial for social media success. We employ sophisticated **audience targeting** methodologies, leveraging demographic, psychographic, and behavioral data to pinpoint your ideal customer profiles. Beyond just reaching them, we focus on fostering genuine **engagement** through interactive content, active community management, and personalized communication strategies that cultivate a loyal and active following around your brand.
                        </p>
                        <ul className="list-disc list-inside text-lg dark:text-gray-300 space-y-2">
                            <li><strong className="text-purple-600 dark:text-purple-300">Precision Audience Segmentation:</strong> Identifying and segmenting your target audience with laser-like accuracy for tailored messaging.</li>
                            <li><strong className="text-purple-600 dark:text-purple-300">Proactive Community Management:</strong> Monitoring conversations, responding to comments and messages promptly, and fostering a positive brand environment.</li>
                            <li><strong className="text-purple-600 dark:text-purple-300">Influencer Marketing & Collaborations:</strong> Strategically partnering with relevant influencers to amplify your brand message and reach new, engaged audiences.</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className="md:order-1 relative w-full h-64 md:h-80 bg-gradient-to-r from-pink-300 to-purple-300 dark:from-pink-700 dark:to-purple-800 rounded-xl shadow-xl dark:shadow-2xl flex items-center justify-center text-white text-2xl font-bold overflow-hidden"
                        variants={textItemVariants}
                        whileHover={{ scale: 1.02, rotate: -1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className="absolute top-4 left-4 text-sm font-normal opacity-80">Connect & Grow</span>
                        {/* Custom Animated Icon for Audience Targeting */}
                        <motion.div
                            className="flex items-center justify-center relative w-full h-full"
                            initial={{ opacity: 0 }}
                            animate={audienceControls}
                            variants={{ visible: { opacity: 1, transition: { delay: 0.3 } } }}
                        >
                            <motion.div
                                className="absolute w-28 h-28 md:w-36 md:h-36 rounded-full bg-purple-500 dark:bg-purple-400 opacity-60"
                                animate={isAudienceInView ? "visible" : "hidden"}
                                variants={audiencePulseVariants}
                                custom={isMobile}
                            />
                            <motion.div
                                className="absolute w-20 h-20 md:w-28 md:h-28 rounded-full bg-purple-600 dark:bg-purple-500 opacity-80"
                                animate={isAudienceInView ? "visible" : "hidden"}
                                variants={{
                                    visible: (isMobile: boolean) => ({
                                        scale: [0.9, 1.03, 0.9],
                                        transition: { repeat: Infinity, duration: isMobile ? 1.7 : 2.2, ease: "easeOut", delay: 0.1 }
                                    })
                                }}
                                custom={isMobile}
                            />
                            <FontAwesomeIcon icon={faUsers} className="relative z-10 text-white text-5xl md:text-6xl" />
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
                    ref={analyticsRef}
                    className="mb-16 md:mb-20 grid md:grid-cols-2 gap-10 md:gap-16 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={sectionVariants}
                >
                    <motion.div variants={textItemVariants}>
                        <h3 className="text-3xl md:text-4xl font-bold text-yellow-700 dark:text-yellow-400 mb-6 leading-tight font-display">Analytics & Reporting</h3>
                        <p className="text-lg dark:text-gray-300 mb-4">
                            Data is at the heart of our social media strategy. We provide **comprehensive analytics and transparent reporting** that track the performance of your campaigns against key objectives. Our analysis goes beyond surface-level metrics, delving into actionable insights that inform future strategies and optimize your return on investment. You'll receive regular, easy-to-understand reports detailing progress, audience behavior, and areas for continuous improvement.
                        </p>
                        <ul className="list-disc list-inside text-lg dark:text-gray-300 space-y-2">
                            <li><strong className="text-yellow-600 dark:text-yellow-300">In-Depth Performance Tracking:</strong> Monitoring and analyzing critical metrics such as reach, impressions, engagement rates, website clicks, conversions, and cost-per-acquisition.</li>
                            <li><strong className="text-yellow-600 dark:text-yellow-300">Customized Reporting Dashboards:</strong> Providing clear and visually appealing reports tailored to your specific business goals and KPIs.</li>
                            <li><strong className="text-yellow-600 dark:text-yellow-300">Actionable Insights & Recommendations:</strong> Translating data into strategic recommendations to refine your campaigns, optimize content, and improve overall performance.</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className="relative w-full h-64 md:h-80 bg-gradient-to-r from-yellow-300 to-orange-300 dark:from-yellow-700 dark:to-orange-800 rounded-xl shadow-xl dark:shadow-2xl flex items-center justify-center text-white text-2xl font-bold overflow-hidden"
                        variants={textItemVariants}
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
                                d="M 15 80 Q 30 50, 45 60 T 75 30 Q 80 20, 90 25" // Adjusted path for a rising trend
                                fill="none"
                                stroke="url(#gradientChart)" // Using SVG gradient
                                strokeWidth="3"
                                strokeLinecap="round"
                                initial="hidden"
                                animate={isAnalyticsInView ? "visible" : "hidden"}
                                variants={analyticsChartVariants}
                            />

                            {/* SVG Gradient Definition */}
                            <defs>
                                <linearGradient id="gradientChart" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#84CC16" /> {/* Green */}
                                    <stop offset="100%" stopColor="#FACC15" /> {/* Yellow */}
                                </linearGradient>
                            </defs>

                            {/* Upward Arrow - Positioned to the right, smaller, and different color */}
                            <motion.g
                                initial={{ opacity: 0, x: 20 }} // Start slightly off to the right
                                animate={isAnalyticsInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 1.8, duration: 0.5, ease: "easeOut" }}
                            >
                                {/* Adjusted position within SVG, size (using font-size for FontAwesomeIcon), and color */}
                                <text x="80" y="30" className="text-3xl md:text-4xl" fill="#FFFFFF" textAnchor="middle" dominantBaseline="middle">
                                    <FontAwesomeIcon icon={faArrowUp} className="text-blue-400 text-2xl md:text-3xl" /> {/* Changed color to blue, reduced size */}
                                </text>
                            </motion.g>

                        </svg>

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
                            <span id="engagement-stat" className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg dark:text-yellow-200">0%</span>
                            <span className="text-xl md:text-2xl text-white opacity-90 dark:text-yellow-100">Engagement Increase</span>
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
                        <h3 className="text-3xl md:text-4xl font-bold text-red-700 dark:text-red-400 mb-6 leading-tight font-display">Email Marketing Campaigns</h3>
                        <p className="text-lg dark:text-gray-300 mb-4">
                            Harness the power of direct communication with targeted **email marketing campaigns**. We craft compelling email sequences, from engaging newsletters to automated lead nurturing flows, designed to connect with your audience on a personal level, drive conversions, and foster lasting customer relationships. Our strategies encompass list segmentation, personalized content creation, and rigorous A/B testing to maximize the effectiveness of every email sent.
                        </p>
                        <ul className="list-disc list-inside text-lg dark:text-gray-300 space-y-2">
                            <li><strong className="text-red-600 dark:text-red-300">Strategic Email Planning:</strong> Developing targeted email campaigns aligned with your marketing objectives and audience segments.</li>
                            <li><strong className="text-red-600 dark:text-red-300">Compelling Email Content Creation:</strong> Writing engaging and persuasive email copy, designing visually appealing templates, and personalizing content for maximum impact.</li>
                            <li><strong className="text-red-600 dark:text-red-300">Email Automation & Segmentation:</strong> Setting up sophisticated automated email workflows for lead nurturing, onboarding, and customer retention, leveraging list segmentation for personalized messaging.</li>
                            <li><strong className="text-red-600 dark:text-red-300">Performance Analysis & Optimization:</strong> Tracking key email marketing metrics suchs as open rates, click-through rates, and conversions, and conducting A/B tests to refine campaign performance.</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        ref={emailRef}
                        className="md:order-1 relative w-full h-64 md:h-80 bg-gradient-to-r from-red-300 to-orange-300 dark:from-red-700 dark:to-orange-800 rounded-xl shadow-xl dark:shadow-2xl flex items-center justify-center overflow-hidden"
                        variants={textItemVariants}
                        whileHover={{ scale: 1.02, rotate: -1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className="absolute top-4 left-4 text-sm font-normal opacity-80">Direct Impact</span>
                        {/* Custom Animated Icon for Email Marketing */}
                        <motion.div
                            className="flex items-center justify-center w-full h-full"
                            initial="hidden"
                            animate={emailControls}
                            variants={emailFlyInVariants}
                        >
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="w-32 h-32 md:w-48 md:h-48 text-white opacity-80 dark:brightness-125 dark:text-gray-300"
                            />
                            <motion.span
                                className="absolute right-1/4 top-1/4 text-white text-2xl"
                                initial="hidden"
                                animate={isEmailInView ? "visible" : "hidden"}
                                variants={emailIdeaIconVariants}
                                custom={isMobile}
                            >
                                <FontAwesomeIcon icon={faLightbulb} className="text-yellow-300" />
                            </motion.span>
                            <motion.span
                                className="absolute left-1/4 bottom-1/4 text-white text-xl"
                                initial="hidden"
                                animate={isEmailInView ? "visible" : "hidden"}
                                variants={emailArrowIconVariants}
                                custom={isMobile}
                            >
                                <FontAwesomeIcon icon={faArrowUp} className="text-green-300" />
                            </motion.span>
                        </motion.div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default SocialMediaMarketing;