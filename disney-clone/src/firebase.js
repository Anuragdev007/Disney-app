import * as firebase from "firebase";
import "@firebase/auth";

import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKjNKljb5DRUUVfN8TzH5jdGTm_X-Wqhw",
  authDomain: "disneyplus-clone-77a4c.firebaseapp.com",
  projectId: "disneyplus-clone-77a4c",
  storageBucket: "disneyplus-clone-77a4c.appspot.com",
  messagingSenderId: "660632139072",
  appId: "1:660632139072:web:afc50394112bd162b676a5",
  measurementId: "G-71J60853DH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
