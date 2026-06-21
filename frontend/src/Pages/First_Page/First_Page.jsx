import React from "react";
import { Link } from "react-router-dom";

function First_Page() {
  return (
    <div className="container mx-auto">

 
      <div className="flex flex-col justify-center items-center h-120 bg-[url(https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80)] bg-cover bg-center h-screen"> 

        <div className="font-bold text-7xl text-center text-white ">
          <h1>Hello and Welcome</h1>
          <h1>To</h1>
          <h1>Sharing is Caring</h1>
        </div>

        <div className=" flex flex-col font-bold text-white text-3xl my-20 ">
          <Link
            className=" p-2 border-4 mb-4 text-center border-green-500 rounded-lg max-w-34   hover:scale-120 transition-all  hover:bg-green-500  ease-in-out delay-100  duration-1000"
            to={"/login"}
          >
            Login
          </Link>

          <Link
            className="p-2 border-4 text-center border-green-500 rounded-lg max-w-34 min-w-30 hover:scale-120 hover:bg-green-400 transition-all delay-100 duration-1000"
            to={"/signup"}
          >
            SignUp
          </Link>
        </div>
      </div>


    </div>
  );
}

export default First_Page;
