import React, {useState} from 'react';
import { Link, withRouter } from 'react-router-dom'
import './Login.css';
//import authenticate from '../auth/authenticate';

const Login = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

//const {functions go here} = authenticate();

return (
  <form className="login-form-container" onSubmit={e => e.preventDefault() && false}>
    <h1 className="h1Login">•  Trip Planner  •</h1>
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
      <Link to="/triplist"><button type="submit">Login</button></Link>
      <Link to="/signup"><button>Sign Up</button></Link>
    </div>
  </form>
)};


export default withRouter(Login)

