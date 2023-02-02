import React from 'react';

const Error = () => {
	return (
		<div>
			<section class="error-section mt-5">
				<div class="auto-container mt-5">
					<div class="error-text">
						<h2>404</h2>
					</div>
					<h3>Opps!! Looks like somthing went wrong</h3>
					<div class="error-options">
						<a href="index.html" class="go-btn">Go Home</a>
						<span class="or">Or</span>
						<div class="error-search-box">
							<form method="post" action="contact.html">
								<div class="form-group">
									<input type="search" name="search-field" value="" placeholder="Search..." required="" />
									<button type="submit"><span class="icon fa fa-search"></span></button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Error