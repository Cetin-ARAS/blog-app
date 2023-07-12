import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyC4pSeihkQf9ZB1C3LqsgWroIMiW4EEvWg",
  authDomain: "blog-app-d4055.firebaseapp.com",
  databaseURL: "https://blog-app-d4055-default-rtdb.firebaseio.com",
  projectId: "blog-app-d4055",
  storageBucket: "blog-app-d4055.appspot.com",
  messagingSenderId: "152652751534",
  appId: "1:152652751534:web:6fa315ea62d876c93e833f",
  measurementId: "G-H2N43QPY18",
});

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
