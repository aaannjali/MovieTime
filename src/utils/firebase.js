// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxzHo-Ah_xX2zurQJG3WfwQQWBCqlmlaE",
  authDomain: "netflixgpt-aae03.firebaseapp.com",
  projectId: "netflixgpt-aae03",
  storageBucket: "netflixgpt-aae03.appspot.com",
  messagingSenderId: "632890326871",
  appId: "1:632890326871:web:1a56c75431b6e886f50812",
  measurementId: "G-ERSVEE4ZLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();