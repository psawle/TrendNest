import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../feature/pages/Home'
import Login from '../feature/auth/pages/Login'
import Register from '../feature/auth/pages/Register'
import ProtectedRoute from './ProtectedRoutes'
// import Register from '../feature/pages/Register'
// import Login from '../feature/pages/Login'

const Public = () => {
  return (
   <Routes>
    <Route path='/dashboard' element={<ProtectedRoute><Home/></ProtectedRoute>} />
    {/* <Route path='/products' element={<Product/>} /> */}
     <Route path="/" element={<Login />}/>
     <Route path="/register" element={<Register/>}/>

   </Routes>
  )
}

export default Public