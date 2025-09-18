import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBtfJY6eWzgOptzBTYUkW05p7f8Ou3cOnI",
  authDomain: "cd-first-project-15d4e.firebaseapp.com",
  projectId: "cd-first-project-15d4e",
  storageBucket: "cd-first-project-15d4e.appspot.com",
  messagingSenderId: "221789667167",
  appId: "1:221789667167:web:e354f7017366b11ddd80ea",
  measurementId: "G-H37P36CTFD",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
window.register = function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("User registered: " + userCredential.user.email);
      console.log("User registered:", userCredential.user);
      console.log(userCredential);
    })
    .catch((error) => {
      alert("Error: " + error.message);
      console.error(error.code, error.message);
      console.log(error);
    });
};
