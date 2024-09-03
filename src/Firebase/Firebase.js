// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhCqYpCdAdyRxDGfITk18UUljHi9o7DeY",
  authDomain: "buykart-43334.firebaseapp.com",
  projectId: "buykart-43334",
  storageBucket: "buykart-43334.appspot.com",
  messagingSenderId: "200597300835",
  appId: "1:200597300835:web:385289ed5aa15180573a56",
  measurementId: "G-H63SCYSE1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =getAuth(app)

export {app , auth};