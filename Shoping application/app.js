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

let editValueId;
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
let productEl = document.getElementById("product");
let detailsEl = document.getElementById("details");
let locationEl = document.getElementById("location");

function addProduct() {
  if (
    name1El.value !== "" &&
    productEl.value !== "" &&
    detailsEl.value !== "" &&
    locationEl.value !== ""
  ) {
    db.collection("Shopping")
      .add({
        name: tilteCase(name1El.value),
        product: tilteCase(productEl.value),
        details: tilteCase(detailsEl.value),
        location: tilteCase(locationEl.value),
        uid: fb.currentUser.uid,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    name1El.value = "";
    productEl.value = "";
    detailsEl.value = "";
    locationEl.value = "";
  }
}
function getProducts() {
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

  let div = document.createElement("div");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let p4 = document.createElement("p");

  let editBtn = document.createElement("button");
  let deleteBtn = document.createElement("button");

  let pTextNode = document.createTextNode(doc.name);
  let pTextNode1 = document.createTextNode(doc.product);
  let pTextNode2 = document.createTextNode(doc.details);
  let pTextNode3 = document.createTextNode(doc.location);

  let deleteTextNode = document.createTextNode("Delete");
  let editTextNode = document.createTextNode("Edit");

  div.setAttribute("id", doc.id);
  p1.appendChild(pTextNode);
  p2.appendChild(pTextNode1);
  p3.appendChild(pTextNode2);
  p4.appendChild(pTextNode3);
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
  div.appendChild(p4);
  deleteBtn.appendChild(deleteTextNode);
  editBtn.appendChild(editTextNode);

  editBtn.setAttribute("onClick", "edit(this)");
  deleteBtn.setAttribute("onClick", "deleteItem(this)");

  div.appendChild(deleteBtn);
  div.appendChild(editBtn);
  div.style.display = "flex"
  div.style.flexDirection = "column"
  div.style.border = "1px solid black"
  div.style.width = "100%"
  

  divListing.appendChild(div);
}

function edit(editEl) {
  addBtn.innerHTML = "Save Product";
  addBtn.setAttribute("onClick", "editFirebase()");
  editValueId = editEl.parentNode;
  name1El.value = editEl.parentNode.childNodes[0].innerHTML;
  productEl.value = editEl.parentNode.childNodes[1].innerHTML;
  detailsEl.value = editEl.parentNode.childNodes[2].innerHTML;
  locationEl.value = editEl.parentNode.childNodes[3].innerHTML;
  // editValue = editEl.parentNode;
  // name1El.value = editValue.firstChild.nodeValue;
}
function editFirebase() {
  if (
    name1El.value !== "" &&
    productEl.value !== "" &&
    detailsEl.value !== "" &&
    locationEl.value !== ""
  ) {
    db.collection("Shopping")
      .doc(editValueId.id)
      .update({
        name: tilteCase(name1El.value),
        product: tilteCase(productEl.value),
        details: tilteCase(detailsEl.value),
        location: tilteCase(locationEl.value),
      })
      .then(() => {
        console.log("Document successfully updated!");
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
    editValueId.childNodes[0].innerHTML = tilteCase(name1El.value);
    editValueId.childNodes[1].innerHTML = tilteCase(productEl.value);
    editValueId.childNodes[2].innerHTML = tilteCase(detailsEl.value);
    editValueId.childNodes[3].innerHTML = tilteCase(locationEl.value);
    addBtn.innerHTML = "Add Product";
    addBtn.setAttribute("onClick", "addProduct()");

    name1El.value = "";
    productEl.value = "";
    detailsEl.value = "";
    locationEl.value = "";
  }
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

function tilteCase(tilteCase) {
  return tilteCase[0].toUpperCase() + tilteCase.slice(1).toLowerCase();
}
