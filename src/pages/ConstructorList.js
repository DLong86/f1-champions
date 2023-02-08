import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Dropdown from "../components/Dropdown";

export default function ConstructorList() {
	const url = "http://localhost:8080/constructors";
	const { data } = useFetch(url);

	return (
		<div>
			<h1>World Constructor Champions List</h1>
			<Dropdown options={url} />
		</div>
	);
}
