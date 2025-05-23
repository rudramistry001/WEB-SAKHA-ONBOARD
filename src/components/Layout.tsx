import type { ReactNode } from 'react';
// Removed motion import as it's no longer used on the root div
// import { motion } from 'framer-motion';
import Navbar from './Navbar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    // Changed from motion.div to a regular div
    // Removed initial, animate, exit props to prevent transform interference
    <div className="min-h-screen w-full">
      {/* Navbar is rendered here */}
      <Navbar />

      {/* The pt-20 here is crucial for preventing content from being hidden
          under the fixed Navbar.
          Your Navbar is h-20 (80px), so pt-20 (80px) is the correct padding.
      */}
      <main className="pt-20">
          {children}
      </main>
    </div>
  );
}
