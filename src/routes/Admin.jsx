import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateProduct from '../feature/admin/CreateProduct'
import UpdateProduct from '../feature/admin/UpdateProduct'
import CreateUser from '../feature/users/CreateUser'
import UpdateUser from '../feature/users/UpdateUser'
import ProtectedRoute from './ProtectedRoutes'

const Admin = () => {
  return (
    <Routes>
      <Route path="/admin/products/new" element={<ProtectedRoute><CreateProduct /></ProtectedRoute>} />
      <Route path="/admin/products/:id/edit" element={<ProtectedRoute><UpdateProduct /></ProtectedRoute>} />
      <Route path="/admin/users/new" element={<ProtectedRoute><CreateUser /></ProtectedRoute>} />
      <Route path="/admin/users/:id/edit" element={<ProtectedRoute><UpdateUser /></ProtectedRoute>} />
    </Routes>
  )
}

export default Admin
