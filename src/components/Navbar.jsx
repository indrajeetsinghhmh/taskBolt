import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white ">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold text-white text-2xl">
          <span className="text-green-500"> &lt;</span>

          <span>Task</span>
          <span className="text-green-500">Bolt/&gt;</span>
        </div>
        <ul>
          <li className="flex gap-4 ">
            <Link className="hover:font-bold" to="/">
              Home
            </Link>
            <Link className="hover:font-bold" to="/about">
              About
            </Link>
            <Link className="hover:font-bold" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
        <button className="hidden md:block text-white bg-green-700 my-5 mx-2 rounded-full  ring-white ring-1">
          <a
            href="https://github.com/indrajeetsinghhmh"
            target="_blank"
            className="flex  justify-between items-center"
          >
            <img
              className="invert  w-10 p-1"
              src="/github.svg"
              alt="github logo"
            />
            <span className="font-bold px-2">GitHub</span>
          </a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
