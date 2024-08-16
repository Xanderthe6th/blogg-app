'use client'
import React, { useState } from 'react'
import { assets } from '../Assets/assets'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Header = () => {
  const [email, setEmail] = useState('user');
  const [loading, setLoading] = useState(false)
  const { status, data } = useSession();
  console.log(status);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    console.log(email);
    toast.error(email)
    toast.success('fsgsgsgshdhjdgughdgd', {
      autoClose: 1000,
      position: 'top-center'
    })
    toast.warn(email)
    toast.info(email)

    setTimeout(() => { setLoading(false) }, 3000)
  }
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <ToastContainer />
      <div className='flex justify-between items-center'>
        <Image src={assets.drawing_logo} width={62} height={50} alt='' className='w-[130px] sm:w-auto' />
        <button onClick={signIn} className='flex items-center gap-2 font-medium py-1 px-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Get Started <Image src={assets.arrow} alt='' width={40} /></button>
      </div>
      <div className='text-center my-8'>
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs {email.length}</h1>
        <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ex reiciendis, aspernatur laborum suscipit sed repellat eaque atque at ducimus dolore rerum officia consequatur saepe dolores, assumenda, vitae dolorem porro.</p>
        <form onSubmit={handleSubmit} className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]" action="">
          <input type="email" placeholder="Enter your email" className="pl-4 outline-none" name='email' onChange={(e) => { setEmail(e.target.value) }} value={email} />
          <button type="submit" disabled={loading} className="border-1 border-black py-4 px-4 sm:px-8 bg-gray-600 active:text-white">{loading ? "Subscribing..." : "Subscribe"}</button>
        </form>
      </div>
    </div>
  )
}

export default Header