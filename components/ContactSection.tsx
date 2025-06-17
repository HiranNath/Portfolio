import React from 'react';
import { NeonColor } from '../types';
import { Mail, Github, Linkedin } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

interface ContactSectionProps {
  currentColor: NeonColor;
}

const ContactSection: React.FC<ContactSectionProps> = ({ currentColor }) => {
  if (!currentColor) return null;

  const contactLinks = [
    { 
      href: "mailto:hirannath16@gmail.com", 
      icon: Mail, 
      label: "Email",
      aria: "Send an email to Hiran Nath"
    },
    { 
      href: "https://github.com/HiranNath", 
      icon: Github, 
      label: "GitHub",
      aria: "View Hiran Nath's GitHub profile"
    },
    { 
      href: "https://linkedin.com/in/hiran-nath-k-b", 
      icon: Linkedin, 
      label: "LinkedIn",
      aria: "View Hiran Nath's LinkedIn profile"
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 px-4 text-center bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <SectionWrapper>
          <h2 
            className="mb-8 text-4xl font-bold transition-colors duration-1000 md:text-5xl"
            style={{ color: currentColor.primary, textShadow: `0 0 12px ${currentColor.primary}, 0 0 24px ${currentColor.primary}` }}
          >
            Get In Touch
          </h2>
          <p className="mb-12 text-xl text-gray-300 leading-relaxed">
            Ready to collaborate, discuss a project, or just want to connect? Feel free to reach out!
          </p>
        </SectionWrapper>
        <SectionWrapper delay="delay-[200ms]">
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-10">
            {contactLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.aria}
                className={`group flex flex-col items-center justify-center gap-3 p-6 rounded-xl border w-48 h-48 border-gray-700/80 bg-gray-900/60 text-gray-300 hover:text-white transition-all duration-300 ease-out hover:scale-110 hover:border-[${currentColor.primary}] hover:shadow-[0_0_25px_${currentColor.primary}]/60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-[${currentColor.primary}]`}
              >
                <link.icon size={40} className={`transition-all duration-300 text-[${currentColor.primary}] group-hover:text-[${currentColor.primary}] group-hover:scale-110`} />
                <span className="text-lg font-medium">{link.label}</span>
              </a>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
};

export default ContactSection;
