
import React, { useEffect, useRef, useState } from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number; // 0 to 1, where 0.1 is subtle
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  speed = 0.15 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrolled = window.innerHeight - rect.top;
      
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setOffset(scrolled * speed);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div 
      ref={containerRef} 
      className={`relative overflow-hidden ${className}`}
    >
      <img 
        src={src} 
        alt={alt} 
        className="absolute inset-0 w-full h-[120%] object-cover transition-transform duration-100 ease-out grayscale"
        style={{ 
          transform: `translateY(${offset * -0.5}px)`,
          top: '-10%' 
        }}
      />
    </div>
  );
};

export default ParallaxImage;
