// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq6L2iar3nSVuZRMwkje4YoG6-a_9RnN0",
  authDomain: "netflixgpt-913fb.firebaseapp.com",
  projectId: "netflixgpt-913fb",
  storageBucket: "netflixgpt-913fb.firebasestorage.app",
  messagingSenderId: "171242745999",
  appId: "1:171242745999:web:3a2d0abbca0c7985c200fa",
  measurementId: "G-QSRW7WVTN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);