// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYL1eT36RKf6o_FdFMI_wg2BMAmUfwcz8",
  authDomain: "ph-a10-60ab6.firebaseapp.com",
  projectId: "ph-a10-60ab6",
  storageBucket: "ph-a10-60ab6.firebasestorage.app",
  messagingSenderId: "439292443391",
  appId: "1:439292443391:web:5c2d7e09cf55cb73416aca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);