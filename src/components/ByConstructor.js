import { useState } from "react";
import useFetch from "../hooks/useFetch";
import List from "./lists/List";

export default function ByConstructor() {
	const url = "http://localhost:8080/constructors";
	const { data } = useFetch(url);
	const [constructor, setConstructor] = useState(data);

	const selectConstructor = (e) => {
		const value = e.target.value;
		console.log(value);

		const filtered = data.filter((item) => {
			return item.chassis === value;
		});

		setConstructor(filtered);
	};

	const team = data.map((constructor) => constructor.chassis);
	const filterConstructor = data.filter(
		({ chassis }, index) => !team.includes(chassis, index + 1)
	);

	// console.log(data);

	return (
		<div>
			<div class="select-menu">
				<select onChange={selectConstructor}>
					<option defaultValue="McLaren">Select constructor</option>
					{filterConstructor.map((constructor) => {
						return (
							<option key={constructor.chassis} value={constructor.chassis}>
								{constructor.chassis}
							</option>
						);
					})}
				</select>
			</div>

			{constructor.map((info) => (
				<List key={info.id} info={info} />
			))}
		</div>
	);
}
