import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6">
      <NavLink to="/" className="font-bold text-xl text-red-500 mr-6">
        Sorting Hat
      </NavLink>

      <div className="text-sm sm:flex-grow">
        <NavLink
          to="/particles"
          className="block mt-4 sm:inline-block sm:mt-0 text-black hover:text-red-500 mr-4"
        >
          about
        </NavLink>
        <NavLink
          to="/quiz"
          className="block mt-4 sm:inline-block sm:mt-0 text-black hover:text-red-500 mr-4"
        >
          start quiz
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
