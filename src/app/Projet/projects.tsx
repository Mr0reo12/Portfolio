// pages/projects.tsx
import React from 'react';
import ProjectCard, { Project } from './Projet'; // Asegúrate de que esta sea la ruta correcta a tu componente ProjectCard.
import projectsData from './projects.json'; // La ruta debe ser la ubicación real del archivo 'projects.json'.


const ProjectsSection: React.FC = () => {
  return (
    <div className="bg-custom-cream container mx-auto px-4 pt-6">
      <h1 className="text-4xl font-bold text-center mb-8">Portfolio</h1>
      <div className="bg-custom-cream flex flex-wrap justify-center">
        {projectsData.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
