import Image from 'next/image'
import { Link } from 'nextjs13-progress'
import React from 'react'

const LoginHeader = ({
  heading,
  paragraph,
  linkName,
  linkUrl="#"
}) => {
  return (
    <div className="mb-10">
            <div className="flex justify-center">
                <Image 
                    alt=""
                    className="w-[145px] object-contain"
                    width={145}
                    height={40}
                    src="/logo-dark.png"
                  />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
              {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-slate-200">
            {paragraph}  {' '}
            <Link href={linkUrl} className="font-medium text-white/90 hover:text-secondary underline">
              {linkName}
            </Link>
            </p>
    </div>
  )
}

export default LoginHeader