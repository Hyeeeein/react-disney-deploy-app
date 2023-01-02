// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvTNdan31vwyFR0phpOQHh5nG7SdMLEKI",
  authDomain: "react-disney-plus-app-20ad6.firebaseapp.com",
  projectId: "react-disney-plus-app-20ad6",
  storageBucket: "react-disney-plus-app-20ad6.appspot.com",
  messagingSenderId: "935073303121",
  appId: "1:935073303121:web:c6497b5f5aee8e27f40670",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
