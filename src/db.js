// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2LDl0OlP2aSDFvTaEqlE-mXazv-ytkwA",
  authDomain: "assignment-707ab.firebaseapp.com",
  projectId: "assignment-707ab",
  storageBucket: "assignment-707ab.appspot.com",
  messagingSenderId: "608040545108",
  appId: "1:608040545108:web:ac22abcc62edfe8bf076c1",
  measurementId: "G-DWGS3P690R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//init services
export const db = getFirestore()

//collection ref
export const colRef = collection(db, 'actors')

//get data
getDocs(colRef)
.then((snapshot)=>{
    let actors = []
    snapshot.docs.forEach((doc)=>{
        actors.push({ ...doc.data(), id: doc.id})
    })
    
})
