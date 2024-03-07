import About from '@/app/About/About';
import Footer from '@/component/Footer/Footer';
import SkillsSection from './Skills';
import { IconBaseProps } from 'react-icons';

export default function Home() {
  return (
    <main className='bg-custom-cream font-custom'>
      <About/>
      <SkillsSection title={''} level={''} Icon={function (props: IconBaseProps): JSX.Element {
        throw new Error('Function not implemented.');
      } }/>
      <Footer/>
    </main>
  );
}


