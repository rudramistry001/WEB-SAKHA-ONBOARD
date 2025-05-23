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
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7, // Smoother, slightly longer duration
            ease: "easeOut"
        }
    }
};

const TechnologyStack: React.FC = () => {
    const techStackRef = useRef(null);
    const isTechStackInView = useInView(techStackRef, { once: true, amount: 0.3 });
    const techStackControls = useAnimation();
    const iconGlowControls = useAnimation(); // New animation control for icon glow

    useEffect(() => {
        const sequence = async () => {
            if (isTechStackInView) {
                // Wait for the main section and card animations to complete
                await techStackControls.start("visible");

                // Start icon glow animation after cards are visible
                // We'll apply this animation to the individual icon's motion.div
                // The `filter` property will be animated using the CSS variable
                // that is set on the parent motion.div for each icon.
                iconGlowControls.start({
                    filter: [
                        'drop-shadow(0 0 5px rgba(255, 255, 255, 0))', // Start with no glow
                        'drop-shadow(0 0 10px var(--icon-color, #fff))', // Glow with tech's color
                        'drop-shadow(0 0 5px rgba(255, 255, 255, 0))'  // Fade out glow
                    ],
                    transition: {
                        duration: 2.5,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        delay: 0.5 // Small delay after cards appear before glow starts
                    }
                });
            }
        };
        sequence();
    }, [isTechStackInView, techStackControls, iconGlowControls]);


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
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#0A192F] to-[#122A4E] text-gray-200 overflow-hidden relative font-sans">
            {/* Background elements - Adjusted colors for dark theme */}
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-[#0F284B] rounded-full mix-blend-screen filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#1A3D6E] rounded-full mix-blend-screen filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Technology Stack Grid */}
                <motion.div
                    ref={techStackRef}
                    className="mb-16 md:mb-24"
                    initial="hidden"
                    animate={techStackControls}
                    variants={sectionVariants}
                >
                    <motion.h3 variants={textItemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-400 mb-10 text-center leading-tight font-display drop-shadow-sm">
                        Our Core Technologies <FontAwesomeIcon icon={faGears} className="ml-3 text-teal-300" />
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
                                className="flex flex-col items-center p-4 sm:p-5 bg-[#0D203A] rounded-xl shadow-lg w-full max-w-[160px] aspect-square justify-center
                                         border-b-4 border-opacity-80 transition-all duration-300
                                         hover:shadow-2xl hover:shadow-cyan-500/30 cursor-pointer group"
                                style={{ borderColor: tech.color }}
                                variants={techLogoVariants}
                                whileHover={{
                                    y: -8, // Subtle lift on hover
                                    boxShadow: `0 15px 30px rgba(0, 0, 0, 0.4), 0 0 25px ${tech.color}80`
                                }}
                                whileTap={{ y: -2 }}
                            >
                                {/* Corrected line: Passing --icon-color as a CSS variable */}
                                <motion.div
                                    animate={iconGlowControls}
                                    style={{ '--icon-color': tech.color }} // This is correct for passing the CSS variable
                                >
                                    <FontAwesomeIcon
                                        icon={tech.icon}
                                        className={`text-5xl md:text-6xl mb-3 drop-shadow-xl transition-colors duration-300`}
                                        style={{ color: tech.color }}
                                    />
                                </motion.div>
                                <h4 className="font-bold text-lg sm:text-xl text-gray-100 text-center leading-tight">{tech.name}</h4>
                                <p className="text-gray-400 text-xs sm:text-sm text-center mt-1 opacity-90">{tech.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default TechnologyStack;