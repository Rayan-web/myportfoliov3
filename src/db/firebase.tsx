
import { initializeApp } from "firebase/app";

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'; 
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAW3CqlWFNeEwnxRN3qSM0abgV6Ma_CAdc",
  authDomain: "rayankasmi-4c08d.firebaseapp.com",
  projectId: "rayankasmi-4c08d",
  storageBucket: "rayankasmi-4c08d.appspot.com",
  messagingSenderId: "500588081756",
  appId: "1:500588081756:web:89fdc321f7a0d16cebec99"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app);
 export const storage=getStorage(app)