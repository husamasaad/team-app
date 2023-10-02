
'use client'

import { Link } from 'nextjs13-progress'
import { FaBars }  from 'react-icons/fa'

import Logo from 'public/logo-dark.png'
import LogoLight from 'public/logo-light.png'

import Image from 'next/image'

import { navLinks } from '@/constants/data'
import Menu from './Menu'

import { useStateContext } from '@/context/ContextProvider.js'

import toast, { Toaster } from 'react-hot-toast'
import SignIn  from '@/components/SignIn'


function Navbar({ light }) {



  const { activeMenu, setActiveMenu } = useStateContext();

  const logo = light ? LogoLight : Logo
  const textColor = light ? 'text-primary' : 'text-white/90' 

  return (
    <nav className={`py-8 absolute top-0 w-full z-50  ${light ? 'bg-slate-100 drop-shadow-sm' : ''}`}>
      <div className="container mx-auto px-14 lg:px-20 flex items-center justify-between">

        <Link href="/" className='block w-40'>
          <Image src={logo} alt="logo" />
        </Link>
        <button className={`md:hidden text-4xl block mt-2 ${textColor}`} onClick={() => setActiveMenu(true)}>
          <FaBars />
        </button>
        {activeMenu && <Menu />}
        <div className='hidden md:flex gap-16 items-center mt-4'>
          <ul className={`text-lg flex gap-16 ${textColor}`}>
            <li className='hover:underline'>
                <Link href='/'>Product</Link>
            </li>
            <li className='hover:underline'>
                <Link href='/blog'>Blog</Link>
            </li>
            <li className='hover:underline'>
                <button onClick={() => toast.error('Support Services will be added soon...')} >Support</button>
            </li>
            <SignIn />
          </ul>
          <button onClick={() => toast.error('Not Yet, the App will be available soon...')} className={`bg-[#5468e780] hover:bg-[#5468e7] ${textColor} py-3 px-8 text-lg transition-colors`}>
            Get Access
          </button>
          <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
              // Define default options
              className: '',
              duration: 5000,
              style: {
                background: '#363636',
                color: '#fff',
              },

              // Default options for specific types
              success: {
                duration: 3000,
                theme: {
                  primary: 'green',
                  secondary: 'black',
                },
              },
            }}
          />
        </div>

      </div>
    </nav>
  )
}

export default Navbar