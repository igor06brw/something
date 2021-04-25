import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBqiQ5PZ9RLU4g99JI3vZjj6X_WK9-6j5Q",
    authDomain: "test-project-31aa6.firebaseapp.com",
    databaseURL: "https://test-project-31aa6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "test-project-31aa6",
    storageBucket: "test-project-31aa6.appspot.com",
    messagingSenderId: "841132426263",
    appId: "1:841132426263:web:a08a6f697dfad0071b8852"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore()
firebase.database();

export default firebase;