import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import MainLayout from '../layout/MainLayout'
import About from '../pages/About'
import Service from '../pages/Service'
import Contact from '../pages/Contact'

const AppRoute = () => {
  return (
    <>
    <Routes>
      <Route element={<MainLayout/>}>
   
        <Route index element={<Home />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
       
      </Route>
    </Routes>
    </>
  )
}

export default AppRoute