function title_case() {
  let para = document.getElementById("para").value;
  let print = document.getElementById("write_para");

  for (let i = 0; i < para.length; i++) {
    let char = para.slice(i, i + 2);
    console.log(char);

    if (char === "  ") {
      print.innerHTML = "Your enter santance have 2 spaces";
      break;
    } else {
      print.innerHTML = "Your enter santance have no 2 spaces";
    }
  }
}

function checkEnter(event) {
  if (event.key === "Enter") {
    title_case();
  }
}
