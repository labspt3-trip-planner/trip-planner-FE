import app from "firebase/app";
import "firebase/auth";

//this is the configuration for Firebase to interface with the web app
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
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
