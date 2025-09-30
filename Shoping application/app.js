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
      let errorCode = error.code;
      message.innerHTML = errorMessage(errorCode);

      message.classList.add("show", "message-error");
      message.classList.remove("message-success");
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
      let errorCode = error.code;
      message.innerHTML = errorMessage(errorCode);

      message.classList.add("show", "message-error");
      message.classList.remove("message-success");
    });
}

function errorMessage(Code) {
  if (Code === "auth/wrong-password") {
    return "Incorrect password. Please try again.";
  } else if (Code === "auth/user-not-found") {
    return "No account found with this email.";
  } else if (Code === "auth/invalid-email") {
    return "The email address is not valid.";
  } else if (Code === "auth/email-already-in-use") {
    return "This email address is already in use.";
  } else if (Code === "auth/weak-password") {
    return "Password is too weak. It should be at least 6 characters long.";
  } else {
    return "An unknown error occurred. Please try again.";
  }
}

// Is function ko signOut ke baad add karein

function forgotPassword() {
  message = document.getElementById("message");
  let email = emailEl.value;
  if (email === "") {
    message.innerHTML = "Please enter your email address first.";
    message.classList.add("show", "message-error");
    return;
  }
  message.innerHTML = "";
  message.classList.remove("show", "message-error", "message-success");
  fb.sendPasswordResetEmail(email)
    .then(() => {
      message.innerHTML = "Password reset email sent! Please check your inbox.";
      message.classList.add("show", "message-success");
    })
    .catch((error) => {
      message.innerHTML = errorMessage(error.code);
      message.classList.add("show", "message-error");
    });
}

function signOut() {
  localStorage.clear();
  fb.signOut()
    .then(() => {
      // console.log("Sign Out");
      window.location.href = "./index.html";
    })
    .catch((error) => {
      // console.log(error);
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
        // console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        // console.error("Error adding document: ", error);
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
          // console.log("New city: ", docData);
          makeListing(docData);
        }
        if (change.type === "modified") {
          // console.log("Modified city: ", change.doc.data());
        }
        if (change.type === "removed") {
          // console.log("Removed city: ", change.doc.data());
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
  let cartBtn = document.createElement("button");

  let pTextNode = document.createTextNode(doc.name);
  let pTextNode1 = document.createTextNode(doc.product);
  let pTextNode2 = document.createTextNode(doc.details);
  let pTextNode3 = document.createTextNode(doc.location);

  let deleteTextNode = document.createTextNode("Delete");
  let editTextNode = document.createTextNode("Edit");
  let cartTextNode = document.createTextNode("Add to Cart");

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
  cartBtn.appendChild(cartTextNode);

  editBtn.setAttribute("onClick", "edit(this)");
  deleteBtn.setAttribute("onClick", "deleteItem(this)");

  editBtn.classList.add("btn", "btn-edit");
  deleteBtn.classList.add("btn", "btn-delete");
  cartBtn.classList.add("btn", "btn-cart");

  cartBtn.setAttribute("onClick", "addToCart(this)");

  cartBtn.style.color = "black";

  div.appendChild(deleteBtn);
  div.appendChild(editBtn);
  div.appendChild(cartBtn);

  div.classList.add("product-card");
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
        // console.log("Document successfully updated!");
      })
      .catch((error) => {
        // console.error("Error updating document: ", error);
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
  name1El.value = "";
  productEl.value = "";
  detailsEl.value = "";
  locationEl.value = "";
  let deleteId = deleteEl.parentNode.id;
  // console.log(deleteId);
  divListing.removeChild(deleteEl.parentNode);
  db.collection("Shopping")
    .doc(deleteId)
    .delete()
    .then(() => {
      // console.log("Document successfully deleted!");
      deleteId = undefined;
    })
    .catch((error) => {
      // console.error("Error removing document: ", error);
    });
}

function tilteCase(tilteCase) {
  return tilteCase[0].toUpperCase() + tilteCase.slice(1).toLowerCase();
}
function addToCart(cartEl) {
  let cartProducts = cartEl.parentNode.childNodes;
  // console.log(cartProducts[1].innerText);

  // console.log(cartEl.parentNode.childNodes);
  db.collection("Cart Products")
    .add({
      name: cartProducts[0].innerHTML,
      price: cartProducts[1].innerText,
      details: cartProducts[2].innerHTML,
      location: cartProducts[3].innerHTML,
      uid: fb.currentUser.uid,
    })
    .then((docRef) => {
      // console.log("Document written with ID: ", docRef.id);
      alert("Cart Added Successfully");
    })
    .catch((error) => {
      // console.error("Error adding document: ", error);
    });
}
let cartListingEl = document.getElementById("cartListing");
function getProductsCart() {
  let uidData = JSON.parse(localStorage.getItem("uid"));
  db.collection("Cart Products")
    .where("uid", "==", uidData.uid)
    .onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          let docData = change.doc.data();
          docData.id = change.doc.id;
          // console.log("New city: ", docData);
          makeListingcart(docData);
        }
        if (change.type === "modified") {
          // console.log("Modified city: ", change.doc.data());
        }
        if (change.type === "removed") {
          // console.log("Removed city: ", change.doc.data());
        }
      });
    });
}
function makeListingcart(doc) {
  let div = document.createElement("div");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let p4 = document.createElement("p");

  let cartBtn = document.createElement("button");

  let pTextNode = document.createTextNode(doc.name);
  let pTextNode1 = document.createTextNode(doc.price);
  let pTextNode2 = document.createTextNode(doc.details);
  let pTextNode3 = document.createTextNode(doc.location);

  let cartTextNode = document.createTextNode("Remove Cart");

  // div.setAttribute("id", doc.id);
  p1.appendChild(pTextNode);
  p2.appendChild(pTextNode1);
  p3.appendChild(pTextNode2);
  p4.appendChild(pTextNode3);
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(p3);
  div.appendChild(p4);
  div.setAttribute("id", doc.id);
  div.classList.add("flex-center");

  cartBtn.appendChild(cartTextNode);

  cartBtn.classList.add("btn", "btn-cart");

  cartBtn.setAttribute("onClick", "deleteCart(this)");

  cartBtn.style.color = "black";

  div.appendChild(cartBtn);

  div.classList.add("product-card");
  cartListingEl.appendChild(div);
}
function deleteCart(deleteEl) {
  let deleteId = deleteEl.parentNode.id;
  // console.log(deleteId);
  // console.log(deleteEl.parentNode.parentNode);
  cartListingEl.removeChild(deleteEl.parentNode);
  db.collection("Cart Products")
    .doc(deleteId)
    .delete()
    .then(() => {
      // console.log("Document successfully deleted!");
    })
    .catch((error) => {
      // console.error("Error removing document: ", error);
    });
}
