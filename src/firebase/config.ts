import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDBNyTtgkGycFaoK_N_0gcx7L_1tBQMXYg",
  authDomain: "gallaryapp-c58cf.firebaseapp.com",
  projectId: "gallaryapp-c58cf",
  storageBucket: "gallaryapp-c58cf.appspot.com",
  messagingSenderId: "780971876244",
  appId: "1:780971876244:web:593eef321d5285d9cf3981",
  measurementId: "G-3C6JYCS5G7"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, storage, db };
