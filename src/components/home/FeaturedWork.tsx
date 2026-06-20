'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { getFeaturedProjects } from '@/lib/data/work';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const featured = getFeaturedProjects();

export function FeaturedWork() {
  return (
    <section className="px-8 py-24 md:px-12 lg:px-20 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <AnimatedSection className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-4 block text-[10px] font-bold tracking-[0.4em] text-accent uppercase">
              Selected Work
            </span>
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/work"
            className="group flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-white/60 uppercase transition-colors duration-200 hover:text-white"
          >
            View All Work
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <AnimatedSection key={project.slug} delay={i * 0.1}>
              <Link href={`/work/${project.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: i === 0 ? '16/10' : '4/3' }}>
                  {/* Placeholder colored background */}
                  <div
                    className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundColor: project.bgColor }}
                  />

                  {/* Color swatches as abstract design */}
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <div
                      className="absolute h-64 w-64 rounded-full opacity-20 blur-3xl transition-all duration-700 group-hover:scale-125"
                      style={{ backgroundColor: project.accentColor }}
                    />
                    <div className="relative z-10 text-center">
                      <span
                        className="block text-[80px] font-black tracking-tighter opacity-10 leading-none"
                        style={{ color: project.accentColor }}
                      >
                        {project.title[0]}
                      </span>
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="text-[10px] font-bold tracking-[0.3em] text-white/50 uppercase">
                        {project.category}
                      </span>
                      <span className="text-white/30">·</span>
                      <span className="text-[10px] font-bold tracking-[0.3em] text-white/50 uppercase">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black tracking-tight text-white transition-colors duration-200 group-hover:text-accent md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm text-white/60 leading-relaxed">
                      {project.description}
                    </p>

                    <motion.div
                      className="mt-5 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                    >
                      View Case Study
                      <span
                        className="inline-block transition-transform duration-300 group-hover:translate-x-2"
                        aria-hidden
                      >
                        →
                      </span>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
