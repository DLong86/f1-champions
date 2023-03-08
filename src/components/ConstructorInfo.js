import styles from "./styles/Info.module.css";

export default function ConstructorInfo() {
	return (
		<div className={styles.infoContainer}>
			<h3 className={styles.quote}>
				<i>
					“Race cars are neither ugly nor beautiful. They become beautiful when
					they win.” - Enzo Ferrari
				</i>
			</h3>
			<p>
				This is a list of constructors who have won the{" "}
				<a href="https://www.fia.com/">FIA Formula One</a> World Championship
				for Constructors, which from 1984-1985 was known as the Formula One
				World Championship for Manufacturers, and from its creation in 1958 to
				1980 was known as the International Cup for Formula One Constructors. It
				was first awarded in 1958 to{" "}
				<a href="https://en.wikipedia.org/wiki/Vanwall_in_Formula_One">
					Vanwall
				</a>
				.
			</p>
			<img
				src="https://cdn-1.latimages.com/images/mgl/eoOQpp/s4/1016957589-LAT-19700607-70BEL127.jpg"
				alt="mechanics working on car"
			/>
			<figcaption>Mechanics working on car, 1970s.</figcaption>
			<p>
				The 1966 Repco engines were based on production Oldsmobile engine blocks
				from the USA.
			</p>
			<p>The TAG engines were designed and built by German company Porsche.</p>
			<p>
				10 of the constructors' championships for Ford engines were with the
				(Ford-financed) Cosworth DFV engine.
			</p>
			<img
				src="http://upload.wikimedia.org/wikipedia/commons/a/aa/Ayrton_Senna_-_Mclaren_MP4-8_during_practice_for_the_1993_British_Grand_Prix_%2832873580103%29.jpg"
				alt="McLaren MP4/8"
			/>
			<figcaption>
				McLaren MP4/8 - driven by Ayrton Senna in 1993, using a TAG built
				traction control system and a Ford HBD7 V8 engine.
			</figcaption>
			<p>
				Mercedes won 9 with their own team, 3 with McLaren and 1 with Brawn.
			</p>
			<p>
				Goodyear was the sole tyre supplier for the 1987, 1988, & 1992 – 1996
				Seasons
			</p>

			<p>
				Bridgestone was the sole tyre supplier for the 1999 & 2000 Seasons, and
				2007 – 2010
			</p>
			<img
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTExDK0YMUe0sKLaqFzvlvXjNRJ2QoKy_vioA&usqp=CAU"
				alt="Bridgestone tyre"
			/>
			<figcaption>Bridgestone Tyre</figcaption>
			<p>Pirelli were the sole tyre supplier from 2011 to 2023</p>
			<p>
				Ascari competed in the 1952 Indianapolis 500 on Firestone tyres, then
				completed the Season on Pirelli
			</p>
		</div>
	);
}
