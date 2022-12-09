import React, { useContext } from "react";
import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { AuthContext } from "../../context/AuthProvider";
import Logo from "./Logo";

const Header = () => {
	const { user, logOut } = useContext(AuthContext);
	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((error) => {
				console.error(error);
			});
	};

	const pathName = window.location.hash;

	console.log(pathName);


	const navItems = <>
	<li>
								<Link to={"hero"} > Home</Link>
							</li>
							<li>
								<Link to={"about"} spy={true} smooth={true} offset={50} duration={1500} delay={100}> About</Link>
							</li>
							<li>
								<Link to={"skills"} spy={true} smooth={true} offset={50} duration={1500} delay={100}> Skills </Link>
							</li>
							<li>
								<Link to={"projects"} spy={true} smooth={true} offset={50} duration={1500} delay={100}> Projects </Link>
							</li>
							<li>
								<Link to={"stats"} spy={true} smooth={true} offset={50} duration={1500} delay={100}> Stats </Link>
							</li>
							<li>
								<Link to={"contact"} spy={true} smooth={true} offset={50} duration={1500} delay={100}> Contact </Link>
							</li>
	</> 
							

	
	return (
		<header className="header-area  bg-base-100">
			<div className="container mx-auto navbar">
				<div className="navbar-start">
					<Link to={"/"}>
						{" "}
						<span className="normal-case text-xl gap-2">
							{" "}
							
							<Logo color={"fill-black"}></Logo>
						</span>
					</Link>{" "}
				</div>
				<div className="navbar-center hidden lg:flex">
				
				</div>
				<div className="navbar-end">
				<div className="dropdown flex lg:hidden">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-60 -left-48 top-10 "
						>
						{navItems}
						</ul>
					</div>
				<div className="hidden lg:flex">
					<ul className="menu menu-horizontal p-0">
					{navItems}
					</ul>
				</div>
					{user?.email ? (
						<div className="flex items-center">
						<div className="user-info-area text-xl font-bold">
							<h4>
							Welcome, {user?.displayName}
							</h4>
						</div>
						<div className="dropdown dropdown-end">
							<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
								<div className="w-10 rounded-full">
									<img src={user?.photoURL ? user?.photoURL : "https://placeimg.com/80/80/people"} />
								</div>
							</label>
							<ul
								tabIndex={0}
								className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box "
							>
								<li>
									<a className="justify-between">
										Profile
										<span className="badge">New</span>
									</a>
								</li>
								<li>
									<a>Settings</a>
								</li>
								<li onClick={handleLogOut}>
									<Link>Logout</Link>
								</li>
							</ul>
							</div>
						</div>
					) : (
						<div className="flex">
							

						</div>
					)
                
                
                }
				</div>
			</div>
		</header>
	);
};

export default Header;
