import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/lib/data/blog';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Our thoughts on creativity, digital, and branding. Perspectives on web design, SEO, and digital marketing from the ApexAI team.',
};

const categories = ['All', 'Web & Digital Design', 'SEO & Digital Marketing', 'Customer Trends'];

export default function BlogPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-[1400px] px-8 md:px-12 lg:px-20">
        {/* Header */}
        <AnimatedSection className="mb-20">
          <span className="mb-4 block text-[10px] font-bold tracking-[0.4em] text-accent uppercase">
            Insights
          </span>
          <h1 className="mb-6 text-5xl font-black tracking-tight text-white md:text-7xl">
            Perspectives on
            <br />
            digital and web.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-white/60">
            Our thoughts on creativity, digital, and branding.
          </p>
        </AnimatedSection>

        {/* Category filter (display only) */}
        <AnimatedSection className="mb-16 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <span
              key={cat}
              className={`cursor-pointer rounded-full px-5 py-2 text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-200 ${
                cat === 'All'
                  ? 'bg-white text-background'
                  : 'border border-white/10 text-white/50 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </span>
          ))}
        </AnimatedSection>

        {/* Blog grid */}
        <div className="grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={(i % 3) * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col bg-background p-8 transition-colors duration-300 hover:bg-white/[0.03] lg:p-10"
              >
                <div className="mb-5">
                  <span
                    className={`rounded-full px-3 py-1 text-[9px] font-bold tracking-[0.2em] uppercase ${
                      post.category === 'Web & Digital Design'
                        ? 'bg-accent/10 text-accent'
                        : post.category === 'SEO & Digital Marketing'
                          ? 'bg-blue-500/10 text-blue-400'
                          : 'bg-purple-500/10 text-purple-400'
                    }`}
                  >
                    {post.category}
                  </span>
                </div>

                <h2 className="mb-4 flex-1 text-xl font-black leading-snug tracking-tight text-white transition-colors duration-200 group-hover:text-accent">
                  {post.title}
                </h2>

                <p className="mb-6 text-sm leading-relaxed text-white/50 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-white/30">{post.date}</span>
                  <span className="text-[10px] text-white/30">{post.readTime}</span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
