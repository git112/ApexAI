import type { Metadata } from 'next';
import Link from 'next/link';
import { jobs } from '@/lib/data/careers';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join a passionate team of designers, developers, and strategists building world-class digital experiences in Silicon Valley.',
};

const benefits = [
  { title: 'Health & Wellness', description: 'Medical, dental, and vision insurance for you and your family.' },
  { title: 'Time Off', description: 'Competitive PTO, holidays, and sick days. We believe in rest.' },
  { title: '401(k)', description: 'Plan for your future with our company-backed retirement program.' },
  { title: 'Location', description: 'Downtown San Jose office with stunning city views on the 14th floor.' },
  { title: 'Culture', description: 'Dim sum outings, team events, and a culture that fosters creativity.' },
  { title: 'Growth', description: 'Regular mentorship, feedback cycles, and opportunities to lead.' },
];

export default function CareersPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-[1400px] px-8 md:px-12 lg:px-20">
        {/* Header */}
        <AnimatedSection className="mb-24">
          <span className="mb-4 block text-[10px] font-bold tracking-[0.4em] text-accent uppercase">
            Join the Team
          </span>
          <h1 className="mb-8 max-w-3xl text-5xl font-black tracking-tight text-white md:text-7xl">
            Build great things with great people.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-white/60">
            We&apos;re a team of ambitious creatives and strategists who love what we do. If you&apos;re talented, passionate, and hungry—we want to hear from you.
          </p>
        </AnimatedSection>

        {/* Open Positions */}
        <AnimatedSection className="mb-32">
          <h2 className="mb-12 text-3xl font-black tracking-tight text-white">Open Positions</h2>
          <div className="flex flex-col gap-px bg-white/5">
            {jobs.map((job, i) => (
              <AnimatedSection key={job.id} delay={i * 0.07}>
                <div className="group bg-background p-8 transition-colors duration-300 hover:bg-white/[0.03] lg:p-10">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-white/10 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-white/40 uppercase">
                          {job.department}
                        </span>
                        <span className="rounded-full border border-white/10 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-white/40 uppercase">
                          {job.type}
                        </span>
                        <span className="text-[9px] font-bold tracking-[0.2em] text-white/30 uppercase">
                          {job.location}
                        </span>
                      </div>
                      <h3 className="mb-3 text-2xl font-black tracking-tight text-white">{job.title}</h3>
                      <p className="max-w-2xl text-sm leading-relaxed text-white/60">{job.description}</p>

                      {/* Responsibilities */}
                      <div className="mt-6 grid gap-6 sm:grid-cols-2">
                        <div>
                          <h4 className="mb-3 text-[10px] font-bold tracking-[0.2em] text-accent uppercase">
                            Responsibilities
                          </h4>
                          <ul className="flex flex-col gap-2">
                            {job.responsibilities.slice(0, 3).map((r) => (
                              <li key={r} className="flex items-start gap-2 text-xs text-white/50">
                                <span className="mt-1.5 h-1 w-2 flex-shrink-0 rounded-full bg-accent/50" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="mb-3 text-[10px] font-bold tracking-[0.2em] text-accent uppercase">
                            Requirements
                          </h4>
                          <ul className="flex flex-col gap-2">
                            {job.requirements.slice(0, 3).map((r) => (
                              <li key={r} className="flex items-start gap-2 text-xs text-white/50">
                                <span className="mt-1.5 h-1 w-2 flex-shrink-0 rounded-full bg-accent/50" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <a
                        href={`mailto:hello@apexai.com?subject=Application: ${encodeURIComponent(job.title)}`}
                        className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-[10px] font-bold tracking-[0.2em] text-background uppercase transition-all duration-300 hover:bg-accent hover:text-white"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Benefits */}
        <AnimatedSection className="mb-24">
          <span className="mb-4 block text-[10px] font-bold tracking-[0.4em] text-accent uppercase">
            Why ApexAI
          </span>
          <h2 className="mb-16 text-4xl font-black tracking-tight text-white md:text-5xl">
            What We Offer
          </h2>
          <div className="grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <AnimatedSection key={benefit.title} delay={i * 0.07}>
                <div className="bg-background p-8">
                  <h3 className="mb-3 text-lg font-black tracking-tight text-white">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* General Application */}
        <AnimatedSection className="rounded-2xl border border-white/5 bg-white/[0.02] p-12 text-center">
          <h2 className="mb-4 text-3xl font-black tracking-tight text-white">Don&apos;t see your role?</h2>
          <p className="mb-8 text-base text-white/60">
            We&apos;re always interested in meeting exceptional people. Send us your portfolio and tell us how you&apos;d contribute.
          </p>
          <a
            href="mailto:hello@apexai.com?subject=General Application"
            className="inline-flex items-center gap-4 rounded-full bg-white px-10 py-5 text-[11px] font-bold tracking-[0.2em] text-background uppercase transition-all duration-300 hover:bg-accent hover:text-white"
          >
            Send an Introduction
          </a>
        </AnimatedSection>
      </div>
    </div>
  );
}
