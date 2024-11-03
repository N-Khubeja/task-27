import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import { route } from './routes'
import Product from '../pages/Product'
import Protected from '../components/Protected'
import MNavigation from '../components/MNavigation'



const Router:React.FC = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<Navigation route={route} vertical={true}/>}> */}
      <Route path='/' element={<MNavigation route={route} />}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Route>
      
      <Route path='product' element={<Protected/>}>
        <Route index element={<Product/>}/>
      </Route>

    </Routes>
  )
}

export default Router