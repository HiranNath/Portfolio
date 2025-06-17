import React from 'react';
import { NeonColor } from '../types';

interface NavbarProps {
  currentColor: NeonColor;
  onNavigate: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentColor, onNavigate }) => {
  if (!currentColor) return null;

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // Prevent default anchor jump
    onNavigate(href); // Let App.tsx handle view change and scrolling
  };

  return (
    <nav className="fixed top-0 z-40 w-full border-b border-gray-800/50 bg-black/70 backdrop-blur-lg">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <a 
            href="#home" // Still useful for semantics and right-click "open in new tab" (though SPA)
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-2xl font-bold transition-colors duration-1000 cursor-pointer"
            style={{ color: currentColor.primary, textShadow: `0 0 8px ${currentColor.primary}` }}
            aria-label="Navigate to home section"
          >
            CyberDev
          </a>
          <div className="hidden gap-x-6 md:flex">
            {navItems.map(item => (
              <a 
                key={item.label}
                href={item.href} // Semantic href
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-2 py-1 text-gray-300 rounded-md hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_${currentColor.primary}] focus:outline-none focus:ring-2 focus:ring-[${currentColor.primary}] cursor-pointer`}
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
