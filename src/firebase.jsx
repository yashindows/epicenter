// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkChXiq5B6048-RfnVWo0jONWDtk1h-IY",
  authDomain: "epicenter-f71d0.firebaseapp.com",
  projectId: "epicenter-f71d0",
  storageBucket: "epicenter-f71d0.appspot.com",
  messagingSenderId: "454311881163",
  appId: "1:454311881163:web:4a1501806364248a822e4e",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default getFirestore()
