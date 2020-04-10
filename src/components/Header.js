import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import MainIcon from "../img/MainIcon.svg";
import VectorImage from "../img/Vector.svg";

function Header(props) {
  const { history } = props;
  return (
    <nav className="flex flex-wrap items-center justify-between p-6 fira-sans">
      <img src={MainIcon} alt="wizard hat" />
      <NavLink
        to="/"
        className="mr-6 text-2xl font-bold text-black hover:text-purple-900"
      >
        Tech Sorting Hat
      </NavLink>

      <div className="flex justify-end sm:flex-grow flex-end">
        <NavLink
          to={
            history.location.pathname === ("/" || "/about")
              ? "/quiz"
              : { pathname: "/", state: {} }
          }
          className="mt-auto mr-4 text-lg text-black protoGray hover:text-purple-900"
        >
          {history.location.pathname === ("/" || "/about")
            ? "Take Quiz"
            : "Restart Quiz"}
        </NavLink>
        <NavLink
          to="/about"
          className="mt-auto mr-4 text-lg text-black protoGray hover:text-purple-900"
        >
          About
        </NavLink>
        {/* </div> */}
      </div>
    </nav>
  );
}

export default withRouter(Header);
