import styles from "./Stats.module.css";

export default function Stats() {
	return (
		<div className={styles.statsContainer}>
			<p>
				Formula One, often referred to as F1, is a form of open-wheeled motor
				racing that began in 1950. Races, usually known as Grands Prix, take
				place all around the world on purpose-built race tracks as well as
				temporary street circuits.
			</p>
			<p>
				Many of the world's top car manufacturers compete in F1. The cars are
				capable of speeds up to around 360 km/h (224 mph), are powered by a
				hybrid engine, turbocharged, and rev up to 15,000 RPM. A Formula One
				race is typically 305 km (190 mi) in length and lasts around 1.5 to two
				hours.
			</p>

			<img
				src="https://primotipo.files.wordpress.com/2014/10/image34.jpg"
				alt="Jim Clark in a Lotus"
			/>
			<figcaption>Jim Clark in the Lotus 43.</figcaption>
		</div>
	);
}
