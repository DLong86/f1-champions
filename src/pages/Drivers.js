// import { useState } from "react";
import useFetch from "../hooks/useFetch";
import ByYear from "../components/ByYear";

export default function Drivers() {
	const url = "http://localhost:8080/drivers";
	const { data } = useFetch(url);

	return (
		<div>
			<h1>World Driver Champions List</h1>
			<ByYear options={url} />
		</div>
	);
}
