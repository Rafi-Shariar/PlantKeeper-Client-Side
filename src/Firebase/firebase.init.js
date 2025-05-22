// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// const firebaseConfig = {
//   apiKey: "AIzaSyDYL1eT36RKf6o_FdFMI_wg2BMAmUfwcz8",
//   authDomain: "ph-a10-60ab6.firebaseapp.com",
//   projectId: "ph-a10-60ab6",
//   storageBucket: "ph-a10-60ab6.firebasestorage.app",
//   messagingSenderId: "439292443391",
//   appId: "1:439292443391:web:5c2d7e09cf55cb73416aca"
// };
