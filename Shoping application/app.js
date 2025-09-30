const firebaseConfig = {
  apiKey: "AIzaSyBtfJY6eWzgOptzBTYUkW05p7f8Ou3cOnI",
  authDomain: "cd-first-project-15d4e.firebaseapp.com",
  projectId: "cd-first-project-15d4e",
  storageBucket: "cd-first-project-15d4e.firebasestorage.app",
  messagingSenderId: "221789667167",
  appId: "1:221789667167:web:e354f7017366b11ddd80ea",
  measurementId: "G-H37P36CTFD",
};
firebase.initializeApp(firebaseConfig);
let fb = firebase.auth();
const db = firebase.firestore();
let emailEl = document.getElementById("email");
let passwordEl = document.getElementById("password");
let message = document.getElementById("message");
let addBtn = document.getElementById("addBtn");
let editValue;

// Authentication
function signUp() {
  fb.createUserWithEmailAndPassword(emailEl.value, passwordEl.value)
    .then((userCredential) => {

      var user = userCredential.user;
      message.innerHTML = "Sign up Successful";
      message.style.color = "green";
      location.href = "./home.html";
      localStorage.setItem("uid", JSON.stringify(fb.currentUser));
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      message.innerHTML = errorCode + " " + errorMessage;
      message.style.color = "red";
    });
}

function signIn() {
  fb.signInWithEmailAndPassword(emailEl.value, passwordEl.value)
    .then((userCredential) => {
      let user = userCredential.user;
      message.innerHTML = "Sign up Successful";
      message.style.color = "green";
      location.href = "./home.html";
      localStorage.setItem("uid", JSON.stringify(fb.currentUser));
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      message.innerHTML = errorCode + " " + errorMessage;
      message.style.color = "red";
    });
}

function signOut() {
  localStorage.clear();
  fb.signOut()
    .then(() => {
      console.log("Sign Out");
      window.location.href = "./index.html";
    })
    .catch((error) => {
      console.log(error);
    });
}

// Firestore
let name1El = document.getElementById("name1");

function addTodo() {
  db.collection("Shopping")
    .add({
      todo: name1El.value,
      uid: fb.currentUser.uid,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  name1El.value = "";
}

function getTodos() {
  let uidData = JSON.parse(localStorage.getItem("uid"));
  db.collection("Shopping")
    .where("uid", "==", uidData.uid)
    .onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          let docData = change.doc.data();
          docData.id = change.doc.id;
          console.log("New city: ", docData);
          makeListing(docData);
        }
        if (change.type === "modified") {
          console.log("Modified city: ", change.doc.data());
        }
        if (change.type === "removed") {
          console.log("Removed city: ", change.doc.data());
        }
      });
    });
}

let divListing = document.getElementById("listing");

function makeListing(doc) {
  // console.log(doc.id);

  let p = document.createElement("p");

  let editBtn = document.createElement("button");
  let deleteBtn = document.createElement("button");

  let pTextNode = document.createTextNode(doc.todo);

  let deleteTextNode = document.createTextNode("Delete");
  let editTextNode = document.createTextNode("Edit");

  p.setAttribute("id", doc.id);
  p.appendChild(pTextNode);

  deleteBtn.appendChild(deleteTextNode);
  editBtn.appendChild(editTextNode);

  editBtn.setAttribute("onClick", "edit(this)");
  deleteBtn.setAttribute("onClick", "deleteItem(this)");

  p.appendChild(deleteBtn);
  p.appendChild(editBtn);

  divListing.appendChild(p);
}

function edit(editEl) {
  addBtn.innerHTML = "Save Todo";
  addBtn.setAttribute("onClick", "editFirebase()");

  editValue = editEl.parentNode;
  name1El.value = editValue.firstChild.nodeValue;
}
function editFirebase() {
  db.collection("Shopping")
    .doc(editValue.id)
    .update({
      todo: name1El.value,
    })
    .then(() => {
      console.log("Document successfully updated!");
      addBtn.innerHTML = "Add Todo";
      addBtn.onclick = "addBtn()";
    })
    .catch((error) => {
      console.error("Error updating document: ", error);
    });
  editValue.firstChild.nodeValue = name1El.value;
  name1El.value = "";
}

function deleteItem(deleteEl) {
  let deleteId = deleteEl.parentNode.id;
  console.log(deleteId);
  divListing.removeChild(deleteEl.parentNode);
  db.collection("Shopping")
    .doc(deleteId)
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
}
