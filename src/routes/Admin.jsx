import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateProduct from '../feature/admin/CreateProduct'
import UpdateProduct from '../feature/admin/UpdateProduct'
import CreateUser from '../feature/users/CreateUser'
import UpdateUser from '../feature/users/UpdateUser'

const Admin = () => {
  return (
    <Routes>
      <Route path="/admin/products/new" element={<CreateProduct />} />
      <Route path="/admin/products/:id/edit" element={<UpdateProduct />} />
      <Route path="/admin/users/new" element={<CreateUser />} />
      <Route path="/admin/users/:id/edit" element={<UpdateUser />} />
    </Routes>
  )
}

export default Admin
