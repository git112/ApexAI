import Link from 'next/link';

const navLinks = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/careers', label: 'Careers' },
  { href: '/blog', label: 'Insights' },
  { href: '/lets-talk', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://instagram.com', label: 'Instagram' },
  { href: 'https://facebook.com', label: 'Facebook' },
  { href: 'https://twitter.com', label: 'Twitter' },
  { href: 'https://linkedin.com', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background px-8 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        {/* Top row */}
        <div className="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-6 block">
              <span className="text-2xl font-black tracking-[0.15em] text-white uppercase">APEXAI</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/50">
              A digital agency focused on web. Building elevated brand experiences in the heart of Silicon Valley.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="mb-5 text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase">Navigation</p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase">Contact</p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@apexai.com"
                className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
              >
                hello@apexai.com
              </a>
              <a
                href="tel:+14088998998"
                className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
              >
                (408) 899-8998
              </a>
              <address className="not-italic text-sm leading-relaxed text-white/60">
                75 E Santa Clara St, Ste 1425
                <br />
                San Jose, California 95113
              </address>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-8 h-px bg-white/5" />

        {/* Bottom row */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} ApexAI Solutions. All rights reserved.
          </p>

          {/* Social */}
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold tracking-[0.15em] text-white/40 uppercase transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
