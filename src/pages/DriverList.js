import { useState, useEffect } from "react";
import Dropdown from "../components/Dropdown";

export default function DriverList() {
	const [drivers, setDrivers] = useState([]);
	const [selectedDrivers, setSelectedDrivers] = useState(drivers);
	const url = "http://localhost:8080/drivers";

	// maybe put this in its own file
	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((json) => setDrivers(json));
	}, [url]);

	const selectYear = (e) => {
		console.log(e.target.value);
		const value = e.target.value;
		console.log(value);

		const filteredDrivers = drivers.filter(
			(driver) =>
				driver.year >= parseInt(value) && driver.year <= parseInt(value) + 9
		);
		setSelectedDrivers(filteredDrivers);
	};

	return (
		<div>
			<h1>World Driver Champions List</h1>

			<Dropdown selectYear={selectYear} />
			{selectedDrivers.map((driver) => (
				<li key={driver.id} className="driver-list">
					<h4>{driver.year}</h4>
					<h3>{driver.name}</h3>
					<p className="text-slate-400">{driver.Nationality}</p>
					<h5>{driver.team}</h5>
				</li>
			))}
		</div>
	);
}
