import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import ProductDetail from '../pages/ProductDetail';
import Login from '../pages/Login';
import Signup from '../pages/SignUp';
import CheckOut from '../pages/CheckOut';


const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to="home" />} />
      <Route path='home' element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='shop/:id' element={<ProductDetail />} />
      <Route path='cart' element={<Cart />} />
      <Route path='checkout' element={<CheckOut />} />
      <Route path='login' element={<Login />} />
      <Route path='signin' element={<Signup />} />
    </Routes>
  )
}

export default Routers