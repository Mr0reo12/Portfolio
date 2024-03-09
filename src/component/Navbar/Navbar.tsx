"use client"
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const linkStyle = "block py-4 px-4 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-azul-claro";

  // Las clases de estilo de Tailwind para elementos de lista en el navbar
  const navItemClasses = "py-4 px-4 hover:bg-azul-claro transition-colors duration-300 ease-in-out";

  return (
    <>
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
          <nav className="hidden absolute md:relative top-full left-0 w-full md:w-auto md:flex flex-col md:flex-row bg-negrito shadow-md md:shadow-none z-50">
            <ul className="md:flex items-center space-x-0 md:space-x-4">
              <li className='border-b md:border-b-0'>
                <Link href="/" passHref>
                  <p className={linkStyle}>
                  <span className={navItemClasses}>Home</span>
                  </p>
                </Link>
              </li>
              <li className='border-b md:border-b-0'>
                <Link href="/about" passHref>
                  <p className={linkStyle}>
                  <span className={navItemClasses}>About me</span>
                  </p>
                </Link>
              </li>
              <li className='border-b md:border-b-0'>
                <Link href="/projet" passHref>
                  <p className={linkStyle}>
                  <span className={navItemClasses}>Portfolio</span>
                  </p>
                </Link>
              </li>
              <li className='border-b md:border-b-0'>
                <Link href="/contact" passHref>
                <p className={linkStyle}>
                  <span className={navItemClasses}>Contact</span>
                  </p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isNavOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            className="fixed inset-y-0 left-0 z-40 w-64 bg-negrito shadow-lg"
          >
            <ul className="space-y-6 p-7">
              <li className='text-white font-bold'>
                <Link href="/" passHref>
                  <span onClick={() => setIsNavOpen(false)} className={navItemClasses}>Home</span>
                </Link>
              </li>
              <li className='text-white font-bold'>
                <Link href="/about" passHref>
                  <span onClick={() => setIsNavOpen(false)} className={navItemClasses}>About me</span>
                </Link>
              </li>
              <li className='text-white font-bold'>
                <Link href="/projet" passHref>
                  <span onClick={() => setIsNavOpen(false)} className={navItemClasses}>Portfolio</span>
                </Link>
              </li>
              <li className='text-white font-bold'>
                <Link href="/contact" passHref>
                  <span onClick={() => setIsNavOpen(false)} className={navItemClasses}>Contact</span>
                </Link>
              </li>
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;