import React, { useState } from 'react'

const Count = () => {

	const [count, setCount] = useState(0);
	const increaseCount = () => {
		const newCount = count + 1;
		if (newCount > 10) {
			alert('count is greater than 10');
		}
		else {
			setCount(newCount);
		}
	}
	const decreaseCount = () => {
		const dCount = count - 1;
		setCount(dCount);
	}


	return (
		<>
			<section className="why-choose mt-5">
				<div className="container mt-5">
					<div className="row mt-5">

						<div className="col-lg-6 col-sm-6">
							<div className="why-box">
								<div className="why-content">
									<h3>My <span>Projects</span> {count}</h3>
									<div className="text mt-2">
										<button onClick={increaseCount} className="btn btn-success btn-lg me-3">Increase</button>
										<button onClick={decreaseCount} className="btn btn-danger btn-lg me-3">Decrease</button>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>
		</>
	)
}

export default Count