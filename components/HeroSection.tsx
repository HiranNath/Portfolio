import React from 'react';
import { NeonColor } from '../types';
import { Shield, Code, Zap } from 'lucide-react'; // Removed ArrowDownCircle
import SectionWrapper from './SectionWrapper';

interface HeroSectionProps {
  currentColor: NeonColor;
}

const HeroSection: React.FC<HeroSectionProps> = ({ currentColor }) => {
  if (!currentColor) return null;
  
  const features = [
    { text: "Frontend Development", icon: Code },
    { text: "Cybersecurity", icon: Shield },
    { text: "Innovation", icon: Zap },
  ];

  return (
    <section id="home" className="flex items-center justify-center min-h-screen px-4 pt-24 pb-12 text-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* Optional: Add more background elements here if needed, like subtle particles */}
      </div>
      <div className="max-w-4xl mx-auto">
        <SectionWrapper delay="delay-[0ms]">
           <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
            Hiran Nath
          </h1>
        </SectionWrapper>
        <SectionWrapper delay="delay-[200ms]">
          <h2 
            className="mb-6 text-3xl font-semibold transition-colors duration-1000 md:text-4xl lg:text-5xl"
            style={{ color: currentColor.primary, textShadow: `0 0 10px ${currentColor.primary}, 0 0 20px ${currentColor.primary}`}}
          >
            Frontend Developer
          </h2>
        </SectionWrapper>
        <SectionWrapper delay="delay-[400ms]">
          <h2 
            className="mb-8 text-3xl font-semibold transition-colors duration-1000 md:text-4xl lg:text-5xl"
            style={{ color: currentColor.secondary, textShadow: `0 0 10px ${currentColor.secondary}, 0 0 20px ${currentColor.secondary}`}}
          >
            & Cybersecurity Enthusiast
          </h2>
        </SectionWrapper>
        
        <SectionWrapper delay="delay-[600ms]">
          <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-300 md:text-xl leading-relaxed">
            A passionate BTech CSE student navigating the digital frontiers of web development and cybersecurity,
            committed to building secure, innovative, and user-centric applications.
          </p>
        </SectionWrapper>
        
        <SectionWrapper delay="delay-[800ms]">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`flex items-center gap-3 px-6 py-3 border rounded-lg bg-gray-900/60 backdrop-blur-sm border-[${currentColor.primary}]/50 shadow-lg shadow-[${currentColor.primary}]/20 transition-all duration-300 hover:shadow-[${currentColor.primary}]/40 hover:border-[${currentColor.primary}]`}
              >
                <feature.icon size={22} className={`transition-colors duration-300 text-[${currentColor.primary}]`} />
                <span className="text-gray-200">{feature.text}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>
        {/* "Explore My Projects" button removed from here */}
      </div>
    </section>
  );
};

export default HeroSection;