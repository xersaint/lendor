import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { AppContextProvider } from "../util/ContextProvider";
import { Toaster } from 'react-hot-toast'
import PrelineScript from '@/util/PrelineScript';
import { UIProvider } from '@/util/UIProvider';

export const metadata: Metadata = {
  title: 'Lendora: Smart & Simple Loan Management ',
  description: 'Lendora is a modern loan management app designed to simplify and streamline the borrowing experience for both users and administrators. Whether youre applying for a loan or managing loan requests, Lendora gives you full control with real-time updates, secure access, and clear communication.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth dark'>
      <head>
        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,500,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap" rel="stylesheet" />
      </head>
      <body className="font-poppins bg-sky-400 bg-repeat bg-fixed">
        <UIProvider>
          <main>
            <AppContextProvider>
              <Toaster />
              <Header />
              {children}
              <Footer />
            </AppContextProvider>
          </main>
        </UIProvider>
      </body>
      <PrelineScript />
    </html>
  )
}
