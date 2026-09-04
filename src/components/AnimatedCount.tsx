import React, { useEffect, useState, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

interface AnimatedCountProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const AnimatedCount: React.FC<AnimatedCountProps> = ({
  target,
  prefix = '',
  suffix = '',
  duration = 2,
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration,
        ease: 'easeOut',
        onUpdate: (latest) => {
          setCount(Math.floor(latest));
        },
      });
      return () => controls.stop();
    } else {
      setCount(0);
    }
  }, [isInView, target, duration]);

  // Format large numbers if needed (e.g. 1000 -> 1,000)
  const formattedCount = count.toLocaleString();

  return (
    <span ref={ref} className={className}>
      {prefix}{formattedCount}{suffix}
    </span>
  );
};
