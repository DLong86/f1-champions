import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div className="navbar">
			<h1 className="nav-title">Formula 1 Champions</h1>
			<div className="links">
				<Link to="/">Drivers</Link>
				<Link to="/constructors">Constructors</Link>
			</div>
		</div>
	);
}
