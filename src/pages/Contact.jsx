import React, { useRef } from 'react'
import emailjs from "@emailjs/browser"
import {GoogleMap,LoadScript, Marker} from "@react-google-maps/api"
const Contact = () => {
  const formRef = useRef();
  const submit=(e)=>{
    e.preventDefault();

    emailjs.sendForm(
      "service_ije99qe",
      "template_x7kl7td",
      formRef.current,
      "Xq6C3NZrZtmU7QKQd"
    ).then(()=>{
      alert("Email Send Successfully")
    },
    (err)=>{
      console.error(err);
      alert("Email Send Failed")
      
    }
  )
  formRef.current.reset();

    // console.log(formRef.current.name.value);
    // console.log(formRef.current.email.value);

    // console.log(formRef.current.message.value); 11.525425, 104.890903
    
  }
const center={
  lat:11.525425,
  lng:104.890903,
}
  return (
    <div>
      <div className='w-full md:w-4/5 shadow-xl mx-auto my-4 p-5 rounded-2xl'>
      <section
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: "url(https://media.istockphoto.com/id/1830042746/photo/document-management-system-dms-with-arrange-folder-and-files-icons-man-setup-storage-backup.jpg?s=2048x2048&w=is&k=20&c=oscUZupHxEU1vVmoELDak81yAPu9iaJKkx2v2V7Stho=)" }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl font-bold">Get In Touch</h1>
          <p className="mt-2 max-w-xl">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>
        <div className=' bg-gray-100 md:flex justify-center md:px-4 md:py-7 rounded-t-2xl'>
      <div className=' bg-gray-100 md:flex justify-center  md:px-4 md:py-7 rounded-2xl'>
        <div className='grid grid-cols-1 mx-auto  gap-15 m-auto  md:grid-cols-2 lg:grid-cols-4'>
          <div className='bg-white p-10 flex flex-col justify-center rounded-xl shadow-xl'>
            <img className='w-[20%]' src="https://img.icons8.com/?size=100&id=wiJhr5r8Bs2I&format=png&color=000000" alt="" />
            <p className='font-bold text-xl mt-2'>Phone</p>
            <p className=' text-md mt-2'>+1 (555) 123-4567</p>
            <p className=' text-md mt-2'>+1 (555) 987-6543</p>
          </div>
          <div className='bg-white p-10 flex flex-col justify-center rounded-xl shadow-xl'>
            <img className='w-[20%]' src="https://img.icons8.com/?size=100&id=13826&format=png&color=000000" alt="" />
            <p className='font-bold text-xl mt-2'>Email</p>
            <p className=' text-sm mt-2'>info@company.com</p>
            <p className=' text-sm mt-2'>support@company.com</p>
          </div>
          <div className='bg-white p-10 flex flex-col justify-center rounded-xl shadow-xl'>
            <img className='w-[20%]' src="https://img.icons8.com/?size=100&id=3nOZtpH7KQrP&format=png&color=000000" alt="" />
            <p className='font-bold text-xl mt-2'>Office</p>
            <p className=' text-md mt-2'>123 Business Street</p>
            <p className=' text-md mt-2'>New York, NY 10001</p>
          </div>
          <div className='bg-white flex p-10 flex-col justify-center rounded-xl shadow-xl'>
            <img className='w-[20%]' src="https://img.icons8.com/?size=100&id=19614&format=png&color=000000" alt="" />
            <p className='font-bold text-xl mt-2'>Hours</p>
            <p className=' text-md mt-2'>Mon - Fri: 9:00 AM - 6:00 PM</p>
            <p className=' text-md mt-2'>Sat - Sun: Closed</p>
          </div>
          
        </div>
      </div>
        </div>
 <div className=' bg-gray-100 grid sm:grid-cols-2 grid-cols-1 gap-3  justify-center md:px-4 md:py-7 rounded-b-2xl'>
        <div className='bg-white  rounded-lg shadow-lg'>
        <h1 className='text-center font-bold text-4xl mt-4'>Contact Us</h1>
        <form ref={formRef} action="" onSubmit={submit} className='p-5'>

          <div className='block mb-3'>
            <label htmlFor="" className='mb-1.5 text-blue-700'>UserName</label>
            <input name='name' className='w-full border-1 rounded-md outline-0 py-2 px-3' placeholder='Enter UserName' type="text" />
          </div>
          <div className='block mb-3'>
            <label htmlFor="" className='mb-1.5 text-blue-700'>Email</label>
            <input name='email' className='w-full border-1 rounded-md outline-0 py-2 px-3' placeholder='Email@' type="email" />
          </div>
          <label htmlFor="" className='mb-1.5 text-blue-700'>Message Us</label>
          <textarea 
          name="message"
           id="" 
          className='w-full border-2 h-35'
          placeholder='Meassage.....'></textarea>
          <button className='bg-blue-700 w-40 border-1 rounded-lg  text-white hover:bg-blue-400'>Send</button>
        </form>
      </div>
        <div className='bg-white rounded-lg shadow-lg px-10'>
          <h1 className='text-4xl font-bold mt-2'>Frequently Asked Questions</h1>
          <div className='flex gap-2 mt-8' >
            < p className='font-bold text-md'>.RespondTime:</p>
            Within 24 hours
          </div>
          <div className='flex gap-2 mt-4' >
            < p className='font-bold text-md'>.Consultations: </p>
             Free initial consultation
          </div>
          <div className='flex gap-2 mt-4' >
            < p className='font-bold text-md'>.Visits:</p>
            Virtual or in-person available
          </div>


      </div>
  </div>      
      <div className='mt-16'>
      <h1 className='text-center text-4xl font-bold'>Find US Via Location</h1>
      <p className='text-center text-xl mt-2'>
        Home#999 St:4747 New York
      </p>
      </div>
      <div className='bg-gray-100 mt-5 p-5 rounded-xl'>
       <LoadScript>
        <GoogleMap 
        mapContainerStyle={{width:"100%",height:"500px",borderRadius:"10px"}}
        center={center}
        zoom={15}
        >
        <Marker position={center}/>
        </GoogleMap>
      </LoadScript>
      </div>
      <div className='bg-blue-700  h-[300px] mt-5 grid justify-center'>
       <h1 className='pt-20 font-bold text-4xl text-center text-white'>Need Immediate Assistance?</h1>
      <p className='text-center text-xl mt-1 text-white'>Our support team is available 24/7 for urgent matters</p>
        <button className='bg-white h-[40px] rounded-lg mt-3 text-black font-bold hover:bg-blue-300 cursor-pointer hover:shadow-lg hover:scale-95 duration-75 transition-all '>Call US Now</button>
      </div>
      </div>
    </div>
  )
}     

export default Contact