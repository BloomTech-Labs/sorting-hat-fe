import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import MainIcon from "../img/mainIcon.svg";
import HamburgerBtn from "../img/HamburgerBtn.svg";
function Header(props) {
  const { history } = props;
  const [isToggled, setToggled] = useState(false);
  return (
    //lg:fixed lg:left-0 lg:top-0 bg-transparent p-10
    <nav className="flex flex-wrap justify-between  px-10 fira-sans w-full top-0 left-0 ">
      <NavLink
        to="/"
        className="flex lg:top-0 lg:left-0 mr-6 text-2xl font-bold text-black hover:text-purple-900"
      >
        <div className="flex items-center">
          <img src={MainIcon} alt="wizard hat" />
          <p className="hidden lg:block">Tech Sorting Hat</p>
        </div>
      </NavLink>

      <div className="flex flex-row justify-end sm:flex-grow flex-end md:hidden">
        <div
          className={
            //p-4
            isToggled
              ? "menubox flex flex-col z-10 bg-white slide-down fadeIn"
              : "menubox flex flex-col z-10 bg-white slide-up fadeOut"
          }
        >
          <NavLink
            to={
              history.location.pathname === "/"
                ? "/quiz"
                : { pathname: "/", state: {} }
            }
            className="mt-auto mr-1 text-lg text-black protoGray hover:text-purple-900"
          >
            {history.location.pathname === "/" ||
            history.location.pathname === "/about"
              ? "Take Quiz"
              : "Restart"}
          </NavLink>
          <NavLink
            to="/about"
            className="mt-auto mr-1 text-lg text-black protoGray hover:text-purple-900"
          >
            About
          </NavLink>
        </div>
        {/* <button onClick={() => setToggled(!isToggled)}>
          <img src={HamburgerBtn} alt="Menu Button" />
        </button> */}
        {
          //We will get this animation working eventually
        }
        <a
          href="#"
          className={
            isToggled ? "menu z-20 example5 active" : "menu z-20 example5"
          }
          onClick={() => setToggled(!isToggled)}
        >
          <span></span>
        </a>
      </div>
      <div className="hidden md:flex">
        <NavLink
          to={
            history.location.pathname === "/"
              ? "/quiz"
              : { pathname: "/", state: {} }
          }
          className="hidden md:block mt-auto mr-4 text-lg text-black protoGray hover:text-purple-900"
        >
          {history.location.pathname === "/" ||
          history.location.pathname === "/about"
            ? "Take Quiz"
            : "Restart"}
        </NavLink>
        <NavLink
          to="/about"
          className="hidden md:block mt-auto mr-4 text-lg text-black protoGray hover:text-purple-900"
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default withRouter(Header);
