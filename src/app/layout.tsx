import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/component/Navbar/Navbar'



  const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio - Angelo Lagomarsino',
  description: 'Portfolio de Angelo Lagomarsino',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar/>
      <div className={inter.className}>{children}</div>
    </html>
  )
}
