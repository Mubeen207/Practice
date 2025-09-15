let myInput = document.getElementById("myInput");
let myTable = document.getElementById("myTable");
let name1 = document.getElementById("name");
let country = document.getElementById("country");

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
function add() {
  let addSetionTr = document.createElement("tr");
  let addSetionTd1 = document.createElement("td");
  let addSetionTd2 = document.createElement("td");
  if (name1.value === "") {
    name1.style.border = "2px solid red";
  } else if (country.value === "") {
    country.style.border = "2px solid red";
  } else if (name1.value !== "" && country.value !== "") {
    myTable.appendChild(addSetionTr);
    addSetionTr.appendChild(addSetionTd1);
    addSetionTr.appendChild(addSetionTd2);
    addSetionTd1.innerHTML = name1.value;
    addSetionTd2.innerHTML = country.value;
  }
}
function borderReset() {
  if (name1.value == "") {
    name1.style.border = "0.5px solid black";
  } else if (country.value == "") {
    country.style.border = "0.5px solid black";
  }
}
