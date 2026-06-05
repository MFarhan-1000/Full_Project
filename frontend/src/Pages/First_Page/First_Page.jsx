import React from 'react'
import { Link } from 'react-router-dom'

function First_Page() {
  return (
    <div>
      
      <h1>Hello and Welcome to Webpage</h1>

      <Link to={"/login"}>Login</Link>

      <br /><br />

      <Link to={"/signup"}>SignUP</Link>



    </div>
  )
}

export default First_Page
