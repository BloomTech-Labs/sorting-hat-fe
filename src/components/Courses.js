import React from "react";
// import Header from "./Header";
import { Link } from 'react-router-dom';
import ArrowWhiteR from "../img/ArrowWhiteR.svg";
import ArrowPurpleL from "../img/ArrowPurpleL.svg";

const Courses = () => {
  return (
    <div>
      <h1 className=" protoGray fira-sans">
        Work in progress come back later ♥
      </h1>

{/* This is where i chop the button like it's a stolen escalade  */}

<div className="flex justify-start py-1 pt-2 pr-1 my-8 mr-5 ">
              <Link
                to="/quiz"
                className={`border-2 border-purple-100 hover:border-purple-900 flex  px-4 rounded-lg justify-center items-center`}
              >
                {/* class="flex align-baseline justify-between bg-purple-900 hover:bg-purple-100 text-white py-0.5 px-4 border border-purple-900 rounded-lg */}
                <img
                  src={ArrowPurpleL}
                  alt="leftArrow"
                  size="1.3rem"
                  className="pr-4 m-1"
                />
                <span className="text-purple-100 questrial text-sm lg:text-lg">
                  Retake Quiz
                </span>
              </Link>
            </div>

    </div>
  );
};

export default Courses;
