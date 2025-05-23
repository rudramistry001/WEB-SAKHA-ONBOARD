import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, type Variants } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCogs, faRocket, faUsers, faCode, faChartLine, faShieldAlt, faEnvelope, faBrain } from '@fortawesome/free-solid-svg-icons';

// Define variants for animation
const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.2
        }
    }
};

const textItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const n8nNodeVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: i * 0.2 + 0.5 // Staggered delay for nodes
        }
    })
};

const n8nPathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
        pathLength: 1,
        opacity: 1,
        transition: {
            duration: 1.5,
            ease: "easeInOut",
            delay: i * 0.3 + 1 // Staggered delay for paths after nodes
        }
    })
};

// Helper component to render FontAwesome icons as SVG paths
// This allows for better integration and styling within the SVG
const SvgFontAwesomeIcon: React.FC<{ icon: any; x: number; y: number; size: number; color: string; filter?: string }> = ({ icon, x, y, size, color, filter }) => {
    // FontAwesome SVG path data is typically in icon[4]
    const pathData = icon.icon[4];
    // Calculate scale to fit the icon within the desired size
    const iconWidth = icon.icon[0];
    const iconHeight = icon.icon[1];
    const scale = size / Math.max(iconWidth, iconHeight);

    // Adjust x, y to center the icon relative to its new size
    const transformX = x - (iconWidth * scale) / 2;
    const transformY = y - (iconHeight * scale) / 2;

    return (
        <path
            d={pathData}
            fill={color}
            transform={`translate(${transformX}, ${transformY}) scale(${scale})`}
            style={{ filter: filter }}
        />
    );
};

const AutomationPhilosophy: React.FC = () => {
    const n8nRef = useRef(null);
    const philosophyRef = useRef(null);

    const isN8nInView = useInView(n8nRef, { once: true, amount: 0.3 });
    const isPhilosophyInView = useInView(philosophyRef, { once: true, amount: 0.3 });

    const n8nControls = useAnimation();
    const philosophyControls = useAnimation();

    useEffect(() => {
        if (isN8nInView) {
            n8nControls.start("visible");
        }
    }, [isN8nInView, n8nControls]);

    useEffect(() => {
        if (isPhilosophyInView) {
            philosophyControls.start("visible");
        }
    }, [isPhilosophyInView, philosophyControls]);

    // Handler for button click to navigate
    const handleContactClick = () => {
        window.location.href = '/contact-us';
    };

    return (
        <section id="automation-philosophy" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-gray-900 dark:to-blue-950 text-gray-800 dark:text-gray-200 overflow-hidden relative font-sans">
            <div className="container mx-auto px-4">
                {/* Automation & Integration (n8n) */}
                <motion.div
                    ref={n8nRef}
                    className="mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-purple-900 rounded-3xl shadow-2xl dark:shadow-inner-xl p-6 sm:p-8 lg:p-12 border border-gray-200 dark:border-gray-700"
                    initial="hidden"
                    animate={n8nControls} // Use n8nControls here
                    variants={sectionVariants}
                >
                    <motion.div variants={textItemVariants}>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-purple-700 dark:text-purple-400 mb-6 leading-tight font-display drop-shadow-sm">
                            Seamless Automation & Integration with <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-700 dark:from-pink-400 dark:to-purple-500">n8n</span>
                        </h3>
                        <p className="text-lg sm:text-xl dark:text-gray-300 mb-6 leading-relaxed">
                            Beyond core development, we empower your systems with intelligent automation and seamless integrations using **n8n**. This powerful workflow automation tool allows us to connect various applications and services, automate repetitive tasks, and build complex, event-driven workflows that streamline your operations and enhance efficiency without extensive custom coding.
                        </p>
                        <ul className="list-disc list-inside text-lg sm:text-xl dark:text-gray-300 space-y-3 pl-4">
                            <li><strong className="text-purple-600 dark:text-purple-300">Custom Workflow Automation:</strong> Designing and implementing automated workflows for marketing, sales, internal operations, and more.</li>
                            <li><strong className="text-purple-600 dark:text-purple-300">Third-Party Service Integration:</strong> Connecting your applications with popular services like CRM, email platforms, payment gateways, and analytics tools.</li>
                            <li><strong className="text-purple-600 dark:text-purple-300">Data Synchronization & Transformation:</strong> Ensuring data consistency across systems and transforming data as needed for different platforms.</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className="relative w-full h-72 sm:h-80 md:h-96 bg-gradient-to-br from-purple-400 to-pink-500 dark:from-purple-800 dark:to-pink-900 rounded-2xl shadow-xl dark:shadow-2xl flex items-center justify-center overflow-hidden border border-purple-300 dark:border-purple-600"
                        variants={textItemVariants}
                        whileHover={{ scale: 1.03, rotate: 1.5, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
                        transition={{ duration: 0.4 }}
                    >
                        <span className="absolute top-4 left-4 text-sm font-normal opacity-80 text-white/80">Automate & Connect</span>
                        {/* n8n Workflow Visualization */}
                        <svg className="absolute inset-0 w-full h-full p-8" viewBox="0 0 100 100">
                            <defs>
                                <radialGradient id="nodeGradient1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                                    <stop offset="0%" stopColor="#FDE68A" />
                                    <stop offset="100%" stopColor="#FBBF24" />
                                </radialGradient>
                                <radialGradient id="nodeGradient2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                                    <stop offset="0%" stopColor="#A78BFA" />
                                    <stop offset="100%" stopColor="#8B5CF6" />
                                </radialGradient>
                                <radialGradient id="nodeGradient3" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                                    <stop offset="0%" stopColor="#6EE7B7" />
                                    <stop offset="100%" stopColor="#34D399" />
                                </radialGradient>
                                {/* Corrected glow filter definition */}
                                <filter id="glow">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
                                    <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10" result="glow" />
                                    <feMerge>
                                        <feMergeNode in="glow"/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                            </defs>
                            {/* Nodes */}
                            <motion.circle cx="25" cy="25" r="8" fill="url(#nodeGradient1)" initial="hidden" animate={n8nControls} variants={n8nNodeVariants} custom={0} style={{ filter: 'url(#glow)' }} />
                            <motion.circle cx="75" cy="50" r="8" fill="url(#nodeGradient2)" initial="hidden" animate={n8nControls} variants={n8nNodeVariants} custom={1} style={{ filter: 'url(#glow)' }} />
                            <motion.circle cx="25" cy="75" r="8" fill="url(#nodeGradient3)" initial="hidden" animate={n8nControls} variants={n8nNodeVariants} custom={2} style={{ filter: 'url(#glow)' }} />

                            {/* Paths */}
                            <motion.path
                                d="M 33 25 H 67"
                                fill="none"
                                stroke="#FACC15"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeDasharray="5 5"
                                initial="hidden"
                                animate={n8nControls}
                                variants={n8nPathVariants}
                                custom={0}
                                style={{ filter: 'url(#glow)' }}
                            />
                            <motion.path
                                d="M 75 58 V 67 C 75 70, 70 75, 67 75 H 33"
                                fill="none"
                                stroke="#818CF8"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeDasharray="5 5"
                                initial="hidden"
                                animate={n8nControls}
                                variants={n8nPathVariants}
                                custom={1}
                                style={{ filter: 'url(#glow)' }}
                            />

                            {/* Icons within nodes (rendered as SVG paths) */}
                            <motion.g initial="hidden" animate={n8nControls} variants={n8nNodeVariants} custom={0}>
                                <SvgFontAwesomeIcon icon={faLightbulb} x={25} y={25} size={10} color="white" filter="url(#glow)" />
                            </motion.g>
                            <motion.g initial="hidden" animate={n8nControls} variants={n8nNodeVariants} custom={1}>
                                <SvgFontAwesomeIcon icon={faCogs} x={75} y={50} size={10} color="white" filter="url(#glow)" />
                            </motion.g>
                            <motion.g initial="hidden" animate={n8nControls} variants={n8nNodeVariants} custom={2}>
                                <SvgFontAwesomeIcon icon={faRocket} x={25} y={75} size={10} color="white" filter="url(#glow)" />
                            </motion.g>
                        </svg>
                    </motion.div>
                </motion.div>

                {/* Development Philosophy */}
                <motion.div
                    ref={philosophyRef}
                    initial="hidden"
                    animate={philosophyControls} // Use philosophyControls here
                    variants={sectionVariants}
                    className="mb-16 md:mb-24"
                >
                    <motion.h3 variants={textItemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-gray-300 mb-10 text-center leading-tight font-display drop-shadow-sm">
                        Our Development Philosophy <FontAwesomeIcon icon={faBrain} className="ml-3 text-gray-600 dark:text-gray-400" />
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <motion.div
                            variants={textItemVariants}
                            className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-xl border-b-6 border-indigo-400 dark:border-indigo-600 transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
                        >
                            <FontAwesomeIcon icon={faUsers} className="text-indigo-500 text-5xl mb-4 drop-shadow-lg" />
                            <h4 className="font-bold text-xl sm:text-2xl text-gray-800 dark:text-gray-200">Agile Methodologies</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-2">Iterative development for flexibility, continuous feedback, and rapid adaptation to evolving requirements.</p>
                        </motion.div>
                        <motion.div
                            variants={textItemVariants}
                            className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-xl border-b-6 border-green-400 dark:border-green-600 transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
                        >
                            <FontAwesomeIcon icon={faCode} className="text-green-500 text-5xl mb-4 drop-shadow-lg" />
                            <h4 className="font-bold text-xl sm:text-2xl text-gray-800 dark:text-gray-200">Clean Code & Maintainability</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-2">Writing readable, efficient, well-tested, and thoroughly documented code ensures long-term project health and ease of future enhancements.</p>
                        </motion.div>
                        <motion.div
                            variants={textItemVariants}
                            className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-xl border-b-6 border-yellow-400 dark:border-yellow-600 transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
                        >
                            <FontAwesomeIcon icon={faChartLine} className="text-yellow-500 text-5xl mb-4 drop-shadow-lg" />
                            <h4 className="font-bold text-xl sm:text-2xl text-gray-800 dark:text-gray-200">Scalability & Performance</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-2">Architecting and building systems designed to grow seamlessly with your business, handling increasing user loads and data volumes efficiently.</p>
                        </motion.div>
                        <motion.div
                            variants={textItemVariants}
                            className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-xl border-b-6 border-red-400 dark:border-red-600 transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
                        >
                            <FontAwesomeIcon icon={faShieldAlt} className="text-red-500 text-5xl mb-4 drop-shadow-lg" />
                            <h4 className="font-bold text-xl sm:text-2xl text-gray-800 dark:text-gray-200">Security Best Practices</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-2">Prioritizing and implementing robust security measures throughout the development lifecycle to protect your valuable data and users from threats.</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="text-center mt-20 mb-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                        Ready to transform your ideas into powerful software solutions?
                    </p>
                    <motion.button
                        className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-bold text-xl rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 group"
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(99, 102, 241, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleContactClick} // Added onClick handler
                    >
                        <FontAwesomeIcon icon={faEnvelope} className="mr-4 text-white group-hover:animate-pulse" />
                        Let's Talk About Your Project
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}

export default AutomationPhilosophy;
