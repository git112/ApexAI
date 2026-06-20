import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProjectBySlug, generateWorkStaticParams, projects } from '@/lib/data/work';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export async function generateStaticParams() {
  return generateWorkStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Not Found' };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  // Find next/prev projects
  const idx = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(idx + 1) % projects.length];
  const prevProject = projects[(idx - 1 + projects.length) % projects.length];

  return (
    <div>
      {/* Hero */}
      <div
        className="relative flex min-h-screen items-end overflow-hidden px-8 pb-24 pt-40 md:px-12 lg:px-20"
        style={{ backgroundColor: project.bgColor }}
      >
        {/* Background glow */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div
            className="h-[600px] w-[600px] rounded-full opacity-20 blur-[120px]"
            style={{ backgroundColor: project.accentColor }}
          />
        </div>

        {/* Large initial letter */}
        <div
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[40vw] font-black leading-none tracking-tighter opacity-5 select-none"
          style={{ color: project.accentColor }}
        >
          {project.title[0]}
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1400px]">
          <AnimatedSection>
            <Link
              href="/work"
              className="mb-12 inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase transition-colors duration-200 hover:text-white"
            >
              ← All Work
            </Link>
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <span
                className="rounded-full px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase"
                style={{ backgroundColor: project.accentColor + '20', color: project.accentColor }}
              >
                {project.category}
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">{project.year}</span>
            </div>
            <h1 className="mb-8 text-5xl font-black tracking-tight text-white md:text-7xl lg:text-8xl">
              {project.title}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/70">{project.description}</p>
          </AnimatedSection>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-[1400px] px-8 py-24 md:px-12 lg:px-20">
        <div className="grid gap-16 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2">
            <AnimatedSection className="mb-16">
              <h2 className="mb-6 text-[10px] font-bold tracking-[0.4em] text-accent uppercase">Overview</h2>
              <p className="text-xl leading-relaxed text-white/80">{project.overview}</p>
            </AnimatedSection>

            <div className="mb-px h-px bg-white/5" />

            <AnimatedSection className="py-16">
              <h2 className="mb-6 text-[10px] font-bold tracking-[0.4em] text-accent uppercase">The Challenge</h2>
              <p className="text-lg leading-relaxed text-white/70">{project.challenge}</p>
            </AnimatedSection>

            <div className="mb-px h-px bg-white/5" />

            <AnimatedSection className="py-16">
              <h2 className="mb-6 text-[10px] font-bold tracking-[0.4em] text-accent uppercase">Our Solution</h2>
              <p className="text-lg leading-relaxed text-white/70">{project.solution}</p>
            </AnimatedSection>

            {/* Color Palette */}
            <AnimatedSection className="pt-4">
              <h2 className="mb-6 text-[10px] font-bold tracking-[0.4em] text-accent uppercase">Color System</h2>
              <div className="flex gap-4">
                {project.colors.map((color) => (
                  <div key={color} className="flex flex-col gap-2">
                    <div
                      className="h-16 w-16 rounded-xl border border-white/10"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-[9px] font-mono text-white/40">{color}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <AnimatedSection delay={0.2} className="lg:col-span-1">
            <div className="sticky top-32 rounded-2xl border border-white/5 bg-white/[0.02] p-8">
              <h3 className="mb-6 text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">
                Services Provided
              </h3>
              <ul className="flex flex-col gap-3">
                {project.services.map((service) => (
                  <li key={service} className="flex items-center gap-3 text-sm text-white/70">
                    <span
                      className="h-1 w-4 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: project.accentColor }}
                    />
                    {service}
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-white/5 pt-8">
                <h3 className="mb-4 text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">
                  Typography
                </h3>
                <p className="text-sm leading-relaxed text-white/60">{project.typography}</p>
              </div>

              <div className="mt-8">
                <Link
                  href="/lets-talk"
                  className="block w-full rounded-full bg-white py-4 text-center text-[11px] font-bold tracking-[0.2em] text-background uppercase transition-all duration-300 hover:bg-accent hover:text-white"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Placeholder screens / mockup area */}
        <AnimatedSection className="mt-24 grid gap-6 sm:grid-cols-2">
          {[1, 2].map((n) => (
            <div
              key={n}
              className="flex aspect-video items-center justify-center rounded-2xl border border-white/5"
              style={{ backgroundColor: project.bgColor }}
            >
              <div className="text-center">
                <div
                  className="mx-auto mb-3 h-1 w-16 rounded-full"
                  style={{ backgroundColor: project.accentColor }}
                />
                <span className="text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase">
                  Design Preview {n}
                </span>
              </div>
            </div>
          ))}
        </AnimatedSection>
      </div>

      {/* Next / Prev nav */}
      <div className="border-t border-white/5">
        <div className="grid md:grid-cols-2">
          <Link
            href={`/work/${prevProject.slug}`}
            className="group border-r border-white/5 p-12 transition-colors duration-300 hover:bg-white/[0.02]"
          >
            <p className="mb-3 text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase">← Previous</p>
            <h3 className="text-2xl font-black tracking-tight text-white transition-colors duration-200 group-hover:text-accent">
              {prevProject.title}
            </h3>
          </Link>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group p-12 text-right transition-colors duration-300 hover:bg-white/[0.02]"
          >
            <p className="mb-3 text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase">Next →</p>
            <h3 className="text-2xl font-black tracking-tight text-white transition-colors duration-200 group-hover:text-accent">
              {nextProject.title}
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
