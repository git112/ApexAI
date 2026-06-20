import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '@/lib/data/work';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Explore our portfolio of websites and digital experiences built for industry-leading brands across Silicon Valley and beyond.',
};

export default function WorkPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-[1400px] px-8 md:px-12 lg:px-20">
        {/* Header */}
        <AnimatedSection className="mb-20">
          <span className="mb-4 block text-[10px] font-bold tracking-[0.4em] text-accent uppercase">
            Portfolio
          </span>
          <h1 className="mb-6 text-5xl font-black tracking-tight text-white md:text-7xl lg:text-8xl">
            Our Work
          </h1>
          <p className="max-w-xl text-lg text-white/60 leading-relaxed">
            Solving diverse business needs through great design and UX. Thirty-plus projects built for Silicon Valley and beyond.
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <AnimatedSection key={project.slug} delay={(i % 3) * 0.08}>
              <Link href={`/work/${project.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '4/3' }}>
                  {/* Color background */}
                  <div
                    className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundColor: project.bgColor }}
                  />

                  {/* Abstract design element */}
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <div
                      className="absolute h-40 w-40 rounded-full opacity-25 blur-2xl transition-all duration-700 group-hover:scale-150"
                      style={{ backgroundColor: project.accentColor }}
                    />
                    <span
                      className="relative z-10 text-[80px] font-black tracking-tighter opacity-10 leading-none"
                      style={{ color: project.accentColor }}
                    >
                      {project.title[0]}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="mb-1.5">
                      <span className="text-[9px] font-bold tracking-[0.3em] text-white/50 uppercase">
                        {project.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-black tracking-tight text-white transition-colors duration-200 group-hover:text-accent">
                      {project.client}
                    </h2>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
