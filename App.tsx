import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CursorTrail from './components/CursorTrail';
import AdditionalProjectsPage from './components/AdditionalProjectsPage'; // New component
import { 
  NEON_COLORS, 
  MAIN_PROJECTS_DATA,
  ADDITIONAL_PROJECTS_DATA,
  SKILLS_ARRAY, 
  PROFILE_IMAGE_URL 
} from './constants';
import useColorCycle from './hooks/useColorCycle';
import useMousePosition from './hooks/useMousePosition';
import { NeonColor } from './types';

type View = 'main' | 'additionalProjects';

function App() {
  const currentColor: NeonColor = useColorCycle(NEON_COLORS, 4000);
  const mousePosition = useMousePosition();
  const [currentView, setCurrentView] = useState<View>('main');
  const [targetSection, setTargetSection] = useState<string | null>(null);

  useEffect(() => {
    // Scroll to section if targetSection is set and on main view
    if (targetSection && currentView === 'main') {
      const element = document.getElementById(targetSection.substring(1)); // Remove '#'
      if (element) {
        // A slight delay can help ensure the element is in the DOM and layout is complete
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); 
      }
      setTargetSection(null); // Reset after attempting to scroll
    }
  }, [currentView, targetSection]);
  
  // Scroll to top when view changes, unless a specific section is targeted
  useEffect(() => {
    if (!targetSection) {
      window.scrollTo(0, 0);
    }
  }, [currentView, targetSection]);

  if (!currentColor) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white text-xl">
        Initializing Cyber Interface...
      </div>
    );
  }
  
  const primaryColorWithAlphaForGrid = currentColor.primary + '2a'; 

  const handleNavigation = (sectionId: string) => {
    if (currentView !== 'main') {
      setCurrentView('main');
      setTargetSection(sectionId); // Set target for useEffect to handle scroll
    } else {
      // Already on main page, just scroll
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const switchToAdditionalProjects = () => {
    setCurrentView('additionalProjects');
    setTargetSection(null); // Ensure no residual scroll target
  };

  const switchToMainPortfolio = (section: string = '#home') => {
    setCurrentView('main');
    setTargetSection(section);
  };

  return (
    <div 
      className="min-h-screen overflow-x-hidden font-sans text-white bg-black selection:text-black"
      style={{ '--selection-bg': currentColor.primary, backgroundColor: '#0A0A0A' } as React.CSSProperties}
    >
      <CursorTrail position={mousePosition} color={currentColor.primary} />
      
      <div 
        className={`fixed inset-0 opacity-20 -z-10 bg-[length:50px_50px] bg-[image:linear-gradient(to_bottom,${primaryColorWithAlphaForGrid}_1px,transparent_1px),linear-gradient(to_right,${primaryColorWithAlphaForGrid}_1px,transparent_1px)] animate-[pulse_10s_cubic-bezier(0.4,0,0.6,1)_infinite]`}
      />

      <Navbar currentColor={currentColor} onNavigate={handleNavigation} />
      
      <main className="relative z-10">
        {currentView === 'main' ? (
          <>
            <HeroSection currentColor={currentColor} />
            <AboutSection currentColor={currentColor} skills={SKILLS_ARRAY} profileImageUrl={PROFILE_IMAGE_URL} />
            <ProjectsSection 
              currentColor={currentColor} 
              projects={MAIN_PROJECTS_DATA} 
              onExploreMore={switchToAdditionalProjects}
            />
            <ContactSection currentColor={currentColor} />
          </>
        ) : (
          <AdditionalProjectsPage 
            currentColor={currentColor} 
            projects={ADDITIONAL_PROJECTS_DATA}
            onNavigateBack={() => switchToMainPortfolio('#home')}
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
