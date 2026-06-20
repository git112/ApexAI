import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost' | 'outline';
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export function Button({ href, onClick, variant = 'primary', children, className = '', external }: ButtonProps) {
  const base =
    'inline-flex items-center gap-4 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300';

  const variants = {
    primary:
      'rounded-full bg-white text-background px-8 py-4 hover:bg-accent hover:text-white',
    ghost:
      'rounded-full bg-[#252525] text-white px-8 py-5 hover:bg-[#333333]',
    outline:
      'border border-white/20 rounded-full text-white px-8 py-4 hover:border-white hover:bg-white/5',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
