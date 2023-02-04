import React from 'react'
import { Link } from 'react-router-dom'
import WhyData from '../Data/WhyData'
import Why from './Why'

function ChooseUs() {
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

						{
							WhyData.map((val, ind) => {
								return (
									<>
										<Why title={val.title} icon={val.icon} text={val.text} key={ind} />
									</>
								)
							})
						}

					</div>
				</div>
			</section>
		</>
	)
}

export default ChooseUs