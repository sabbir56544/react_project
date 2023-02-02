import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
	
	return (
		<>
			<section className="main-contact mt-5">
				<div className="container mt-5">
					<div className="section-title text-center mt-5">
						<h2>Contact <span>Us</span></h2>
						<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Perspiciatis unde omnis iste natus error sit.</p>
					</div>
					<div className="row">
						<div className="contact-form">
							<div id="message"></div>
							<form id="contactform" action="sendmail.php" name="contactform" method="post">
								<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
									<label>Enter your name <span>*</span></label>
									<input type="text" name="name" id="name" className="form-control" placeholder="Name" />
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
									<label>Enter your e-mail <span>*</span></label>
									<input type="text" name="email" id="email" className="form-control" placeholder="Email Address" />
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
									<label>Enter your website</label>
									<input type="text" name="website" id="website" className="form-control" placeholder="Website" />
								</div>
								<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
									<label>Enter subject <span>*</span></label>
									<input type="text" name="subject" id="subject" className="form-control" placeholder="Subject" />
								</div>
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<label>Message goes here <span>*</span></label>
									<textarea className="form-control" name="comments" id="comments" rows="6" placeholder="Message"></textarea>
									<a className="submit-btn" href="#">Send Message</a>
								</div>
								
								<button>
								<Link to="/" className="btn btn-primary btn-sm btn-block">Go Back Homepage</Link>
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>


		</>
	)
}

export default Contact