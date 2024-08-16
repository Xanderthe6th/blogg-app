'use client'
import { blog_data } from '@/app/Assets/assets';
import { React } from 'react';
import { useState, useEffect } from 'react';


const Page = ({params}) => {

    const [data, setData] = useState([null]);

    const fetchBlogData = () => { 
        for(let i=0; i<blog_data.length;i++)
            {
                if (Number(params.id)===blog_data[i].id){
                    setData(blog_data[i]);
                    console.log(blog_data[i]);
                    break;
                }

        }
    }

  
    useEffect(()=>{fetchBlogData()},[])

  return (
    <div>
        {params.id} 
    </div>
  )
}

export default Page