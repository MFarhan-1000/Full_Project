import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigation = useNavigate();
  const auth = localStorage.getItem("user");
  const userParse =auth ? JSON.parse(auth) : null;

  const user_id = userParse?._id;


  const logout = () => {
    localStorage.clear();
    navigation("/login");
  };

  return (
    <div>
      <ul>
        {auth ? (
          <ul>
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/Create"}>Create</Link>
            </li>

            <li>
              <Link to={`/profile/${user_id}`}>Profile</Link>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/signup"}>Signup</Link>
            </li>
          </ul>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
