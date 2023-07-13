// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1UQ_Mnu8PQ7O1HNCNOYCmpYaWaIY7tek",
    authDomain: "react-chat-93bcf.firebaseapp.com",
    projectId: "react-chat-93bcf",
    storageBucket: "react-chat-93bcf.appspot.com",
    messagingSenderId: "30936670806",
    appId: "1:30936670806:web:462967da3e0cf0c59d11f7",
    measurementId: "G-D7JNQWX972",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
