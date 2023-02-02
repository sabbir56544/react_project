import React from 'react';
// for routing parameters
import { useParams, Link } from 'react-router-dom';
import WhyData from '../Data/WhyData';

const ChooseDetails = () => {
	//   get the which id is clicked and show the details of that id
	const { id } = useParams();
	// const data = WhyData[id - 1];
	const data = WhyData.find((val) => val.id == id);
	return (
		<>
			<section className="why-choose mt-5">
				<div className="container mt-5">
					<div className="row mt-5">

						<div className="col-lg-4 col-sm-6">
							<div className="why-box">
								<div className="why-content">
									<h3>Why <span>Choose</span> Us</h3>
									<div className="text">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
									</div>
								</div>
							</div>
						</div>


						<div className="col-lg-4 col-sm-6">
							<div className="choose-box">
								<div className="choose-content">
									<div className="choose-icon">
										<img src={data.icon} alt="" />
									</div>
									<h3 className="title">{data.title}</h3>
									<div className="text">
										{data.text}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);




}

export default ChooseDetails