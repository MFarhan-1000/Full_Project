import React, { useState } from "react";
import "./Signup";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigation = useNavigate("");

  const [error, seterror] = useState("");

  const SubmitData = async (e) => {
    e.preventDefault();
    console.log(name, age, email, password);
    try {
      let result = await fetch("http://localhost:3000/signup", {
        method: "POST",
        body: JSON.stringify({ name, age, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await result.json();
      if (result.ok) {
        localStorage.setItem("user", JSON.stringify(data));
        navigation("/home");
      } else {
        seterror(data.message);
        navigation("/signup");
      }
    } catch (err) {
      console.log(err);
      navigation("/signup");
    }
  };

  return (
    <div>
      <h1>Signup</h1>

      {error ? (
        <div
          style={{
            color: "red",
            marginTop: "20px",
            marginLeft: "10px",
          }}
        >
          <h1>Error</h1>
          <h2>{error}</h2>
        </div>
      ) : null}

      <form onSubmit={SubmitData}>
        <br />
        <br />

        <label htmlFor="name">Enter Your Name</label>
        <input
          id="name"
          value={name}
          type="text"
          onChange={(e) => {
            setname(e.target.value);
          }}
          required
        />

        <br />
        <br />

        <label htmlFor="age">Enter Your Age</label>
        <input
          id="age"
          value={age}
          type="Number"
          onChange={(e) => {
            setage(e.target.value);
          }}
          required
          min={18}
          max={90}
        />

        <br />
        <br />

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

        <label htmlFor="password">Enter Your password</label>
        <input
          id="password"
          value={password}
          type="password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          required
          minLength={5}
        />

        <br />
        <br />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
