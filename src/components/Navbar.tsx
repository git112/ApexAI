'use client';

import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-8 py-8 md:px-20"
    >
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-wider text-white md:text-3xl">
        APEXAI
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-8">
        <a
          href="#contact"
          className="group relative hidden py-1 text-xs font-bold tracking-[0.2em] text-white uppercase md:block"
        >
          Let&apos;s Talk
          {/* Underline effect matching the design */}
          <span className="group-hover:bg-accent absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-100 transform bg-white transition-colors duration-300" />
        </a>

        <button
          aria-label="Menu"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white transition-transform duration-300 hover:scale-105"
        >
          <Menu className="text-background h-6 w-6" strokeWidth={1.5} />
        </button>
      </div>
    </motion.nav>
  );
}
