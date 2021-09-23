import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBIUxKOecFX_hFEe_JvBwJHfFaKkEswWoU",
  authDomain: "next-netflix-clone.firebaseapp.com",
  projectId: "next-netflix-clone",
  storageBucket: "next-netflix-clone.appspot.com",
  messagingSenderId: "532108051947",
  appId: "1:532108051947:web:84119ab315b1530e75c5ae",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
