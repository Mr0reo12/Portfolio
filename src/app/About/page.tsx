import React from 'react';
import Footer from '@/component/Footer/Footer';
import SkillsSection from './Skills';
import About from './About';

export default function Home() {
  return (
    <main className='bg-custom-cream font-custom'>
      <About />
      <SkillsSection /> {/* No pasamos props si no son necesarias */}
      <Footer />
    </main>
  );
}