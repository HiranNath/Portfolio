import React from 'react';
import { NeonColor } from '../types';
import SectionWrapper from './SectionWrapper';

interface AboutSectionProps {
  currentColor: NeonColor;
  skills: string[];
  profileImageUrl: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ currentColor, skills, profileImageUrl }) => {
  if (!currentColor) return null;

  return (
    <section id="about" className="py-20 md:py-28 px-4 bg-black"> {/* Changed bg to black for consistency */}
      <div className="max-w-6xl mx-auto">
        <SectionWrapper>
          <h2 
            className="mb-16 text-4xl font-bold text-center transition-colors duration-1000 md:text-5xl"
            style={{ color: currentColor.primary, textShadow: `0 0 12px ${currentColor.primary}, 0 0 24px ${currentColor.primary}` }}
          >
            About Me
          </h2>
        </SectionWrapper>

        <div className={`flex flex-col items-center gap-10 md:gap-16 p-6 md:p-10 border bg-gray-900/50 rounded-2xl backdrop-blur-md shadow-2xl transition-all duration-1000 border-[${currentColor.primary}]/30 hover:border-[${currentColor.primary}]/70 shadow-[${currentColor.primary}]/10 hover:shadow-[${currentColor.primary}]/30 md:flex-row`}>
          <SectionWrapper className="md:w-2/5 flex-shrink-0" delay="delay-[100ms]">
            <div className="relative w-56 h-56 mx-auto md:w-72 md:h-72 group"> {/* Slightly larger image */}
              <img 
                src={profileImageUrl}
                alt="Hiran Nath"
                className={`object-cover w-full h-full rounded-full border-4 transition-all duration-700 ease-in-out shadow-2xl group-hover:scale-105 border-[${currentColor.primary}] shadow-[0_0_30px_-5px_${currentColor.primary}]`}
              />
              <div 
                className={`absolute border-2 border-dashed rounded-full -inset-3 opacity-40 animate-[spin_10s_linear_infinite] border-[${currentColor.secondary}] transition-all duration-700 ease-in-out group-hover:opacity-70 group-hover:-inset-4 group-hover:border-[${currentColor.primary}]`}
              />
            </div>
          </SectionWrapper>

          <SectionWrapper className="md:w-3/5" delay="delay-[300ms]">
            <p className="mb-5 text-lg leading-relaxed text-gray-300">
              I'm a B.Tech Computer Science student with a fervent passion for the dynamic intersection of 
              <strong className={`font-semibold text-[${currentColor.primary}]`}> frontend development</strong> and 
              <strong className={`font-semibold text-[${currentColor.secondary}]`}> cybersecurity</strong>. My journey is fueled by a curiosity to understand 
              how digital systems are built, function, and critically, how they can be secured.
            </p>
            <p className="mb-7 text-lg leading-relaxed text-gray-300">
              I am actively honing my skills in modern web technologies like React, TypeScript, and Node.js, while simultaneously 
              delving into cybersecurity domains such as network security, ethical hacking principles.
            </p>
            <h3 className={`mb-4 text-xl font-semibold transition-colors duration-1000 text-[${currentColor.primary}]`}>Core Skills:</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <SectionWrapper 
                  key={skill} 
                  delay={`delay-[${400 + index * 50}ms]`}
                  className={`px-4 py-2 text-sm rounded-md border bg-gray-800/70 transition-all duration-300 ease-out hover:scale-105 border-[${currentColor.secondary}]/50 hover:border-[${currentColor.primary}] text-[${currentColor.secondary}] hover:text-[${currentColor.primary}] hover:shadow-[0_0_15px_${currentColor.primary}]/50`}
                >
                  {skill}
                </SectionWrapper>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
