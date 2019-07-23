import React from 'react';
import './About.css'
import Jesse from './imgs/Jesse.jpeg'
import Oliver from './imgs/Oliver.JPG'
import Jonathan from './imgs/Jonathan.jpeg'
import Melvin from './imgs/Melvin.jpeg'
import Erin from './imgs/Erin.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Header from '../HeaderComponents/HeaderContainer'


function About() {
  return (
    <div className="about-container" >
      <Header />
      <div className="about-header-wrapper">
        <h2>Meet the Team</h2>
      </div>
      <div className="team-container-wrapper">
        <div className="feature"> 
          <img src={Oliver} className="team-img" alt="Team member" />
          <h3>Oliver Abreu</h3>
          <p>Oliver is a bilingual customer service representative with experience making clients feel valued and helped. His experience in a variety of sectors, including technology, government and legal, uniquely informs his creative approach to meeting customer needs and exceeding expectations.</p>
          <ul className="team-social">
            <li>
              <a href="http://www.facebook.com" target="_blank">
              <FontAwesomeIcon icon={faFacebookSquare} size={28}/>
              </a>
            </li>
            <li>
              <a href="http://www.twitter.com" target="_blank">
              <FontAwesomeIcon icon={faTwitterSquare} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/oliver-abreu-6105a2186/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
      </div>
      <div className="feature"> 
        <img src={Jonathan} className="team-img" alt="Team member" />
        <h3>Jonathan Dorety</h3>
        <p>Deserunt sunt consectetur adipisicing do minim aute labore nulla aute ipsum dolor tempor. Ut culpa deserunt dolore dolor occaecat ut exercitation. Nostrud do duis fugiat voluptate. Dolor laboris exercitation occaecat ex eiusmod duis adipisicing adipisicing mollit sit consectetur officia. Culpa quis sint enim tempor ut eu eu duis. Ex ad commodo adipisicing tempor adipisicing ex ad.</p>
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
              <a href="https://www.linkedin.com/in/jonathan-dorety-252948185/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
      </div>
      <div className="feature"> 
      <img src={Melvin} className="team-img" alt="Team member" />
        <h3>Melvin Merlos</h3>
        <p>By day, I am a HR, Training Specialist for a non-profit helping internal employees better their skills, increase awareness of their rights and agency policies. By night, I am a Web Developer/Software Engineer as a part-time student in the Web Development & Computer Science program at Lambda School.</p>
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
              <a href="https://www.linkedin.com/in/melvin-merlos-49079a73/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
      </div>
      <div className="feature"> 
      <img src={Erin} className="team-img" alt="Team member" />
        <h3>Erin Scriber</h3>
        <p>Deserunt sunt consectetur adipisicing do minim aute labore nulla aute ipsum dolor tempor. Ut culpa deserunt dolore dolor occaecat ut exercitation. Nostrud do duis fugiat voluptate. Dolor laboris exercitation occaecat ex eiusmod duis adipisicing adipisicing mollit sit consectetur officia. Culpa quis sint enim tempor ut eu eu duis. Ex ad commodo adipisicing tempor adipisicing ex ad.</p>
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
              <a href="https://www.linkedin.com/in/erin-scriber/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
      </div>
      <div className="feature"> 
      <img src={Jesse} className="team-img" alt="Team member" />
        <h3>Jesse Theisen</h3>
        <p>Deserunt sunt consectetur adipisicing do minim aute labore nulla aute ipsum dolor tempor. Ut culpa deserunt dolore dolor occaecat ut exercitation. Nostrud do duis fugiat voluptate. Dolor laboris exercitation occaecat ex eiusmod duis adipisicing adipisicing mollit sit consectetur officia. Culpa quis sint enim tempor ut eu eu duis. Ex ad commodo adipisicing tempor adipisicing ex ad.</p>
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
              <a href="https://www.linkedin.com/in/jesse-theisen/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
      </div>
      </div> 
    </div>
  )
}

export default About;