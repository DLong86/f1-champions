import { useState } from "react";
import useFetch from "../hooks/useFetch";
import List from "./List";

export default function Dropdown({ options }) {
	const url = options;
	const { data } = useFetch(url);
	const [decade, setDecade] = useState(data);

	const selectYear = (e) => {
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

			{decade.map((info) => (
				<List key={info.id} info={info} />
			))}
		</div>
	);
}
