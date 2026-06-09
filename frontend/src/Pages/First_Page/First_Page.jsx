// import React from 'react'
// import { Link } from 'react-router-dom'

// function First_Page() {
//   return (
//     <div>
      
//       <h1>Hello and Welcome to Webpage</h1>

//       <Link to={"/login"}>Login</Link>

//       <br /><br />

//       <Link to={"/signup"}>SignUP</Link>

//     </div>
//   )
// }

// export default First_Page


import React from 'react'
import { Link } from 'react-router-dom'

function First_Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f7fb",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "700px",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            color: "#1877f2",
            marginBottom: "10px",
          }}
        >
          Shareing is Careing
        </h1>

        <h2>Connect, Share, and Discover</h2>

        <p
          style={{
            fontSize: "1.1rem",
            color: "#555",
            lineHeight: "1.6",
            marginTop: "20px",
          }}
        >
          Join millions of people sharing photos, videos, thoughts, and
          experiences every day. Stay connected with friends, discover new
          communities, and express yourself freely.
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              padding: "12px 30px",
              backgroundColor: "#1877f2",
              color: "white",
              borderRadius: "8px",
              fontWeight: "bold",
            }}
          >
            Login
          </Link>

          <Link
            to="/signup"
            style={{
              textDecoration: "none",
              padding: "12px 30px",
              backgroundColor: "#42b72a",
              color: "white",
              borderRadius: "8px",
              fontWeight: "bold",
            }}
          >
            Sign Up
          </Link>
        </div>

        <div
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <h3>📸 Share Photos</h3>
            <p>Upload and share your favorite moments.</p>
          </div>

          <div>
            <h3>💬 Chat & Connect</h3>
            <p>Stay connected with friends and family.</p>
          </div>

          <div>
            <h3>🌎 Discover Communities</h3>
            <p>Find people who share your interests.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default First_Page