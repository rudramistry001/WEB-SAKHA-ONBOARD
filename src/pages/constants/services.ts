// constants/demo-constants.ts

import { FaLaptopCode, FaMobileAlt, FaBug, FaCloudUploadAlt, FaUsers } from 'react-icons/fa';

export const OUR_SERVICES_TITLE_SPAN = "What We Do";
export const OUR_SERVICES_MAIN_TITLE = "Our Core Offerings";
export const OUR_SERVICES_DESCRIPTION = "Explore the comprehensive range of services we provide, from concept to deployment and beyond.";

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  gradient: string; // Tailwind CSS gradient classes
}

export const SERVICES: ServiceItem[] = [
  {
    title: "Software Development",
    description: "Crafting robust and scalable custom software solutions tailored to your unique business needs.",
    icon: FaLaptopCode,
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    title: "Mobile & Web Development",
    description: "Building intuitive and high-performing mobile apps (iOS/Android) and responsive web experiences.",
    icon: FaMobileAlt,
    gradient: "from-purple-500 to-pink-600"
  },
  {
    title: "Testing & Quality Assurance",
    description: "Ensuring flawless functionality and performance through rigorous manual and automated testing processes.",
    icon: FaBug,
    gradient: "from-green-500 to-teal-600"
  },
  {
    title: "Deployment & Maintenance",
    description: "Seamless cloud deployment, continuous integration, and ongoing support for optimal operation.",
    icon: FaCloudUploadAlt,
    gradient: "from-orange-500 to-red-600"
  },
  {
    title: "Social Media Management",
    description: "Developing engaging content strategies and managing your online presence for maximum reach and impact.",
    icon: FaUsers,
    gradient: "from-yellow-500 to-lime-600"
  },
];