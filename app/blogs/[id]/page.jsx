'use client'
import { assets } from '@/app/Assets/assets';
import Footer from '@/app/Components/Footer';
import Top from '@/app/Components/Top';
import axios from 'axios';
import Image from 'next/image';
import { React, useState, useEffect } from 'react';


const Page = ({ params }) => {

    const [data, setData] = useState(null);


    const fetchBlogData = async () => {
        const response = await axios.get('/api/blog', {
            params: {
                id: params.id
            }
        })
        setData(response.data)
    }


    useEffect(() => { fetchBlogData(); }, [])

    return (data ? <>
        <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
            <Top />
            {/* <div className="flex justify-between items-center">
                < Image src={assets.drawing_logo} alt="" width={62} className="w-[130] sm:w-auto" />
                <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]" >
                    Get Started <Image src={assets.arrow} alt="" width={40} />
                </button>
            </div> */}
            <div className="text-center my-24">
                <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">{data.title}</h1>
                <Image className="mx-auto mt-6 border border-white rounded-full" src={data.authorImg} width={60} height={60} alt="" />
                <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">{data.author}</p>
            </div>
        </div>
        <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
            <Image className="border-4 border-white" src={data.image} width={1280} height={720} alt="" />

            <div className='blog-content' dangerouslySetInnerHTML={{__html: data.description}}></div>

            <div className="mt-24 mb-19">
                <p className="text-black font font-semibold  my-4">Share this article on social media </p>
            </div>
            <div className="flex">
                <Image src={assets.facebook} width={40} alt="" />
                <Image src={assets.twitter} width={40} alt="" />
                <Image src={assets.social} width={40} alt="" />
            </div>
        </div>
        <Footer />
    </> : <>Oops!</>
    )
}

export default Page