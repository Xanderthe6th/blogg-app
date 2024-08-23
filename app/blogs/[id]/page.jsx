'use client'
import { assets, blog_data } from '@/app/Assets/assets';
import Top from '@/app/Components/Top';
import Image from 'next/image';
import { React } from 'react';
import { useState, useEffect } from 'react';


const Page = ({ params }) => {

    const [data, setData] = useState(null);
    const { id } = params
    
    const fetchBlogData = (id) => {
        // setData(blog_data.find(function(item){ return item.id == id}))
        for (let i = 0; i < blog_data.length; i++) {
            if (Number(id) === blog_data[i].id) {
                setData(blog_data[i]);
                // console.log(blog_data[i]);
                break;
            }

        }
    }


    useEffect(() => { fetchBlogData(id) }, [id])

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
                <Image className="mx-auto mt-6 border border-white rounded-full" src={data.author_img} width={60} height={60} alt="" />
                <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">{data.author}</p>
            </div>
        </div>
        <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
            <Image className="border-4 border-white" src={data.image} width={1280} height={720} alt="" />
            <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
            <p>{data.description}</p>
        </div>
    </> : <>No item found</>
    )
}

export default Page