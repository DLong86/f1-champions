import React from "react";
import { Link } from "react-router-dom";
// import logo from "../../public/images/f1-logo.svg";

export default function Navbar() {
	// console.log(logo);
	return (
		// <div className="bg-secondary w-2/5">
		<div className="">
			<h1 className="text-5xl font-bold italic text-zinc-50">
				Formula 1 <span className="text-gold">Champions</span>
			</h1>
			<div className="flex justify-start ">
				<Link className="pr-2 text-xl" to="/">
					Stats
				</Link>
				<Link className="pr-2 text-xl" to="/drivers">
					Drivers
				</Link>
				<Link className="pr-2 text-xl" to="/constructors">
					Constructors
				</Link>
			</div>
		</div>
	);
}
