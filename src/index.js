import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "ecommerce-reactjs-coderhose.firebaseapp.com",
  projectId: "ecommerce-reactjs-coderhose",
  storageBucket: "ecommerce-reactjs-coderhose.appspot.com",
  messagingSenderId: "174643005668",
  appId: "1:174643005668:web:805e11ed2bd2e0328d44f1"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

reportWebVitals();
