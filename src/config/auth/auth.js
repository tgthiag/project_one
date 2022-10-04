// Import the functions you need from the SDKs you need
import React from "react";
import { initializeApp} from "firebase/app";
import { getAuth, onAuthStateChanged} from "firebase/auth";
import {REACT_APP_FIREBASE_API_KEY, REACT_APP_FIREBASE_AUTH_DOMAIN, REACT_APP_FIREBASE_PROJECT_ID, 
  REACT_APP_FIREBASE_STORAGE_BUCKET, REACT_APP_FIREBASE_MESSAGING_SENDER_ID, REACT_APP_FIREBASE_APP_ID} from '@env';

const firebaseConfig = {
    apiKey: `${REACT_APP_FIREBASE_API_KEY}`,
    authDomain: `${REACT_APP_FIREBASE_AUTH_DOMAIN}`,
    projectId: `${REACT_APP_FIREBASE_PROJECT_ID}`,
    storageBucket: `${REACT_APP_FIREBASE_STORAGE_BUCKET}`,
    messagingSenderId: `${REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
    appId: `${REACT_APP_FIREBASE_APP_ID}`
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user.uid)
      const uid = user.uid;
    } else {
    }
  });
console.log("auth: " + auth)
export default auth;