'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { AddComment } from '@/components/index'
import { urlFor } from '@/sanity/lib/client'

const Comments = ({ comments, id }) => {

  const [postComments, setPostComments] = useState(comments)

  return (
    <section className='py-14 lg:px-48'>
      
      <h4 className='text-lg text-gray-400 font-bold leading-snug mb-14'>Comments:</h4>
      {postComments ? (postComments?.map(item => {
        const { profilePic, username, comment } = item
        return (
          <div className='flex flex-col md:flex-row gap-4 w-full items-start mb-24'>
          <div className='flex items-center flex-col gap-1 '>
            <Image src={urlFor(profilePic).url()} width={48} height={48} className='rounded-full' alt='hi'/>
            <p className='w-fit whitespace-nowrap text-gray-400 text-sm leading-8 tracking-wider capitalize'>{username}</p>
          </div>
          <div className='w-full mb-14 px-6 text-gray-400 text-xl leading-8 tracking-wider'>
          <p className='text-primary text-md leading-8 tracking-wider'>{comment}</p>
          </div>
          </div>
        )})) : 
        <p className='text-primary text-md leading-8 tracking-wider text-center mb-24'>No Comments Added.</p> 
      }

      <h4 className='text-lg text-primary font-bold leading-snug mb-14'>
        {postComments ? 'Join' : 'Start'} the conversation
      </h4>
      <AddComment id={id} setPostComments={setPostComments}/>
      
    </section>
  )
}

export default Comments