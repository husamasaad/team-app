import React from 'react'
import { BlogPosts, Footer, Navbar } from '@/components/index'

const page = () => {

  return (
    <>
    <Navbar light={true} />
    <main className='pb-10 pt-40'>
      <div className="container mx-auto pt-6 px-10 lg:px-20">
        <h1 className='text-4xl lg:text-5xl text-primary font-bold leading-snug mb-2'>Blog</h1>
        <p className='text-lg text-primary font-semibold mt-0 mb-4'>Open-source threaded team chat that helps teams stay productive and focused.</p>
        <BlogPosts />
      </div>
    </main>
    <Footer />
    </>
  )
}

export default page