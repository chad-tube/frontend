
const Thumbnail = ({ url }) => {
	return (
		<img src={url} alt="thumbnail" className="rounded" style={{ width: '400px' }} />
	);
};

export default Thumbnail;
