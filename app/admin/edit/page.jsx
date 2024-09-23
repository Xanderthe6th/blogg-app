"use client"
import { assets } from '@/app/Assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Page = () => {

  const [image, setImage] = useState('');

  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Alex Bennett",
    authorImg: "/author_img.png",
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
    console.log(data);
  }

    const onSubmitHandler = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('description', data.description);
      formData.append('category', data.category);
      formData.append('author', data.author);
      formData.append('authorImg', data.authorImg);
      formData.append('image', image)
      const response = await axios.post('/api/blog', formData );
      if (response.data.success) {
        toast.success(response.data.msg);
        setImage(false);
        setData({
          title: "",
          description: "",
          category: "Startup",
          author: "Alex Bennett",
          authorImg: "/author_img.png",
        })
      }
      else{
        toast.error('Error')
      }
    }

  

  return (
    <>
      <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
        <p className='text-xl'>Upload Thumbnail</p>
        <label htmlFor="image">
          <Image className='m-6' src={!image ? assets.upload : URL.createObjectURL(image)} alt='' width={100} height={30} />
        </label>
        <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" required hidden />
        <p className="text-xl mt-4">Blog title</p>
        <input name="title" onChange={onChangeHandler} value={data.title} className="w-full sm:w-[500px] mt-4 border py-3 px-4" type="text" placeholder="Type here" required />
        <p className="text-xl mt-4">Blog Description</p>
        <textarea name="description" onChange={onChangeHandler} value={data.description} className="w-full sm:w-[500px] mt-4 border py-3 px-4" type="text" placeholder="write content here" rows={6} required />
        <p className="text-xl mt-4">Blog category</p>
        <select name="category" onChange={onChangeHandler} value={data.category} className="mt-4 py-3 px-4 w-40 text-gray-500 border">
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <br />
        <button type="submit" className="mt-8 w-40 h-12 text-white bg-black">ADD</button>
      </form>
    </>
  )
}

export default Page