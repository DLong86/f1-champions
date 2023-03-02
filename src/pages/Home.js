import React from "react";
import styles from "./Home.module.css";

export default function Home() {
	return (
		<div className={styles.homeContainer}>
			<img
				className={styles.image}
				src="https://www.snaplap.net/wp-content/uploads/2016/03/riccardo_patrese__portugal_1991.jpg"
				alt="Williams FW14b"
			/>
			<div className={styles.homeText}>
				<h1 className={styles.title}>Welcome to F1 Champions</h1>
				<p className={styles.intro}>
					Search through our extensive database to find out about past and
					present world driver and constructor champions.
				</p>
			</div>
			<footer className={styles.footer}>
				<i className="fa-brands fa-instagram"></i>
				<i class="fa-brands fa-twitter"></i>
				<i class="fa-brands fa-facebook"></i>
			</footer>
		</div>
	);
}
