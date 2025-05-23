// src/constants.ts

import { 
  HiOutlineMail, 
  HiOutlineChartPie, 
  HiOutlineUserGroup, 
  HiOutlineClock, 
  HiOutlineShieldCheck, 
  HiOutlineGlobe, 
  HiOutlineLightningBolt, 
  HiOutlineCode,
  HiOutlineLightBulb,
  HiOutlineSparkles,
  HiOutlineCubeTransparent,
  // New icons for Our Process section
  HiOutlineChatAlt2, 
  HiOutlineDocumentText, 
  HiOutlineLightBulb as HiOutlineLightBulbProcess, // Renamed to avoid conflict
  HiOutlineCog, 
  HiOutlineCheckCircle, 
  HiOutlineSupport 
} from 'react-icons/hi';
import React from 'react'; // Import React for React.ComponentType typing

// --- Type Definitions ---

/**
 * Interface for a feature item in the Features Overview section.
 */
export interface Feature {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

/**
 * Interface for an About Us card item.
 */
export interface AboutUsCard {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  gradient: string;
}

/**
 * Interface for a process step item in the Our Process section.
 */
export interface ProcessStep {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  gradient: string; // To allow unique gradients for each step's icon
}

// --- General UI Constants ---
export const APP_NAME: string = "Your Company Name"; // Example for a global app name

// --- Card Gradient Colors (for Features and potentially other sections) ---
export const CARD_GRADIENTS: string[] = [
  "from-blue-500 to-cyan-400",
  "from-purple-500 to-pink-500",
  "from-green-400 to-emerald-500",
  "from-orange-400 to-amber-500",
  "from-rose-500 to-red-500",
  "from-cyan-500 to-blue-500",
  "from-fuchsia-500 to-purple-500",
  "from-amber-400 to-orange-500"
];

// --- Features Overview Section Constants ---
export const FEATURES_OVERVIEW_TITLE_SPAN: string = "POWERFUL TOOLSET";
export const FEATURES_OVERVIEW_MAIN_TITLE_PART1: string = "Features for";
export const FEATURES_OVERVIEW_MAIN_TITLE_PART2: string = "Modern Marketers";
export const FEATURES_OVERVIEW_DESCRIPTION: string = "Everything you need to create, manage, and optimize your email marketing campaigns in one powerful platform.";

export const FEATURES_LIST: Feature[] = [
  {
    icon: HiOutlineMail,
    title: "Smart Bulk Sending",
    description: "Send thousands of personalized emails in one click with our intelligent sending engine that maximizes deliverability."
  },
  {
    icon: HiOutlineChartPie,
    title: "Advanced Analytics",
    description: "Track opens, clicks, and conversions in real-time with visual reports that help optimize your campaigns."
  },
  {
    icon: HiOutlineUserGroup,
    title: "Audience Segmentation",
    description: "Create targeted audience segments based on behavior, demographics, and engagement history."
  },
  {
    icon: HiOutlineClock,
    title: "Smart Scheduling",
    description: "AI-powered delivery times ensure your emails arrive when recipients are most likely to engage."
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance features keep your data and your customers' information protected."
  },
  {
    icon: HiOutlineGlobe,
    title: "Global Reach",
    description: "Multilingual support and smart routing technology ensures reliable delivery to inboxes worldwide."
  },
  {
    icon: HiOutlineLightningBolt,
    title: "Drag & Drop Builder",
    description: "Create stunning, responsive email templates in minutes with our intuitive drag-and-drop editor."
  },
  {
    icon: HiOutlineCode,
    title: "Developer API",
    description: "Seamlessly integrate with your existing tools and workflows through our comprehensive API."
  }
];

// --- About Us Section Constants ---
export const ABOUT_US_TITLE_SPAN: string = "OUR STORY & VALUES";
export const ABOUT_US_MAIN_TITLE_PART1: string = "Driving Innovation with a";
export const ABOUT_US_MAIN_TITLE_PART2: string = "Purpose";
export const ABOUT_US_DESCRIPTION: string = "Learn about our journey, our core beliefs, and the vision that guides us in delivering exceptional solutions.";

export const ABOUT_US_CARDS: AboutUsCard[] = [
  {
    icon: HiOutlineLightBulb,
    title: "Our Mission",
    description: "To empower businesses and individuals through cutting-edge software, mobile, and web solutions, fostering growth and innovation in the digital landscape.",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    icon: HiOutlineSparkles,
    title: "Our Vision",
    description: "To be a global leader in technology solutions, recognized for our commitment to excellence, client success, and a collaborative, inclusive work environment.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: HiOutlineCubeTransparent,
    title: "Our Values",
    description: "Integrity, innovation, collaboration, and client satisfaction are at the heart of everything we do, driving our passion for impactful solutions.",
    gradient: "from-orange-400 to-amber-500"
  }
];

// --- Our Process Section Constants ---
export const OUR_PROCESS_TITLE_SPAN: string = "OUR STREAMLINED APPROACH";
export const OUR_PROCESS_MAIN_TITLE_PART1: string = "How We";
export const OUR_PROCESS_MAIN_TITLE_PART2: string = "Bring Ideas to Life";
export const OUR_PROCESS_DESCRIPTION: string = "Our proven workflow ensures transparency, efficiency, and exceptional results from concept to deployment and beyond.";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    icon: HiOutlineChatAlt2,
    title: "1. Discovery & Consultation",
    description: "We start by understanding your vision, challenges, and goals through in-depth discussions and requirement gathering.",
    gradient: "from-blue-600 to-indigo-500"
  },
  {
    icon: HiOutlineDocumentText,
    title: "2. Planning & Strategy",
    description: "Detailed project planning, technology stack selection, and strategic roadmap creation to ensure a clear path forward.",
    gradient: "from-purple-600 to-pink-500"
  },
  {
    icon: HiOutlineLightBulbProcess, // Using the renamed icon
    title: "3. Design & Prototyping",
    description: "Crafting intuitive user experiences and visually stunning interfaces, followed by interactive prototypes for feedback.",
    gradient: "from-green-500 to-teal-400"
  },
  {
    icon: HiOutlineCog,
    title: "4. Development & Iteration",
    description: "Agile development cycles with continuous integration, testing, and client feedback loops for iterative improvements.",
    gradient: "from-orange-500 to-amber-400"
  },
  {
    icon: HiOutlineCheckCircle,
    title: "5. Quality Assurance & Testing",
    description: "Rigorous testing across all platforms and devices to identify and rectify any issues, ensuring a flawless product.",
    gradient: "from-red-500 to-rose-400"
  },
  {
    icon: HiOutlineGlobe,
    title: "6. Deployment & Launch",
    description: "Seamless deployment to live environments, ensuring your solution is accessible and performs optimally from day one.",
    gradient: "from-cyan-500 to-blue-400"
  },
  {
    icon: HiOutlineSupport,
    title: "7. Support & Optimization",
    description: "Ongoing maintenance, performance monitoring, and continuous optimization to ensure long-term success and scalability.",
    gradient: "from-fuchsia-600 to-purple-500"
  }
];
