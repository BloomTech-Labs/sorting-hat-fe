import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import MainIcon from "../img/mainIcon.svg";

function Header(props) {
  const { history } = props;
  return (
    <nav className="flex flex-wrap items-center justify-between p-6 fira-sans">
      <NavLink
        to="/"
        className="flex mr-6 text-2xl font-bold text-black hover:text-purple-900"
      >
        <img src={MainIcon} alt="wizard hat" />
        <p className="hidden lg:block">Tech Sorting Hat</p>
      </NavLink>

      <div className="flex justify-end sm:flex-grow flex-end">
        <NavLink
          to={
            history.location.pathname === "/"
              ? "/quiz"
              : { pathname: "/", state: {} }
          }
          className="mt-auto mr-4 text-lg text-black protoGray hover:text-purple-900"
        >
          {history.location.pathname === "/" ||
          history.location.pathname === "/about"
            ? "Take Quiz"
            : "Restart"}
        </NavLink>
        <NavLink
          to="/about"
          className="mt-auto mr-4 text-lg text-black protoGray hover:text-purple-900"
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default withRouter(Header);
