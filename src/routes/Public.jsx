import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../feature/pages/Home'
import Shop from '../feature/pages/Shop'
import Product from '../feature/pages/Product'
import Login from '../feature/auth/pages/Login'
import Register from '../feature/auth/pages/Register'
import ProtectedRoute from './ProtectedRoutes'

const Public = () => {
  return (
   <Routes>
    <Route path='/dashboard' element={<ProtectedRoute><Home/></ProtectedRoute>} />
    <Route path='/shop' element={<Shop/>} />
    <Route path='/shop/:collection' element={<Shop/>} />
    <Route path='/products/:id' element={<Product/>} />
     <Route path="/" element={<Login />}/>
     <Route path="/register" element={<Register/>}/>

   </Routes>
  )
}

export default Public