import Input from "./Input";

const DownloadArea = ({ onDownloadClick, typeChoices, chosenType, onTypeChange }) => {

	return (
		<div>
			<div className="d-flex flex-column text-center mt-5 gap-4">
				<h4 className="h4">YouTube Video Downloader</h4>
				<Input onDownloadClick={onDownloadClick} typeChoices={typeChoices} chosenType={chosenType} onTypeChange={onTypeChange} />
			</div>
		</div>
	);
};

export default DownloadArea;
