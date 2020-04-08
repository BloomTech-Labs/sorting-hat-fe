import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import mainIcon from '../img/mainIcon.svg';

function Header(props) {
	const {history} = props;
	return (
		<nav className=" fira-sans flex items-center justify-between flex-wrap p-6 ">
			<img src={mainIcon} alt="wizard hat" />
			<NavLink
				to="/"
				className="font-bold text-xl text-black hover:text-purple-900 mr-6"
			>
				Tech Sorting Hat
			</NavLink>

			<div className="text-sm sm:flex-grow flex flex-end justify-end">
				{/* <NavLink
					to=""
					className="block hidden mt-4 text-black hover:text-red-500 mr-4 "
				>
					about
				</NavLink> */}
				{/* {history.location.pathname === '/' && ( */}
				<NavLink
					to={
						history.location.pathname === '/'
							? '/quiz'
							: {pathname: '/', state: {}}
					}
					className="text-black hover:text-purple-900 mr-4 mt-auto"
				>
					{history.location.pathname === '/' ? 'Take Quiz' : 'Restart Quiz'}
				</NavLink>
				{/* <div className="flex text-sm sm:flex-end"> */}
				<NavLink
					to="/about"
					className="text-black hover:text-purple-900 mr-4 mt-auto"
				>
					About
				</NavLink>
				{/* </div> */}
			</div>
		</nav>
	);
}

export default withRouter(Header);
