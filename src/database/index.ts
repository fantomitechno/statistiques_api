import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "statistiques-api.firebaseapp.com",
  databaseURL:
    "https://statistiques-api-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "statistiques-api",
  storageBucket: "statistiques-api.appspot.com",
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);
const database = getFirestore();

export { database };
