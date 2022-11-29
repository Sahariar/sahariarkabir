import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Header = () => {
	const { user, logOut } = useContext(AuthContext);
	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch((error) => {
				console.error(error);
			});
	};
	return (
		<header className="header-area  bg-base-100">
			<div className="container mx-auto navbar">
				<div className="navbar-start">
					<div className="dropdown">
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
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<NavLink to={"/home"}> Home</NavLink>
							</li>
							<li>
								<NavLink to={"/hospital"}> Hospitals</NavLink>
							</li>
							<li>
								<NavLink to={"/booking"}> Booking </NavLink>
							</li>
						</ul>
					</div>
					<Link to={"/"}>
						{" "}
						<span className="btn btn-ghost normal-case text-xl gap-2">
							{" "}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="31.992"
								height="31.992"
								x="0"
								y="0"
								enableBackground="new 0 0 31.992 31.992"
								version="1.1"
								viewBox="0 0 31.992 31.992"
								xmlSpace="preserve"
							>
								<path d="M31.992 14.017c0-1.412 0-3.604-1.441-3.604-.688 0-3.113-.868-5.9-.268-3.055.657-6.543 1.349-8.654 1.349-2.112 0-5.6-.69-8.653-1.35-2.787-.601-5.213.268-5.902.268C0 10.411 0 12.604 0 14.016c0 .122.268.232.714.333-.08.375-.101.766-.037 1.16l.538 3.398c.277 1.738 1.934 3.152 3.693 3.152h4.767c1.764 0 3.395-1.422 3.63-3.148l.663-3.399a2.797 2.797 0 00-.239-1.608c.752-.151 1.51-.271 2.269-.271.76 0 1.518.118 2.271.271a2.81 2.81 0 00-.236 1.629l.654 3.359c.24 1.747 1.871 3.169 3.634 3.169h4.768c1.759 0 3.415-1.414 3.692-3.153l.538-3.397a3.153 3.153 0 00-.036-1.16c.442-.103.709-.213.709-.334zm-18.736 1.376l-.663 3.399c-.192 1.404-1.502 2.545-2.919 2.545H4.907c-1.42 0-2.758-1.141-2.98-2.543l-.538-3.398a2.37 2.37 0 01.452-1.826c.397-.52.981-.846 1.579-.915l7.751.615c.69-.073 1.289.138 1.674.579.345.399.491.954.411 1.544zm17.348.003l-.539 3.397c-.221 1.402-1.56 2.545-2.979 2.545h-4.768c-1.418 0-2.727-1.143-2.922-2.566l-.655-3.359c-.084-.611.062-1.166.407-1.563.334-.383.832-.594 1.404-.594.088 0 .176.005.334.016l7.619-.617a2.36 2.36 0 011.645.916c.398.519.56 1.167.454 1.825z"></path>
								<path d="M7.552 15.038a2.103 2.103 0 100 4.206 2.103 2.103 0 000-4.206zm.589 2.525a.95.95 0 110-1.895.95.95 0 010 1.895zM24.438 15.038a2.104 2.104 0 100 4.208 2.104 2.104 0 000-4.208zm.587 2.525a.95.95 0 11.002-1.896.95.95 0 01-.002 1.896z"></path>
							</svg>
							<span className="text-accent">Hospital</span>
						</span>
					</Link>{" "}
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal p-0">
						<li>
							<NavLink to={"/home"}> Home</NavLink>
						</li>
						<li>
							<NavLink to={"/hospital"}> Hospitals</NavLink>
						</li>
						<li>
							<NavLink to={"/booking"}> Booking </NavLink>
						</li>
					</ul>
				</div>
				<div className="navbar-end">
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
								className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
							
						<div className="auth-area gap-4 flex">
							<Link to={"/login"}>
								<span className="btn btn-primary"> Login</span>{" "}
							</Link>
							<Link to={"/register"}>
								<span className="btn btn-secondary"> Register</span>{" "}
							</Link>
						</div>
						</div>
					)
                
                
                }
				</div>
			</div>
		</header>
	);
};

export default Header;
