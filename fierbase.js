// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAcXkWoQCZ4lDeoqIRjNqurxb-6ZPvK8Ds",
  authDomain: "woodwork-f0153.firebaseapp.com",
  projectId: "woodwork-f0153",
  storageBucket: "woodwork-f0153.appspot.com",
  messagingSenderId: "580705148415",
  appId: "1:580705148415:web:e5dbf53f29f4f35da59bca",
  measurementId: "G-E3YGRQGT7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);