import React from 'react'

function Footer() {
  return (
	<>
		<footer className="footer mt-4">
          <div className="overlay mt-4"></div>
          <div className="container mt-4">
            <div className="footer-upper">
              <div className="row">
                <div className="item col-md-3 col-sm-6">
                  <div className="footer-widget about-widget">
                    <div className="logo">
                      <h4>Traff</h4>
                      <p>Lorem ipsum dolor amet consectetur adipisicing.</p>

                      <div className="address">
                        <ul>
                          <li><i className="fas fa-map-marker-alt"></i>123 Southpole Wasingtone</li>
                          <li><i className="fas fa-phone-volume"></i>+123 456 7890</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="item col-md-3 col-sm-6">
                  <div className="footer-widget our-service">
                    <h3 className="title">Service</h3>
                    <div className="names">
                      <ul>
                        <li><i className="far fa-hand-point-right"></i><a href="#">Investment Planning</a></li>
                        <li><i className="far fa-hand-point-right"></i><a href="#">Mutual Funds</a></li>
                        <li><i className="far fa-hand-point-right"></i><a href="#">Retairment Planning</a></li>
                        <li><i className="far fa-hand-point-right"></i><a href="#">Savings &amp; Investment</a></li>
                        <li><i className="far fa-hand-point-right"></i><a href="#">Tax Advisory Service</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="item col-md-3 col-sm-6">
                  <div className="footer-widget our-service">
                    <h3 className="title">Quick Links</h3>
                    <div className="names">
                      <ul>
                        <li><i className="far fa-hand-point-right"></i><a href="#">Company Policy</a></li>
                        <li><i className="far fa-hand-point-right"></i><a href="#">About Us</a></li>
                        <li><i className="far fa-hand-point-right"></i><a href="#">Contact Us</a></li>
                        <li><i className="far fa-hand-point-right"></i><a href="#">Services &amp; Investment</a></li>
                        <li><i className="far fa-hand-point-right"></i><a href="#">Funds</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="item col-md-3 col-sm-6">
                  <div className="footer-widget our-service style-2">
                    <div className="newsletter">
                      <h2>Newsletter</h2>
                      <p>Lorem ipsum dolor sit amet consect etur .</p>
                    </div>

                    <form name="contact_form" className="default-form contact-form" action="sendmail.php" method="post">
                      <div className="form-group">
                        <input type="email" name="email" placeholder="Enter your email" required="" />
                      </div>
                      <div className="form-group">
                        <button type="submit" className="sub-btn">Subscribe</button>
                      </div>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
	</>
  )
}

export default Footer