
import React, { useEffect, useRef, useState } from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bgColor?: string;
  containerSize?: 'default' | 'narrow' | 'wide' | 'full';
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id, 
  bgColor = 'transparent',
  containerSize = 'default'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerClasses = {
    default: 'container mx-auto px-6 lg:px-12',
    narrow: 'max-w-4xl mx-auto px-6',
    wide: 'container mx-auto px-6 lg:px-24',
    full: 'w-full px-0',
  };

  return (
    <section 
      id={id}
      ref={sectionRef}
      className={`py-20 lg:py-32 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className={containerClasses[containerSize]}>
        {children}
      </div>
    </section>
  );
};

export default Section;
