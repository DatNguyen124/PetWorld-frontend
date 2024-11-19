// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSRk7gbg85s37uFcgtptcX36lYrj0Mkic",
  authDomain: "petwo-b1c51.firebaseapp.com",
  databaseURL:
    "https://petwo-b1c51-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "petwo-b1c51",
  storageBucket: "petwo-b1c51.appspot.com",
  messagingSenderId: "989060701965",
  appId: "1:989060701965:web:d4a1aa453de76b2b159a44",
  measurementId: "G-XN4ZT8HNE4",
};

const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app);
