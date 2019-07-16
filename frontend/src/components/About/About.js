import React from 'react';
import './About.css'
import Jesse from './imgs/Jesse.jpeg'
import Oliver from './imgs/Oliver.JPG'
import Jonathan from './imgs/Jonathan.jpeg'
import Melvin from './imgs/Melvin.jpeg'
import Erin from './imgs/Erin.jpeg'

function About() {
  return (
    <div className="about-container" >
      <div className="about-header-wrapper">
        <h2>Meet the Team</h2>
      </div>
      <div className="team-container-wrapper">
        <div className="col-md-4 col-sm-6 feature"> 
          <img src={Oliver} className="team-img" alt="Team member" />
          <h3>Oliver Abreu</h3>
          <p>Oliver is a bilingual customer service representative with experience making clients feel valued and helped. His experience in a variety of sectors, including technology, government and legal, uniquely informs his creative approach to meeting customer needs and exceeding expectations.</p>
          <ul className="team-social">
            <li>
              <a href="http://www.facebook.com">
                <span className="facebook">
                  ::before
                </span>
              </a>
            </li>
            <li>
              <a href="http://www.twitter.com">
                <span className="twitter">
                  ::before
                </span>
              </a>
            </li>
            <li>
              <a href="hhtp://www.linkedin.com">
                <span className="linkedin">
                  ::before
                </span>
              </a>
            </li>
          </ul>
      </div>
      <div className="col-md-4 col-sm-6 feature"> 
        <img src={Jonathan} className="team-img" alt="Team member" />
        <h3>Jonathan Dorety</h3>
        <p>Deserunt sunt consectetur adipisicing do minim aute labore nulla aute ipsum dolor tempor. Ut culpa deserunt dolore dolor occaecat ut exercitation. Nostrud do duis fugiat voluptate. Dolor laboris exercitation occaecat ex eiusmod duis adipisicing adipisicing mollit sit consectetur officia. Culpa quis sint enim tempor ut eu eu duis. Ex ad commodo adipisicing tempor adipisicing ex ad.</p>
        <ul className="team-social">
          <li>
          <a href="http://www.facebook.com">
              <span className="facebook">
                ::before
              </span>
            </a>
          </li>
          <li>
            <a href="http://www.twitter.com">
              <span className="twitter">
                ::before
              </span>
            </a>
          </li>
          <li>
            <a href="hhtp://www.linkedin.com">
              <span className="linkedin">
                ::before
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 col-sm-6 feature"> 
      <img src={Melvin} className="team-img" alt="Team member" />
        <h3>Melvin Merlos</h3>
        <p>Deserunt sunt consectetur adipisicing do minim aute labore nulla aute ipsum dolor tempor. Ut culpa deserunt dolore dolor occaecat ut exercitation. Nostrud do duis fugiat voluptate. Dolor laboris exercitation occaecat ex eiusmod duis adipisicing adipisicing mollit sit consectetur officia. Culpa quis sint enim tempor ut eu eu duis. Ex ad commodo adipisicing tempor adipisicing ex ad.</p>
        <ul className="team-social">
          <li>
          <a href="http://www.facebook.com">
              <span className="facebook">
                ::before
              </span>
            </a>
          </li>
          <li>
            <a href="http://www.twitter.com">
              <span className="twitter">
                ::before
              </span>
            </a>
          </li>
          <li>
            <a href="hhtp://www.linkedin.com">
              <span className="linkedin">
                ::before
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 col-sm-6 feature"> 
      <img src={Erin} className="team-img" alt="Team member" />
        <h3>Erin Scriber</h3>
        <p>Deserunt sunt consectetur adipisicing do minim aute labore nulla aute ipsum dolor tempor. Ut culpa deserunt dolore dolor occaecat ut exercitation. Nostrud do duis fugiat voluptate. Dolor laboris exercitation occaecat ex eiusmod duis adipisicing adipisicing mollit sit consectetur officia. Culpa quis sint enim tempor ut eu eu duis. Ex ad commodo adipisicing tempor adipisicing ex ad.</p>
        <ul className="team-social">
          <li>
          <a href="http://www.facebook.com">
              <span className="facebook">
                ::before
              </span>
            </a>
          </li>
          <li>
            <a href="http://www.twitter.com">
              <span className="twitter">
                ::before
              </span>
            </a>
          </li>
          <li>
            <a href="hhtp://www.linkedin.com">
              <span className="linkedin">
                ::before
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 col-sm-6 feature"> 
      <img src={Jesse} className="team-img" alt="Team member" />
        <h3>Jesse Theisen</h3>
        <p>Deserunt sunt consectetur adipisicing do minim aute labore nulla aute ipsum dolor tempor. Ut culpa deserunt dolore dolor occaecat ut exercitation. Nostrud do duis fugiat voluptate. Dolor laboris exercitation occaecat ex eiusmod duis adipisicing adipisicing mollit sit consectetur officia. Culpa quis sint enim tempor ut eu eu duis. Ex ad commodo adipisicing tempor adipisicing ex ad.</p>
        <ul className="team-social">
          <li>
          <a href="http://www.facebook.com">
              <span className="facebook">
                ::before
              </span>
            </a>
          </li>
          <li>
            <a href="http://www.twitter.com">
              <span className="twitter">
                ::before
              </span>
            </a>
          </li>
          <li>
            <a href="hhtp://www.linkedin.com">
              <span className="linkedin">
                ::before
              </span>
            </a>
          </li>
        </ul>
      </div>
      </div> 
    </div>
  )
}

export default About;