import { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./assets/src/css/sb-admin-2.min.css";

import Nav from "./components/Nav";
import DownloadArea from "./components/DownloadArea";
import ListStream from "./components/ListStream";
import Loading from "./components/Loading";

let requestOptions = {
	method: "GET",
	redirect: "follow",
	headers: {
		"Content-Type": "application/json",
	},
};

let baseUrl = import.meta.env.VITE_BASE_URL;

function App() {
	const [result, setResult] = useState({});
	const [typeChoices, setTypeChoices] = useState([]);
	const [chosenType, setChosenType] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const handleDownloadClick = (url) => {
		let raw = JSON.stringify({ url: url, type_: chosenType.value });
		setResult({});
		setIsLoading(true);
		fetch(`${baseUrl}/api/v1/download/`, {
			...requestOptions,
			method: "POST",
			body: raw,
		})
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				setResult(result);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleOnTypeChange = (choice) => {
		setChosenType(choice);
	}

	useEffect(() => {
		fetch(`${baseUrl}/api/v1/type-choices/`, requestOptions)
			.then((response) => response.json())
			.then((result) => {
				setTypeChoices(result.choices);
				setChosenType(result.choices[0]);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [])

	return (
		<div className="container">
			<Nav />
			<DownloadArea onDownloadClick={handleDownloadClick} typeChoices={typeChoices} chosenType={chosenType} onTypeChange={handleOnTypeChange} />
			{isLoading && <Loading />}
			{result.streams && (
				<>
					<hr />
					<ListStream streams={result.streams} title={result.title} thumbnail={result.thumbnail_url} />
				</>
			)}
		</div>
	);
}

export default App;
