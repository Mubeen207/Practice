function title_case() {
  let input = document.getElementById("para").value;
  let print = document.getElementById("write_para");
  let para = input;

  let condition = true;
  let result = "";
  for (let i = 0; i < para.length; i++) {
    let char = para[i];
    if (
      (condition && char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z")
    ) {
      result = result + char.toUpperCase();
      condition = false;
    } else {
      result = result + char;
    }

    if (char === " ") {
      condition = true;
    }
  }

  print.innerHTML = result;
}
function checkEnter(event) {
  if (event.key === "Enter") {
    title_case();
  }
}
