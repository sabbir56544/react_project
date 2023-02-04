import React from 'react'
import { useParams } from 'react-router-dom';
import ServiceData from '../Data/ServiceData'

const ServiceDetail = () => {
    const {title} = useParams();
    const data = ServiceData.find((val) => val.title === title)
    console.log(data);
  return (
    <>
      <section className="why-choose mt-5">
                <div className="container mt-5">
                    <div className="row mt-5">

                        <div className="col-lg-6 col-sm-6">
                            <div className="why-box">
                                <div className="why-content">
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
  )
}

export default ServiceDetail
