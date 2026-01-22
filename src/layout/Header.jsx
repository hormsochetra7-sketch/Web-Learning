import React, { useState } from 'react'
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaInfoCircle } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
const Header = () => {
  const [menuOpen,setMenuOpen]=useState(false);
  return (
    <>
    <nav className='shadow-md'>
      <div className='w-full md:w-4/5 m-auto flex justify-between'>
      <div className='w-16'>
      <img className='w-full h-full' 
      src="https://etec-system.42web.io/assets/etec.png" alt="" />
      </div>

      <div className='h-16 hidden md:block'>
        <ul className='flex gap-7 items-center h-full'>
          <li>
            <Link 
            to={"/"} 
            className='flex gap-1.5 items-center text-lg font-medium' >
              <FaHome className='text-xl' /> Home
            </Link>
            </li>

          <li>
            <Link 
            to={"/about"} 
            className='flex gap-1.5 items-center text-lg font-medium' >
              <FcAbout className='text-xl' /> About
            </Link>
            </li>

          <li>
            <Link 
            to={"/service"} 
            className='flex gap-1.5 items-center text-lg font-medium' >
              <MdOutlineSettings  className='text-xl' /> Service
            </Link>
            </li>

          <li>
            <Link 
            to={"/contact"} 
            className='flex gap-1.5 items-center text-lg font-medium' >
              <RiCustomerService2Fill className='text-xl' /> Contact
            </Link>
            </li>
          <li>
            <Link 
            to={"/"} 
            className='flex gap-1.5 items-center text-lg font-medium' >
              <FaInfoCircle className='text-xl' /> Info
            </Link>
            </li>
        </ul>
      </div>
      {/* Mobile */}
<div className="md:hidden h-16 flex items-center">
  <span>
    <IoMenuSharp
      onClick={() => setMenuOpen(!menuOpen)}
      className="text-2xl"
    />
  </span>
</div>

{menuOpen && (
  <div
    className={`h-100vh w-4/5 absolute bg-gray-300 top-16 duration-150 transition-all ease-in-out shadow-2xl ${
      menuOpen ? "right-0" : "-right-full md:hidden"
    }`}
  >
    <ul className="px-3 py-2.5">
      <li className="font-bold text-4xl text-center text-blue-400 ">
        Menu
      </li>

      <li>
        <Link to="/" className='hover:bg-blue-200 py-1.5 px-1 rounded-md'>Home</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>

      <li>1</li>
      <li>1</li>
    </ul>
  </div>
)}
      </div>
    </nav>
    </>
  )
}

export default Header