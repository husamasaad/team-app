'use client'

import Image from 'next/image'
import React from 'react'

import Link from 'next/link'
import { useSession, signIn } from "next-auth/react"
import { urlFor } from '@/sanity/lib/client'


const AddComment = ({ img }) => {

  const { data: session } = useSession()
  const userImage = session?.user?.image ? urlFor(session?.user?.image).url() : '/profile.png'


  if (session) {
    return (
      <div className='flex flex-col md:flex-row gap-4 w-full items-start'>
        <Image src={userImage} width={64} height={64} className='rounded-full' alt='hi'/>
        <textarea className='w-full h-72 resize-none   border border-primary rounded-md bg-transparent outline-none p-6 text-gray-400 text-xl leading-8 tracking-wider'></textarea>
        <button className='bg-[#5468e780] hover:bg-[#5468e7] text-primary font-bold py-3 px-8 text-lg transition-colors self-end'>
          Submit
        </button>
      </div>
    )
  } else {
    return (
      <div className='flex flex-col items-center bg-gray-600/10 p-10'>
        <p className='text-primary text-md leading-8 tracking-wider text-center mb-6'>Login or create an account to comment</p>
        <button className='bg-[#5468e780] hover:bg-[#5468e7] text-primary font-bold py-3 px-8 text-lg transition-colors' onClick={() => signIn()}>
          Sign in
        </button>
      </div>
    )
  }
}

export default AddComment