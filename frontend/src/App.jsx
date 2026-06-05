import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Import all components and pages here
import Navbar from './Component/Navbar/Navbar'
import Signup from './Pages/Signup/Signup'
import Login from './Pages/Login/Login'
import Private from './PrivateComponent/Private'
import CreatePosts from './Pages/CreatePosts/CreatePosts'
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'

// Main Layout what  to show when start 
import First_Page from './Pages/First_Page/First_Page'
import Main_Layout from './MainLayout/Main_Layout'



function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          
          <Route path='/' element={<First_Page/>}></Route>

          <Route element={<Main_Layout/>}>
         
          <Route element={<Private/>}>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/create' element={<CreatePosts/>}></Route>
          <Route path='/profile/:id' element={<Profile/>}></Route>
          </Route>

          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          
          </Route>
        
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App