import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Milliseconds
  threshold?: number;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className = '',
  delay = 0,
  threshold = 0.08,
}) => {
  const { ref, isVisible } = useScrollReveal(threshold);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`scroll-reveal ${isVisible ? 'revealed' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
