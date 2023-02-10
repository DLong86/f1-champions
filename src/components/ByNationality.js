import { useState } from "react";
import useFetch from "../hooks/useFetch";

export default function ByNationality() {
	const url = "http://localhost:8080/drivers";
	const { data } = useFetch(url);
	const [country, setCountry] = useState(data);
	const [info, setInfo] = useState(true);
	const [byNation, setByNation] = useState(false);

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

		setCountry(filtered);
	};
	// Below filters out duplicates in the mapped array (So I don't get the same country many times in the dropdown options!)
	const nationality = data.map((driver) => driver.Nationality);
	const filterNat = data.filter(
		({ Nationality }, index) => !nationality.includes(Nationality, index + 1)
	);

	const handleInfo = (e) => {
		setByNation(false);
		setInfo(true);
	};

	const handleNationality = (e) => {
		setInfo(false);
		setByNation(true);
	};

	return (
		<div>
			<div className="mini-nav">
				<ul>
					<li onClick={handleInfo}>Info</li>
					<li onClick={handleNationality}>By Nationality</li>
				</ul>
			</div>
			{byNation && (
				// <select onChange={selectYear}>
				// 	<option defaultValue={country}>Select country</option>
				// 	<option value="ARG">Argentina</option>
				// 	<option value="AUS">Australia</option>
				// 	<option value="AUT">Austria</option>
				// 	<option value="BRA">Brazil</option>
				// 	<option value="CAN">Canada</option>
				// 	<option value="FIN">Finland</option>
				// 	<option value="FRA">France</option>
				// 	<option value="GER">Germany</option>
				// 	<option value="ITA">Italy</option>
				// 	<option value="NED">Netherlands</option>
				// 	<option value="NZL">New Zealand</option>
				// 	<option value="ZAF">South Africa</option>
				// 	<option value="SPA">Spain</option>
				// 	<option value="GBR">United Kingdom</option>
				// 	<option value="USA">United States</option>
				// </select>
				<select onChange={selectYear}>
					{filterNat.map((item) => {
						return (
							<option key={item.Nationality} value={item.Nationality}>
								{item.Nationality}
							</option>
						);
					})}
				</select>
			)}
			{/* This list is being used many times, needs to be its own component */}
			{byNation &&
				country.map((info) => (
					<li key={info.id} className="driver-list">
						<h4>{info.year}</h4>
						<h3>{info.name || info.entrant}</h3>
						<p className="text-slate-400">{info.Nationality || info.engine}</p>
						<h5>{info.team}</h5>
					</li>
				))}

			{info && (
				<div>
					<h1>This is the Info state</h1>
				</div>
			)}
		</div>
	);
}
