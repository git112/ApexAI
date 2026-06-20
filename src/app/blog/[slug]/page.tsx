import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, generateBlogStaticParams, blogPosts } from '@/lib/data/blog';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export async function generateStaticParams() {
  return generateBlogStaticParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const idx = blogPosts.findIndex((p) => p.slug === slug);
  const related = blogPosts.filter((_, i) => i !== idx).slice(0, 3);

  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-[1400px] px-8 md:px-12 lg:px-20">
        {/* Breadcrumb */}
        <AnimatedSection className="mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase transition-colors duration-200 hover:text-white"
          >
            ← All Insights
          </Link>
        </AnimatedSection>

        <div className="grid gap-16 lg:grid-cols-[1fr_340px]">
          {/* Main */}
          <div>
            <AnimatedSection className="mb-12">
              <span
                className={`mb-6 inline-block rounded-full px-4 py-1.5 text-[9px] font-bold tracking-[0.2em] uppercase ${
                  post.category === 'Web & Digital Design'
                    ? 'bg-accent/10 text-accent'
                    : post.category === 'SEO & Digital Marketing'
                      ? 'bg-blue-500/10 text-blue-400'
                      : 'bg-purple-500/10 text-purple-400'
                }`}
              >
                {post.category}
              </span>
              <h1 className="mb-8 text-4xl font-black leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </AnimatedSection>

            {/* Excerpt */}
            <AnimatedSection className="mb-12 rounded-2xl border border-white/5 bg-white/[0.02] p-8">
              <p className="text-xl leading-relaxed text-white/70 italic">{post.excerpt}</p>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection>
              <div
                className="blog-content max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </AnimatedSection>

            {/* Share / CTA */}
            <AnimatedSection className="mt-16 border-t border-white/5 pt-12">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-bold text-white">Found this helpful?</p>
                  <p className="text-sm text-white/50">Share it with your team.</p>
                </div>
                <Link
                  href="/lets-talk"
                  className="inline-flex items-center gap-4 rounded-full bg-white px-8 py-4 text-[11px] font-bold tracking-[0.2em] text-background uppercase transition-all duration-300 hover:bg-accent hover:text-white"
                >
                  Start a Project
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <AnimatedSection delay={0.2} className="self-start">
            <div className="sticky top-32">
              <h3 className="mb-6 text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase">
                Related Articles
              </h3>
              <div className="flex flex-col gap-4">
                {related.map((rpost) => (
                  <Link
                    key={rpost.slug}
                    href={`/blog/${rpost.slug}`}
                    className="group block rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-colors duration-200 hover:bg-white/[0.05]"
                  >
                    <span className="mb-2 block text-[9px] font-bold tracking-[0.2em] text-accent uppercase">
                      {rpost.category}
                    </span>
                    <p className="text-sm font-bold leading-snug text-white transition-colors duration-200 group-hover:text-accent">
                      {rpost.title}
                    </p>
                    <p className="mt-2 text-[10px] text-white/30">{rpost.date}</p>
                  </Link>
                ))}
              </div>

              <div className="mt-10 rounded-xl border border-white/5 bg-white/[0.02] p-6 text-center">
                <p className="mb-4 text-sm font-bold text-white">Ready to elevate your brand?</p>
                <Link
                  href="/lets-talk"
                  className="block w-full rounded-full bg-accent py-3 text-[10px] font-bold tracking-[0.2em] text-white uppercase transition-opacity duration-200 hover:opacity-80"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
