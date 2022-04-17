import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAKMjgFxKOH7fUt9YSu4HtLYoORXEbrX9A",
    authDomain: "linkedinmasai-948a2.firebaseapp.com",
    projectId: "linkedinmasai-948a2",
    storageBucket: "linkedinmasai-948a2.appspot.com",
    messagingSenderId: "32852553284",
    appId: "1:32852553284:web:8b4651392782fe68b49611",
    measurementId: "G-KW85BBL139"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };