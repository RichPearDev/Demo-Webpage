'use client';

import { ReactNode } from 'react';

interface ScrollLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function ScrollLink({ href, children, className = '', onClick }: ScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.startsWith('#') ? href : `#${href}`;
    const targetSection = document.querySelector<HTMLElement>(targetId);
    
    if (targetSection) {
      const isMobile = window.innerWidth < 768;
      const navHeight = isMobile ? 80 : 72;
      const targetPosition =
        targetSection.getBoundingClientRect().top +
        window.pageYOffset -
        navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
      
      if (onClick) onClick();
    }
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
} 
