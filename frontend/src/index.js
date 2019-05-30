import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Firebase, { FirebaseContext } from "./components/Firebase";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    {" "}
    {/* Provides a Firebase instance to the entire app*/}
    <Router>
      <App />
    </Router>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
 