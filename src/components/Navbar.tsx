// components/Navbar.tsx

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

// Assuming you have a DarkModeToggle component
// import DarkModeToggle from './DarkModeToggle'; // Uncomment if you have this

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Effect to handle navbar background change on scroll
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) { // Adjust scroll threshold as needed
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to scroll to a section
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            // Crucial: Close mobile menu after clicking a link
            setIsMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { name: 'Home', id: 'hero-section' },
        { name: 'About Us', id: 'about-us-section' },
        { name: 'Services', id: 'our-services-section' },
        { name: 'Our Process', id: 'our-process-section' },
        { name: 'Social Media', id: 'social-media-section' },
        { name: 'Software Dev', id: 'software-development-section-01' }, // Changed to first software dev section
    ];

    // Refined mobile menu variants for smoother entry/exit
    const mobileMenuVariants = {
        hidden: { opacity: 0, x: '100%' }, // Start from right, fully transparent
        visible: {
            opacity: 1,
            x: '0%',
            transition: {
                type: 'spring', // Use spring for a slightly bouncy feel
                stiffness: 300,
                damping: 30,
                duration: 0.5, // Increase duration slightly for visibility
            },
        },
        exit: {
            opacity: 0,
            x: '100%', // Exit to right, becoming transparent
            transition: {
                type: 'tween', // Simpler tween for exit
                duration: 0.3,
                ease: 'easeIn',
            },
        },
    };

    return (
        // The <nav> tag itself needs to be fixed and have the z-index
        // Added h-20 (80px) to ensure consistent height for content padding
        <nav className={`fixed w-full z-50 transition-all duration-300 h-20 flex items-center ${scrolled ? 'bg-white/80 dark:bg-gray-900/80 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                {/* Logo/Brand Name - WEB सखा with glowing effect */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-extrabold relative" // Increased font size, added relative for glow
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-300 dark:to-purple-400 font-display drop-shadow-xl"
                            style={{ textShadow: '0 0 8px rgba(99, 102, 241, 0.7), 0 0 15px rgba(124, 58, 237, 0.5)' }}> {/* Custom glow effect */}
                        WEB सखा
                    </span>
                </motion.div>


                {/* Desktop Navigation - Hidden on mobile */}
                <div className="hidden md:flex space-x-8 lg:space-x-10 items-center">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.id}
                            href={`#${link.id}`}
                            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-lg font-medium transition-colors duration-200 relative group"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * navLinks.indexOf(link) }}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(link.id);
                            }}
                        >
                            {link.name}
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-indigo-600 dark:bg-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </motion.a>
                    ))}
                    {/* <DarkModeToggle /> */}
                </div>

                {/* Mobile Menu Button - Visible on mobile */}
                <div className="md:hidden flex items-center">
                    {/* <DarkModeToggle /> */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-700 dark:text-gray-300 text-2xl ml-4 focus:outline-none"
                        aria-label="Toggle mobile menu" // Good for accessibility
                    >
                        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Content - Conditional rendering with AnimatePresence */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        // Added backdrop-blur-sm and adjusted background opacity for mobile menu
                        className="md:hidden fixed top-0 left-0 w-full h-full bg-white/95 dark:bg-gray-900/95 z-40 overflow-y-auto pt-24 pb-8 shadow-2xl backdrop-blur-sm" // Full screen overlay
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobileMenuVariants}
                    >
                        <div className="flex flex-col items-center space-y-6 px-4">
                            {navLinks.map((link) => (
                                <motion.a // Changed to motion.a for individual link animation
                                    key={link.id}
                                    href={`#${link.id}`}
                                    className="block text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 text-2xl font-semibold py-3 transition-colors duration-200 w-full text-center"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(link.id);
                                    }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.05 * navLinks.indexOf(link), duration: 0.3 }} // Staggered appearance
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
