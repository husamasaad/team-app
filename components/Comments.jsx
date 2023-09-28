import Image from 'next/image'
import React from 'react'
import { AddComment } from '@/components/index'

const Comments = ({ img }) => {
  return (
    <section className='py-14 lg:px-48'>
      <h4 className='text-lg text-primary font-bold leading-snug mb-14'>Comments:</h4>
      <div className='flex flex-col md:flex-row gap-4 w-full items-start'>
        <div className='flex items-center flex-col gap-1 h-72'>
          <Image src={img} width={48} height={48} className='rounded-full' alt='hi'/>
          <p className='w-fit whitespace-nowrap text-gray-400 text-sm leading-8 tracking-wider'>Husam Asaad</p>
        </div>
        <div className='w-full mb-14 px-6 text-gray-400 text-xl leading-8 tracking-wider'>
        <p className='text-primary text-md leading-8 tracking-wider'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nemo doloremque accusantium error possimus reiciendis, distinctio aut placeat blanditiis iste.</p>
        </div>
      </div>
      <h4 className='text-lg text-primary font-bold leading-snug mb-14'>Join the conversation</h4>
      <AddComment img={img} />
      
    </section>
  )
}

export default Comments