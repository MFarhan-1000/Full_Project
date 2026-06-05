import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import { Outlet } from 'react-router-dom'


function Main_Layout() {
  return (
    <div>
      <Navbar/>
      <Outlet />
    </div>
  )
}

export default Main_Layout
