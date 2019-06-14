import app from "firebase/app";
import "firebase/auth";

//this is the configuration for Firebase to interface with the web app
const firebaseConfig = {
  apiKey: "AIzaSyDa-aHc80KiveuLiwop6e02atc4HREb7MY",
  authDomain: "ll-trip-planner.firebaseapp.com",
  databaseURL: "https://ll-trip-planner.firebaseio.com",
  projectId: "ll-trip-planner",
  storageBucket: "ll-trip-planner.appspot.com",
  messagingSenderId: "528830403763",
  appId: "1:528830403763:web:7112194cf47d64a6"
};
// We'll need to set these variable within Netflify

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    // Create a link to the auth methods
    this.auth = app.auth();
  }

  // Creates a signInWithEmailAndPassword function that is accessible wherever this class is provided
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  // Gets token upon successful login.
  getUserToken = () =>
    this.auth.currentUser
      .getIdToken(/* forceRefresh */ true)
      .then(function(idToken) {
        localStorage.setItem("user", idToken);
        // Send token to your backend via HTTPS
        console.log(idToken);
        // ...
      })
      .catch(function(error) {
        // Handle error
      });
}

export default Firebase;
