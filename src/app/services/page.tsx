import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Design-driven and strategy-led. We build websites, create compelling creative, and develop digital strategies that grow your brand.',
};

const services = [
  {
    number: '01',
    title: 'Websites',
    subtitle: 'Design & Development',
    description:
      'We build impactful digital experiences through great UX, design, and development. Every website we create is a reflection of your brand at its very best—crafted for performance, accessibility, and conversion.',
    capabilities: [
      'Website Design',
      'Responsive Web Design',
      'UI/UX Design',
      'Content Management',
      'Website Development',
      'eCommerce',
      'Performance Optimization',
    ],
  },
  {
    number: '02',
    title: 'Creative',
    subtitle: 'Brand & Visual',
    description:
      'We design visually-engaging marketing assets to help drive your brand forward. From comprehensive identity systems to motion graphics, we bring your visual story to life.',
    capabilities: [
      'Corporate Identity',
      'Brand Strategy',
      'Motion Graphics',
      'Illustration',
      'Marketing Materials',
      'Presentations',
      'Photography Direction',
    ],
  },
  {
    number: '03',
    title: 'Strategy',
    subtitle: 'Research & Growth',
    description:
      'We identify business challenges and develop solutions to achieve your goals. Our strategic approach combines research, competitive analysis, and data-driven insights to fuel sustainable growth.',
    capabilities: [
      'Research & Discovery',
      'Content Strategy',
      'SEO Services',
      'Competitive Analysis',
      'Analytics & Insights',
      'Conversion Optimization',
      'Digital Roadmapping',
    ],
  },
];

const process = [
  {
    step: '01',
    title: 'Discover',
    description:
      'We deep-dive into your business, competitive landscape, and audience to understand the full context of what you need.',
  },
  {
    step: '02',
    title: 'Strategize',
    description:
      'Research converts into action. We develop a blueprint to drive more traffic and convert web visitors into qualified leads.',
  },
  {
    step: '03',
    title: 'Execute',
    description:
      'Our design team creates visually-engaging experiences that prioritize user experience, accessibility, and brand alignment.',
  },
  {
    step: '04',
    title: 'Launch',
    description:
      'We translate creative work into live programs—encompassing design, development, and search optimization.',
  },
  {
    step: '05',
    title: 'Evolve',
    description:
      'Using metrics and analytics, we track performance, identify opportunities, and initiate new strategies for continuous growth.',
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-[1400px] px-8 md:px-12 lg:px-20">
        {/* Header */}
        <AnimatedSection className="mb-24">
          <span className="mb-4 block text-[10px] font-bold tracking-[0.4em] text-accent uppercase">
            What We Do
          </span>
          <h1 className="mb-8 max-w-3xl text-5xl font-black tracking-tight text-white md:text-7xl">
            Design-driven.
            <br />
            Strategy-led.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-white/60">
            We take a digital-first approach to elevating your brand at every touchpoint—websites, creative, and growth strategy.
          </p>
        </AnimatedSection>

        {/* Services */}
        <div className="mb-32 flex flex-col gap-px bg-white/5">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <div className="bg-background p-10 lg:p-16">
                <div className="grid gap-12 lg:grid-cols-2">
                  <div>
                    <div className="mb-6 flex items-center gap-4">
                      <span className="text-[10px] font-bold tracking-[0.3em] text-white/20 uppercase">
                        {service.number}
                      </span>
                      <span className="h-px flex-1 bg-white/5" />
                      <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase">
                        {service.subtitle}
                      </span>
                    </div>
                    <h2 className="mb-6 text-4xl font-black tracking-tight text-white md:text-5xl">
                      {service.title}
                    </h2>
                    <p className="text-base leading-relaxed text-white/60">{service.description}</p>
                  </div>
                  <div>
                    <h3 className="mb-5 text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase">
                      Capabilities
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {service.capabilities.map((cap) => (
                        <li
                          key={cap}
                          className="flex items-center gap-3 border-b border-white/5 pb-3 text-sm text-white/70 last:border-0 last:pb-0"
                        >
                          <span className="h-[1px] w-4 bg-accent/60 flex-shrink-0" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Process */}
        <AnimatedSection className="mb-20">
          <span className="mb-4 block text-[10px] font-bold tracking-[0.4em] text-accent uppercase">
            How We Work
          </span>
          <h2 className="mb-16 text-4xl font-black tracking-tight text-white md:text-5xl">
            Our Process
          </h2>
          <div className="grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.07}>
                <div className="bg-background p-8">
                  <span className="mb-6 block text-3xl font-black tracking-tight text-white/10">
                    {step.step}
                  </span>
                  <h3 className="mb-3 text-lg font-black tracking-tight text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-white/50">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Engagement Models */}
        <AnimatedSection className="mb-24">
          <h2 className="mb-12 text-3xl font-black tracking-tight text-white">Engagement Models</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-10">
              <h3 className="mb-4 text-xl font-black text-white">Project-Based</h3>
              <p className="text-sm leading-relaxed text-white/60">
                For one-time needs with a defined scope, budget, and timeline. Perfect for website redesigns, brand refreshes, or specific campaign work.
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-10">
              <h3 className="mb-4 text-xl font-black text-white">Agency of Record</h3>
              <p className="text-sm leading-relaxed text-white/60">
                Ongoing partnership for continuous design and marketing support. We become an embedded extension of your team, always on and always aligned.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="rounded-2xl border border-white/5 bg-white/[0.02] p-12 text-center">
          <h2 className="mb-6 text-4xl font-black tracking-tight text-white">Ready to get started?</h2>
          <p className="mb-8 text-base text-white/60">Let&apos;s discuss your project and find the best path forward.</p>
          <Link
            href="/lets-talk"
            className="inline-flex items-center gap-4 rounded-full bg-white px-10 py-5 text-[11px] font-bold tracking-[0.2em] text-background uppercase transition-all duration-300 hover:bg-accent hover:text-white"
          >
            Start a Conversation
          </Link>
        </AnimatedSection>
      </div>
    </div>
  );
}
