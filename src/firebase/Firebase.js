// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDcqNuTTe4C3yCzisWSLaKfJKpJe0-kpBY",
    authDomain: "clone-f416e.firebaseapp.com",
    projectId: "clone-f416e",
    storageBucket: "clone-f416e.firebasestorage.app",
    messagingSenderId: "551694167913",
    appId: "1:551694167913:web:be2804cede805dd97e17f8",
    measurementId: "G-Q78S92PQCS"
  };
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth()
  const db = app.firestore()
export {db, auth}