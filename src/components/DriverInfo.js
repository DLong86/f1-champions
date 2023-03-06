import styles from "./styles/Info.module.css";

export default function DriverInfo() {
	return (
		<div className={styles.infoContainer}>
			<h3 className={styles.quote}>
				<i>"In Order To Finish First, First You Have To Finish..."</i>
			</h3>
			<p>
				The <a href="https://www.fia.com/">Formula One</a> World Drivers'
				Championship (WDC) is awarded by
				<a href="https://www.formula1.com/">
					{" "}
					the Fédération Internationale de l'Automobile
				</a>{" "}
				(FIA) to the most successful Formula One racing car driver over a
				season, as determined by a points system based on Grand Prix results of
				that year. The Drivers' Championship was first awarded in 1950, to{" "}
				<a href="https://en.wikipedia.org/wiki/Giuseppe_Farina">Nino Farina</a>.
				The first driver to win multiple Championships was{" "}
				<a href="https://en.wikipedia.org/wiki/Alberto_Ascari">
					Alberto Ascari
				</a>
				, in 1952 and 1953. The current Drivers' Champion is{" "}
				<a href="https://en.wikipedia.org/wiki/Max_Verstappen">
					Max Verstappen
				</a>
				, who won his first World Championship in the 2021 season.
			</p>
			<img
				src="https://i.pinimg.com/originals/84/d8/90/84d890c018aa74146468290c44f12e48.jpg"
				alt="Nino Farina in Car"
			/>
			<figcaption>Nino Farina - The first World Drivers' Champion.</figcaption>
			<p>
				The FIA does not officially declare the Champion until the end of the
				season, but a driver is said to have "clinched" the Championship after
				it is no longer possible for another to obtain more points than him,
				even if the former driver were to not compete in the remaining races of
				the season, and the latter to score the maximum number of points
				possible. The Drivers' Championship has been won in the final race of
				the season 29 times in the 70 seasons it has been awarded. The earliest
				in a season that the Drivers' Championship has been clinched was in
				2002, when{" "}
				<a href="https://en.wikipedia.org/wiki/Michael_Schumacher">
					Michael Schumacher
				</a>{" "}
				secured the title with six races remaining.
			</p>
			<img
				src="https://e0.365dm.com/23/03/768x432/skysports-lewis-hamilton-formula-1_6078026.jpg?20230304171329"
				alt="Lewis Hamilton in F1 car"
			/>
			<figcaption>Seven time world champion - Lewis Hamilton.</figcaption>
			<p>
				Overall, thirty-four different drivers have won the Championship, with
				German Michael Schumacher and Briton{" "}
				<a href="https://en.wikipedia.org/wiki/Lewis_Hamilton">
					Lewis Hamilton
				</a>{" "}
				both holding the record for most titles, at seven. Schumacher also holds
				the record for most consecutive Drivers' Championships, winning five
				from 2000 to 2004. However, Great Britain has produced, by far, the most
				number of World Championship winning drivers with ten (Brazil, Germany
				and Finland are next closest, with three each).
			</p>
		</div>
	);
}
