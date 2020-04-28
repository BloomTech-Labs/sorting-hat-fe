import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import MainIcon from "../img/MainIcon.svg";
import useDocumentScrollThrottled from "./useDocumentScrollThrottled";

// import HamburgerBtn from '../img/HamburgerBtn.svg';
function Header(props) {
  const { history } = props;
  const [isToggled, setToggled] = useState(false);
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [headerBg, setHeaderBg] = useState("");
  const hiddenStyle = shouldHideHeader ? "hiddenHeader" : "";
  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  return (
    //lg:fixed lg:left-0 lg:top-0 bg-transparent p-10
    //history.location.pathname === "/quiz" ?
    //`fixed bg-white w-full top-0 z-20 ${hiddenStyle} ease-in-out`
    <div
      className={`bg-white w-full top-0 z-20 ${hiddenStyle} ease-in-out`}
      // className={
      // 	history.location.pathname === '/results' || 'about' ? (
      // 		`fixed bg-white w-full top-0 z-20  ${hiddenStyle} ease-in-out`
      // 	) : (
      // 			`bg-transparent w-full top-0 -ml-10 z-20 ${hiddenStyle} ease-in-out`
      // 		)
      // }
    >
      {/* //"flex flex-wrap justify-between open-sans w-full top-0 left-0 fixed py-6 px-10 lg:px-0 " */}
      <nav className="flex flex-wrap justify-between open-sans w-full top-0 left-0 py-6 px-10 fixed lg:px-0 bg-white">
        <NavLink
          to="/"
          className="flex lg:top-0 lg:left-0 mr-6 lg:ml-20 text-2xl font-bold text-black hover:text-primary open-sans"
        >
          <div className="flex items-center">
            <img
              src={MainIcon}
              alt="wizard hat"
              className={
                history.location.pathname === "/quiz" ||
                history.location.pathname === "/about" ||
                history.location.pathname === "/results"
                  ? "hidden lg:block"
                  : ""
              }
            />
            <p className="hidden text-2xl lg:block">Tech Sorting Hat</p>
          </div>
        </NavLink>

        <div className="flex flex-row justify-end sm:flex-grow flex-end md:hidden">
          <div
            className={
              //p-4
              isToggled
                ? "menubox mr-3 flex flex-col z-10 p-5 bg-white slide-down fadeIn"
                : "menubox mr-3 flex flex-col z-10 p-5 bg-white slide-up fadeOut"
            }
          >
            <NavLink
              to={
                history.location.pathname === "/"
                  ? "/quiz"
                  : { pathname: "/", state: {} }
              }
              className="mt-auto mr-1 text-lg text-black protoGray hover:text-primary open-sans"
            >
              {history.location.pathname === "/" ||
              history.location.pathname === "/about"
                ? "Start Quiz"
                : "Restart"}
            </NavLink>
            <NavLink
              to="/about"
              className="mt-auto mr-1 text-lg text-black protoGray hover:text-primary open-sans"
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
            <span />
          </a>
        </div>
        <div className="hidden md:flex px-10">
          <NavLink
            to="/about"
            className="hidden md:block mt-auto mr-10 text-lg text-black protoGray hover:text-primary open-sans"
          >
            About
          </NavLink>
          <NavLink
            to={
              history.location.pathname === "/"
                ? "/quiz"
                : { pathname: "/", state: {} }
            }
            className="hidden md:block mt-auto mr-4 text-lg text-black protoGray hover:text-primary open-sans"
          >
            {history.location.pathname === "/" ||
            history.location.pathname === "/about"
              ? "Start Quiz"
              : "Restart"}
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Header);

// import React, { useState } from "react";
// import { NavLink, withRouter } from "react-router-dom";
// import MainIcon from "../img/mainIcon.svg";
// import useDocumentScrollThrottled from "./useDocumentScrollThrottled";

// // import HamburgerBtn from '../img/HamburgerBtn.svg';
// function Header(props) {
//   const { history } = props;
//   const [isToggled, setToggled] = useState(false);
//   const [shouldHideHeader, setShouldHideHeader] = useState(false);
//   const [headerBg, setHeaderBg] = useState("");
//   const hiddenStyle = shouldHideHeader ? "hiddenHeader" : "";
//   const MINIMUM_SCROLL = 80;
//   const TIMEOUT_DELAY = 400;

//   useDocumentScrollThrottled((callbackData) => {
//     const { previousScrollTop, currentScrollTop } = callbackData;
//     const isScrolledDown = previousScrollTop < currentScrollTop;
//     const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

//     setTimeout(() => {
//       setShouldHideHeader(isScrolledDown && isMinimumScrolled);
//     }, TIMEOUT_DELAY);
//   });

//   return (
//     //lg:fixed lg:left-0 lg:top-0 bg-transparent p-10
//     //history.location.pathname === "/quiz" ?

//     <div
//       className={
//         history.location.pathname === "/results" || "about"
//           ? `fixed bg-white w-full top-0 z-20  ${hiddenStyle} ease-in-out`
//           : `bg-transparent w-full top-0 -ml-10 z-20 ${hiddenStyle} ease-in-out`
//       }
//     >
//       <nav className="flex flex-wrap justify-between fira-sans w-full top-0 left-0 fixed py-6 px-10 lg:px-0 ">
//         <NavLink
//           to="/"
//           className="flex lg:top-0 lg:left-0 mr-6 lg:ml-20 text-2xl font-bold text-black hover:text-primary"
//         >
//           <div className="flex items-center">
//             <img
//               src={MainIcon}
//               alt="wizard hat"
//               className={
//                 history.location.pathname === "/quiz" ||
//                 history.location.pathname === "/about" ||
//                 history.location.pathname === "/results"
//                   ? "hidden lg:block"
//                   : ""
//               }
//             />
//             <p className="hidden text-2xl lg:block">Tech Sorting Hat</p>
//           </div>
//         </NavLink>

//         <div className="flex flex-row justify-end sm:flex-grow flex-end md:hidden">
//           <div
//             className={
//               //p-4
//               isToggled
//                 ? "menubox mr-3 flex flex-col z-10 p-5 bg-white slide-down fadeIn"
//                 : "menubox mr-3 flex flex-col z-10 p-5 bg-white slide-up fadeOut"
//             }
//           >
//             <NavLink
//               to={
//                 history.location.pathname === "/"
//                   ? "/quiz"
//                   : { pathname: "/", state: {} }
//               }
//               className="mt-auto mr-1 text-lg text-black protoGray hover:text-primary"
//               cy="hRestart"
//             >
//               {history.location.pathname === "/" ||
//               history.location.pathname === "/about"
//                 ? "Take Quiz"
//                 : "Restart"}
//             </NavLink>
//             <NavLink
//               to="/about"
//               className="mt-auto mr-1 text-lg text-black protoGray hover:text-primary"
//             >
//               About
//             </NavLink>
//           </div>
//           {/* <button onClick={() => setToggled(!isToggled)}>
// 		<img src={HamburgerBtn} alt="Menu Button" />
//         </button> */}
//           {
//             //We will get this animation working eventually
//           }
//           <a
//             href="#"
//             className={
//               isToggled ? "menu z-20 example5 active" : "menu z-20 example5"
//             }
//             onClick={() => setToggled(!isToggled)}
//           >
//             <span />
//           </a>
//         </div>
//         <div className="hidden md:flex px-10">
//           <NavLink
//             to="/about"
//             className="hidden md:block mt-auto mr-10 text-lg text-black protoGray hover:text-primary"
//           >
//             About
//           </NavLink>
//           <NavLink
//             to={
//               history.location.pathname === "/"
//                 ? "/quiz"
//                 : { pathname: "/", state: {} }
//             }
//             className="hidden md:block mt-auto mr-4 text-lg text-black protoGray hover:text-primary"
//           >
//             {history.location.pathname === "/" ||
//             history.location.pathname === "/about"
//               ? "Take Quiz"
//               : "Restart"}
//           </NavLink>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default withRouter(Header);
//
//header.shadowHeader {
// 	box-shadow: 0 9px 9px -9px rgba(0, 0, 0, 0.13);
// }

//translate-y-full
// .hiddenHeader {
//   transform: translateY(-110%);
// }
