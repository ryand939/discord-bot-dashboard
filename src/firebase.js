
// src/firebase.js


import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyDyaKkE5ZLxSckYSgn_95mxTAn9Z9oPXns",
  
    authDomain: "daerbot-dashboard.firebaseapp.com",
  
    projectId: "daerbot-dashboard",
  
    storageBucket: "daerbot-dashboard.appspot.com",
  
    messagingSenderId: "219144130030",
  
    appId: "1:219144130030:web:5c741bfe66b28ff37912ff",
  
    measurementId: "G-J5291PX7V2"
  
  };
  
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
