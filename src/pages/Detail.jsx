import React from 'react'
import { useParams } from 'react-router-dom'
import { courses } from '../data/Data'
import { Star, Clock, Users, Globe, Award, CheckCircle } from "lucide-react";

const Detail = () => {
    const{id}=useParams()
    console.log( id);
const finding = courses.find((e)=>e.id == id)
console.log(finding);

  return (
    // <div>
    //     <div className='w-full md:w-4/5  shadow mx-auto my-4 p-5 rounded-2xl'>
    //     <div className='w-full grid items-center justify-center rounded-xl bg-gray-300'>
    //     <img className='w-full h-150 rounded-lg mt-5' src={finding["img"]} alt="" />
    //      <div className='font-bold text-4xl'>{finding["title"]}</div>
    //      <div className='text-xl'>{finding["describtion"]}</div>
    //     </div>

        

    //     </div>
    // </div>

<div className="min-h-screen bg-gray-50 flex justify-center p-6">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-xl overflow-hidden">
        
        {/* Header / Banner */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8">
          <img className='w-full' src={finding["img"]} alt="" />
          <span className="bg-blue-500 text-xs px-3 py-1 rounded-full">
            Data Science
          </span>

          <h1 className="text-3xl font-bold mt-4">{finding["title"]}</h1>
          <p className="text-blue-100 mt-2 max-w-3xl">
{finding["describtion"]}
          </p>

          <div className="flex flex-wrap gap-6 mt-4 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <Star className="text-yellow-400" size={16} />
              <span> {finding["rate"]} rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} />
              <span>{finding["view"]} students</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{finding["hour"]}h {finding["min"]}m</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 p-8">
          
          {/* LEFT CONTENT */}
          <div className="md:col-span-2 space-y-8">
            
            {/* What You'll Learn */}
              <h2 className="text-xl font-semibold mb-4">What you'll learn</h2>
            <ul>
              <li className='flex gap-2'><CheckCircle className="text-green-500 mt-1" size={18} />{finding["l1"]}</li>
              <li className='flex gap-2'><CheckCircle className="text-green-500 mt-1" size={18} />{finding["l2"]}</li>
              <li className='flex gap-2'><CheckCircle className="text-green-500 mt-1" size={18} />{finding["l3"]}</li>
              <li className='flex gap-2'><CheckCircle className="text-green-500 mt-1" size={18} />{finding["l4"]}</li>
            </ul>


            {/* Curriculum */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Course Curriculum</h2>

              {[
                ["Python Basics", "2h 10m"],
                ["Data Structures", "1h 50m"],
                ["Pandas & NumPy", "3h 15m"],
                ["Data Visualization", "2h 40m"],
                ["Real-World Projects", "2h 30m"],
              ].map(([title, time], i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border rounded-lg px-4 py-3 mb-3 hover:bg-gray-50 transition"
                >
                  <span className="font-medium">{title}</span>
                  <span className="text-gray-500 text-sm">{time}</span>
                </div>
              ))}
            </section>
           {/* <h2 className="text-xl font-semibold mb-4">Course Curriculum</h2>
          <div className="flex justify-between items-center border rounded-lg px-4 py-3 mb-3 hover:bg-gray-50 transition">
            <div className='flex fle'>
              <p></p>
              <p></p>
            </div>
          </div> */}
            {/* Instructor */}
            <section>
              <h2 className="text-xl font-semibold mb-2">Instructor</h2>
              <p className="text-gray-700 font-medium">{finding["instructor"]}</p>
            </section>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="bg-gray-100 p-6 rounded-xl space-y-5 h-fit">
            <div className="text-3xl font-bold text-gray-900">${finding["price"]}</div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
              Enroll Now
            </button>

            <div className="border-t pt-4 space-y-3 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Globe size={16} />
                <span>English</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={16} />

Horm Sochettra, [2/12/2026 6:31 PM]
<span>Certificate Included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail