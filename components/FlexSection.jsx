import { Link } from 'nextjs13-progress'
import React from 'react'
import Mockup from 'public/mockup.png'
import Image from 'next/image'

import { BsArrowRight } from 'react-icons/bs'

const FlexSection = ({ section }) => {

  const { id, heading, details, imgUrl, dir } = section

  const flexDir = dir === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'

  return (
    <section className='py-8'>
        <div className={`container mx-auto px-10 lg:px-20 flex items-center flex-wrap md:flex-nowrap ${flexDir} justify-center md:justify-between gap-10`}>
          <Image src={imgUrl} alt="" width={585} className='drop-shadow-sm rounded-md' />
          <div className="flex md:basis-[40%] flex-col gap-4">
            <h2 className='text-5xl lg:text-6xl font-bold leading-snug text-primary m-0'>{heading}</h2>
            <p className='text-lg text-[rgba(35,35,64,0.90)] font-normal max-w-lg mt-4 mb-10'>{details}</p>
            <Link href="/" className='group flex items-center gap-1 underline text-blue-800 text-md'>Learn More <span className='group-hover:translate-x-1 transition-transform'><BsArrowRight /></span></Link>
          </div>

        </div>
    </section>
  )
}

export default FlexSection