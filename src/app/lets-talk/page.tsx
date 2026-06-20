'use client';

import { useState } from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const services = [
  'Website Design',
  'Web Development',
  'Brand Identity',
  'SEO & Digital Marketing',
  'Content Strategy',
  'Other',
];

const budgets = [
  'Under $25k',
  '$25k – $50k',
  '$50k – $100k',
  '$100k+',
  'Not Sure Yet',
];

export default function LetsTalkPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [budget, setBudget] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function toggleService(s: string) {
    setSelected((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-[1400px] px-8 md:px-12 lg:px-20">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left: Info */}
          <AnimatedSection>
            <span className="mb-4 block text-[10px] font-bold tracking-[0.4em] text-accent uppercase">
              Get in Touch
            </span>
            <h1 className="mb-8 text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl">
              Let&apos;s build
              <br />
              something.
            </h1>
            <p className="mb-12 max-w-sm text-lg leading-relaxed text-white/60">
              Tell us about your project and we&apos;ll get back to you within 24 hours to schedule an intro call.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-6">
              <div>
                <p className="mb-1 text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase">Email</p>
                <a
                  href="mailto:hello@apexai.com"
                  className="text-base text-white transition-colors duration-200 hover:text-accent"
                >
                  hello@apexai.com
                </a>
              </div>
              <div>
                <p className="mb-1 text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase">Phone</p>
                <a
                  href="tel:+14088998998"
                  className="text-base text-white transition-colors duration-200 hover:text-accent"
                >
                  (408) 899-8998
                </a>
              </div>
              <div>
                <p className="mb-1 text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase">Office</p>
                <address className="not-italic text-base leading-relaxed text-white">
                  75 E Santa Clara St, Ste 1425
                  <br />
                  San Jose, California 95113
                </address>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection delay={0.15}>
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] p-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <span className="text-2xl text-accent">✓</span>
                </div>
                <h2 className="mb-4 text-3xl font-black tracking-tight text-white">Message Sent!</h2>
                <p className="text-base text-white/60">
                  Thanks for reaching out. We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 lg:p-10"
              >
                <div className="flex flex-col gap-8">
                  {/* Name + Email */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase"
                      >
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Jane Smith"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-accent/50 focus:outline-none focus:ring-0 transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="jane@company.com"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-accent/50 focus:outline-none focus:ring-0 transition-colors duration-200"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Your Company"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-accent/50 focus:outline-none focus:ring-0 transition-colors duration-200"
                    />
                  </div>

                  {/* Services */}
                  <div>
                    <p className="mb-3 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                      Services Interested In
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {services.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggleService(s)}
                          className={`rounded-full px-4 py-2 text-[10px] font-bold tracking-[0.15em] uppercase transition-all duration-200 ${
                            selected.includes(s)
                              ? 'bg-accent text-white'
                              : 'border border-white/10 text-white/50 hover:border-white/30 hover:text-white'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <p className="mb-3 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                      Budget Range
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setBudget(b)}
                          className={`rounded-full px-4 py-2 text-[10px] font-bold tracking-[0.15em] uppercase transition-all duration-200 ${
                            budget === b
                              ? 'bg-white text-background'
                              : 'border border-white/10 text-white/50 hover:border-white/30 hover:text-white'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase"
                    >
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="What are you building? What's the timeline? What does success look like?"
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-accent/50 focus:outline-none focus:ring-0 transition-colors duration-200"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-white py-5 text-[11px] font-bold tracking-[0.2em] text-background uppercase transition-all duration-300 hover:bg-accent hover:text-white"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
