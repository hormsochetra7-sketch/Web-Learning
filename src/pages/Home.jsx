import React from 'react'
import { IoMdStar } from "react-icons/io";
import Card from '../components/Card';
import { courses } from '../data/Data';
const Home = () => {
  return (
    <div className='w-full md:w-4/5 shadow mx-auto my-4 p-5 rounded-2xl'>
      <div className=' bg-blue-600 md:flex md:px-4 md:py-7 rounded-2xl'>
        <div className='w-full md:full lg:w-3/5'>
        <h1 className='text-8xl font-bold text-white'>Learn Without Limit</h1>
          <p className="text-2xl text-gray-50 mt-3.5">
            Start, switch, or advance your career with thousands of courses,
            Professional Certificates, and degrees from world-class universities
            and companies.
          </p>

          <div className="flex gap-7 mt-9">
            <button className="bg-gray-200 py-4 px-9 rounded-xl text-blue-600 font-medium">
              Get Start
            </button>

            <button className="bg-transparent border border-gray-200 py-4 px-9 rounded-xl text-gray-50 font-medium hover:bg-gray-200 hover:text-blue-700">
              Watch Demo
            </button>
        </div>
        </div>
        <div className='w-full md:full lg:w-2/5 rounded-lg bg-gray-100 md:p-7 mt-3.5 '>
        <ul className='bg-gray-100 p-5 rounded-xl grid  gap-10'>
          <li className='flex flex-cols gap-2.5'>
          <div className='w-15 h-15 bg-blue-50 rounded-2xl p-2'>
            <img src="https://img.icons8.com/?size=100&id=fH22K8x6Yvz6&format=png&color=000000" alt="" />
          </div>
          <div>
            <h1 className='font-bold text-2xl'>Studing With Course</h1>
            <h2 className='text-blue-600'>Learning To Perfect</h2>
          </div>
          </li>
          <li className='flex flex-cols gap-2.5'>
          <div className='w-15 h-15 bg-blue-50 rounded-2xl p-2'>
            <img src="https://img.icons8.com/?size=100&id=fH22K8x6Yvz6&format=png&color=000000" alt="" />
          </div>
          <div>
            <h1 className='font-bold text-2xl'>Studing With Course</h1>
            <h2 className='text-blue-600'>Learning To Perfect</h2>
          </div>
          </li>
          <li className='flex flex-cols gap-2.5'>
          <div className='w-15 h-15 bg-blue-50 rounded-2xl p-2'>
            <img src="https://img.icons8.com/?size=100&id=fH22K8x6Yvz6&format=png&color=000000" alt="" />
          </div>
          <div>
            <h1 className='font-bold text-2xl'>Studing With Course</h1>
            <h2 className='text-blue-600'>Learning To Perfect</h2>
          </div>
          </li>

        </ul>
        </div>
      </div>
      <div className='grid md:grid-cols-2 xl:grid-cols-4 bg-gray-50 shadow-2xl'>
      
      </div>
      <div className='mt-16'>
      <h1 className='text-center text-4xl font-bold'>Explore Top Catagories</h1>
      <p className='text-center text-xl mt-2'>
        Choose The Hundred OF course Acroos The Different Categories
      </p>
      </div>
      <div className='flex justify-center mt-20'>
      <div className='grid gris-cols-2 md:grid-cols-3 gap-10 lg:grid-cols-4 xl:grid-cols-6'>
        <div className=' p-5 grid justify-center rounded-xl border border-gray-400 shadow-2xl'>
          <img classname="grid justify-center" src="https://img.icons8.com/?size=100&id=nK5KokYOqcnT&format=png&color=000000" alt="" />
          <h2 className='font-bold text-xl'>Development</h2>
          <p>128 Course</p>
        </div>
        <div className=' p-5 grid justify-center rounded-xl border border-gray-400 shadow-2xl'>
          <img src="https://img.icons8.com/?size=100&id=YD0g81yVoohu&format=png&color=000000" alt="" />
          <h2 className='font-bold text-xl'>Development</h2>
          <p>128 Course</p>
        </div>
        <div className=' p-5 grid justify-center rounded-xl border border-gray-400 shadow-2xl'>
          <img src="https://img.icons8.com/?size=100&id=nK5KokYOqcnT&format=png&color=000000" alt="" />
          <h2 className='font-bold text-xl'>Development</h2>
          <p>128 Course</p>
        </div>
        <div className=' p-5 grid justify-center rounded-xl border border-gray-400 shadow-2xl '>
          <img src="https://img.icons8.com/?size=100&id=nK5KokYOqcnT&format=png&color=000000" alt="" />
          <h2 className='font-bold text-xl'>Development</h2>
          <p>128 Course</p>
        </div>
        <div className=' p-5 grid justify-center rounded-xl border border-gray-400 shadow-2xl '>
          <img src="https://img.icons8.com/?size=100&id=nK5KokYOqcnT&format=png&color=000000" alt="" />
          <h2 className='font-bold text-xl'>Development</h2>
          <p>128 Course</p>
        </div>

        <div className=' p-5 grid justify-center rounded-xl border border-gray-400 shadow-2xl '>
          <img  src="https://img.icons8.com/?size=100&id=nK5KokYOqcnT&format=png&color=000000" alt="" />
          <h2 className='font-bold text-xl'>Development</h2>
          <p>128 Course</p>
        </div>
      </div>
      </div>

      <div className='mt-20 bg-gray-100'>
       <h1 className='pt-20 font-bold text-4xl text-center'>Feature Course</h1>
      <p className='text-center text-xl'>Most Popular Course Choose Form Student</p>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-2.5'> 
       {courses.map((c)=>(
          <Card title={c.title} price={c.price} rate={c.rate} instructor={c.instructor}/>
       ))}   

        </div>
      </div>
       <div className='mt-20'>
       <h1 className='pt-20 font-bold text-4xl text-center'>Why Choose ETEC?</h1>
      <p className='text-center text-xl mt-3'>We provide the best learning experience for students worldwide</p>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-2.5'>
        <div className='grid px-10 justify-items-center '>
          <img className='bg-blue-400 rounded-[50%] h-[80%]' src="https://img.icons8.com/?size=100&id=84907&format=png&color=000000" alt="" />
          <h2 className='font-bold text-xl'>Expert Instructor</h2>
          <p>Learn from industry professionals with years of experience</p>
        </div>
        <div className='grid px-10 justify-items-center  '>
          <img className='bg-blue-400 rounded-[50%] h-[80%]' src="https://img.icons8.com/?size=100&id=82816&format=png&color=000000" alt="" />
          <h2 className='font-bold text-xl'>Lifetime Access</h2>
          <p>Access your courses anytime, anywhere, on any device</p>
        </div>
        <div className='grid px-10 justify-items-center  '>
          <img className='bg-blue-400 rounded-[50%] h-[80%]' src="https://img.icons8.com/?size=100&id=6857&format=png&color=000000" alt="" />
          <h2 className='font-bold text-xl'>Certificates</h2>
          <p>Earn certificates upon completion to boost your caree</p>
        </div>
        <div className='grid px-10 justify-items-center  '>
          <img className='bg-blue-400 rounded-[50%] h-[80%]' src="https://img.icons8.com/?size=100&id=83783&format=png&color=000000" alt="" />
          <h2 className='font-bold text-xl'>24/7 Support</h2>
          <p>Get help whenever you need it from our support team</p>
        </div>
      </div>
      <div className='bg-blue-700  h-[300px] mt-5 grid justify-center'>
       <h1 className='pt-20 font-bold text-4xl text-center text-white'>Ready To Start Learning?</h1>
      <p className='text-center text-xl mt-1 text-white'>Join thousands of students already learning on LearnHub</p>
        <button className='bg-white h-[40px] rounded-lg mt-3 text-black font-bold hover:bg-blue-300 cursor-pointer hover:shadow-lg hover:scale-95 duration-75 transition-all '>Get Started For Free</button>
      </div>
      </div>
    </div>

  )
}

export default Home