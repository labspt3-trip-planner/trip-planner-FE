import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Firebase, { FirebaseContext } from "./components/Firebase";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    {" "}
    {/* Provides a Firebase instance to the entire app*/}
    <Router>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <App />
      </MuiPickersUtilsProvider>
    </Router>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
 