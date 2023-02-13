import { useState } from "react";
import useFetch from "../hooks/useFetch";
import List from "./List";

export default function ByNationality() {
	const url = "http://localhost:8080/drivers";
	const { data } = useFetch(url);
	const [country, setCountry] = useState(data);
	const [info, setInfo] = useState(true);
	const [byNation, setByNation] = useState(false);

	// console.log(data);
	const selectCountry = (e) => {
		const value = e.target.value;
		console.log(value);

		const filtered = data.filter((item) => {
			return item.Nationality === value;
		});

		setCountry(filtered);
	};
	// Do the same thing for -- ByDriver --
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
				<select onChange={selectCountry}>
					<option defaultValue="GBR">Select country</option>
					{filterNat.map((item) => {
						return (
							<option key={item.Nationality} value={item.Nationality}>
								{item.Nationality}
							</option>
						);
					})}
				</select>
			)}
			{byNation && country.map((info) => <List key={info.id} info={info} />)}

			{info && (
				<div>
					<h1>This is the Info state</h1>
				</div>
			)}
		</div>
	);
}
