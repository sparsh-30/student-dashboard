// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAgAU-7gSE1q5aQfvFOf4-Eli0CsChzCD4',
  authDomain: 'student-dashboard-4077f.firebaseapp.com',
  projectId: 'student-dashboard-4077f',
  storageBucket: 'student-dashboard-4077f.appspot.com',
  messagingSenderId: '236406317833',
  appId: '1:236406317833:web:576dce19830800c9ebe9d8',
};

// Initialize Firebase
const app=getApps().length===0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);

export { db };
