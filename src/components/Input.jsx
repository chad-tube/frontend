import { useRef } from "react";
import Type from "./Type";

const Input = ({ onDownloadClick, typeChoices, chosenType, onTypeChange }) => {
	const urlRef = useRef(null);

	return (
		<div className="row gy-2 px-md-5 justify-content-center">
			<div className="col-sm-12 col-md-8 col-lg-9 col-xl-9">
				<input
					type="text"
					className="form-control"
					placeholder="Enter YouTube URL"
					ref={urlRef}
				/>
			</div>
			<div className="col-sm-12 col-md-2 col-lg-2 col-xl-1">
				<Type typeChoices={typeChoices} chosenType={chosenType} onTypeChange={onTypeChange} />
			</div>
			<div className="col-sm-12 col-md-2 col-lg-1 col-xl-1">
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
