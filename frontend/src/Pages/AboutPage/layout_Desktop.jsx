import React from "react";
import "./About.css";
import Jesse from "./imgs/Jesse.jpeg";
import Oliver from "./imgs/Oliver.JPG";
import Jonathan from "./imgs/Jonathan.jpeg";
import Melvin from "./imgs/Melvin.jpeg";
import Erin from "./imgs/Erin.jpeg";
import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
import {
	faFacebookSquare,
	faTwitterSquare,
	faLinkedin
} from "@fontawesome/free-brands-svg-icons";
import Header from "../HeaderComponents/HeaderContainer";

function About() {
	return (
		<div className="about-container">
			<Header />
			<div className="about-header-wrapper">
				<h2>Meet the Team</h2>
			</div>
			<div className="team-container-wrapper">
				<div className="feature">
					<img src={Oliver} className="team-img" alt="Team member" />
					<h3>Oliver Abreu</h3>
					<p>
						Oliver is a bilingual customer service representative
						with experience making clients feel valued and helped.
						His experience in a variety of sectors, including
						technology, government and legal, uniquely informs his
						creative approach to meeting customer needs and
						exceeding expectations.
					</p>
					<ul className="team-social">
						<li>
							<a href="http://www.facebook.com" target="_blank">
								<FontAwesomeIcon
									icon={faFacebookSquare}
									size={28}
								/>
							</a>
						</li>
						<li>
							<a href="http://www.twitter.com" target="_blank">
								<FontAwesomeIcon icon={faTwitterSquare} />
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/oliver-abreu-6105a2186/"
								target="_blank"
							>
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						</li>
					</ul>
				</div>
				<div className="feature">
					<img
						src={Jonathan}
						className="team-img"
						alt="Team member"
					/>
					<h3>Jonathan Dorety</h3>
					<p>
						Jonathan is a former line cook and current stay-at-home
						dad looking to take his career to exciting new places!
						Currently attending Lambda School's Web Development &
						Computer Science program, he is learning the skills
						necessary to become a top-notch software engineer.
					</p>
					<ul className="team-social">
						<li>
							<a href="http://www.facebook.com" target="_blank">
								<FontAwesomeIcon icon={faFacebookSquare} />
							</a>
						</li>
						<li>
							<a href="http://www.twitter.com" target="_blank">
								<FontAwesomeIcon icon={faTwitterSquare} />
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/jonathan-dorety-252948185/"
								target="_blank"
							>
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						</li>
					</ul>
				</div>
				<div className="feature">
					<img src={Melvin} className="team-img" alt="Team member" />
					<h3>Melvin Merlos</h3>
					<p>
						By day, I am a HR, Training Specialist for a non-profit
						helping internal employees better their skills, increase
						awareness of their rights and agency policies. By night,
						I am a Web Developer/Software Engineer as a part-time
						student in the Web Development & Computer Science
						program at Lambda School.
					</p>
					<ul className="team-social">
						<li>
							<a href="http://www.facebook.com" target="_blank">
								<FontAwesomeIcon icon={faFacebookSquare} />
							</a>
						</li>
						<li>
							<a href="http://www.twitter.com" target="_blank">
								<FontAwesomeIcon icon={faTwitterSquare} />
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/melvin-merlos-49079a73/"
								target="_blank"
							>
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						</li>
					</ul>
				</div>
				<div className="feature">
					<img src={Erin} className="team-img" alt="Team member" />
					<h3>Erin Scriber</h3>
					<p>
						Erin is an Information Technology Specialist for a
						suburban Pennsylvania school district. In this capacity,
						she oversees the inventory and functionality for 2,000
						plus devices as well as handling the concerns of
						students, faculty and administration. She is also
						currently a Full Stack Web Development student at Lambda
						School, with a growing admiration for backend
						technologies. She speaks English and Spanish fluently
						and has limited working proficiency of French and
						Arabic.
					</p>
					<ul className="team-social">
						<li>
							<a href="http://www.facebook.com" target="_blank">
								<FontAwesomeIcon icon={faFacebookSquare} />
							</a>
						</li>
						<li>
							<a href="http://www.twitter.com" target="_blank">
								<FontAwesomeIcon icon={faTwitterSquare} />
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/erin-scriber/"
								target="_blank"
							>
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						</li>
					</ul>
				</div>
				<div className="feature">
					<img src={Jesse} className="team-img" alt="Team member" />
					<h3>Jesse Theisen</h3>
					<p>
						Hi, I’m Jesse. My background was in computer hardware,
						but I slowly started getting into software. My main
						contributions to this app are on the backend, but I also
						did some frontend things with Stripe as well.
					</p>
					<ul className="team-social">
						<li>
							<a href="http://www.facebook.com" target="_blank">
								<FontAwesomeIcon icon={faFacebookSquare} />
							</a>
						</li>
						<li>
							<a href="http://www.twitter.com" target="_blank">
								<FontAwesomeIcon icon={faTwitterSquare} />
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/jesse-theisen/"
								target="_blank"
							>
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default About;
