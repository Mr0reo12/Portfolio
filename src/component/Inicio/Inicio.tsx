// Inicio.tsx
import React from 'react';
import { FaNodeJs, FaReact, FaHtml5, FaLaravel, FaJsSquare, FaPython, FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import Footer from '../Footer/Footer';

 // Asegúrate de importar tu componente Footer

const Inicio: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-custom-cream">
      <div className="flex-grow font-custom flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 p-8 flex justify-center md:justify-end">
          {/* Asegúrate de que la ruta a la imagen es correcta y que la imagen está optimizada para la web */}
          <Image
            src="/logo.png"
            alt="Angelo Lagomarsino"
            width={500} // Establece un tamaño fijo para mantener la relación de aspecto
            height={500}
            className="rounded-full "
            layout="intrinsic" // 'intrinsic' mantendrá el tamaño de la imagen hasta un máximo establecido
          />
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col items-center md:items-start">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Angelo Lagomarsino</h1>
          <p className="text-xl md:text-2xl mb-4">Web Developer</p>
          <div className="flex mb-4">
            <FaNodeJs className="text-4xl mx-2" />
            <FaReact className="text-4xl mx-2" />
            <FaHtml5 className="text-4xl mx-2" />
            <FaLaravel className="text-4xl mx-2" />
            <FaJsSquare className="text-4xl mx-2" />
            <FaPython className="text-4xl mx-2" />
          </div>
          <a href="https://calendly.com/angelolagomarsino/30min?back=1&month=2024-03">
          <button className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-700 transition duration-300 ease-in-out">
            Contact
          </button>
          </a>
          <div className="flex mt-4">
            <a href="https://www.linkedin.com/in/angelo-lagomarsino-392165261/" target="_blank" rel="noopener noreferrer" className="text-black mx-2">
              <FaLinkedin className="text-4xl hover:text-blue-600" />
            </a>
            <a href="https://github.com/Mr0reo12" target="_blank" rel="noopener noreferrer" className="text-black mx-2">
              <FaGithub className="text-4xl hover:text-gray-600" />
            </a>
          </div>
        </div>
        
      </div>
      {/* Footer fijo en la parte inferior */}
      
    </div>
  );
};


export default Inicio


