import React from 'react'
import Navbar1 from './components/navbar/navbar'
import Home from './components/pages/home/home.js'
import About from './components/pages/about/about.js'
import Products from './components/pages/products/products.js'
import {Route,Routes}from 'react-router-dom'
import SingleProduct from './components/pages/products/singleProduct.js'


const App = () => {
  return (
    <div>
      <Navbar1/>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:id' element={<SingleProduct/>}/>
        </Routes>
    </div>
  )
}

export default App

