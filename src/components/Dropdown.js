import { useState } from "react";
import useFetch from "../hooks/useFetch";

export default function Dropdown({ options }) {
	const url = options;
	const { data } = useFetch(url);
	const [decade, setDecade] = useState(data);

	const selectYear = (e) => {
		console.log(e.target.value);
		const value = e.target.value;

		const filteredDrivers = data.filter(
			(driver) =>
				driver.year >= parseInt(value) && driver.year <= parseInt(value) + 9
		);
		setDecade(filteredDrivers);
	};

	return (
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

			{url === "http://localhost:8080/drivers"
				? decade.map((driver) => (
						<li key={driver.id} className="driver-list">
							<h4>{driver.year}</h4>
							<h3>{driver.name}</h3>
							<p className="text-slate-400">{driver.Nationality}</p>
							<h5>{driver.team}</h5>
						</li>
				  ))
				: decade.map((constructor) => (
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
