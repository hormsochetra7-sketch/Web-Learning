import React from 'react'
import { FaRegHeart } from "react-icons/fa";

const About = () => {
  return (
    <div className='w-full md:w-4/5 shadow mx-auto my-4 p-5 rounded-2xl'>
      <div className=' bg-gray-100 md:flex justify-between md:px-4 md:py-7 rounded-2xl'>
       <div className='md:w-[49%]  shadow-2xl bg-white p-10 rounded-xl shadow-2xl'>
        <img className='w-[10%]' src="https://img.icons8.com/?size=100&id=104079&format=png&color=000000" alt="" />
         <p className='text-3xl font-bold'>Our Mission</p>
         <p className='text-xl mt-3' >To democratize education by providing accessible, affordable, and high-quality learning experiences that empower individuals to achieve their personal and professional goals. We believe everyone deserves the opportunity to learn and grow, regardless of their background or location.</p>
       </div>
       <div className=' md:w-[49%] shadow-2xl bg-white p-10 rounded-xl shadow-2xl'>
        <img className='w-[10%]' src="https://img.icons8.com/?size=100&id=114717&format=png&color=000000" alt="" />
         <p className='text-3xl font-bold'>Our Vision</p>
         <p className='text-xl mt-3' >To become the world's most trusted online learning platform, where millions of learners connect with expert instructors to master new skills, advance their careers, and transform their lives. We envision a future where quality education knows no boundaries.</p>
       </div>
      </div>
      <div className=' md:grid justify-between md:px-4 md:py-1 justify-center rounded-2xl '>
         <p className='text-3xl font-bold text-center'>Our Story</p>
         <p className='text-lg mt-3 md:px-40 ' >ETEC Center is a leading IT training institute established to provide high-quality education in web development, mobile applications, and modern technology skills. Since its founding in 2017, the center has helped students and professionals gain practical knowledge and hands-on experience in the IT industry. Under the leadership of Director Heng Pheakna and Vice Director Kung Norasmey, ETEC Center focuses on delivering excellent training while maintaining advanced IT systems. The team, including skilled developers like Srin Nalen, ensures modern, functional, and user-friendly solutions for students, staff, and visitors. © 2025 ETEC Center.</p>
       </div>
      <div className=' w-full md:flex  md:px-4 md:py-7 rounded-2xl'>
               <div className='grid w-full grid-cols-1 p-3 gap-2  md:grid-cols-2'>
                <div className=' bg-white rounded-xl p-5 grid shadow-xl'>
                  <p className='text-2xl text-blue-600 text-left font-bold'>06-2018</p>
                  <p className='text-2xl font-bold text-center'>Company Founded</p>
                  <p className='text-xl text-center mt-4'>Started with a vision to make education accessible</p>
                </div>
                <div className=' bg-white rounded-xl p-5 grid shadow-xl'>
                  <p className='text-2xl text-blue-600 text-right font-bold'>01-2019</p>
                  <p className='text-2xl font-bold text-center'>10K Students</p>
                  <p className='text-xl text-center mt-4'>Reached our first major milestone</p>
                </div>
                <div className=' bg-white rounded-xl p-5 grid shadow-xl'>
                  <p className='text-2xl text-blue-600  font-bold'>03-2021</p>
                  <p className='text-2xl font-bold text-center'>100+ Courses</p>
                  <p className='text-xl text-center mt-4'>Expanded our course catalog significantly</p>
                </div>
                <div className=' bg-white rounded-xl p-5 grid shadow-xl'>
                  <p className='text-2xl text-blue-600 text-right font-bold'>09-2024</p>
                  <p className='text-2xl font-bold text-center'>50K+ Students</p>
                  <p className='text-xl text-center mt-4'>Growing community of learners worldwide</p>
                </div>
               </div>

      </div>
             <p className='font-bold text-3xl text-center m-2 text-blue-600'>Our Core Value</p>
             <p className=' text-xl text-center mt-4'>These principles guide everything we do and shape our commitment to our students.</p>
      <div className=' bg-gray-100 md:flex  md:px-4 md:py-7 rounded-2xl mt-2'>
        <div className='grid w-full grid-cols-2 p-3 gap-2  md:grid-cols-4'>
          <div className='bg-white p-2 flex flex-col items-center justify-center rounded-xl shadow-xl'>
            <img className='w-[20%]' src="https://img.icons8.com/?size=100&id=114073&format=png&color=000000" alt="" />
            <p className='font-bold text-xl text-center mt-1'>Passion For Learning</p>
            <p className=' text-lg text-center mt-2'>We believe education transforms lives and opens doors to endless possibilities.</p>
          </div>
          <div className='bg-white p-2 flex flex-col items-center justify-center rounded-xl shadow-xl'>
            <img className='w-[20%]' src="https://img.icons8.com/?size=100&id=102500&format=png&color=000000" alt="" />
            <p className='font-bold text-xl text-center mt-1'>Student-Centered</p>
            <p className=' text-lg text-center mt-2'>Every decision we make puts our students first, ensuring the best learning experience.</p>
          </div>
          <div className='bg-white p-2 flex flex-col items-center justify-center rounded-xl shadow-xl'>
            <img className='w-[20%]' src="https://img.icons8.com/?size=100&id=60650&format=png&color=000000" alt="" />
            <p className='font-bold text-xl text-center mt-1'>Quality Excellence</p>
            <p className=' text-lg text-center mt-2'>We maintain the highest standards in course content, instruction, and support.</p>
          </div>
          <div className='bg-white p-2 flex flex-col items-center justify-center rounded-xl shadow-xl'>
            <img className='w-[20%]' src="https://img.icons8.com/?size=100&id=25782&format=png&color=000000" alt="" />
            <p className='font-bold text-xl text-center mt-1'>Global Community</p>
            <p className=' text-lg text-center mt-2'>Building a diverse, inclusive community of learners from around the world.</p>
          </div>
        </div>
      </div>
            <p className='font-bold text-3xl text-center mt-5 text-blue-500 '>What Our Student Say</p>
             <p className=' text-xl text-center mt-4'>Real feedback from real students who transformed their careers with us.</p>
<div className=' bg-gray-100 md:flex  md:px-4 md:py-7 rounded-2xl mt-2'>
        <div className='grid w-full grid-cols-1 p-3 gap-2  md:grid-cols-3'>
          <div className='bg-white p-2 flex flex-col  rounded-xl shadow-xl'>
            <img className=' w-[15%] ' src="https://img.icons8.com/?size=100&id=61893&format=png&color=000000" alt="" />
            <p className=' text-md text-center mt-1'>LearnHub really kickstarted my career! The courses are clear, practical, and the instructors actually care about your growth. Couldn't recommend it more!</p>
            <div className='grid grid-cols-2 md:grid-cols-4 mt-1'>
             <div>
              <img className='rounded-xl' src="https://tse3.mm.bing.net/th/id/OIP.YpCbPKHExT2hY8mcN2iUBQHaHa?w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
             </div>
             <div className='px-3'>
              <p className='text-lg font-bold px-1'>EDRIS</p>
             <p className='text-sm '>SoftwareDeveloper</p>
             </div>
            </div>
            <div className='flex mt-2'>
              <img className='w-[6%]' src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" />
              <img className='w-[6%]' src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" />
              <img className='w-[6%]' src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" />
              <img className='w-[6%]' src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" />
              <img className='w-[6%]' src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" />

            </div>
          </div>
          <div className='bg-white p-2 flex flex-col  rounded-xl shadow-xl'>
            <img className=' w-[15%] ' src="https://img.icons8.com/?size=100&id=61893&format=png&color=000000" alt="" />
            <p className=' text-md text-center mt-1'>Taking courses here was hands-down the best decision for my career. The content is engaging, and the support team feels like part of the journey</p>
            <div className='grid grid-cols-2 md:grid-cols-4 mt-1'>
             <div>
              <img className='rounded-xl' src="https://static.vecteezy.com/system/resources/previews/044/777/276/non_2x/young-student-portrait-transparent-background-free-png.png" alt="" />
             </div>
             <div className='px-3'>
              <p className='text-lg font-bold px-1'>JONH</p>
             <p className='text-sm '>IT-SUPP</p>
             </div>
            </div>
            <div className='flex mt-2'>
              <img className='w-[6%]' src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" />
              <img className='w-[6%]' src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" />
              <img className='w-[6%]' src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" />
              <img className='w-[6%]' src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" />
              <img className='w-[6%]' src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" />

            </div>
          </div>
          <div className='bg-white p-2 flex flex-col  rounded-xl shadow-xl'>
            <img className=' w-[15%] ' src="https://img.icons8.com/?size=100&id=61893&format=png&color=000000" alt="" />
            <p className=' text-md text-center mt-1'>I love that I can learn at my own pace. The platform is intuitive, the lessons are practical, and I've already started applying what I learned at work!</p>
            <div className='grid grid-cols-2 md:grid-cols-4 mt-1'>
             <div>
              <img className='rounded-xl' src="https://www.pngitem.com/pimgs/m/274-2741200_woman-going-to-college-hd-png-download.png" alt="" />
             </div>
             <div className='px-3'>
              <p className='text-lg font-bold px-1'>ELLIE</p>
             <p className='text-sm '>UX Designer</p>
             </div>
            </div>
            <div className='flex mt-2'>
              <img className='w-[6%]' src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" />
              <img className='w-[6%]' src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" />
              <img className='w-[6%]' src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" />
              <img className='w-[6%]' src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" />
              <img className='w-[6%]' src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" />

            </div>
          </div>
        </div>

        </div>
      <div className='bg-blue-700  h-[300px] mt-5 grid justify-center'>
       <h1 className='pt-20 font-bold text-4xl text-center text-white'>Join Our Growing Community</h1>
      <p className='text-center text-xl mt-1 text-white'>Start your learning journey today and become part of something amazing.</p>
        <button className='bg-white h-[40px] rounded-lg mt-3 text-black font-bold hover:bg-blue-300 cursor-pointer hover:shadow-lg hover:scale-95 duration-75 transition-all '>Get Started For Free</button>
      </div>
</div>
  )
}

export default About