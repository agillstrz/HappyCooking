// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuaGoR6ZC4XplujH1aDC2QRjVia7SXuu4",
  authDomain: "cooking-c2b68.firebaseapp.com",
  projectId: "cooking-c2b68",
  storageBucket: "cooking-c2b68.appspot.com",
  messagingSenderId: "991006126249",
  appId: "1:991006126249:web:9b97d6643900c14db479b8",
  measurementId: "G-0RPTTVF4YH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
