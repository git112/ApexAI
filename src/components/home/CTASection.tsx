import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function CTASection() {
  return (
    <section className="border-t border-white/5 px-8 py-24 md:px-12 lg:px-20 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <AnimatedSection className="flex flex-col items-start gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-black leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
              Ready to build
              <br />
              something great?
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              We work with brands that are ready to invest in their digital presence and grow.
            </p>
            <Link
              href="/lets-talk"
              className="group inline-flex items-center gap-4 rounded-full bg-white px-8 py-4 text-[11px] font-bold tracking-[0.2em] text-background uppercase transition-all duration-300 hover:bg-accent hover:text-white"
            >
              Start a Conversation
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
