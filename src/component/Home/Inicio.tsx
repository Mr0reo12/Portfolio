// Inicio.tsx
import React from 'react';
import { FaNodeJs, FaReact, FaHtml5, FaLaravel, FaJsSquare, FaPython, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiTypescript  } from 'react-icons/si';
import Image from 'next/image';
import Footer from '../Footer/Footer';

const Inicio: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-custom-cream">
      {/* Usa md:flex-row para cambiar la disposición en pantallas medianas y superiores */}
      <div className="flex-grow font-custom flex flex-col md:flex-row items-center justify-center text-center md:text-left">
        <div className="w-full md:w-1/2 p-8 flex justify-center md:justify-end">
          {/* Image no necesita classNames para redondeo o tamaño en este caso */}
          <Image
            src="/logo.png"
            alt="Angelo Lagomarsino"
            width={500}
            height={500}
            layout="intrinsic"
            className="rounded-full"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl md:text-5xl font-black mb-4">Angelo Lagomarsino</h1>
          <p className="text-lg md:text-2xl mb-4">Web Developer</p>
          <div className="flex mb-4">
            <FaNodeJs className="text-4xl mx-2" />
            <FaReact className="text-4xl mx-2" />
            <FaHtml5 className="text-4xl mx-2" />
            <FaLaravel className="text-4xl mx-2" />
            <SiTypescript className="text-4xl mx-2" />
            <FaPython className="text-4xl mx-2" />
          </div>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center">
            {/* Ajusta el margen para íconos y botón */}
            <a href="https://calendly.com/angelolagomarsino/30min" className="mb-4 sm:mb-0 sm:mr-4">
              <button className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-700 transition duration-300 ease-in-out">
                Contact
              </button>
            </a>
            <a href="https://www.linkedin.com/in/angelo-lagomarsino-392165261/" className="mb-4 sm:mb-0 sm:mr-4">
              <FaLinkedin className="text-4xl hover:text-blue-600" />
            </a>
            <a href="https://github.com/Mr0reo12">
              <FaGithub className="text-4xl hover:text-gray-600" />
            </a>
          </div>
        </div>
      </div>
      {/* Incluye Footer aquí si es necesario */}
      <Footer />
    </div>
  );
};

export default Inicio;