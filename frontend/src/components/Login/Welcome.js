import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";
import Modal from "react-modal";
import * as Year from "moment";

let date = require("moment");

const year = date().format("YYYY");

const INITIAL_STATE = {
  username: "",
  emailAddress: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      ...INITIAL_STATE
    };

    this.onsignup = this.onsignup.bind(this); 
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  onsignup = event => {
    this.props.history.push("/triplist")
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event);
  };

  handleSubmit = event => {
    event.preventDefault();
    // const { emailAddress, passwordOne } = this.state;
  };

  afterOpenModal() {
    this.subtitle.style.color = "#f00";
  }

  openModal = event => {
    event.preventDefault();
    this.setState({
      modalIsOpen: true
    });
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false
    });
  };

  render() {
    const {
      username,
      emailAddress,
      passwordOne,
      passwordTwo,
      // error
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      emailAddress === "" ||
      username === "";

    return (
      <div id="welcome-container">
        <Modal
          isOpen={this.state.modalIsOpen}
          // onAfterClose={this.afterOpenModal}
          onRequestClose={this.closeModal}
          id="modal"
          overlayid="overlay"
        >
          <div id="modal-login">
            <h2>Log In</h2>
            <h3>Welcome back!</h3>
            <form>
              <input
                id="input"
                type="text"
                name="emailAddress"
                maxLength="35"
                placeholder="Email Address"
                value={this.emailAddress}
                onChange={this.onChange}
              />
              <input
                id="input"
                type="password"
                name="password"
                maxLength="35"
                placeholder="Password"
                value={this.passwordOne}
                onChange={this.onChange}
              />
            </form>
            <div id="button-area">
              <button id="btnLearn" onClick={this.closeModal}>
                Close
              </button>
              <button id="btnLogin">Login</button>
            </div>
          </div>
          <div id="modal-hero">Hero Image</div>
        </Modal>

        <div id="cover-photo sliding-background">
          <h1>Trip Planner</h1>
          <h3>Smarter travel preparation</h3>
        </div>
        <div id="login-screen">
          <h2>Register</h2>
          <form>
            <input
              id="input"
              type="text"
              name="username"
              value={this.username}
              maxLength="35"
              placeholder="User name"
              onChange={this.onChange}
            />
            <input
              id="input"
              type="text"
              name="emailAddress"
              value={this.emailAddress}
              maxLength="35"
              placeholder="Email Address"
              onChange={this.onChange}
            />
            <input
              id="input"
              type="password"
              name="passwordOne"
              value={this.passwordOne}
              maxLength="35"
              placeholder="Password"
              onChange={this.onChange}
            />
            <input
              id="input"
              type="password"
              name="passwordTwo"
              value={this.passwordTwo}
              maxLength="35"
              placeholder="confirm Password"
              onChange={this.onChange}
            />
          </form>
          {/* {error && <p>{error.message}</p>} */}
          <div id="policy">
            <input type="radio" id="selector" />
            <p>I accept the terms and conditions and privacy policy</p>
          </div>
          <div id="button-area">
            <button id="btnLearn">
              <Link to="/billing" id="link">
                Learn More
              </Link>
            </button>
            <button
              id="btnLogin"
              disabled={isInvalid}
              onClick={this.signup}
            >
              <Link to="/triplist" id="link">
                Submit
              </Link>
            </button>
          </div>
          <div id="login">
            <p>
              Already have a Trip Planner account?{" "}
              <a href="#" onClick={this.openModal}>Login</a>
            </p>
          </div>
          <p id="legal-blurb">
            Copyright © {year} TripPlanner, LLC. All rights reserved.
          </p>
        </div>
      </div>
    );
  }
}

export default Welcome;
