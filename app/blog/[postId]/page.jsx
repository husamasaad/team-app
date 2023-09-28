import React from 'react'
import { Footer, Navbar } from '@/components/index'
import Image from 'next/image'
import { blogposts } from '@/constants/data'

function Post() {

  const { title, details, author, date, thumbnail, authorImg, id} = blogposts[4]

  return (
    <>
      <Navbar light={true} />
      <main className='pb-10 pt-40'>
      <div className="container mx-auto pt-6 px-10 lg:px-40">
        <div className='lg:px-48'>
          <h1 className='text-5xl text-primary font-bold leading-snug mb-4 max-w-2xl'>
            {title}
          </h1>
          <div className='flex items-center text-secondary mt-14 gap-8'>
            <Image src={authorImg} width={48} height={48} className='rounded-full' alt='hi'/>
            <span className=' pr-8 border-r-2'>{author}</span>
            <span>{date}</span>
          </div>
        </div>
        <Image height={500} className='w-full h-[320px] lg:h-[500px] object-cover my-10' alt='blog-post' src={thumbnail}/>
        <div className='lg:px-48'>
          <p className='text-[rgba(37,49,60,0.90)] text-lg leading-8 mt-6 tracking-wider'>
            Administrators of Team Cloud organizations can export public data from their organization via the organization settings menu. The exports include all the data that appears in public streams, and can be used to migrate from Team Cloud to self-hosting Team. Note that exporting private data is a separate process that requires contacting Team Support.
          </p>
          <p className='text-[rgba(37,49,60,0.90)] text-lg leading-8 mt-6 tracking-wider'>
            Due to a bug in the public export code, exports of public data contained all uploaded files, even those from private messages and private streams. This may have allowed organization owners or administrators to extract uploaded files that they were not otherwise allowed to access. The content of non-public messages was never included in public exports.
          </p>
          <p className='text-[rgba(37,49,60,0.90)] text-lg leading-8 mt-6 tracking-wider'>
            This bug has existed since the public export feature was implemented in August 2019. We have deleted all existing Team Cloud exports from our servers, and will be making changes to auto-expire all exports after 7 days in the future. This bug was fixed for self-hosted users in the Team Server 5.4 release.
          </p>
          <p className='text-[rgba(37,49,60,0.90)] text-lg leading-8 mt-6 tracking-wider'>
            We have notified by email all administrators and users in non-deactivated Team Cloud organizations who may have been impacted by this bug. As many organizations have never exported their data, most Team Cloud users were not affected.
          </p>
          <p className='text-[rgba(37,49,60,0.90)] text-lg leading-8 mt-6 tracking-wider'>
            We would like to thank Antoine Benoist for bringing this issue to our attention.
          </p>
        </div>
      </div>
    </main>
    <Footer />
    </>
  )
}

export default Post