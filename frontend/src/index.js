import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Firebase, { FirebaseContext } from "./Components/Firebase";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./Styles/index.css";

require("dotenv").config();

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
	<FirebaseContext.Provider value={new Firebase()}>
		{" "}
		{/* Provides a Firebase instance to the entire app*/}
		<Provider store={store}>
			<Router>
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<App />
				</MuiPickersUtilsProvider>
			</Router>
		</Provider>
	</FirebaseContext.Provider>,
	document.getElementById("root")
);
