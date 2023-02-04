import React from 'react';
// for routing parameters
import { useParams, Link } from 'react-router-dom';
import WhyData from '../Data/WhyData';

const ChooseDetails = () => {
	const { title } = useParams();
	const data = WhyData.find((val) => val.title === title);
	return (
		<>
			<section className="why-choose mt-5">
				<div className="container mt-5">
					<div className="row mt-5">

						<div className="col-lg-6 col-sm-6">
							<div className="why-box">
								<div className="why-content">
									<h3>Why Us</h3>
									<div className="text">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
									</div>
									<img src={data.icon} style={{height: 30}} alt="" />
									<h1>{data.icon}</h1>
								</div>
							</div>
						</div>


						<div className="col-lg-6 col-sm-6">
							<div className="choose-box">
								<div className="choose-content">
									
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