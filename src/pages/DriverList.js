import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Dropdown from "../components/Dropdown";

export default function DriverList() {
	const url = "http://localhost:8080/drivers";
	const { data } = useFetch(url);

	return (
		<div>
			<h1>World Driver Champions List</h1>
			<Dropdown options={url} />
		</div>
	);
}
