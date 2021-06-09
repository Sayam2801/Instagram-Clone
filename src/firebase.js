import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDGWyCXxeOvew_qRqptqCosjoS6Z_CuzVU",
    authDomain: "instagram-clone-83c4a.firebaseapp.com",
    projectId: "instagram-clone-83c4a",
    storageBucket: "instagram-clone-83c4a.appspot.com",
    messagingSenderId: "798649099729",
    appId: "1:798649099729:web:bcd20a10c090730eb4acf0",
    measurementId: "G-5NG159BCHT"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };