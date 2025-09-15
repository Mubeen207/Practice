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
