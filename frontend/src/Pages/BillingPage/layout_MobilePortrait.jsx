import React from "react";
import { Link } from "react-router-dom";

function Billing() {
	return (
		<div className="billing-desktop-mobileP">
			<div className="billing-content-mobileP">
				<h1>Pricing</h1>
			</div>
			<div className="billing-hero-mobileP">
				<div className="features-mobileP">
					<p id="features-mobileP">Features</p>
					<ul>
						<li id="border-mobileP-mobileP">
							Combine data from multiple web sources into one tool
						</li>
						<li id="border-mobileP">
							Access your travel plans from any web browser
						</li>
						<li id="border-mobileP">
							Visualize your entire trip with map view
						</li>
						<li id="border-mobileP">
							Create and store more than 5 trips
						</li>
						<li>Support ongoing development</li>
					</ul>
					<div id="button-area-mobileP">
						<button className="voidButton-mobileP">
							<Link to="/" className="link" />
						</button>
					</div>
				</div>
				<div id="product-description-mobileP">
					<p className="billing-choice-mobileP">
						Standard <br /> <span className="price">free</span>
					</p>
					<ul>
						<li>Yes</li>
						<li>Yes</li>
						<li>Yes</li>
						<li id="no">No</li>
						<li id="no">No</li>
					</ul>
					<div id="button-area-mobileP">
						<button className="btnLearn billingButton">
							<Link to="/" className="link">
								Start Planning
							</Link>
						</button>
					</div>
				</div>
				<div id="product-description-mobileP">
					<p className="billing-choice-mobileP">
						Premium <br /> <span className="price">$6.99/year</span>
					</p>
					<ul>
						<li>Yes</li>
						<li>Yes</li>
						<li>Yes</li>
						<li>Yes</li>
						<li>Yes</li>
					</ul>
					<div id="button-area-mobileP">
						<button
							id="upgrade-mobileP"
							className="billingButton-mobileP"
						>
							<Link to="/billing" className="link">
								Upgrade Now
							</Link>
						</button>
					</div>
					<h3 className="logo-mobileP">TripPlanner</h3>
				</div>
			</div>
		</div>
	);
}

export default Billing;
