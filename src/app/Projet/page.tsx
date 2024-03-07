"use client"
import ProjectCard from "./Projet";
import ProjectsSection from "./projects";
import projects from './projects.json';


const ProjetPage = () => {
  return (
    <div className="bg-custom-cream container mx-auto p-6 font-custom">
      {/* Portfolio */}
      <ProjectsSection/>
   
    </div>
  );
};

export default ProjetPage;