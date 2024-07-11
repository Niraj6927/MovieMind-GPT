// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL8a7mQkjF8nGE5fR7P7OUKQSVQFNYr98",
  authDomain: "moviemind-gpt.firebaseapp.com",
  projectId: "moviemind-gpt",
  storageBucket: "moviemind-gpt.appspot.com",
  messagingSenderId: "746248797769",
  appId: "1:746248797769:web:add64815205ff01a67c998",
  measurementId: "G-NQ7N876MK1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
