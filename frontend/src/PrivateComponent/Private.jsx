import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function Private() {
   const auth = localStorage.getItem("user")

  return (auth? <Outlet/> : Navigate("/signup"));
}

export default Private
