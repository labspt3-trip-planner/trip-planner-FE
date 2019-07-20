import React from "react";
import { Link } from "react-router-dom";

function Billing() {
	return (
		<div className="billing-desktop">
			<div className="billing-content-desktop">
				<h1>Pricing</h1>
			</div>
			<div className="billing-hero-desktop">
				<div className="features">
					<p id="features">Features</p>
					<ul>
						<li>Create trip plans for any number of trips</li>
						<li>Feature 2</li>
						<li>Feature 3</li>
						<li>Feature 4</li>
						<li>Feature 5</li>
					</ul>
				</div>
				<div id="product-description">
					<p className="billing-choice">Standard</p>
					<ul>
						<li>Yes</li>
						<li>Yes</li>
						<li>Yes</li>
						<li>No</li>
						<li>No</li>
					</ul>
				</div>
				<div id="product-description">
					<p className="billing-choice">Premium</p>
					<ul>
						<li>Yes</li>
						<li>Yes</li>
						<li>Yes</li>
						<li>Yes</li>
						<li>Yes</li>
					</ul>
				</div>
				<div className="button-container">
					<button className="btnLearn">
						<Link to="/" className="link">
							Learn More
						</Link>
					</button>
					<button className="btnLearn">
						<Link to="x" className="link">
							Upgrade Now
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Billing;
