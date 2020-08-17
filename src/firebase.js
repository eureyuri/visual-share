import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDN669FqqbuQuczoWNhPZrcOVjWAKeiEE4",
    authDomain: "visual-share-c5429.firebaseapp.com",
    databaseURL: "https://visual-share-c5429.firebaseio.com",
    projectId: "visual-share-c5429",
    storageBucket: "visual-share-c5429.appspot.com",
    messagingSenderId: "720361168752",
    appId: "1:720361168752:web:4513aa7db51b0c956db9b5",
    measurementId: "G-6B0V9VQ57C"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };