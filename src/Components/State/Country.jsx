import React, { useEffect, useState } from 'react'


const Country = () => {
	const [country, setCountry] = useState([])
	useEffect(() => {
		fetch('https://restcountries.com/v3.1/all')
			.then(response => response.json())
			.then(data => setCountry(data))
	}, [])
	return (
		<>
			<section className="service mt-5">
				<div className="container mt-5">
					<div className="section-title text-center mt-5">
						<h2>Our <span>Country</span></h2>
						<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Perspiciatis unde omnis iste natus error sit.</p>
					</div>
					<div className="row">
						{
							country.map((val, ind) => {
								return (
									<>
										<div className="col-lg-3 col-sm-6" key={ind}>
											<div className="servicebox">
												<div className="service-content">
													<div className="service-icon">
														<img src={val.flags.png} alt="" style={{'height' : 30}} />
													</div>
													<h3 className="title"><a href="#">{val.name.common}</a></h3>
													<div className="text">
														Capital - {val.capital} <br />
														Population - {val.population}
													</div>
												</div>
											</div>
										</div>
									</>
								);
							})
						}

					</div>
				</div>
			</section>
		</>
	)
}

export default Country
