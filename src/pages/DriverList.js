import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Dropdown from "../components/Dropdown";

export default function DriverList() {
	const url = "http://localhost:8080/drivers";
	const { data } = useFetch(url);
	const [selectedDrivers, setSelectedDrivers] = useState(data);

	// Function can be stuck in the dropdown component or its own hook???
	const selectYear = (e) => {
		console.log(e.target.value);
		const value = e.target.value;
		console.log(value);

		const filteredDrivers = data.filter(
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
