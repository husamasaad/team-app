
import './globals.css'

import AuthProvider from '@/context/AuthProvider'
import { ContextProvider } from '@/context/ContextProvider'
import { Next13NProgress, Link } from 'nextjs13-progress';



export const metadata = {
  title: "Team App",
  description: 'Created By Husam',
}


export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <body className='bg-slate-100'>
        <AuthProvider>
        <ContextProvider>
          {children}
          <Next13NProgress color="#7676B2" height={5} />
        </ContextProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
