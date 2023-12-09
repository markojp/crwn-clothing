// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxZlg5TtEc_Xo7KLXaBl_Jz39jTt_rbCc",
  authDomain: "crwn-clothing-db-991dc.firebaseapp.com",
  projectId: "crwn-clothing-db-991dc",
  storageBucket: "crwn-clothing-db-991dc.appspot.com",
  messagingSenderId: "652066423945",
  appId: "1:652066423945:web:3eefa80512a79c0ce53258",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
