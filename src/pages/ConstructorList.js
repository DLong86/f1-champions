import { useState, useEffect } from "react";

export default function ConstructorList() {
	const [constructors, setConstructors] = useState([]);
	const [selectedConstructors, setSelectedConstructors] =
		useState(constructors);
	const url = "http://localhost:8080/constructors";

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((json) => setConstructors(json));
	}, [url]);

	const selectYear = (e) => {
		console.log(e.target.value);
		const value = e.target.value;
		console.log(value);

		const filteredDrivers = constructors.filter(
			(driver) =>
				driver.year >= parseInt(value) && driver.year <= parseInt(value) + 9
		);
		setSelectedConstructors(filteredDrivers);
	};

	// console.log(constructors);

	return (
		<div>
			<h1>World Constructor Champions List</h1>
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
			{selectedConstructors.map((constructor) => (
				<li key={constructor.id} className="driver-list">
					<h4>{constructor.year}</h4>
					<h3>{constructor.chassis}</h3>
					<p className="text-slate-400">{constructor.engine}</p>
				</li>
			))}
		</div>
	);
}
