// File: src/main.js

// CSS aur Firebase config ko import karein
import './style.css';
import { auth } from './firebaseConfig.js';

// Firebase se zaroori Authentication functions import karein
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  sendPasswordResetEmail 
} from "firebase/auth";

// --- HTML Elements Hasil Karna ---
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const message = document.getElementById("message");

// --- Sign Up Function ---
window.signUp = function() {
  const email = emailEl.value;
  const password = passwordEl.value;
  
  // Purana message saaf karein
  message.textContent = "";
  message.classList.remove("show", "message-error", "message-success");

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Sign up kamyab
      console.log("Sign up successful:", userCredential.user);
      message.textContent = "Sign up Successful! Redirecting...";
      message.classList.add("show", "message-success");
      
      // 1.5 second baad chat page par bhej dein
      setTimeout(() => {
        window.location.href = './chat.html'; 
      }, 1500);
    })
    .catch((error) => {
      // Sign up mein error
      message.textContent = formatErrorMessage(error.code);
      message.classList.add("show", "message-error");
    });
}

// --- Sign In Function ---
window.signIn = function() {
  const email = emailEl.value;
  const password = passwordEl.value;

  message.textContent = "";
  message.classList.remove("show", "message-error", "message-success");

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Sign in kamyab
      console.log("Sign in successful:", userCredential.user);
      message.textContent = "Sign in Successful! Redirecting...";
      message.classList.add("show", "message-success");
      
      setTimeout(() => {
        window.location.href = './chat.html';
      }, 1500);
    })
    .catch((error) => {
      // Sign in mein error
      message.textContent = formatErrorMessage(error.code);
      message.classList.add("show", "message-error");
    });
}

// --- Forgot Password Function ---
window.forgotPassword = function() {
  const email = emailEl.value;

  if (!email) {
    message.textContent = "Please enter your email to reset the password.";
    message.classList.add("show", "message-error");
    return;
  }

  message.textContent = "";
  message.classList.remove("show", "message-error", "message-success");

  sendPasswordResetEmail(auth, email)
    .then(() => {
      message.textContent = "Password reset email sent! Please check your inbox.";
      message.classList.add("show", "message-success");
    })
    .catch((error) => {
      message.textContent = formatErrorMessage(error.code);
      message.classList.add("show", "message-error");
    });
}

// --- Error Messages Ko Aasan Banane Wala Function ---
function formatErrorMessage(errorCode) {
  switch (errorCode) {
    case "auth/wrong-password":
      return "Incorrect password. Please try again.";
    case "auth/user-not-found":
      return "No account found with this email.";
    case "auth/invalid-email":
      return "The email address is not valid.";
    case "auth/email-already-in-use":
      return "This email address is already in use.";
    case "auth/weak-password":
      return "Password is too weak. It should be at least 6 characters long.";
    default:
      return "An unknown error occurred. Please try again.";
  }
}