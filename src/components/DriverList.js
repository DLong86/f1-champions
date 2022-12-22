import { useState, useEffect } from "react";

export default function DriverList() {
	const [drivers, setDrivers] = useState([]);
	const [url, setUrl] = useState("http://localhost:8080");
	const [chosenYear, setChosenYear] = useState();

	console.log(chosenYear);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((json) => setDrivers(json));
	}, [url]);

	return (
		<div>
			<h2>World Driver Champions List</h2>
			<div className="filters">
				<button onClick={() => setUrl("http://localhost:8080/year")}>
					Click one
				</button>
				<button onClick={() => setUrl("http://localhost:8080")}>
					Click two
				</button>
			</div>
			<div>
				<select
					name="year"
					id="year"
					onChange={(e) => setChosenYear(e.target.value)}
				>
					<option value="">Select year</option>
					{drivers.map((driver) => {
						return (
							<option key={driver.id} value={driver.year}>
								{driver.year}
							</option>
						);
					})}
				</select>
			</div>
			{drivers &&
				drivers.map((driver) => {
					return (
						<li key={driver.id} className="driver-list">
							<h4>{driver.year}</h4>
							<h3>{driver.name}</h3>
							<p>{driver.Nationality}</p>
						</li>
					);
				})}
		</div>
	);
}
