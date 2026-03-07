const firebaseConfig = {
  apiKey: "AIzaSyD6FCyNQex9bpOHTj_eeb5lzuAiR8I6MWw",
  authDomain: "authentication-1548a.firebaseapp.com",
  projectId: "authentication-1548a",
  storageBucket: "authentication-1548a.firebasestorage.app",
  messagingSenderId: "83155548017",
  appId: "1:83155548017:web:af056f49c1ad1bef0028d0",
  measurementId: "G-NZPDKG4YSG",
};
firebase.initializeApp(firebaseConfig);

let emailEl = document.getElementById("email");
let passwordEl = document.getElementById("password");
let todoEl = document.getElementById("todo");
let fb = firebase.auth();
const db = firebase.firestore();

function signUp() {
  fb.createUserWithEmailAndPassword(emailEl.value, passwordEl.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user.uid);
      localStorage.setItem("uid", user.uid);
      redirectToHome();
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
      console.error(error);
    });
}

function signIn() {
  fb.signInWithEmailAndPassword(emailEl.value, passwordEl.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      localStorage.setItem("uid", user.uid);
      redirectToHome();
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(error);
    });
}

function signOut() {
  fb.signOut()
    .then(() => {
      console.log("Sign Out");
      localStorage.removeItem(user.uid);
    })
    .catch((error) => {
      // An error happened.
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    });
}

function redirectToHome() {
  location.href = "./home.html";
}

function addTodo() {
  db.collection("todos")
    .add({
      todo: todoEl.value,
      uid: localStorage.getItem("uid"),
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}
