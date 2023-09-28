import { blogposts } from '@/constants/data'
import Image from 'next/image'
import React from 'react'
import { PostCard } from './index'
import { getPosts } from '@/sanity/actions'

const BlogPosts = async () => {


  const posts = await getPosts()

  return (
    <section className='py-8'>
      <div className="mt-12 flex w-full flex-wrap justify-center gap-16 md:justify-start">   
        {posts.map(post => (<PostCard key={post._id} postData={post} />))}
      </div>
    </section>
  )
}

export default BlogPosts