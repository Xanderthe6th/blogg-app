import Image from "next/image"
import { signIn } from "next-auth/react"
import { assets } from "../Assets/assets"
import Link from "next/link"
export default function Top() {
    return <div className='flex justify-between items-center'>
        <Link href="/">
        <Image src={assets.drawing_logo} width={62} height={50} alt='' className='w-[130px] sm:w-auto' />
        </Link>
        <button onClick={signIn} className='flex items-center gap-2 font-medium py-1 px-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Get Started <Image src={assets.arrow} alt='' width={40} /></button>
    </div>
}