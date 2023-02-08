import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Dropdown from "../components/Dropdown";

export default function ConstructorList() {
	const url = "http://localhost:8080/constructors";
	const { data } = useFetch(url);
	// const [constructors, setConstructors] = useState(data);

	/* Just need to put this in a function, and return the filtered drivers, maybe similar to the useFetch and store the setConstructor state to filteredDrivers */
	// const selectYear = (e) => {
	// 	console.log(e.target.value);
	// 	const value = e.target.value;
	// 	console.log(value);

	// 	const filteredDrivers = data.filter(
	// 		(driver) =>
	// 			driver.year >= parseInt(value) && driver.year <= parseInt(value) + 9
	// 	);
	// 	setConstructors(filteredDrivers);
	// };

	return (
		<div>
			<h1>World Constructor Champions List</h1>

			<Dropdown options={url} />
		</div>
	);
}
