import React from 'react'
import ServiceData from '../Data/ServiceData'
import S from './S'

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
                    <S icon={val.icon} title={val.title} text={val.text} key={ind} />
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