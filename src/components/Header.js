import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import MainIcon from '../img/mainIcon.svg';
import HamburgerBtn from '../img/HamburgerBtn.svg';
function Header(props) {
	const { history } = props;
	const [ isToggled, setToggled ] = useState(false);
	return (
		//lg:fixed lg:left-0 lg:top-0 bg-transparent p-10
		//history.location.pathname === "/quiz" ?
		<div
			className={
				history.location.pathname === '/quiz' || '/results' ? (
					'fixed bg-transparent w-full h-32 top-0 z-20 -ml-10'
				) : (
					'bg-transparent w-full h-32 top-0 -ml-10 z-20'
				)
			}
		>
			<nav className="flex flex-wrap justify-between fira-sans w-full top-0 left-0 fixed p-10">
				<NavLink
					to="/"
					className="flex lg:top-0 lg:left-0 mr-6 text-2xl font-bold text-black hover:text-purple-900"
				>
					<div className="flex items-center">
						<img
							src={MainIcon}
							alt="wizard hat"
							className={history.location.pathname === '/quiz' ? ' lg:block' : ''}
						/>
						<p className=" lg:block">Tech Sorting Hat</p>
					</div>
				</NavLink>

				<div className="flex flex-row justify-end sm:flex-grow flex-end md:">
					<div
						className={
							//p-4
							isToggled ? (
								'menubox mr-3 flex flex-col z-10 p-5 bg-white slide-down fadeIn'
							) : (
								'menubox mr-3 flex flex-col z-10 p-5 bg-white slide-up fadeOut'
							)
						}
					>
						<NavLink
							to={history.location.pathname === '/' ? '/quiz' : { pathname: '/', state: {} }}
							className="mt-auto mr-1 text-lg text-black protoGray hover:text-purple-900"
						>
							{history.location.pathname === '/' || history.location.pathname === '/about' ? (
								'Take Quiz'
							) : (
								'Restart'
							)}
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
						className={isToggled ? 'menu z-20 example5 active' : 'menu z-20 example5'}
						onClick={() => setToggled(!isToggled)}
					>
						<span />
					</a>
				</div>
				<div className=" md:flex">
					<NavLink
						to={history.location.pathname === '/' ? '/quiz' : { pathname: '/', state: {} }}
						className=" md:block mt-auto mr-4 text-lg text-black protoGray hover:text-purple-900"
					>
						{history.location.pathname === '/' || history.location.pathname === '/about' ? (
							'Take Quiz'
						) : (
							'Restart'
						)}
					</NavLink>
					<NavLink
						to="/about"
						className=" md:block mt-auto mr-4 text-lg text-black protoGray hover:text-purple-900"
					>
						About
					</NavLink>
				</div>
			</nav>
		</div>
	);
}

export default withRouter(Header);
