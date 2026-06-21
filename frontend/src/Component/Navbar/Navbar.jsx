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
    <div className="bg-blue-300">
      
      <div>

      <ul className="flex flex-row gap-4 justify-center p-2  ">
        {auth ? (
          <>
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
          </>
        ) : (
          <>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/signup"}>Signup</Link>
            </li>
          </>
        )}
      </ul>
      </div>


    

    </div>
  );
}

export default Navbar;

