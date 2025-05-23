import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, type Variants } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {type IconDefinition } from '@fortawesome/fontawesome-svg-core'; // Import IconDefinition type
import {
    faCode, faLaptopCode, faServer, faDatabase, faMobileAlt,
    faCogs, faShieldAlt, faRocket, faLightbulb, faUsers, faChartLine, faEnvelope,
     faBrain, faGears, faLayerGroup
} from '@fortawesome/free-solid-svg-icons';
import { faReact, faNodeJs, faPython, faJava, faAws, faDocker, faGitAlt } from '@fortawesome/free-brands-svg-icons';

// --- Framer Motion Variants ---

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: "easeOut",
            staggerChildren: 0.18
        }
    }
};

const textItemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

const layerVariants: Variants = {
    hidden: { opacity: 0, y: 80, scale: 0.9 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: i * 0.2,
            duration: 0.8,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    })
};

const techLogoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.6, y: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 150,
            damping: 12,
            duration: 0.6
        }
    }
};

const n8nPathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
        pathLength: 1,
        opacity: 1,
        transition: {
            duration: 2,
            ease: "easeInOut",
            delay: 0.8 + i * 0.4
        }
    })
};

const n8nNodeVariants: Variants = {
    hidden: { scale: 0, opacity: 0, rotate: -180 },
    visible: (i: number) => ({
        scale: 1,
        opacity: 1,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 250,
            damping: 12,
            delay: 1.2 + i * 0.4
        }
    })
};

const SoftwareDevelopment: React.FC = () => {
    const fullStackRef = useRef(null);
    const techStackRef = useRef(null);
    const n8nRef = useRef(null);
    const philosophyRef = useRef(null);

    const isFullStackInView = useInView(fullStackRef, { once: true, amount: 0.3 });
    const isTechStackInView = useInView(techStackRef, { once: true, amount: 0.3 });
    const isn8nInView = useInView(n8nRef, { once: true, amount: 0.3 });
    const isPhilosophyInView = useInView(philosophyRef, { once: true, amount: 0.3 });

    const fullStackControls = useAnimation();
    const techStackControls = useAnimation();
    const n8nControls = useAnimation();
    const philosophyControls = useAnimation();

    useEffect(() => {
        if (isFullStackInView) fullStackControls.start("visible");
    }, [isFullStackInView, fullStackControls]);

    useEffect(() => {
        if (isTechStackInView) techStackControls.start("visible");
    }, [isTechStackInView, techStackControls]);

    useEffect(() => {
        if (isn8nInView) n8nControls.start("visible");
    }, [isn8nInView, n8nControls]);

    useEffect(() => {
        if (isPhilosophyInView) philosophyControls.start("visible");
    }, [isPhilosophyInView, philosophyControls]);

    // Data for Technologies - Enhanced with more diverse icons and descriptions
    const technologies = [
        { name: "React.js", icon: faReact as IconDefinition, color: "#61DAFB", desc: "Dynamic User Interfaces" },
        { name: "Spring Boot", icon: faJava as IconDefinition, color: "#6DB33F", desc: "Enterprise Java Backend" },
        { name: "Node.js", icon: faNodeJs as IconDefinition, color: "#68A063", desc: "Scalable JavaScript Runtime" },
        { name: "Python", icon: faPython as IconDefinition, color: "#FFD43B", desc: "AI, ML & Backend Scripting" },
        { name: "Flutter", icon: faMobileAlt as IconDefinition, color: "#02569B", desc: "Native Mobile Apps (iOS/Android)" },
        { name: "PostgreSQL", icon: faDatabase as IconDefinition, color: "#336791", desc: "Advanced Relational Database" },
        { name: "AWS", icon: faAws as IconDefinition, color: "#FF9900", desc: "Cloud Infrastructure & Services" },
        { name: "Docker", icon: faDocker as IconDefinition, color: "#2496ED", desc: "Containerization & Deployment" },
        { name: "n8n", icon: faGears as IconDefinition, color: "#FF5C00", desc: "Workflow Automation & Integrations" },
        { name: "Git", icon: faGitAlt as IconDefinition, color: "#F05032", desc: "Version Control & Collaboration" },
        { name: "Microservices", icon: faCogs as IconDefinition, color: "#8B8B8B", desc: "Distributed System Architecture" },
        { name: "RESTful APIs", icon: faCode as IconDefinition, color: "#17A2B8", desc: "Interoperable Web Services" },
    ];

    return (
        <section id="software-development" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-950 dark:to-indigo-900 text-gray-800 dark:text-gray-200 overflow-hidden relative font-sans">
            {/* Background glowing elements for visual interest */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-yellow-300 dark:bg-yellow-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-indigo-800 dark:text-indigo-400 mb-12 md:mb-16 leading-tight font-display drop-shadow-md"
                    initial={{ opacity: 0, y: -70, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <FontAwesomeIcon icon={faCode} className="mr-4 text-indigo-600 dark:text-indigo-300 text-5xl sm:text-6xl drop-shadow-lg" />
                    Specialized Service: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Software Development</span>
                </motion.h2>

                {/* Full-Stack Overview - Enhanced */}
                <motion.div
                    ref={fullStackRef}
                    className="mb-16 md:mb-24 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl dark:shadow-inner-xl p-6 sm:p-8 lg:p-12 border border-gray-200 dark:border-gray-700"
                    initial="hidden"
                    animate={fullStackControls}
                    variants={sectionVariants}
                >
                    <motion.h3 variants={textItemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-700 dark:text-blue-400 mb-8 text-center leading-tight font-display drop-shadow-sm">
                        <FontAwesomeIcon icon={faLayerGroup} className="mr-3 text-blue-500 dark:text-blue-300 text-4xl" />
                        Full-Stack Development: From Concept to Deployment
                    </motion.h3>
                    <motion.p variants={textItemVariants} className="text-lg sm:text-xl dark:text-gray-300 mb-12 text-center max-w-4xl mx-auto leading-relaxed">
                        We craft complete digital solutions, meticulously covering every crucial layer of your application:
                        the engaging user-facing <strong className="text-blue-600 dark:text-blue-300 font-semibold">frontend</strong>, the powerful and efficient <strong className="text-green-600 dark:text-green-300 font-semibold">backend</strong> logic, and robust <strong className="text-indigo-600 dark:text-indigo-300 font-semibold">database</strong> management for seamless data flow.
                    </motion.p>

                    {/* Layered Stack Animation */}
                    <div className="relative flex flex-col items-center space-y-10 md:space-y-16 max-w-xl mx-auto pt-8">
                        {/* Connecting Lines SVG */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 200" style={{ pointerEvents: 'none' }}>
                            <defs>
                                <linearGradient id="fullStackGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#A78BFA" />
                                    <stop offset="50%" stopColor="#6366F1" />
                                    <stop offset="100%" stopColor="#4F46E5" />
                                </linearGradient>
                                <filter id="fullStackGlow">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                                <filter id="glow"> {/* Define the glow filter for n8n paths if not already global */}
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                            {/* Line 1: Frontend to Backend */}
                            <motion.path
                                d="M 50 50 V 90"
                                fill="none"
                                stroke="url(#fullStackGradient)"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeDasharray="12 8"
                                initial="hidden"
                                animate={fullStackControls}
                                variants={n8nPathVariants}
                                custom={0}
                                style={{ filter: 'url(#fullStackGlow)' }}
                            />
                            {/* Line 2: Backend to Database */}
                            <motion.path
                                d="M 50 110 V 150"
                                fill="none"
                                stroke="url(#fullStackGradient)"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeDasharray="12 8"
                                initial="hidden"
                                animate={fullStackControls}
                                variants={n8nPathVariants}
                                custom={1}
                                style={{ filter: 'url(#fullStackGlow)' }}
                            />
                        </svg>

                        {/* Frontend Layer */}
                        <motion.div
                            className="relative z-10 bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg dark:shadow-xl w-full max-w-xs text-center border-b-6 border-blue-500 dark:border-blue-600 transform transition-transform duration-300 ease-in-out cursor-pointer"
                            initial="hidden"
                            animate={fullStackControls}
                            variants={layerVariants}
                            custom={0}
                            whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2), 0 0 25px rgba(59, 130, 246, 0.6)" }}
                        >
                            <FontAwesomeIcon icon={faLaptopCode} className="text-blue-500 dark:text-blue-400 text-5xl mb-4 drop-shadow-2xl hover:animate-pulse" />
                            <h4 className="font-bold text-xl sm:text-2xl text-blue-800 dark:text-blue-300">Frontend Development</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-2">Crafting intuitive and interactive user experiences with cutting-edge frameworks like <strong className="text-blue-600 dark:text-blue-300 font-semibold">React.js</strong>.</p>
                        </motion.div>

                        {/* Backend Layer */}
                        <motion.div
                            className="relative z-10 bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg dark:shadow-xl w-full max-w-xs text-center border-b-6 border-green-500 dark:border-green-600 transform transition-transform duration-300 ease-in-out cursor-pointer"
                            initial="hidden"
                            animate={fullStackControls}
                            variants={layerVariants}
                            custom={1}
                            whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2), 0 0 25px rgba(34, 197, 94, 0.6)" }}
                        >
                            <FontAwesomeIcon icon={faServer} className="text-green-500 dark:text-green-400 text-5xl mb-4 drop-shadow-2xl hover:animate-pulse" />
                            <h4 className="font-bold text-xl sm:text-2xl text-green-800 dark:text-green-300">Backend Development</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-2">Building scalable, secure, and high-performance APIs and business logic with <strong className="text-green-600 dark:text-green-300 font-semibold">Spring Boot</strong>, <strong className="text-green-700 dark:text-green-400 font-semibold">Node.js</strong>, and <strong className="text-yellow-600 dark:text-yellow-300 font-semibold">Python</strong>.</p>
                        </motion.div>

                        {/* Database Layer */}
                        <motion.div
                            className="relative z-10 bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg dark:shadow-xl w-full max-w-xs text-center border-b-6 border-indigo-500 dark:border-indigo-600 transform transition-transform duration-300 ease-in-out cursor-pointer"
                            initial="hidden"
                            animate={fullStackControls}
                            variants={layerVariants}
                            custom={2}
                            whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2), 0 0 25px rgba(99, 102, 241, 0.6)" }}
                        >
                            <FontAwesomeIcon icon={faDatabase} className="text-indigo-500 dark:text-indigo-400 text-5xl mb-4 drop-shadow-2xl hover:animate-pulse" />
                            <h4 className="font-bold text-xl sm:text-2xl text-indigo-800 dark:text-indigo-300">Database Management</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-2">Implementing robust and efficient data storage solutions with <strong className="text-indigo-600 dark:text-indigo-300 font-semibold">PostgreSQL</strong>, ensuring data integrity and accessibility.</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Technology Stack Grid - Enhanced */}
                <motion.div
                    ref={techStackRef}
                    className="mb-16 md:mb-24"
                    initial="hidden"
                    animate={techStackControls}
                    variants={sectionVariants}
                >
                    <motion.h3 variants={textItemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-700 dark:text-teal-400 mb-10 text-center leading-tight font-display drop-shadow-sm">
                        Our Core Technologies <FontAwesomeIcon icon={faGears} className="ml-3 text-teal-600 dark:text-teal-300" />
                    </motion.h3>
                    <motion.div
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8 lg:gap-10 justify-items-center"
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.07
                                }
                            }
                        }}
                    >
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center p-4 sm:p-5 bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-xl w-full max-w-[160px] aspect-square justify-center
                                            border-b-4 border-opacity-80 dark:border-opacity-90 transition-all duration-300
                                            hover:shadow-2xl dark:hover:shadow-glow-tech-card cursor-pointer group"
                                style={{ borderColor: tech.color }}
                                variants={techLogoVariants}
                                whileHover={{
                                    scale: 1.08,
                                    y: -5,
                                    rotateX: 5,
                                    rotateY: 5,
                                    boxShadow: `0 15px 30px rgba(0, 0, 0, 0.2), 0 0 25px ${tech.color}80`
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FontAwesomeIcon
                                    icon={tech.icon}
                                    className={`text-5xl md:text-6xl mb-3 drop-shadow-xl transition-colors duration-300`}
                                    style={{ color: tech.color }}
                                    onMouseEnter={(e) => e.currentTarget.classList.add('animate-pulse-subtle')}
                                    onMouseLeave={(e) => e.currentTarget.classList.remove('animate-pulse-subtle')}
                                />
                                <h4 className="font-bold text-lg sm:text-xl text-gray-700 dark:text-gray-200 text-center leading-tight">{tech.name}</h4>
                                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm text-center mt-1 opacity-90">{tech.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Automation & Integration (n8n) */}
                <motion.div
                    ref={n8nRef}
                    className="mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-purple-900 rounded-3xl shadow-2xl dark:shadow-inner-xl p-6 sm:p-8 lg:p-12 border border-gray-200 dark:border-gray-700"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
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
                                <filter id="nodeGlow">
                                    <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                            {/* Nodes */}
                            <motion.circle cx="25" cy="25" r="8" fill="url(#nodeGradient1)" initial="hidden" animate={n8nControls} variants={n8nNodeVariants} custom={0} style={{ filter: 'url(#nodeGlow)' }} />
                            <motion.circle cx="75" cy="50" r="8" fill="url(#nodeGradient2)" initial="hidden" animate={n8nControls} variants={n8nNodeVariants} custom={1} style={{ filter: 'url(#nodeGlow)' }} />
                            <motion.circle cx="25" cy="75" r="8" fill="url(#nodeGradient3)" initial="hidden" animate={n8nControls} variants={n8nNodeVariants} custom={2} style={{ filter: 'url(#nodeGlow)' }} />

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

                            {/* Icons within nodes (positioned with text elements) */}
                            <text x="25" y="27" textAnchor="middle" dominantBaseline="middle" className="text-xs text-purple-900 dark:text-gray-900 font-bold"><FontAwesomeIcon icon={faLightbulb} /></text>
                            <text x="75" y="52" textAnchor="middle" dominantBaseline="middle" className="text-xs text-purple-900 dark:text-gray-900 font-bold"><FontAwesomeIcon icon={faCogs} /></text>
                            <text x="25" y="77" textAnchor="middle" dominantBaseline="middle" className="text-xs text-purple-900 dark:text-gray-900 font-bold"><FontAwesomeIcon icon={faRocket} /></text>
                        </svg>
                    </motion.div>
                </motion.div>

                {/* Development Philosophy */}
                <motion.div
                    ref={philosophyRef}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
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
                    >
                        <FontAwesomeIcon icon={faEnvelope} className="mr-4 text-white group-hover:animate-pulse" />
                        Let's Talk About Your Project
                    </motion.button>
                </motion.div>

            </div>
            {/* Tailwind CSS for Blob animation (add to your global CSS or an appropriate style block) */}
            <style >{`
                @keyframes blob {
                    0% {
                        transform: translate(0px, 0px) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    100% {
                        transform: translate(0px, 0px) scale(1);
                    }
                }
                .animate-blob {
                    animation: blob 7s infinite cubic-bezier(0.6, 0.05, 0.2, 1);
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                .dark .dark\:shadow-inner-xl {
                    box-shadow: inset 0 20px 25px -5px rgba(0, 0, 0, 0.2), inset 0 8px 10px -6px rgba(0, 0, 0, 0.1);
                }

                /* Subtle pulse animation for icons on hover */
                @keyframes pulse-subtle {
                    0%, 100% {
                        transform: scale(1);
                        filter: brightness(100%);
                    }
                    50% {
                        transform: scale(1.03);
                        filter: brightness(120%);
                    }
                }
                .animate-pulse-subtle {
                    animation: pulse-subtle 1s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default SoftwareDevelopment;