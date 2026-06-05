import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'


function Navbar() {

  
  return (
    <div>   
        <ul>
            <li><Link to={"/home"}>Home</Link></li>
            <li><Link to={"/Create"}>Create</Link></li>

            <li><Link to={"/login"}>Login</Link></li>
            <li><Link to={"/signup"}>Signup</Link></li>

            
            {/* <li><Link ><Button onclick={logout}>Logout</Button></Link></li> */}
            
        </ul>   
    </div>
  )
}

export default Navbar
