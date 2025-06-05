import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCJWSXZJlDwzO0QvcldeLrvPow2ywS7Vdk",
  authDomain: "job-listings-vue.firebaseapp.com",
  projectId: "job-listings-vue",
  storageBucket: "job-listings-vue.firebasestorage.app",
  messagingSenderId: "217043886529",
  appId: "1:217043886529:web:3d092283aceaee39020f40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export { db };