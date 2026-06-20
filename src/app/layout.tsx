import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'ApexAI Solutions | Web Design & Digital Agency in Silicon Valley',
    template: '%s | ApexAI Solutions',
  },
  description:
    'A digital agency focused on web. Building elevated brand experiences through great UX, design, and development in the heart of Silicon Valley.',
  keywords: ['web design', 'digital agency', 'Silicon Valley', 'UX design', 'web development', 'branding'],
  authors: [{ name: 'ApexAI Solutions' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ApexAI Solutions',
    title: 'ApexAI Solutions | Web Design & Digital Agency in Silicon Valley',
    description:
      'A digital agency focused on web. Building elevated brand experiences through great UX, design, and development.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ApexAI Solutions | Web Design & Digital Agency',
    description: 'A digital agency focused on web. Silicon Valley.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
