import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const services = [
  {
    number: '01',
    title: 'Websites',
    description:
      'We build impactful digital experiences through great UX, design, and development. From corporate sites to eCommerce, we craft websites that convert.',
    tags: ['Web Design', 'UI/UX', 'Development', 'CMS'],
  },
  {
    number: '02',
    title: 'Creative',
    description:
      'We design visually-engaging marketing assets to help drive your brand forward—from identity systems to motion graphics and everything in between.',
    tags: ['Branding', 'Motion', 'Illustration', 'Marketing'],
  },
  {
    number: '03',
    title: 'Strategy',
    description:
      'We identify business challenges and develop tailored solutions to achieve your goals—anchored in research, data, and competitive insight.',
    tags: ['Research', 'SEO', 'Analytics', 'Content'],
  },
];

export function ServicesSection() {
  return (
    <section className="border-t border-white/5 px-8 py-24 md:px-12 lg:px-20 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <AnimatedSection className="mb-16">
          <span className="mb-4 block text-[10px] font-bold tracking-[0.4em] text-accent uppercase">
            What We Do
          </span>
          <h2 className="max-w-2xl text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
            Design-driven. Strategy-led.
          </h2>
        </AnimatedSection>

        <div className="grid gap-px bg-white/5 md:grid-cols-3">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <div className="group flex h-full flex-col bg-background p-8 transition-colors duration-300 hover:bg-white/[0.03] lg:p-12">
                <span className="mb-8 block text-[10px] font-bold tracking-[0.3em] text-white/20 uppercase">
                  {service.number}
                </span>
                <h3 className="mb-5 text-3xl font-black tracking-tight text-white">{service.title}</h3>
                <p className="mb-8 flex-1 text-sm leading-relaxed text-white/60">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-white/40 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12">
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] text-white/60 uppercase transition-colors duration-200 hover:text-white"
          >
            Explore Our Services
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
