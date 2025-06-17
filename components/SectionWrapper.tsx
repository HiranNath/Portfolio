import React, { useRef, useEffect, useState } from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: string; // Tailwind delay class e.g., 'delay-200'
  threshold?: number;
  once?: boolean; // Trigger animation only once
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = '', delay = '', threshold = 0.1, once = true }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && observer && currentRef) { // check observer and currentRef again
            observer.unobserve(currentRef);
          }
        } else {
          if (!once) {
            setIsVisible(false); // Reset if not 'once' and element scrolls out of view
          }
        }
      },
      {
        threshold: threshold,
      }
    );

    observer.observe(currentRef);
    
    return () => {
      if (currentRef && observer) { // check observer and currentRef again
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]); // Removed sectionRef from deps to avoid re-observing on re-renders if ref object changes identity

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${delay} ${className}`}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
