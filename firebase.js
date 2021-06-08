import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDexA-sD8fwjQnlWr-q49FnNvl2ZfCb3hU",
  authDomain: "whatsapp-2-a39c3.firebaseapp.com",
  projectId: "whatsapp-2-a39c3",
  storageBucket: "whatsapp-2-a39c3.appspot.com",
  messagingSenderId: "958065892995",
  appId: "1:958065892995:web:c67a41a3fe0bea4a27c5b6",
  measurementId: "G-RDVXFTY464",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
