import { useState, useEffect } from "react";
// import Dropdown from "./Dropdown";

export default function DriverList() {
	const [drivers, setDrivers] = useState([]);
	const [selectedDrivers, setSelectedDrivers] = useState(drivers);
	const url = "http://localhost:8080";

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
			{/* BELOW is the dropdown which should be its own component */}
			<div>
				<select onChange={selectYear}>
					<option value="select">select decade</option>
					<option value="2020">2020s</option>
					<option value="2010">2010s</option>
					<option value="2000">2000s</option>
					<option value="1990">1990s</option>
					<option value="1980">1980s</option>
					<option value="1970">1970s</option>
					<option value="1960">1960s</option>
					<option value="1950">1950s</option>
				</select>
			</div>

			{/* <Dropdown /> */}
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
