// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMA2y8TzsOKUd6ki86SiTVE53fsSUhB-8",
  authDomain: "dieusoms-e4990.firebaseapp.com",
  projectId: "dieusoms-e4990",
  storageBucket: "dieusoms-e4990.firebasestorage.app",
  messagingSenderId: "884618534570",
  appId: "1:884618534570:web:1da553e9a8a6784151fad3",
  measurementId: "G-EWH529BK34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);