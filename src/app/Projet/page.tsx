"use client"
import Footer from "@/component/Footer/Footer";
import ProjectCard from "./Projet";
import ProjectsSection from "./projects";
import projects from './projects.json';


const ProjetPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-custom-cream font-custom">
      <main className="flex-grow">
      {/* Portfolio */}
      <ProjectsSection/>
      </main>
      <Footer/>
    </div>
  );
};

export default ProjetPage;