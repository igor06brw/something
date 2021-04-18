import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBqiQ5PZ9RLU4g99JI3vZjj6X_WK9-6j5Q",
    authDomain: "test-project-31aa6.firebaseapp.com",
    projectId: "test-project-31aa6",
    storageBucket: "test-project-31aa6.appspot.com",
    messagingSenderId: "841132426263",
    appId: "1:841132426263:web:7cd70616a40466f01b8852"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;