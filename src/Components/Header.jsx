import React from 'react'
import {Link, NavLink} from 'react-router-dom'


function Header() {
	return (
		<>
			<header className="main-header">
				<div className="container">

					<div className="main-box">
						<div className="inner-container clearfix">

							<div className="logo-box">
								<div className="logo"><Link to="/"><img src="images/logo.png" alt="" /></Link></div>
							</div>


							<div className="nav-outer clearfix">

								<nav className="main-menu">
									<div className="navbar-header">

										<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
											<span className="icon-bar"></span>
											<span className="icon-bar"></span>
											<span className="icon-bar"></span>
										</button>
									</div>

									<div className="navbar-collapse collapse clearfix">
										<ul className="navigation clearfix">
											<li className="dropdown">
											<NavLink to="/">Home</NavLink>
												
											</li>
											<li className="dropdown">
											<NavLink to="/about">About</NavLink>
												
											</li>
											<li className="dropdown">
											<NavLink to="/chooseus">Why Us</NavLink>
												
											</li>
											<li className="dropdown">
											<NavLink to="/service">Service</NavLink>
												
											</li>
											<li className="dropdown">
											<NavLink to="/contact">Contact</NavLink>
												
											</li>
											<li className="dropdown">
											<NavLink to="/usestate">useState</NavLink>
												
											</li>
											<li className="dropdown">
											<NavLink to="/useffect">useEffect</NavLink>
												
											</li>
										</ul>
									</div>
								</nav>

							</div>
						</div>
					</div>
				</div>

			</header>
		</>
	);
}

export default Header;
