import React from 'react'
import { IoMdStar } from "react-icons/io";
import { courses } from '../data/Data';
const Card = ({title,img,price,rate,instructor}) => {
  return (
    <>

            <div className='bg-gray-100 h-[450px] shadow-lg rounded-xl shadow-lg overflow-hidden hover:shadow-2xl'>
              <div className='w-full h-2/4'>
                <img className='w-full h-full object-cover rounded-b-xl' src="https://img-c.udemycdn.com/course/480x270/6035102_7d1a.jpg" alt="" />
              </div>
              <div className='px-4 py-1'>
                <span className='text-blue-600 text-lg'>Developer</span>
                <h2 className='text-2xl font-bold mt-1 line-clamp-1'>{title}</h2>
                <h4 className='my-3'>{instructor}</h4>
                <div className='flex justify-between'>
                  <h2 className='flex gap-1'><IoMdStar className='mt-1 ' />{rate}</h2>
                  <h1 className='font-bold text-2xl text-blue-600'>{price} $</h1>
                </div>
              <button className='bg-blue-700 w-full h-[40px] rounded-lg mt-3 text-white font-bold hover:bg-blue-900 cursor-pointer hover:shadow-lg hover:scale-95 duration-75 transition-all '>Enroll Now</button>
              </div>
            </div>


    </>
  )
}

export default Card