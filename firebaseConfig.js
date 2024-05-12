// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCbV11oQwY41ymsJEv_k4s2KOlM-dHV0Z4",
  authDomain: "kaigym.firebaseapp.com",
  projectId: "kaigym",
  storageBucket: "kaigym.appspot.com",
  messagingSenderId: "166967435804",
  appId: "1:166967435804:web:0aab04d7e5c1b9682375d9",
  measurementId: "G-MPRS6DY8Q6",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export { db };
