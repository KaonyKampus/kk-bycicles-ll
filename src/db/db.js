import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCQsz7MRikb-Uew0HaKA4_9t3o8OLYazKY",
  authDomain: "kk-bycicles-ii.firebaseapp.com",
  projectId: "kk-bycicles-ii",
  storageBucket: "kk-bycicles-ii.appspot.com",
  messagingSenderId: "663612272758",
  appId: "1:663612272758:web:7370285d255c631a3fef57"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()



export default db 