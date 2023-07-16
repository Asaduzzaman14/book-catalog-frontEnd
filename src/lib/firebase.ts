// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmuQ8Acw7s9S3UETJbLurHwmXpRFJaVP0",
  authDomain: "book-catalog-2b80d.firebaseapp.com",
  projectId: "book-catalog-2b80d",
  storageBucket: "book-catalog-2b80d.appspot.com",
  messagingSenderId: "93481904737",
  appId: "1:93481904737:web:406bc5f04aef875cf29820",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
