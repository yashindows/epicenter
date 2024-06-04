// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdAWI3xnPRERQe2q9sDG3vELxPzuX84X4",
  authDomain: "epicenter-9a4c0.firebaseapp.com",
  projectId: "epicenter-9a4c0",
  storageBucket: "epicenter-9a4c0.appspot.com",
  messagingSenderId: "762053696973",
  appId: "1:762053696973:web:b214963c45bae2b220b884",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default getFirestore()

export const imageDB = getStorage(app)
