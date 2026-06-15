'use client';

import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative flex h-screen w-full items-center overflow-hidden px-8 md:px-20">
      {/* Huge Background Letter A */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.04, x: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
        className="pointer-events-none absolute top-1/2 -right-[10%] -translate-y-1/2 text-[60vw] leading-none font-black tracking-tighter text-white select-none"
      >
        A
      </motion.div>

      {/* Circular design accent line in the background */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 hidden h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 select-none md:block" />

      {/* Crosshair accents */}
      <div className="pointer-events-none absolute top-[40%] right-40 hidden grid-cols-4 gap-x-4 gap-y-3 opacity-60 select-none lg:grid">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className={`font-mono text-[8px] leading-none ${i === 4 ? 'text-accent' : 'text-white/50'}`}
          >
            +
          </span>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute right-12 bottom-12 flex hidden flex-col items-center gap-6 md:flex"
      >
        <div className="h-16 w-[1px] bg-white/20" />
        <span
          className="text-[10px] font-bold tracking-[0.3em] text-white/50 uppercase"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Scroll
        </span>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="text-accent mb-10 block text-xs font-bold tracking-[0.4em] uppercase md:text-sm">
            We Are Apexai
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 text-5xl leading-[1.05] font-bold tracking-tight text-white md:text-7xl lg:text-[6rem]"
        >
          A digital agency <br className="hidden md:block" />
          focused on web.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16 max-w-2xl text-lg leading-relaxed font-light text-white/70 md:text-xl"
        >
          We are a creative team of designers, developers, strategists, and
          producers building elevated websites in the heart of Silicon Valley.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button className="group flex items-center gap-6 rounded-full bg-[#252525] px-8 py-5 text-[11px] font-bold tracking-[0.2em] text-white uppercase transition-colors hover:bg-[#333333]">
            Get to know us
            <span className="group-hover:text-accent text-sm font-light text-white/70 transition-all group-hover:translate-x-1">
              +
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
