import { useState } from "react";
// import FilterConstructorOptions from "./lists/FilterConstructorOptions";
// import ByDecade from "./ByDecade";
// import ByConstructor from "./ByConstructor";
import FilterConstructorOptions from "./lists/FilterConstructorOptions";
import ByDecade from "./ByDecade";
import ByConstructor from "./ByConstructor";

export default function DisplayConstructorLists({ targetUrl }) {
	// This might only work for driver list! Might need to make a new one for constructors
	const url = targetUrl;
	const [info, setInfo] = useState(true);
	const [byYear, setByYear] = useState(false);
	const [byConstructor, setByConstructor] = useState(false);

	// fix this so all of these functions are in one!!
	const handleInfo = (e) => {
		setByYear(false);
		setByConstructor(false);
		setInfo(true);
	};

	const handleDecade = (e) => {
		setInfo(false);
		setByConstructor(false);
		setByYear(true);
	};

	const handleConstructor = (e) => {
		setInfo(false);
		setByYear(false);
		setByConstructor(true);
	};

	return (
		<div className="bg-primary">
			<FilterConstructorOptions
				handleInfo={handleInfo}
				handleDecade={handleDecade}
				handleConstructor={handleConstructor}
			/>

			{info && (
				<div>
					<h1>This is the Info state</h1>
				</div>
			)}

			{byYear && <ByDecade options={url} />}

			{byConstructor && <ByConstructor />}
		</div>
	);
}
