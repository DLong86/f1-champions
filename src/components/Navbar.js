import { useState } from "react";
import styles from "./Navbar.module.css";
import Navlinks from "./Navlinks";
// import { Link } from "react-router-dom";

export default function Navbar() {
	const [closeNav, setCloseNav] = useState(true);

	const closeLinks = () => {
		setCloseNav((prev) => !prev);
	};
	return (
		<div className={styles.navbar}>
			<h1 className={styles.navTitle}>
				F1 <span className={styles.championsGold}>Champions</span>
			</h1>
			{closeNav && <Navlinks closeLinks={closeLinks} />}
			<h2>
				<i class="fa-solid fa-bars" onClick={closeLinks}></i>
			</h2>
		</div>
	);
}
