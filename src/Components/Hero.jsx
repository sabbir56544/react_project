import React from 'react'



function Hero(props) {
	return (
		<>
			<section className="welcome mt-5">
				<div className="container mt-5">
					<div className="row wel-inner-wrapper mt-5">

						<div className="col-lg-6">
							<div className="wel-image">
								<img src="images/resource/about1.png" alt="" />
							</div>
						</div>

						<div className="col-lg-6">
							<div className="area-head">
								<h2>Welcome To Our <span>Company</span></h2>
								<h3>Get creative idea</h3>
							</div>

							<div className="text">
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinci ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tinci ut laoreet dolore magna aliquam erat volutpat.
							</div>
							<div className="wel-number">
								<div className="wel-sin-num wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
									<h4>{props.year} +</h4>
									<p>Years of experience</p>
								</div>
								<div className="wel-sin-num wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
									<h4>100 %</h4>
									<p>Customer Satifaction </p>
								</div>
								<div className="wel-sin-num wow fadeInUp" data-wow-delay="900ms" data-wow-duration="1500ms">
									<h4>500 +</h4>
									<p>Happy Customers</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}

export default Hero