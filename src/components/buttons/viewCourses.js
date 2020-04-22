import React, { useState } from "react";


import { Link, Redirect } from "react-router-dom";
import ArrowWhiteR from "../../img/ArrowWhiteR.svg";
// import ArrowWhiteR from "../img/ArrowWhiteR.svg";




function ViewCourses(props) {
  return (
    <div>
      <div className="flex justify-end py-1 pt-2 pl-1 my-8 ml-5">
        <Link
          to="/courses"
          className="flex align-baseline justify-between bg-purple-900 hover:bg-purple-100 text-white py-0.5 px-4 border border-purple-900 rounded-lg "
        >
          <span className="flex items-center justify-end questrial text-sm lg:text-lg">
            View Courses
        </span>
          <img
            src={ArrowWhiteR}
            alt="rightArrow"
            size="1.3rem"
            className="pl-4 m-1"
          />{" "}
        </Link>
      </div>
    </div>
  );
}

export default ViewCourses;
