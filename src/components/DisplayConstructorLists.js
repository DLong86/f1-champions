import { useState } from "react";
import FilterConstructorOptions from "./lists/FilterConstructorOptions";
import ByDecade from "./ByDecade";
import ByConstructor from "./ByConstructor";
import ConstructorInfo from "./ConstructorInfo";

export default function DisplayConstructorLists({ targetUrl }) {
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
		<div className="display-lists">
			<FilterConstructorOptions
				handleInfo={handleInfo}
				handleDecade={handleDecade}
				handleConstructor={handleConstructor}
			/>

			{info && <ConstructorInfo />}

			{byYear && <ByDecade options={url} />}

			{byConstructor && <ByConstructor />}
		</div>
	);
}
