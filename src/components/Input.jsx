import React, { useRef } from "react";
import Type from "./Type";

const Input = ({ onDownloadClick, typeChoices, chosenType, onTypeChange }) => {
	const urlRef = useRef(null);

	return (
		<div className="row gy-2 px-md-5">
			<div className="col-sm-10 col-md-10">
				<input
					type="text"
					className="form-control"
					placeholder="Enter YouTube URL"
					ref={urlRef}
				/>
			</div>
			<div className="col-sm-2 col-md-1">
				<Type typeChoices={typeChoices} chosenType={chosenType} onTypeChange={onTypeChange} />
			</div>
			<div className="col-sm-2 col-md-1">
				<button
					className="btn btn-primary"
					onClick={() => {
						onDownloadClick(urlRef.current.value);
					}}
				>
					Download
				</button>
			</div>
		</div>
	);
};

export default Input;
