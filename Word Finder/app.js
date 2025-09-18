function findWord() {
  let para = document.getElementById("paragraph").value;

  let finding_word = document.getElementById("word").value;
  let length = finding_word.length;
  let count = 0;
  for (let i = 0; i < para.length; i++) {
    let char = para.slice(i, i + length);
    if (char === finding_word) {
      count++;
      // console.log(i+1);
      
    }
  }

  let type = document.getElementById("found");
  type.innerHTML = count;
}
function checkEnter(event) {
  if (event.key === "Enter") {
    findWord();
  }
}