import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-custom-cream text-gray-800 py-10 px-4">
      <div className="container mx-auto max-w-6xl">
      <div className="mb-10">
          <h3 className="text-4xl font-bold mb-3">Who am i?</h3>
          <div className="bg-negrito shadow-lg rounded-lg p-5">
            <p className="text-white mb-3">Hi! i'm Angelo, a junior web developer with a passion for creating innovative technological solutions. With a solid background in both backend and frontend, I strive to build robust and user-friendly web applications.</p>
          </div>
        </div>
        

        <div className="mb-10">
          <h3 className="text-4xl font-semibold mb-3">Education</h3>
          <div className="bg-negrito shadow-lg rounded-lg p-5">
            <p className="text-white mb-3">Higher National Diploma In Computer Science – In progress

        <br />Brequigny Institute - Rennes - France</p>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-4xl font-semibold mb-3">Professional experience</h3>
          <div className="bg-negrito shadow-lg rounded-lg p-5">
            <p className="text-white mb-3">Web Developer  - [Feldrise] - May 2023 - Jul 2023 
            <br />Intership</p>
            <p className="text-white mb-3">IT Technician - [Power Media] - Nov 2019 - Dec 2019 <br />
            Intership</p>
          </div>
        </div>

        {/* Botón para ver el portafolio, si es necesario */}
        <div className="text-center">
          <button className="bg-negrito text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-300">
           <a href="/Projet">
            See Portfolio
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
