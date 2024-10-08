import Image from 'next/image'
import React from 'react'
import { assets } from '../Assets/assets'

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-white pt-5 pb-10 items-center">
      <Image src={assets.blog_logo} alt="" width={62} height={50} />
      <p className="text-sm">All rights reserved. Copyright @thoughts & blogs</p>
      <div className="flex">
        <Image src={assets.facebook} alt="" width={40} />
        <Image src={assets.twitter} alt="" width={40} />
        <Image src={assets.social} alt="" width={40} />
      </div>
    </div>
  )
}

export default Footer