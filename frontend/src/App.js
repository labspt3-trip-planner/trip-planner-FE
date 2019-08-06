import React from "react";
import Welcome from "./Components/Login/Welcome";
import TripContainer from "./Components/TripComponents/TripContainer";
import About from "./Components/About/About";
import Signup from "./Components/Login/Signup";
import Billing from "./Components/Billing/Billing";
import TripInfoContainer from "./Components/TripInfoComponents/TripInfoContainer";
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
