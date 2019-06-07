import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../Firebase"; //HOC to provide Firebase to component
import "./Welcome.css";
//import authenticate from '../auth/authenticate';

const LoginBase = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = async e => {
    e.preventDefault();
    await props.firebase.doSignInWithEmailAndPassword(email, password);
    await props.firebase.getUserToken();
    const tokenCheck = localStorage.getItem("user");
    if (tokenCheck) {
      props.history.push("/triplist");
    } else return;
  };

  //const {functions go here} = authenticate();

  return (
    
    <form className="login-form-container" onSubmit={logIn}>
      <h1 className="h1Login">• Trip Planner •</h1>
      <div className="login-form">
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
      </div>
      <div className="button">
        <button type="submit">Login</button>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    </form>
  );
};

const Login = withFirebase(LoginBase); //give component Firebase functionality

export default withRouter(Login);