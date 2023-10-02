'use client'

import { signupFields } from '@/constants/data';
import React, { useState } from 'react'
import LoginInput from './LoginInput';
import ProfileUplaod from './ProfileUplaod';
import { createUser } from '@/sanity/actions';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import ProfilPlaceHoleder from '/public/profile.png'

const fields = signupFields;
let fieldsState={};

fields.forEach(field=>fieldsState[field.id]='');

const SignUp =  () => {
  
  const router = useRouter()

  const [signupState, setSignupState]=useState(fieldsState);

  const [profilePic, setProfilePic] = useState('/profile.png')

  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleImgChange = (e) => setProfilePic(e.target.files[0])

  const handleSubmit= async (e)=>{
    e.preventDefault();

    const Newuser = createUser(signupState, profilePic)

    toast.promise(Newuser, {
      loading: 'fetching users',
      success: 'Got the data',
      error: 'Error when fetching',
    }
    );
    
    const result = await Newuser


    if (result == 'email') {
      setSignupState({...signupState, email: ""})
      toast.error('This Email already exist!')
    } else if (result == 'email') {
      setSignupState({...signupState, username: ""})
      toast.error('This username already exist!')
    } else {
      toast.success('signed up successfully')
      router.replace('/auth/signIn')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="">
          {
            fields.map(field=>
              <LoginInput
                key={field.id}
                labelText={field.labelText}
                labelFor={field.labelFor}
                handleChange={handleChange}
                value={signupState[field.id]}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
              />
            )
          }
          <ProfileUplaod handleImgChange={handleImgChange} value={profilePic} />
        </div>
        
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
          onSubmit={handleSubmit}
        >
          Sign Up
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
      </form>
  )
}

export default SignUp