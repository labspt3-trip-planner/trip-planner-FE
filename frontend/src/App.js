import React from "react";
import Welcome from "./components/Login/Welcome";
import TripContainer from "./components/TripComponents/TripContainer";
import About from "./components/About/About";
import Signup from "./components/Login/Signup";
import Billing from "./components/Billing/Billing";
import TripInfoContainer from "./components/TripInfoComponents/TripInfoContainer";
import { BrowserRouter as Switch, Route } from "react-router-dom";

function App(props) {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/triplist" component={TripContainer} />
      <Route path="/trip/:tripId" exact component={TripInfoContainer} />
      <Route path="/about" component={About} />
      <Route path="/signup" component={Signup} />
      <Route path="/billing" component={Billing} />
    </Switch>
  );
}

export default App;
