import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    // Effect to handle navbar background change on scroll
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
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

    // Effect to control body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'; // Disable body scroll
        } else {
            document.body.style.overflow = ''; // Re-enable body scroll
        }
        // Clean up the style when the component unmounts or isMobileMenuOpen changes
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]); // Re-run effect when isMobileMenuOpen changes

    // Function to scroll to a section
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
        }
    };

    // Define navigation links with their type (scroll or route) and target
    const navLinks = [
        { name: 'Home', type: 'scroll', target: 'hero-section' },
        { name: 'About Us', type: 'scroll', target: 'about-us-section' },
        { name: 'Services', type: 'scroll', target: 'our-services-section' },
        { name: 'Our Process', type: 'scroll', target: 'our-process-section' },
        { name: 'Social Media', type: 'scroll', target: 'social-media-section' },
        { name: 'Software Dev', type: 'scroll', target: 'software-development-section-01' },
        { name: 'Contact Us', type: 'route', target: '/contact-us' }, // New Contact Us link
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
        <nav className={`fixed w-full z-50 transition-all duration-300 h-20 flex items-center ${scrolled ? 'bg-white/80 dark:bg-gray-900/80 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                {/* Logo/Brand Name - WEB सखा with glowing effect */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-extrabold relative"
                >
                    <Link to="/" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-300 dark:to-purple-400 font-display drop-shadow-xl"
                        style={{ textShadow: '0 0 8px rgba(99, 102, 241, 0.7), 0 0 15px rgba(124, 58, 237, 0.5)' }}>
                        WEB सखा
                    </Link>
                </motion.div>

                {/* Desktop Navigation - Hidden on mobile */}
                <div className="hidden md:flex space-x-8 lg:space-x-10 items-center">
                    {navLinks.map((link) => (
                        link.type === 'scroll' ? (
                            <motion.a
                                key={link.target}
                                href={`#${link.target}`}
                                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-lg font-medium transition-colors duration-200 relative group"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 * navLinks.indexOf(link) }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.target);
                                }}
                            >
                                {link.name}
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-indigo-600 dark:bg-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </motion.a>
                        ) : (
                            <motion.a
                                key={link.target}
                                className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-lg font-medium transition-colors duration-200 relative group"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 * navLinks.indexOf(link) }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate(link.target);
                                    setIsMobileMenuOpen(false);
                                }}
                            >
                                {link.name}
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-indigo-600 dark:bg-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </motion.a>
                        )
                    ))}
                </div>

                {/* Mobile Menu Button - Visible on mobile */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-700 dark:text-gray-300 text-2xl ml-4 focus:outline-none"
                        aria-label="Toggle mobile menu"
                    >
                        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Content - Conditional rendering with AnimatePresence */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        // Changed h-full to h-screen to ensure it always takes full viewport height
                        // Increased z-index to ensure it's on top of the main navbar
                        className="md:hidden fixed top-0 left-0 w-full h-screen bg-white/95 dark:bg-gray-900/95 z-51 overflow-y-auto pt-24 pb-8 shadow-2xl backdrop-blur-sm"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobileMenuVariants}
                    >
                        <div className="flex flex-col items-center space-y-6 px-4">
                            {navLinks.map((link) => (
                                link.type === 'scroll' ? (
                                    <motion.a
                                        key={link.target}
                                        href={`#${link.target}`}
                                        className="block text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 text-2xl font-semibold py-3 transition-colors duration-200 w-full text-center"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(link.target);
                                        }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.05 * navLinks.indexOf(link), duration: 0.3 }}
                                    >
                                        {link.name}
                                    </motion.a>
                                ) : (
                                    <motion.a
                                        key={link.target}
                                        className="block text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 text-2xl font-semibold py-3 transition-colors duration-200 w-full text-center"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            navigate(link.target);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.05 * navLinks.indexOf(link), duration: 0.3 }}
                                    >
                                        {link.name}
                                    </motion.a>
                                )
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
