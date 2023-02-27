import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navlinks({ closeLinks }) {
	return (
		<div className={styles.links}>
			<div className={styles.close}>
				<i class="fa-solid fa-x" onClick={closeLinks}></i>
			</div>
			<Link onClick={closeLinks} to="/">
				Stats
			</Link>
			<Link onClick={closeLinks} to="/drivers">
				Drivers
			</Link>
			<Link onClick={closeLinks} to="/constructors">
				Constructors
			</Link>
		</div>
	);
}
