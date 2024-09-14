// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXKMaSSWyHFqSgujb9DX_jpj-UDlR7eUo",
  authDomain: "coffee-store-27cf3.firebaseapp.com",
  projectId: "coffee-store-27cf3",
  storageBucket: "coffee-store-27cf3.appspot.com",
  messagingSenderId: "780599886140",
  appId: "1:780599886140:web:37c34da9d0c7ee2c3c9e39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app