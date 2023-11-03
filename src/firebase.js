// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



const firebaseConfig = {
  apiKey: "AIzaSyCAh9Re19bbFdA_W8PdEiUJwLsEpzY5KdE",
  authDomain: "project-portfolio-new.firebaseapp.com",
  projectId: "project-portfolio-new",
  storageBucket: "project-portfolio-new.appspot.com",
  messagingSenderId: "223018513990",
  appId: "1:223018513990:web:90cca2e9cc307077cf7c47",
  measurementId: "G-QF3KFSWJJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
 export  const db = getFirestore(app)
 export  const auth = getAuth()

 

