import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, type Variants } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
    faCode, faMobileAlt, faCogs, faDatabase, faGears
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

const TechnologyStack: React.FC = () => {
    const techStackRef = useRef(null);
    const isTechStackInView = useInView(techStackRef, { once: true, amount: 0.3 });
    const techStackControls = useAnimation();

    useEffect(() => {
        if (isTechStackInView) techStackControls.start("visible");
    }, [isTechStackInView, techStackControls]);

    // Data for Technologies
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
        <section className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-cyan-100 dark:from-gray-900 dark:to-teal-900 text-gray-800 dark:text-gray-200 overflow-hidden relative font-sans">
            {/* Background elements */}
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-teal-300 dark:bg-teal-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-cyan-300 dark:bg-cyan-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Technology Stack Grid */}
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
            </div>
        </section>
    );
};

export default TechnologyStack;