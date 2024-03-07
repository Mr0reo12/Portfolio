import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>Copyright © 2024</p>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/angelo-lagomarsino-392165261/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Mr0reo12" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

