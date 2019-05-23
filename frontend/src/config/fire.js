import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDa-aHc80KiveuLiwop6e02atc4HREb7MY",
    authDomain: "ll-trip-planner.firebaseapp.com",
    databaseURL: "https://ll-trip-planner.firebaseio.com",
    projectId: "ll-trip-planner",
    storageBucket: "ll-trip-planner.appspot.com",
    messagingSenderId: "528830403763",
    appId: "1:528830403763:web:414aa0942b3433e0"
};

const fire = firebase.initializeApp(config);

export default fire;