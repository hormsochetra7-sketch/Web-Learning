import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitch } from "react-icons/fa";
import { CiMail, CiPhone, CiYoutube } from "react-icons/ci";
import { IoLocationSharp } from 'react-icons/io5';
import { LiaRssSolid } from "react-icons/lia";
const Footer = () => {
  return (
    <div className='bg-gray-800 text-gray-50'>
      <div className='w-full md:w-4/5 p-5 m-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      <div className=''>
        <div className='flex gap-0.5  items-center'>
      <img className='w-14 rounded-2xl' src="https://etec-system.42web.io/assets/etec.png" alt="" />
      <h1 className='font-bold text-2xl'>ETEC CENTER</h1>
        </div>
      <p>Empowering learners worldwide with high-quality online courses. Learn new skills, advance your career, and achieve your goals.</p>
       <ul className='mt-5 flex flex-col gap-1.5'>
        <li className='flex items-center gap-1.5'>
        <CiMail />@EtecCenter.com
        </li>
        <li className='flex items-center gap-1.5'>
        <CiPhone />+1 (555) 123-4567
        </li>
        <li className='flex items-center gap-1.5'>
        <IoLocationSharp />123 Learning St, Education City
        </li>
       </ul>

      </div>
      <div className=''>
        <h1 className='font-bold text-2xl'>QuckLink</h1>
        <ul className='grid gap-3.5'>
          <li className='mt-2'>About Us</li>
          <li>Courses</li>
          <li>Instructors</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className=''>
       <h1 className='font-bold text-2xl'>Categories</h1>
        <ul className='grid gap-3.5'>
          <li className='mt-2'>Web Development</li>
          <li>Mobile Development</li>
          <li>Data Science</li>
          <li>Design</li>
          <li>Business</li>
          <li>Marketing</li>
        </ul>
      </div>
      <div className=''>
        <h1 className='font-bold text-2xl'>Support</h1>
        <ul className='grid gap-3.5'>
          <li className='mt-2'>Help Center</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Refund Policy</li>
          <li>FAQ</li>
          <li>Career</li>
        </ul>
          <h3 className="mt-5">Subscribe to Newsletter</h3>

          <div className="flex gap-2.5 mt-3.5">
            <input
              type="text"
              className="border border-blue-600 py-1.5 px-4 focus:outline"
              placeholder="Enter Your email ..."
            />
            <button className="bg-blue-700 px-3.5 py-2 hover:cursor-pointer hover:bg-blue-600 transition-all">
              Subscribe
            </button>
          </div>
      </div>
      </div>
      <div className="w-full h-1 bg-blue-700"></div>

      <div className="w-full md:w-4/5 p-5 m-auto grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <div>© 2024 LearnHub. All rights reserved.</div>
        <div>
          <ul className="flex gap-7 items-center">
            <li className="bg-gray-700 p-3 rounded-full hover:cursor-pointer hover:bg-blue-700 transition-all duration-150">
              {" "}
              <FaInstagram />{" "}
            </li>
            <li className="bg-gray-700 p-3 rounded-full hover:cursor-pointer hover:bg-blue-700 transition-all duration-150">
              {" "}
              <FaTwitch />{" "}
            </li>
            <li className="bg-gray-700 p-3 rounded-full hover:cursor-pointer hover:bg-blue-700 transition-all duration-150">
              {" "}
              <FaFacebookF />{" "}
            </li>
            <li className="bg-gray-700 p-3 rounded-full hover:cursor-pointer hover:bg-blue-700 transition-all duration-150">
              {" "}
              <LiaRssSolid />{" "}
            </li>
            <li className="bg-gray-700 p-3 rounded-full hover:cursor-pointer hover:bg-blue-700 transition-all duration-150">
              {" "}
              <CiYoutube />{" "}
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Footer