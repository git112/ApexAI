import Link from 'next/link';
import { blogPosts } from '@/lib/data/blog';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const featured = blogPosts.slice(0, 4);

export function LatestInsights() {
  return (
    <section className="border-t border-white/5 px-8 py-24 md:px-12 lg:px-20 lg:py-36">
      <div className="mx-auto max-w-[1400px]">
        <AnimatedSection className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-4 block text-[10px] font-bold tracking-[0.4em] text-accent uppercase">
              Insights
            </span>
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
              Latest Thinking
            </h2>
          </div>
          <Link
            href="/blog"
            className="group flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-white/60 uppercase transition-colors duration-200 hover:text-white"
          >
            All Insights
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </AnimatedSection>

        <div className="grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col bg-background p-8 transition-colors duration-300 hover:bg-white/[0.03]"
              >
                <span className="mb-6 block text-[9px] font-bold tracking-[0.3em] text-accent uppercase">
                  {post.category}
                </span>
                <h3 className="mb-auto flex-1 text-lg font-bold leading-snug tracking-tight text-white transition-colors duration-200 group-hover:text-accent">
                  {post.title}
                </h3>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-[10px] text-white/30">{post.date}</span>
                  <span className="text-[10px] text-white/30">{post.readTime}</span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
