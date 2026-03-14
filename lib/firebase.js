import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtAFmzY4GRl7YLsVB4xeM7y822-VVNVIU",
  authDomain: "login-73911.firebaseapp.com",
  projectId: "login-73911",
  storageBucket: "login-73911.firebasestorage.app",
  messagingSenderId: "143313106804",
  appId: "1:143313106804:web:51ac327c608459a1ac9e21"
};

// Initialize Firebase (Singleton pattern)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);