import Footer from '@/component/Footer/Footer'
import Image from 'next/image'
import Inicio from '@/component/Inicio/Inicio'



export default function Home() {
  return (
    <main className='bg-custom-cream font-custom'>
      <div className='flex flex-col h-screen"'>
      <Inicio/>
      <Footer/>
      
      </div>
    </main>
  
  )
}
