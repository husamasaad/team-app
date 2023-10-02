'use client'
import React from 'react'

import { Oval } from 'react-loader-spinner'

const loading = () => {

  return (
    <main className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-primary relative">
      <Oval
        height="80"
        width="80"
        color="white"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        secondaryColor="#7676B2"
      />
      
    </main>

  )
}

export default loading