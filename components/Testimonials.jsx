import React from 'react'

import { testimonials } from '@/constants/data'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  return (
    <section className='py-10'>
      <h2 className='text-center text-5xl lg:text-6xl font-bold leading-snug text-primary my-16 '>What people say about Team</h2>
      <Marquee className="py-10 ">
        {testimonials.map(item => (
          <div key={item.id} className='p-10 mt-10 mx-4 bg-white drop-shadow-xl h-fit w-96 flex gap-10 flex-col'>
            <div className='flex gap-3 text-yellow-500 text-xl'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p>{item.body}</p>
            <div className="flex items-center gap-6">
              <Image src={item.imgUrl} width={40} height={40} className='rounded-full' alt={item.name} />
              <div className='text-left'>
                <h4 className='text-xl font-semibold'>{item.name}</h4>
                <p className='text-sm font-light text-gray-500'>{item.job}</p>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  )
}

export default Testimonials