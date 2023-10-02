import Image from 'next/image'
import React from 'react'

import { Link } from 'nextjs13-progress'

const PostCard = ({ postData }) => {

  const { 
    _id,
    title,
    slug,
    author,
    profileImage,
    image,
    publishedAt,
    summary} = postData
    
  return (
    <div className='w-full max-w-fit sm:max-w-[346px] rounded-xl drop-shadow-xl bg-white overflow-hidden relative'>
      <Image height={220} width={300} className='w-full h-56 object-cover' alt='blog-post' src={image}/>
      <div className='p-4 pb-32'>
        <h3 className='mt-3 mb-6 text-2xl text-secondary hover:underline'>
          <Link href={`/blog/${slug.current}`}>
            {title}
          </Link>
        </h3>
        <p className='my-4 text-lg leading-8 tracking-wide text-primary'>{summary}</p>
        <div className='flex items-center text-gray-400 mt-14 gap-8 absolute bottom-4'>
          <Image src={profileImage} width={48} height={48} className='rounded-full' alt='hi'/>
          <span className=' pr-8 border-r-2'>{author}</span>
          <span>{publishedAt}</span>
        </div>
      </div>
    </div>
  )
}

export default PostCard