import * as firebase from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC317r3NTPni_kAsRWQs91QRGtKBqn8PcM",
  authDomain: "quora-clone-42ec5.firebaseapp.com",
  projectId: "quora-clone-42ec5",
  storageBucket: "quora-clone-42ec5.appspot.com",
  messagingSenderId: "162265492567",
  appId: "1:162265492567:web:0f506d696590a89b8f0712",
  measurementId: "G-7ZYMYHY83B"
};

firebase.initializeApp(firebaseConfig);

const auth = getAuth();
const googleAuthProvider = new GoogleAuthProvider(auth);
const facebookAuthProvider = new FacebookAuthProvider(auth);
export { auth, googleAuthProvider, facebookAuthProvider };