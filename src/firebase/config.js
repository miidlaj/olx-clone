import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA1IsD7_fh2a5BAGvsI6tChS4ynG7N2G2U",
    authDomain: "olx-clone-380db.firebaseapp.com",
    projectId: "olx-clone-380db",
    storageBucket: "olx-clone-380db.appspot.com",
    messagingSenderId: "945566486873",
    appId: "1:945566486873:web:4c6e551d757bf4fc9cbc48",
    measurementId: "G-84YLVS27G4"
};

export default firebase.initializeApp(firebaseConfig)