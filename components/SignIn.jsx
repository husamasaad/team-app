
'use client'

import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'


const SignIn = () => {

  const { data: session } = useSession()
  
  const userImage = session?.user?.image ? urlFor(session?.user?.image).url() : '/profile.png'

  if (session) {
    return (
      <li className='flex items-center gap-2'>
        <Image src={userImage} width={24} height={24} alt={session.user.name} className='rounded-full' />
        <button className='text-sm hover:underline border-l pl-2' onClick={() => signOut()}>Sign Out</button>
      </li>
    )
  }

  return (
    <li className='hover:underline'>
      <button onClick={() => signIn()}>Sign in</button>
    </li>
  )
}

export default SignIn