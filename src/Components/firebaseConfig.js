// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzOLUEw8VUQVHokgUWE8lNx3GAnwu0rz0",
  authDomain: "legafolksauth.firebaseapp.com",
  projectId: "legafolksauth",
  storageBucket: "legafolksauth.appspot.com",
  messagingSenderId: "665109581409",
  appId: "1:665109581409:web:923f3cb0ab22784d606420"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;