import { useEffect, useState } from "react";

const useFetch = async () => {
	const url = "https://localhost:8080";
	const [drivers, setDrivers] = useState([]);

	console.log(drivers);

	const fetchData = async () => {
		return fetch(url)
			.then((response) => response.json())
			.then((data) => setDrivers(data)); // This state is never changing, think of a way to store the data in something else
	};

	useEffect(() => {
		fetchData();
	}, []);
};

module.exports(useFetch);
