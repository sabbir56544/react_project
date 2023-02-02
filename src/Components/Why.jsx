import React from 'react'
import { Link } from 'react-router-dom'

const Why = (props) => {
	return (
		<>
			<div className="col-lg-4 col-sm-6">
				<div className="choose-box">
					<div className="choose-content">
						<div className="choose-icon">
							<img src={props.icon} alt="" />
						</div>
						<h3 className="title"><Link to={'/chooseus/' + props.id}>{props.title}</Link></h3>
						<div className="text">
							{props.text}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Why