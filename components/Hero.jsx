
import React from 'react'
import GetEarlyAcess from './GetEarlyAcess'

const Hero = () => {
  return (
    <header className='h-screen w-full  bg-hero-bg-sm sm:bg-hero-bg-md pt-14 md:bg-hero-bg bg-cover bg-right bg-no-repeat grid place-items-center'>
      <div className="container mx-auto px-10 lg:px-20 flex flex-col gap-4">
        <h1 className='text-5xl lg:text-6xl text-slate-100 font-bold leading-snug'>Instant collaboration <br /> for remote teams</h1>
        <p className='text-lg text-slate-100 font-semibold max-w-lg mt-0 mb-10'>All-in-one place for your remote team to chat, collaborate and track project progress.</p>
        <GetEarlyAcess />
      </div>
    </header>
  )
}

export default Hero