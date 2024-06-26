// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYf4lNiyDBbqZpp6wg22kWr1p3X37NnMs",
  authDomain: "fir-next-b0492.firebaseapp.com",
  projectId: "fir-next-b0492",
  storageBucket: "fir-next-b0492.appspot.com",
  messagingSenderId: "1026728198636",
  appId: "1:1026728198636:web:52ad989ed819cb38fb80c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
const firebaseApp = getApp();
const storage = getStorage(firebaseApp, "gs://fir-next-b0492.appspot.com");

export { 
  db, 
  auth,
  storage
}