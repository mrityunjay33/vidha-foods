import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../home/Home';
import Product from '../products/Product';
import About from '../about/About';
import NoPage from '../NoPage';
import Layout from './Layout';

const Navbar = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default Navbar;