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
      <div className='bg-blue-100 w-2/5 m-auto rounded-lg shadow-lg'>
        <h1 className='text-center font-bold text-4xl'>Contact Us</h1>
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
      <div className='bg-gray-300 mt-5 rounded-xl'>
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
      </div>
    </div>
  )
}     

export default Contact