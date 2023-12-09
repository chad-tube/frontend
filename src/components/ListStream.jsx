import React from "react";
import { FaVolumeMute } from "react-icons/fa";
import Thumbnail from "./Thumbnail";

const ListStream = ({ streams, title, thumbnail }) => {
	return (
		<>
			<div className="row justify-content-center text-center gy-3">
				<div className="col-12">
					<Thumbnail url={thumbnail} />
				</div>
				<div className="col-12">
					<h3 className="h3 text-center">{title}</h3>
				</div>

				<div className="col">
					<ul className="list-group">
						{streams.map((stream, index) => {
							return (
								<li className="list-group-item" key={index}>
									<div className="container-fluid">
										<div className="row align-items-center justify-content-between text-center text-md-start gy-4 gy-md-0">
											<div className="col-sm-4 col-lg-6">
												<div className="row">
													<a>{stream.resolution}</a>
													<a>{stream.mime_type}</a>
													{!stream.abr ? (
														<a>
															<FaVolumeMute />
														</a>
													) : (
														<a>{stream.abr} kbps</a>
													)}
												</div>
											</div>
											<div className="col-sm-4 col-lg-6 text-md-end">
												<div className="badge bg-primary rounded-pill">
													{stream.file_size}
												</div>
												<div>
													<a href={stream.url} target="_blank">
														Download
													</a>
												</div>
											</div>
										</div>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			<hr />
		</>
	);
};

export default ListStream;
