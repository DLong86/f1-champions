import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
	// console.log(logo);
	return (
		<div className={styles.navbar}>
			<h1 className={styles.navTitle}>
				F1 <span className={styles.championsGold}>Champions</span>
			</h1>
			{/* <div className="links">
				<Link className="" to="/">
					Stats
				</Link>
				<Link className="" to="/drivers">
					Drivers
				</Link>
				<Link className="" to="/constructors">
					Constructors
				</Link>
			</div> */}
			<h2>
				<i class="fa-solid fa-bars"></i>
			</h2>
		</div>
	);
}
