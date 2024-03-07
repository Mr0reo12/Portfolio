// types/project.ts
// ProjectCard.tsx
import React from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  repoUrl: string;  // Asegúrate de tener esta propiedad en tu objeto de proyecto
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-negrito m-4">
      <div className="w-full relative" style={{ height: "200px" }}>  
        <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
      </div>
      <div className="px-6 py-4">
        <div className="font-semibold text-xl mb-2 text-white">{project.title}</div>
        <p className="text-white text-base">
          {project.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between">
        <a href={project.url} className="inline-block bg-verdecito hover:bg-green-800 text-white font-bold py-2 px-4 rounded transition-colors duration-200" target="_blank" rel="noopener noreferrer">Demo</a>
        {/* Añade este enlace para el repositorio GitHub */}
        <a href={project.repoUrl} className="inline-block bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition-colors duration-200" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
}; 

export default ProjectCard;