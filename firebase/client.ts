
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAirQ9Owzyzm7vDlJYZP0nIX4j-j8cfFfY",
  authDomain: "interviewly-abb6c.firebaseapp.com",
  projectId: "interviewly-abb6c",
  storageBucket: "interviewly-abb6c.firebasestorage.app",
  messagingSenderId: "724138277559",
  appId: "1:724138277559:web:15e8682914e39c79d5eb32",
  measurementId: "G-W7BEVLB45G"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)