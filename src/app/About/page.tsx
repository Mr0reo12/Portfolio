
import React from 'react';
import About from '@/app/about/About';
import Footer from '@/component/Footer/Footer';
import SkillsSection from './Skills';

export default function Home() {
  return (
    <main className='bg-custom-cream font-custom'>
      <About />
      <SkillsSection /> {/* No pasamos props si no son necesarias */}
      <Footer />
    </main>
  );
}