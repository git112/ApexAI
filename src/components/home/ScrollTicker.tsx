'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const items = [
  'Web Design',
  'UI/UX',
  'Development',
  'Branding',
  'Strategy',
  'Motion',
  'SEO',
  'Content',
];

export function ScrollTicker() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const tween = gsap.to(track, {
      xPercent: -50,
      repeat: -1,
      duration: 20,
      ease: 'none',
    });

    return () => {
      tween.kill();
    };
  }, []);

  const repeated = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-white/5 py-5">
      <div ref={trackRef} className="flex w-max gap-0">
        {[...repeated, ...repeated].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 px-8 text-[11px] font-bold tracking-[0.3em] text-white/30 uppercase whitespace-nowrap"
          >
            {item}
            <span className="text-accent">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
