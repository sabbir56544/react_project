import React from 'react'
import {Link} from 'react-router-dom'

const S = (props) => {
    return (
        <>
            <div className="col-lg-4 col-sm-6" key={props.ind}>
                <div className="servicebox">
                    <div className="service-content">
                        <div className="service-icon">
                            <img src={props.icon} alt="" />
                        </div>
                        <h3 className="title"><Link to={'/service/' + props.title}>{props.title}</Link></h3>
                        <div className="text">
                            {props.text}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default S
