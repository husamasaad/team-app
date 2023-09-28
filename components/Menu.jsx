'use client'

import Link from 'next/link'
import React from 'react'
import { BsX }  from 'react-icons/bs'

import { navLinks } from '@/constants/data'

import { useStateContext } from '@/context/ContextProvider'

const Menu = () => {

  const { activeMenu, setActiveMenu } = useStateContext()

  return (
    <>
      <div className='absolute bg-black/70  min-h-screen w-screen top-0 right-0 z-10 transition-all' />
      <div className='absolute w-96 bg-white p-10 text-slate-100 right-0 top-0 z-10 transition-all'>
          <button className='text-5xl block text-blue-900 absolute right-5 top-5' onClick={() => setActiveMenu(false)}>
            <BsX />
          </button>
        <ul className='text-lg text-blue-900/90 flex flex-col gap-16 mb-10'>
          {navLinks.map(link => (
            <li onClick={() => setActiveMenu(false)} key={link.id} className='hover:text-blue-900 '>
              <Link href={link.goto}>{link.name}</Link>
            </li>
            ))}
        </ul>
        <button className='bg-[#5468e7] text-white py-3 px-8 text-lg'>
              Get Access
        </button>
      </div>
    </>
  )
}

export default Menu