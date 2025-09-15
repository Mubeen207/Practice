let myInput = document.getElementById("myInput");
let myTable = document.getElementById("myTable");
let name1 = document.getElementById("name1");
let country = document.getElementById("country");
let cityName = "";
let countryName = "";

function myFunction() {
  let found = false;
  let filter = myInput.value.toLowerCase();
  let rows = myTable.getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
    let rowText = rows[i].innerText.toLowerCase();
    if (rowText.indexOf(filter) === -1) {
      rows[i].style.display = "none";
    } else {
      rows[i].style.display = "";
      found = true;
    }
  }

  let notFoundRow = document.getElementById("notFoundRow");
  if (notFoundRow) {
    notFoundRow.remove();
  }
  if (!found && filter !== "") {
    let addSetionTr = document.createElement("tr");
    let addSetionTd1 = document.createElement("td");
    addSetionTr.id = "notFoundRow";
    addSetionTd1.colSpan = 2;
    addSetionTd1.style.align = "center";
    addSetionTd1.innerHTML = "Not Found";
    addSetionTr.appendChild(addSetionTd1);
    myTable.appendChild(addSetionTr);
  }
}
function add() {
  cityName = name1.value;
  countryName = country.value;
  cityName =
    cityName.slice(0, 1).toUpperCase() + cityName.slice(1).toLowerCase();
  countryName =
    countryName.slice(0, 1).toUpperCase() + countryName.slice(1).toLowerCase();
  let addSetionTr = document.createElement("tr");
  let addSetionTd1 = document.createElement("td");
  let addSetionTd2 = document.createElement("td");
  if (name1.value === "" && country.value === "") {
    name1.style.border = "0.5px solid red";
    country.style.border = "0.5px solid red";
  } else if (name1.value === "") {
    name1.style.border = "0.5px solid red";
  } else if (country.value === "") {
    country.style.border = "0.5px solid red";
  } else if (name1.value !== "" && country.value !== "") {
    console.log(cityName);
    console.log(countryName);

    myTable.appendChild(addSetionTr);
    addSetionTr.appendChild(addSetionTd1);
    addSetionTr.appendChild(addSetionTd2);
    addSetionTd1.innerHTML = cityName;
    addSetionTd2.innerHTML = countryName;
  }
  name1.value = "";
  country.value = "";
}
function borderReset() {
  name1.style.border = "0.5px solid black";
  country.style.border = "0.5px solid black";
}
