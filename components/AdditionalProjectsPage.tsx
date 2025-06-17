import React from 'react';
import { Project, NeonColor } from '../types';
import ProjectCard from './ProjectCard';
import SectionWrapper from './SectionWrapper';
import { ArrowLeftCircle } from 'lucide-react';

interface AdditionalProjectsPageProps {
  currentColor: NeonColor;
  projects: Project[]; // Will receive ADDITIONAL_PROJECTS_DATA
  onNavigateBack: () => void;
}

const AdditionalProjectsPage: React.FC<AdditionalProjectsPageProps> = ({ currentColor, projects, onNavigateBack }) => {
  if (!currentColor) return null;

  return (
    <section id="additional-projects" className="py-20 md:py-28 px-4 bg-black/50 min-h-screen pt-24"> {/* Added pt-24 for navbar offset */}
      <div className="max-w-7xl mx-auto">
        <SectionWrapper>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 sm:mb-16">
            <h2 
              className="text-3xl sm:text-4xl font-bold transition-colors duration-1000 md:text-5xl mb-6 sm:mb-0 text-center sm:text-left"
              style={{ color: currentColor.primary, textShadow: `0 0 12px ${currentColor.primary}, 0 0 24px ${currentColor.primary}` }}
            >
              My Extended Portfolio
            </h2>
            <button
              onClick={onNavigateBack}
              aria-label="Back to main portfolio"
              className={`inline-flex items-center justify-center px-6 py-3 text-md font-semibold rounded-lg transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black border-2 shadow-md text-[${currentColor.secondary}] border-[${currentColor.secondary}] hover:bg-[${currentColor.secondary}] hover:text-black hover:shadow-[0_0_15px_${currentColor.secondary}]/70`}
            >
              <ArrowLeftCircle size={20} className="mr-2" />
              Back to Main Portfolio
            </button>
          </div>
        </SectionWrapper>
        
        {projects.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              // Using project.title + index for key to be absolutely sure of uniqueness if titles could ever be non-unique across lists (though unlikely here)
              <ProjectCard 
                key={`${project.title}-${index}-additional`} 
                project={project} 
                currentColor={currentColor}
                delay={`delay-[${index * 150}ms]`}
              />
            ))}
          </div>
        ) : (
          <SectionWrapper>
            <p className="text-center text-xl text-gray-400 mt-10">
              More projects are currently under development. Stay tuned!
            </p>
          </SectionWrapper>
        )}
      </div>
    </section>
  );
};

export default AdditionalProjectsPage;
