// components/Layout.tsx

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer'; // Assuming you have a Footer component
import Navbar from './Navbar'; // Your Navbar component

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full overflow-hidden"
    >
      {/* Navbar is rendered here */}
      <Navbar />

      {/* The pt-X here is crucial for preventing content from being hidden 
        under the fixed Navbar.
        You need to measure your Navbar's exact height and adjust pt-X accordingly.
        For example, if your Navbar is 80px tall, use pt-20 (which is 80px).
        If it's 72px, use pt-[72px] (arbitrary value).
        Based on your screenshot, it looks like `pt-16` (64px) might be too small
        if your navbar is taller, or your navbar itself has extra height.

        Let's try a slightly larger padding first, like pt-20 or pt-24.
        I'll use pt-20 as a common starting point for typical navbars.
        You should verify the actual height of your Navbar component in the browser's developer tools.
      */}
      <main className="pt-20"> {/* Changed from pt-16 to pt-20. ADJUST THIS IF NEEDED. */}
          {children}
      </main>

      <Footer />
    </motion.div>
  );
}