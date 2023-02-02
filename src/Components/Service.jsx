import React from 'react'
import ServiceData from '../Data/ServiceData'

function Service() {
  return (
    <>

      <section className="service mt-5">
        <div className="container mt-5">
          <div className="section-title text-center mt-5">
            <h2>Our <span>Service</span></h2>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Perspiciatis unde omnis iste natus error sit.</p>
          </div>
          <div className="row">
            {
              ServiceData.map((val, ind) => {
                return (
                  <>
                    <div className="col-lg-4 col-sm-6" key={ind}>
                      <div className="servicebox">
                        <div className="service-content">
                          <div className="service-icon">
                            <img src={val.icon} alt="" />
                          </div>
                          <h3 className="title"><a href="#">{val.title}</a></h3>
                          <div className="text">
                            {val.text}
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

export default Service