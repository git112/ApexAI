import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-8 text-center">
      <span className="mb-6 block text-[10px] font-bold tracking-[0.4em] text-accent uppercase">
        404
      </span>
      <h1 className="mb-6 text-6xl font-black tracking-tight text-white md:text-8xl">
        Page Not Found
      </h1>
      <p className="mb-12 max-w-md text-lg text-white/60">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-4 rounded-full bg-white px-8 py-4 text-[11px] font-bold tracking-[0.2em] text-background uppercase transition-all duration-300 hover:bg-accent hover:text-white"
      >
        Back to Home
      </Link>
    </div>
  );
}
