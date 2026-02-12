import React from 'react'
import { FiAlertTriangle } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
const Notfound = () => {
  return (
    <div>
     <div className='w-full md:w-[90%] mx-auto my-4 p-5 rounded-2xl'>
        <div className='grid justify-center h-28 items-center mt-20 '>
        <img className='w-full h-full' src="https://img.icons8.com/?size=100&id=16251&format=png&color=FA5252" alt="" /> 
        </div>
    <h1 className='pt-20 font-bold text-9xl text-red-700 text-center  '>404</h1>
      <p className=' text-center text-4xl text-red-700'>Oops! Page Not Found</p>
      <p className=' text-center text-xl mt-2'>Looks like this lesson hasn't been created yet, or the page you're looking for has moved to a different course.</p> 
      <p className='text-xl mt-5'>Here's what you can do:</p>
    <ul>
 <li className='mt-3'>• Check the URL for any typos</li>
<li>• Return to the homepage and browse our courses</li>
<li>• Use the search bar to find what you're looking for</li>
<div className='h-12 mt-5'>
    <button className='bg-blue-500 w-1/2 h-full rounded-lg mt-3 text-black font-bold hover:bg-blue-300 cursor-pointer hover:shadow-lg hover:scale-95 duration-75 transition-all '>Backhome</button>
    <button className='bg-white-500 border border-blue-500 w-1/2 h-full rounded-lg mt-3 text-black font-bold hover:bg-blue-300 cursor-pointer hover:shadow-lg hover:scale-95 duration-75 transition-all '>SearchCourse</button>
</div>
<div className='flex items-center justify-center '>
    <p className='text-center mt-5'>NeedHelp?</p>
    <p className='text-center mt-5 font-bold text-blue-500'><a href="">Contact Suppport</a></p>
</div>

    </ul>
</div>



    </div>
  )
}

export default Notfound