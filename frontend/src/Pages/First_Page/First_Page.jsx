import React from "react";
import { Link } from "react-router-dom";

function First_Page() {
  return (
    <div>


      <div className="flex flex-col justify-center items-center h-screen">
        <h1>Hello and Welcome to Webpage</h1>

        <Link className="m-10 p-2 border-2 border-green-500 rounded-lg" to={"/login"}>Login</Link>

        <Link className="" to={"/signup"}>SignUP</Link>
      </div>


    </div>
  );
}

export default First_Page;
