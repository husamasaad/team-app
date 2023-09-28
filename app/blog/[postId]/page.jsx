import React from 'react'
import { Footer, Navbar } from '@/components/index'
import Image from 'next/image'
import { getPost, getPosts } from '@/sanity/actions'
import {PortableText} from '@portabletext/react'
import Comments from '@/components/Comments'
import { urlFor } from '@/sanity/lib/client'

export async function generateStaticParams() {
  const posts = await getPosts()

  return posts.map((post) => ({
    postId: post.slug.current,
  }))
}



async function Post({ params: { postId } }) {

  const posts = await getPosts()

  const post = posts.find(post => post.slug.current == postId)

  const { 
    _id,
    title,
    slug,
    author,
    profileImage,
    image,
    publishedAt,
    comments,
    body} = post

  return (
    <>
      <Navbar light={true} />
      <main className='pb-10 pt-40'>
        <div className="container mx-auto pt-6 px-10 lg:px-40">
          <section className='lg:px-48'>
            <h1 className='text-5xl text-primary font-bold leading-snug mb-4 max-w-2xl'>
              {title}
            </h1>
            <div className='flex items-center text-secondary mt-14 gap-8'>
              <Image src={profileImage} width={48} height={48} className='rounded-full' alt='hi'/>
              <span className=' pr-8 border-r-2'>{author}</span>
              <span>{publishedAt}</span>
            </div>
          </section>
          <Image height={500} width={350} className='w-full h-[320px] lg:h-[500px] object-cover my-10' alt='blog-post' src={image}/>
          <section className='lg:px-48 post-body'>
            <PortableText value={body} />
          </section>
          <section className='lg:px-48 flex items-center mt-14 gap-8 border-b-2 pb-24'>
            <Image src={profileImage} width={64} height={64} className='rounded-full' alt='hi'/>
            <div>
              <span className='text-sm uppercase block mb-2 text-[#C897E4]'>written by</span>
              <h4 className='text-xl text-primary font-bold leading-snug mb-2 max-w-2xl'>{author}</h4>
              <p className='text-gray-400 text-md leading-8 tracking-wider max-w-[340px]'>COO at Team. Author of the upcoming book on Team Management and Leadership.</p>
            </div>
          </section>

          <Comments comments={comments} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Post