import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyDmFVRUF7SNy_LtOZm0MU7l4O0vGt4htPM",
  authDomain: "blogg-c6b29.firebaseapp.com",
  databaseURL: "https://blogg-c6b29-default-rtdb.firebaseio.com/",
  projectId: "blogg-c6b29",
  storageBucket: "blogg-c6b29.appspot.com",
  messagingSenderId: "601515994240",
  appId: "1:601515994240:web:ced870f60b050ba0240a65",

  // REACT_APP_FIREBASE_apiKey=AIzaSyDmFVRUF7SNy_LtOZm0MU7l4O0vGt4htPM
  // REACT_APP_FIREBASE_authDomain=blogg-c6b29.firebaseapp.com
  // REACT_APP_FIREBASE_projectId=blogg-c6b29
  // REACT_APP_FIREBASE_databaseURL=https://blogg-c6b29-default-rtdb.firebaseio.com/
  // REACT_APP_FIREBASE_storageBucket=blogg-c6b29.appspot.com
  // REACT_APP_FIREBASE_messagingSenderId=601515994240
  // REACT_APP_FIREBASE_appId=1:601515994240:web:ced870f60b050ba0240a65
});

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
