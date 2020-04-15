import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import MainIcon from "../img/mainIcon.svg";

function Header(props) {
  const { history } = props;
  const [isToggled, setToggled] = useState(false);
  return (
    //
    <nav className="flex flex-wrap justify-between lg:fixed p-6 fira-sans w-full lg:top-0 lg:left-0">
      <NavLink
        to="/"
        className="flex lg:top-0 lg:left-0 mr-6 text-2xl font-bold text-black hover:text-purple-900"
      >
        <div className="flex items-center">
          <img src={MainIcon} alt="wizard hat" />
          <p>Tech Sorting Hat</p>
        </div>
      </NavLink>

      <div className="flex flex-row justify-end sm:flex-grow flex-end">
        <div
          className={
            isToggled
              ? "menubox flex flex-col p-4 z-10 bg-white slide-down fadeIn"
              : "menubox flex flex-col p-4 z-10 bg-white slide-up fadeOut"
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
        <a
          href="#"
          className={
            isToggled ? "menu z-20 example5 active" : "menu z-20 example5"
          }
          onClick={() => setToggled(!isToggled)}
        >
          <span></span>
        </a>

        {/* <NavLink
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
        </NavLink> */}
      </div>
    </nav>
  );
}

export default withRouter(Header);
