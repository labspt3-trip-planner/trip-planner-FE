import React, { Component, useState} from 'react';
import { Link, withRouter } from 'react-router-dom'
import './Welcome.css';
import fire from "../../config/fire";
import Modal from 'react-modal';
//import authenticate from '../auth/authenticate';

class Welcome extends Component {  // THIS IS THE LANDING PAGE
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  };

  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

render() {
  return (
    <div className="welcome-container">
      <button onClick={this.openModal}>Login</button>
      <h1 className="h1Login">•  Trip Planner  •</h1>
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterClose={this.afterOpenModal}
        onRequestClose={this.closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <form className="login-form-container" onSubmit={e => e.preventDefault() && false}>
          <div className="login-form">
            <label>Email Address</label>
            <input 
              className="input-login" 
              type="email" 
              name="email" 
              onChange={e => setEmail(e.target.value)}
              value={email} 
            />
            <label className="passLabel">Password</label>
            <input 
              className="input-login"
              type="password" 
              name="password1" 
              onChange={e => setPassword(e.target.value)} 
              value={password}  
            />
          </div>
          <div className="button">
            <Link to="/triplist"><button type="submit">Login</button></Link>
          </div>
      </form>
      </Modal>
      <Link to="/signup"><button>Sign Up</button></Link>
    </div>


    );
  };
}

export default withRouter(Welcome)

