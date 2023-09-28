
import './globals.css'

import { Footer } from '@/components/index'
import { ContextProvider } from '@/context/ContextProvider'


export const metadata = {
  title: "HomePage",
  description: 'Created By Husam',
}

export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <body className='bg-slate-100'>
        <ContextProvider>
          {children}
        </ContextProvider>
      </body>
    </html>
  )
}