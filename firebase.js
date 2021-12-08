// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmofesZdmzmYxcc8PUkp7Fdq39a2rsX80",
  authDomain: "uber-next-clone-f6193.firebaseapp.com",
  projectId: "uber-next-clone-f6193",
  storageBucket: "uber-next-clone-f6193.appspot.com",
  messagingSenderId: "310409634321",
  appId: "1:310409634321:web:62a573a43ddf54b49507b0",
  measurementId: "G-1NC34XYE44",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
