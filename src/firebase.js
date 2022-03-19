import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbFqlu6mIqAp_mAB2M4_PLExg1blo3cRo",
  authDomain: "chat-app-70b85.firebaseapp.com",
  projectId: "chat-app-70b85",
  storageBucket: "chat-app-70b85.appspot.com",
  messagingSenderId: "1083339438669",
  appId: "1:1083339438669:web:12af50c20293132c46fa04"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
