import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import mainIcon from '../img/mainIcon.svg';
import VectorImage from '../img/Vector.svg';

function Header(props) {
	const {history} = props;
	return (
		<nav className="flex flex-wrap items-center justify-between p-6 fira-sans">
			<img src={mainIcon} alt="wizard hat" />
			<NavLink
				to="/"
				className="mr-6 text-2xl font-bold text-black hover:text-purple-900"
			>
				Tech Sorting Hat
			</NavLink>

			<div className="flex justify-end sm:flex-grow flex-end">
				{/* <NavLink
					to=""
					className="hidden block mt-4 mr-4 text-black hover:text-red-500 "
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
					className="mt-auto mr-4 text-lg text-black protoGray hover:text-purple-900"
				>
					{history.location.pathname === ('/about' || '/')
						? 'Take Quiz'
						: 'Restart Quiz'}
				</NavLink>
				{/* <div className="flex text-sm sm:flex-end"> */}
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
