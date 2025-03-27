// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjpUMFObcs51466PYITjU-cp6OGDKLa1E",
  authDomain: "tpumps-lead.firebaseapp.com",
  projectId: "tpumps-lead",
  storageBucket: "tpumps-lead.firebasestorage.app",
  messagingSenderId: "365190760732",
  appId: "1:365190760732:web:ab92df3b3eacffb8a9d2d9",
  measurementId: "G-RNZ7VXGDE8"
};

// Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
//     app = firebase.initializeApp(firebaseConfig);
// } else {
//     app = firebase.app()
// }

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
//const analytics = getAnalytics(app);

export { db, auth };