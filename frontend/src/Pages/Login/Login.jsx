import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigation = useNavigate();
  const [error, seterror] = useState("");

  const LoginData = async (e) => {
    e.preventDefault();
    console.log(email, password);

    try {
      let result = await fetch("http://localhost:3000/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await result.json();
      console.log(data);
      if (result.ok) {
        navigation("/home");
        localStorage.setItem("user", JSON.stringify(data));
      } else {
        seterror(data.message);
        navigation("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mx-auto">

      {error ? (
        <div style={{
          color: "red",
          margin: "20px",
        }}>

      <h1>Error</h1>
      <h2>{error}</h2>
        </div>)
        : 
        (null)
      }


      <form onSubmit={LoginData}>
        <label htmlFor="email">Enter Your Email</label>
        <input
          id="email"
          value={email}
          type="email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
          required
        />

        <br />
        <br />

        <label htmlFor="password">Enter Your Password</label>
        <input
          id="password"
          value={password}
          type="password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          required
        />

        <br />
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;

