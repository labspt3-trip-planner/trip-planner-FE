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
						<li id="border">
							Combine data from multiple web sources into one tool
						</li>
						<li id="border">
							Access your travel plans from any web browser
						</li>
						<li id="border">
							Visualize your entire trip with map view
						</li>
						<li id="border">Create and store more than 5 trips</li>
						<li>Support ongoing development</li>
					</ul>
					<div id="button-area">
						<button className="voidButton">
							<Link to="/" className="link" />
						</button>
					</div>
				</div>
				<div id="product-description">
					<p className="billing-choice">
						Standard <br /> <span className="price">free</span>
					</p>
					<ul>
						<li>Yes</li>
						<li>Yes</li>
						<li>Yes</li>
						<li id="no">No</li>
						<li id="no">No</li>
					</ul>
					<div id="button-area">
						<button className="btnLearn billingButton">
							<Link to="/" className="link">
								Start Planning
							</Link>
						</button>
					</div>
				</div>
				<div id="product-description">
					<p className="billing-choice">
						Premium <br /> <span className="price">$6.99/year</span>
					</p>
					<ul>
						<li>Yes</li>
						<li>Yes</li>
						<li>Yes</li>
						<li>Yes</li>
						<li>Yes</li>
					</ul>
					<div id="button-area">
						<button id="upgrade" className="billingButton">
							<Link to="/billing" className="link">
								Upgrade Now
							</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Billing;
