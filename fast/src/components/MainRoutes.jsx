import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { About } from '../Pages/About'
import { Men } from '../Pages/Men'
import { Women } from '../Pages/Women'

import { Shop } from '../Pages/Shop'
import { Contact } from '../Pages/Contact'

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/men' element={<Men/>} />
      <Route path='/women' element={<Women/>} />

      <Route path='/shop' element={<Shop/>} />
      <Route path='/contact' element={<Contact/>} />

    </Routes>
  )
}
