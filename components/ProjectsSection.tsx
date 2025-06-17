import React from 'react';
import { Project, NeonColor } from '../types';
import ProjectCard from './ProjectCard';
import SectionWrapper from './SectionWrapper';
import { Eye } from 'lucide-react'; // Changed icon to Eye for "View More"

interface ProjectsSectionProps {
  currentColor: NeonColor;
  projects: Project[]; // Will receive MAIN_PROJECTS_DATA
  onExploreMore: () => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ currentColor, projects, onExploreMore }) => {
  if (!currentColor) return null;

  return (
    <section id="projects" className="py-20 md:py-28 px-4 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <SectionWrapper>
          <h2 
            className="mb-16 text-4xl font-bold text-center transition-colors duration-1000 md:text-5xl"
            style={{ color: currentColor.primary, textShadow: `0 0 12px ${currentColor.primary}, 0 0 24px ${currentColor.primary}` }}
          >
            My Projects
          </h2>
        </SectionWrapper>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => ( // These are the main projects
            <ProjectCard 
              key={project.title} 
              project={project} 
              currentColor={currentColor}
              delay={`delay-[${index * 150}ms]`}
            />
          ))}
        </div>
        
        <SectionWrapper delay="delay-[300ms]">
          <div className="mt-16 text-center">
            <button
              onClick={onExploreMore}
              className={`inline-flex items-center justify-center px-8 py-3.5 text-lg font-semibold rounded-lg transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black border-2 shadow-lg text-[${currentColor.primary}] border-[${currentColor.primary}] hover:bg-[${currentColor.primary}] hover:text-black hover:shadow-[0_0_20px_${currentColor.primary}]/70`}
              aria-label="Explore more of my projects"
            >
              <Eye size={22} className="mr-2" />
              View More Projects
            </button>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
};

export default ProjectsSection;
