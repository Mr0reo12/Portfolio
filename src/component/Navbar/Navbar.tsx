"use client"
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Ajouter une transition et une transformation aux liens de navigation
  const linkStyle = "block py-4 px-4 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-azul-claro";

  return (
    <header className="w-full bg-negrito text-white font-bold">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <span className="font-semibold text-xl tracking-tight">Angelo Lagomarsino</span>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsNavOpen(!isNavOpen)}>
            {isNavOpen ? <FaTimes className="text-3xl" /> : <FaBars className="text-3xl" />}
          </button>
        </div>
        <nav
          className={`${isNavOpen ? 'block' : 'hidden'} absolute md:relative top-full left-0 w-full md:w-auto md:flex flex-col md:flex-row bg-negrito shadow-md md:shadow-none z-50`}
        >
          <ul className="md:flex items-center space-x-0 md:space-x-4">
            <li className="border-b md:border-b-0">
              <Link href="/" legacyBehavior>
                <a className={linkStyle}>Home</a>
              </Link>
            </li>
            <li className="border-b md:border-b-0">
              <Link href="/About" legacyBehavior>
                <a className={linkStyle}>About me</a>
              </Link>
            </li>
            <li className="border-b md:border-b-0">
              <Link href="/Projet" legacyBehavior>
                <a className={linkStyle}>Portfolio</a>
              </Link>
            </li>
            <li className="border-b md:border-b-0">
              <Link href="/Contact" legacyBehavior>
                <a className={linkStyle}>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar; 