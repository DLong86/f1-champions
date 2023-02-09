// import { useState } from "react";
import useFetch from "../hooks/useFetch";

export default function ByNationality() {
	const url = "http://localhost:8080/drivers";
	const { data } = useFetch(url);
	// const [decade, setDecade] = useState(data);

	// console.log(data);

	/* NB: This gets all the drivers nationalities, now I need to:
		-- find a way to not duplicate drivers (reduce?)
		-- But still show how many times a driver has won e.g. "Jim Clark - 2, Lewis Hamilton - 7"
	*/
	const selectYear = (e) => {
		const value = e.target.value;
		console.log(value);

		const filtered = data.filter((item) => {
			return item.Nationality === value;
		});

		console.log(filtered);
	};

	return (
		<div>
			<select onChange={selectYear}>
				<option value="ARG">Argentina</option>
				<option value="AUS">Australia</option>
				<option value="AUT">Austria</option>
				<option value="BRA">Brazil</option>
				<option value="CAN">Canada</option>
				<option value="FIN">Finland</option>
				<option value="FRA">France</option>
				<option value="GER">Germany</option>
				<option value="ITA">Italy</option>
				<option value="NED">Netherlands</option>
				<option value="NZL">New Zealand</option>
				<option value="ZAF">South Africa</option>
				<option value="SPA">Spain</option>
				<option value="GBR">United Kingdom</option>
				<option value="USA">United States</option>
			</select>
		</div>
	);
}
