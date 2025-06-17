import React from 'react';
import { Project, NeonColor } from '../types';
import { Github, ExternalLink } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

interface ProjectCardProps {
  project: Project;
  currentColor: NeonColor;
  delay?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, currentColor, delay }) => {
  if (!currentColor) return null;

  return (
    <SectionWrapper 
      className={`bg-gray-900/70 rounded-2xl p-6 border border-gray-700/80 backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:border-[${currentColor.primary}] hover:shadow-[0_0_30px_-5px_${currentColor.primary}]/70 flex flex-col overflow-hidden group`}
      delay={delay}
      once={false} // Allow re-animation if desired, or set to true
    >
      {project.image && (
        <div className="overflow-hidden mb-5 rounded-lg border border-gray-600/50">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>
      )}
      <h3 className={`mb-3 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[${currentColor.primary}]`}>{project.title}</h3>
      <p className="mb-4 text-base leading-relaxed text-gray-400 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span 
            key={tech}
            className={`px-3 py-1 text-xs font-medium rounded-full border bg-gray-800/60 transition-colors duration-300 border-[${currentColor.secondary}]/50 text-[${currentColor.secondary}] group-hover:border-[${currentColor.primary}]/70 group-hover:text-[${currentColor.primary}]`}
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-6 mt-auto pt-4 border-t border-gray-700/50">
        <a 
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View source code for ${project.title} on GitHub`}
          className={`flex items-center gap-2 text-gray-300 transition-colors duration-300 hover:text-[${currentColor.primary}] hover:drop-shadow-[0_0_5px_${currentColor.primary}]`}
        >
          <Github size={20} />
          <span>Code</span>
        </a>
        {project.live && project.live !== "#" && (
          <a 
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live demo of ${project.title}`}
            className={`flex items-center gap-2 text-gray-300 transition-colors duration-300 hover:text-[${currentColor.primary}] hover:drop-shadow-[0_0_5px_${currentColor.primary}]`}
          >
            <ExternalLink size={20} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </SectionWrapper>
  );
};

export default ProjectCard;
