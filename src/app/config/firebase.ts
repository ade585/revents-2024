// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore' ;
import { getFirestore } from "firebase/firestore";
import 'firebase/auth'
import 'firebase/storage'
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,

  authDomain: "revents-2024-67f54.firebaseapp.com",
  projectId: "revents-2024-67f54",
  storageBucket: "revents-2024-67f54.appspot.com",
  messagingSenderId: "298868967992",
  appId: "1:298868967992:web:db1657b541121917da74cd",
  measurementId: "G-L2SR9B4Q41"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
export const  auth = getAuth(app);
export const  storage = getStorage(app);
