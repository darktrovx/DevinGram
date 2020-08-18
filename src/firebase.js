import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD6PTp12uuo_fe2-ocxP6dFs8j1ahXdKYw",
  authDomain: "instagramclone-740db.firebaseapp.com",
  databaseURL: "https://instagramclone-740db.firebaseio.com",
  projectId: "instagramclone-740db",
  storageBucket: "instagramclone-740db.appspot.com",
  messagingSenderId: "544181496008",
  appId: "1:544181496008:web:6e3ff32d34d0d63e399dfd",
  measurementId: "G-2C7GMTF00M",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
