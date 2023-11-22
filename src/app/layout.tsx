
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/components/Sidebar'
import { ProviderTheme } from '@/components/ProviderTheme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Estudos em Next',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='antialiased'>
      <body className={inter.className}>
        <ProviderTheme >
          <div className='min-h-screen  dark:bg-zinc-900 sm:grid  sm:grid-cols-app'>
            <Sidebar />
            <main className='px-4 pb-12 pt-24 sm:col-start-2 sm:px-8 sm:pb-12 sm:pt-8'>
              {children}
            </main>
          </div>
        </ProviderTheme>
      </body>
    </html>
  )
}
