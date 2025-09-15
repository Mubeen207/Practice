// let myInput = document.getElementById("myInput");
// let myTable = document.getElementById("myTable");

// function myFunction() {
//   console.log(myInput.value);
//   for (let i = 0; i < myTable.childNodes.length; i++) {
//     // console.log(myTable.childNodes[i]);
//     if (myTable.childNodes[i].indexOf(myInput.value) === -1) {
//       console.log(i);
//     } else {
//       console.log(i, " HEllo IAM FROM ELSE");
//     }
//   }
// }
let myInput = document.getElementById("myInput");
let myTable = document.getElementById("myTable");

function myFunction() {
  let filter = myInput.value.toLowerCase();
  let rows = myTable.getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
    let rowText = rows[i].innerText.toLowerCase();
    if (rowText.indexOf(filter) === -1) {
      rows[i].style.display = "none";
    } else {
      rows[i].style.display = "";
    }
  }
}
