import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Dropdown from "../components/Dropdown";

export default function ConstructorList() {
	const url = "http://localhost:8080/constructors";
	const { data } = useFetch(url);
	const [constructors, setConstructors] = useState(data);

	const selectYear = (e) => {
		console.log(e.target.value);
		const value = e.target.value;
		console.log(value);

		const filteredDrivers = data.filter(
			(driver) =>
				driver.year >= parseInt(value) && driver.year <= parseInt(value) + 9
		);
		setConstructors(filteredDrivers);
	};

	return (
		<div>
			<h1>World Constructor Champions List</h1>

			<Dropdown selectYear={selectYear} />

			{constructors.map((constructor) => (
				<li key={constructor.id} className="driver-list">
					<h4>{constructor.year}</h4>
					<h3>{constructor.entrant}</h3>
					{/* <h3>{constructor.chassis}</h3> */}
					<p className="text-slate-400">{constructor.engine}</p>
				</li>
			))}
		</div>
	);
}
