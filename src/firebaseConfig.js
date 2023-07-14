// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvLbZ02GRTFmnC55ZcmTmG-1RCahKCqjE",
  authDomain: "artesanisste.firebaseapp.com",
  projectId: "artesanisste",
  storageBucket: "artesanisste.appspot.com",
  messagingSenderId: "570870145774",
  appId: "1:570870145774:web:cf3fb6eff2130a584949ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
