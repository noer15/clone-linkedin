import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2FZyz0YSdMvJuueuV1t2-4hC6n_RavYw",
  authDomain: "linkedin-clone-c56ee.firebaseapp.com",
  projectId: "linkedin-clone-c56ee",
  storageBucket: "linkedin-clone-c56ee.appspot.com",
  messagingSenderId: "960075301029",
  appId: "1:960075301029:web:c48c709ae9756bfbee8d4c",
  measurementId: "G-37SSQCDJVL",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
