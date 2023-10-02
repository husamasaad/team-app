import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import { LoginHeader } from '@/components/index'
import Image from 'next/image'
import { Link } from 'nextjs13-progress'
import React from 'react'

const page = () => {
  return (
    <main className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-primary relative">
    <Link href="/" className='absolute top-5 left-5 text-white/90 hover:text-white'>🏠 Go Back Home</Link>
    <div className="max-w-lg w-full space-y-8">
      <LoginHeader 
        heading="Signup to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/auth/signIn" 
      />
      <SignUp />
    </div>
  </main>
  )
}

export default page