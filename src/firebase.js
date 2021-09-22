import firebase from "firebase"; 





const firebaseConfig = {
  apiKey: "AIzaSyA0RSX6KMGQz_-W1qT65fqwkqh0BbdCcWM",
  authDomain: "e-commerce-9f400.firebaseapp.com",
  projectId: "e-commerce-9f400",
  storageBucket: "e-commerce-9f400.appspot.com",
  messagingSenderId: "729520923549",
  appId: "1:729520923549:web:b675af9958d335eb99c574",
  measurementId: "G-4PRK8SQLDH"
};


const firebaseApp = firebase.initializeApp(firebaseConfig); 
const db = firebaseApp.firestore();
const auth = firebase.auth(); 
const provider  = new firebase.auth.GoogleAuthProvider();

export {provider, auth, db}; 
/*

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore'; 


const firebaseApp = initializeApp({
  apiKey: "AIzaSyA0RSX6KMGQz_-W1qT65fqwkqh0BbdCcWM",
  authDomain: "e-commerce-9f400.firebaseapp.com",
  projectId: "e-commerce-9f400",
  storageBucket: "e-commerce-9f400.appspot.com",
  messagingSenderId: "729520923549",
  appId: "1:729520923549:web:b675af9958d335eb99c574",
  measurementId: "G-4PRK8SQLDH"
});


const db = getFirestore(firebaseApp) ;  

export  { db};

*/ 