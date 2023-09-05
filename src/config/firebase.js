import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqB7CCelB6VsRjYXH_0vSkpgyUBBVimpo",
  authDomain: "blog-react-fa3b7.firebaseapp.com",
  projectId: "blog-react-fa3b7",
  storageBucket: "blog-react-fa3b7.appspot.com",
  messagingSenderId: "1065937998663",
  appId: "1:1065937998663:web:0bf6cfadaad9473d55b262",
  measurementId: "G-WE2MGP4EC3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
