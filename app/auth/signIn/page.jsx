import Login from '@/components/Login'
import { LoginHeader } from '@/components/index'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-primary relative">
    <Link href="/" className='absolute top-5 left-5 text-white/90 hover:text-white'>🏠 Go Back Home</Link>

    <div className="max-w-md w-full space-y-8">
      <LoginHeader 
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/auth/signUp" 
      />
      <Login />
    </div>
  </main>
  )
}

export default page