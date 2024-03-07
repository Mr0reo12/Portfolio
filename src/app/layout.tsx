import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/component/Navbar/Navbar'
import i18next from 'i18next';
import {initReactI18next} from "react-i18next";


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
