"use client"
import Footer from "@/component/Footer/Footer";
import ProjectsSection from "./projects";


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