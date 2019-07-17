import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => (
	<nav>
		<h2>{props.name}</h2>
		<ul className="navigation-menu">
			<li><NavLink className="navigation-link" exact to="/">Home</NavLink></li>
			<li><NavLink className="navigation-link" to="/events">Events</NavLink></li>
			<li><NavLink className="navigation-link" to="/aboutus">About us</NavLink></li>
			<li><i class="fas fa-search"></i></li>
			<li><i class="fas fa-shopping-bag"></i></li>
		</ul>
	</nav>
);

export default Navbar;