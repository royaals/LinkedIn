import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBCDLgBbc0vflon7p7Rd9-o1-LgqrSsW38",
  authDomain: "linkedin-clone-358df.firebaseapp.com",
  projectId: "linkedin-clone-358df",
  storageBucket: "linkedin-clone-358df.appspot.com",
  messagingSenderId: "292966018836",
  appId: "1:292966018836:web:999b5f3d0678ddb8b1dc01",
  measurementId: "G-VH2RLVDB3E",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
