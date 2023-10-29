import './globals.css'
import type { Metadata } from 'next'
import { Inter } from '@next/font/google'

// components
import Topbar from './components/Topbar'
import Bottombar from './components/Bottombar'
import LeftSidebar from './components/LeftSidebar'

import { RecoilRoot } from 'recoil';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topbar />
        <main className='flex'>
          <LeftSidebar />
          <section className='flex-1 items-center px-6 pb-10 pt-28 max-md:pb-32 sm:px-10'>
            <div className=''>
              {children}
            </div>
          </section>
        </main>
        <Bottombar />
      </body>
    </html>
  )
}
