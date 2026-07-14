'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  duration?: number;
  distance?: string;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 900,
  distance = '50px',
  className = ''
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px' // Trigger slightly before it enters the viewport fully
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate(0, 0)';
    switch (direction) {
      case 'left':
        return `translate(-${distance}, 0)`;
      case 'right':
        return `translate(${distance}, 0)`;
      case 'up':
        return `translate(0, ${distance})`;
      case 'down':
        return `translate(0, -${distance})`;
      default:
        return 'translate(0, 0)';
    }
  };

  const style: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: 'transform, opacity'
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
