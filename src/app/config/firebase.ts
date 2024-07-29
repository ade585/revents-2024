// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";
import 'firebase/auth'
import 'firebase/storage'
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import 'firebase/database';
import { getDatabase } from "firebase/database";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";



declare global {
  // eslint-disable-next-line no-var
  var FIREBASE_APPCHECK_DEBUG_TOKEN: boolean | string | undefined
}

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,

  authDomain: "revents-2024-67f54.firebaseapp.com",
  projectId: "revents-2024-67f54",
  databaseURL: "https://revents-2024-67f54-default-rtdb.firebaseio.com",
  storageBucket: "revents-2024-67f54.appspot.com",
  messagingSenderId: "298868967992",
  appId: "1:298868967992:web:db1657b541121917da74cd",
  measurementId: "G-L2SR9B4Q41",

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

if (import.meta.env.DEV) {
  self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}

initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LeX7xgqAAAAAA4vRW1ksR5RxYfD8oGJ6TCnh5pI'), 
  isTokenAutoRefreshEnabled : true
})

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const fb = getDatabase(app);