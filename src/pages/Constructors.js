// import { useState } from "react";
import useFetch from "../hooks/useFetch";
import ByDecade from "../components/ByDecade";

export default function Constructors() {
	const url = "http://localhost:8080/constructors";
	const { data } = useFetch(url);

	return (
		<div>
			<h1>World Constructor Champions List</h1>
			<ByDecade options={url} />
		</div>
	);
}
