import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'About',
  description:
    'We are a passionate team, rooted in digital. A creative agency building websites and digital platforms for industry-leading brands in Silicon Valley.',
};

const values = [
  {
    title: 'Forward-Thinking',
    description:
      'We push the boundaries of digital design and development by combining contemporary trends with proven methodologies.',
  },
  {
    title: 'Constant Growth',
    description:
      'Our team of ambitious creatives and strategists is committed to professional development and continuous learning.',
  },
  {
    title: 'Detail-Oriented',
    description:
      'Quality over quantity, always. We believe the details make the design—and they make the difference.',
  },
  {
    title: 'Great Character',
    description:
      'We value personal integrity alongside skill and experience. Good work comes from good people.',
  },
  {
    title: 'Self-Starting',
    description:
      'We encourage entrepreneurial mindsets and genuine ownership of every project we take on.',
  },
  {
    title: 'Stay Humble',
    description:
      'We welcome feedback and avoid ego-driven decisions. The best idea wins, regardless of who had it.',
  },
];

const stats = [
  { value: '100+', label: 'Projects Delivered' },
  { value: '15+', label: 'Years in Industry' },
  { value: '50+', label: 'Brand Clients' },
  { value: '3', label: 'Award-Winning Projects' },
];

const testimonials = [
  {
    quote:
      'ApexAI delivered an exceptional project from start to finish. Their project management and design teams are second to none.',
    author: 'Chris Salazar',
    role: 'VP of Marketing, Netgear',
  },
  {
    quote:
      'An unbelievable team with incredible talent. They understood our vision immediately and executed it perfectly.',
    author: 'Adam Jaques',
    role: 'CMO, Pulse Secure',
  },
  {
    quote:
      'We saw exceptional results from day one. The team brought both creative excellence and strategic thinking to our engagement.',
    author: 'Dmitry Lipkin',
    role: 'Director of Marketing, Maxim Integrated',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-[1400px] px-8 md:px-12 lg:px-20">
        {/* Hero */}
        <AnimatedSection className="mb-32">
          <span className="mb-4 block text-[10px] font-bold tracking-[0.4em] text-accent uppercase">
            Who We Are
          </span>
          <h1 className="mb-10 max-w-4xl text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl">
            A passionate team, rooted in digital.
          </h1>
          <div className="grid gap-8 md:grid-cols-2">
            <p className="text-lg leading-relaxed text-white/60">
              Baunfire is a digital agency headquartered in San Jose, California, in the heart of Silicon Valley.
              We build websites and digital platforms for industry-leading brands.
            </p>
            <p className="text-lg leading-relaxed text-white/60">
              We are a creative team of designers, developers, strategists, and producers dedicated to building
              elevated digital experiences that drive real business outcomes.
            </p>
          </div>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection className="mb-32">
          <div className="grid grid-cols-2 gap-px bg-white/5 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-background p-10 text-center">
                <div className="mb-2 text-5xl font-black tracking-tight text-white md:text-6xl">
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Values */}
        <AnimatedSection className="mb-32">
          <span className="mb-4 block text-[10px] font-bold tracking-[0.4em] text-accent uppercase">
            How We Work
          </span>
          <h2 className="mb-16 text-4xl font-black tracking-tight text-white md:text-5xl">
            What We Stand For
          </h2>
          <div className="grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.07}>
                <div className="bg-background p-8 lg:p-10">
                  <h3 className="mb-4 text-xl font-black tracking-tight text-white">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Testimonials */}
        <AnimatedSection className="mb-32">
          <span className="mb-4 block text-[10px] font-bold tracking-[0.4em] text-accent uppercase">
            Client Voices
          </span>
          <h2 className="mb-16 text-4xl font-black tracking-tight text-white md:text-5xl">
            What They Say
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.author} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-2xl border border-white/5 bg-white/[0.02] p-8">
                  <p className="mb-8 flex-1 text-base leading-relaxed text-white/70">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-sm font-bold text-white">{t.author}</p>
                    <p className="text-xs text-white/40">{t.role}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Location / Contact */}
        <AnimatedSection className="grid gap-12 border-t border-white/5 pt-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-black tracking-tight text-white">Find Us</h2>
            <address className="not-italic text-base leading-relaxed text-white/60">
              75 E Santa Clara St, Suite 1425
              <br />
              San Jose, California 95113
              <br />
              <br />
              <a href="tel:+14088998998" className="hover:text-white transition-colors duration-200">
                (408) 899-8998
              </a>
              <br />
              <a
                href="mailto:hello@apexai.com"
                className="hover:text-white transition-colors duration-200"
              >
                hello@apexai.com
              </a>
            </address>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-black tracking-tight text-white">Work With Us</h2>
            <p className="text-base leading-relaxed text-white/60">
              We work with brands ready to invest in elevated digital experiences. If that sounds like you, let&apos;s talk.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/lets-talk"
                className="inline-flex items-center gap-4 rounded-full bg-white px-8 py-4 text-[11px] font-bold tracking-[0.2em] text-background uppercase transition-all duration-300 hover:bg-accent hover:text-white"
              >
                Start a Project
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center gap-4 rounded-full border border-white/20 px-8 py-4 text-[11px] font-bold tracking-[0.2em] text-white uppercase transition-all duration-300 hover:border-white hover:bg-white/5"
              >
                Join the Team
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
