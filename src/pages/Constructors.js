// import { useState } from "react";
import useFetch from "../hooks/useFetch";
import DisplayConstructorLists from "../components/DisplayConstructorLists";

export default function Constructors() {
	const url = "http://localhost:8080/constructors";
	const { data } = useFetch(url);

	return (
		<div>
			<h1>World Constructor Champions List</h1>
			<DisplayConstructorLists targetUrl={url} />
		</div>
	);
}
