import { useState, useEffect } from "react";
import Dropdown from "../components/Dropdown";

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
			<Dropdown selectYear={selectYear} />

			{/* <Dropdown /> */}
			{selectedConstructors.map((constructor) => (
				<li key={constructor.id} className="driver-list">
					<h3>{constructor.year}</h3>
					<h3>{constructor.entrant}</h3>
					{/* <h3>{constructor.chassis}</h3> */}
					<p className="text-slate-400">{constructor.engine}</p>
				</li>
			))}
		</div>
	);
}
