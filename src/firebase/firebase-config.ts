import firebase from 'firebase/app'
import "firebase/firestore"
import "firebase/auth"


firebase.initializeApp({
  apiKey: "AIzaSyBETtD4cWg6IAoJOYCtQfOMX9GtwezFpac",
  authDomain: "sports-app-2ebc1.firebaseapp.com",
  projectId: "sports-app-2ebc1",
  storageBucket: "sports-app-2ebc1.appspot.com",
  messagingSenderId: "466884067586",
  appId: "1:466884067586:web:9411384d5c1edffee8421b"
});

// Initialize Firebase
const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase,
}


