// pages/projects.tsx o en una sección de otra página
import React from 'react';

import projects from './projects.json';
import ProjectCard from './Projet';

interface projet{
  project: string;
}

const ProjectsSection: React.FC = () => {
  return (
    <div className="bg-custom-cream container mx-auto px-4 pt-6">
      <h1 className="text-4xl font-bold text-center mb-8">Portfolio</h1>
      <div className="bg-custom-cream flex flex-wrap justify-center">
        {projects.map((project: { id: any; }) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
