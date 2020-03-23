import React from "react";

function Header() {
  return (
    <nav
			className="flex
			 items-center
			 justify-between
             p-6 
             bg-teal-500
			 "
		>
			<span className="font-semibold text-secondary text-xl ">Sorting Hat</span>
    </nav>
  );
}

export default Header;