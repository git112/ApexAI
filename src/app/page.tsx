import { HeroSection } from '@/components/HeroSection';
import { ScrollTicker } from '@/components/home/ScrollTicker';
import { FeaturedWork } from '@/components/home/FeaturedWork';
import { ServicesSection } from '@/components/home/ServicesSection';
import { LatestInsights } from '@/components/home/LatestInsights';
import { CTASection } from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ScrollTicker />
      <FeaturedWork />
      <ServicesSection />
      <LatestInsights />
      <CTASection />
    </>
  );
}
