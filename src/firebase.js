// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAd1oQmp41TWLh2Rw3HRaUg9ykq6P9zwm0",
    authDomain: "shortener-by-miras.firebaseapp.com",
    projectId: "shortener-by-miras",
    storageBucket: "shortener-by-miras.appspot.com",
    messagingSenderId: "1076875595623",
    appId: "1:1076875595623:web:120ca34d25ea60f8f5a9c2",
    measurementId: "G-B25EZ6GM0C"
})

  const db = firebaseApp.firestore()
  export default db;

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
