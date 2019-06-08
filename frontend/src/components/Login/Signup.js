import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
// import "./Welcome.css";
//import authenticate from '../auth/authenticate';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //const {functions go here} = authenticate();

  return (
    <form
      className="login-form-container"
      onSubmit={e => e.preventDefault() && false}
    >
      <h1 className="title">• Trip Planner •</h1>
      <div className="signup-form">
        <label>Full Name</label>
        <input
          className="input-login"
          type="name"
          name="name"
          onChange={e => setName(e.target.value)}
          value={name}
          required
        />
        <label>Email Address</label>
        <input
          className="input-login"
          type="email"
          name="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          required
        />
        <label className="passLabel">Password</label>
        <input
          className="input-login"
          type="password"
          name="password1"
          onChange={e => setPassword(e.target.value)}
          value={password}
          required
        />
        <label className="passLabel">Re-Enter Password</label>
        <input
          className="input-login"
          type="password"
          name="password1"
          required
        />
      </div>
      <div className="button">
        <Link to="/triplist">
          <button type="submit">Register</button>
        </Link>
      </div>
    </form>
  );
};

export default withRouter(Signup);
