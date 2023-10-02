'use client'

import Image from 'next/image'
import React, { useState } from 'react'

import { Link } from 'nextjs13-progress'
import { useSession, signIn } from "next-auth/react"
import { urlFor } from '@/sanity/lib/client'
import { createComment } from '@/sanity/actions'
import { useRouter } from 'next/navigation'

import ProfilPlaceHoleder from '/public/profile.png'
import { comment } from 'postcss'
import toast, { Toaster } from 'react-hot-toast'


const AddComment = ({ id, setPostComments }) => {

  const router = useRouter()

  const { data: session } = useSession()
  const userImage = session?.user?.image ? urlFor(session?.user?.image).url() : ProfilPlaceHoleder

  const  [commentObj, setCommentObj] = useState({
    username: session?.user?.name,
    profilePic: session?.user?.image,
    comment: ''
  })

  const handleSubmit = async () => {
    if (!commentObj.username || !commentObj.profilePic || commentObj.comment === '' ) {
      setCommentObj(prevObj => ({
        username: session?.user?.name,
        profilePic: session?.user?.image,
        comment: prevObj.comment
      }))
    }
    if (commentObj.username && commentObj.profilePic && commentObj.comment !== '') {
      const res = createComment(id, commentObj)
      toast.promise(res, {
        loading: 'just a sec...',
        success: 'Comment added!',
        error: 'Error when fetching',
      })
      const result = await res
      setPostComments(prevList => {
        if (prevList) {
          return [...prevList, commentObj]
        } else {
          return [commentObj]
        }
      })
    } else {
      toast.error('try again in a few seconds')
    }
  }


  if (session) {     
    return (
      <div className='flex flex-col md:flex-row gap-4 w-full items-start'>
        <Image src={userImage} width={64} height={64} className='rounded-full' alt='hi'/>
        <textarea value={commentObj.comment} onChange={(e) => setCommentObj(prevObj => ({...prevObj, comment : e.target.value}))} className='w-full h-72 resize-none   border border-primary rounded-md bg-transparent outline-none p-6 text-gray-400 text-xl leading-8 tracking-wider'></textarea>
        <button onClick={handleSubmit} className='bg-[#5468e780] hover:bg-[#5468e7] text-primary font-bold py-3 px-8 text-lg transition-colors self-end'>
          Submit
        </button>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
              // Define default options
              className: '',
              duration: 5000,
              style: {
                background: '#363636',
                color: '#fff',
              },

              // Default options for specific types
              success: {
                duration: 3000,
                theme: {
                  primary: 'green',
                  secondary: 'black',
                },
              },
            }}
          />
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