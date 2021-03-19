import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

  const firebaseConfig = {
    apiKey: "AIzaSyDcditKpnCAJKQXbM0ivLqOWmgo9Ml9mvk",
    authDomain: "react-apps-95f3a.firebaseapp.com",
    projectId: "react-apps-95f3a",
    storageBucket: "react-apps-95f3a.appspot.com",
    messagingSenderId: "495675477234",
    appId: "1:495675477234:web:2eb0b4ad2c430e4531146b"
  };
  
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }