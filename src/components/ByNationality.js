import { useState } from "react";
import useFetch from "../hooks/useFetch";
import List from "./lists/List";

export default function ByNationality() {
	const url = "http://localhost:8080/drivers";
	const { data } = useFetch(url);
	const [country, setCountry] = useState(data);

	const selectCountry = (e) => {
		const value = e.target.value;
		console.log(value);

		const filtered = data.filter((item) => {
			return item.Nationality === value;
		});

		setCountry(filtered);
	};

	const nationality = data.map((driver) => driver.Nationality);
	const filterNat = data.filter(
		({ Nationality }, index) => !nationality.includes(Nationality, index + 1)
	);
	return (
		<div>
			<select className="bg-primary" onChange={selectCountry}>
				<option defaultValue="GBR">Select country</option>
				{filterNat.map((item) => {
					return (
						<option key={item.Nationality} value={item.Nationality}>
							{item.Nationality}
						</option>
					);
				})}
			</select>

			<div>
				{country.map((info) => (
					<List key={info.id} info={info} />
				))}
			</div>
		</div>
	);
}
