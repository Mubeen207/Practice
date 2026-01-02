let input = document.getElementById("input");
let result = "";
let euation = "";
let count = true;
function addinput(num) {
  euation += num;
  input.value = euation;
  count = true;
}
function answer() {
  if (
    euation[euation.length - 1] === "+" ||
    euation[euation.length - 1] === "-" ||
    euation[euation.length - 1] === "/" ||
    euation[euation.length - 1] === "*"
  ) {
    for (let i = 0; i < euation.length - 1; i++) {
      result += euation[i];
    }

    result = eval(result);
    input.value = result;
    euation = "";
  }
}
function special(rider) {
  if (count) {
    euation += rider;
    count = false;
    input.value = euation;
  }
}
function remove() {
  input.value = "";
  euation = "";
}
function remove1() {
  euation = euation.slice(0, -1);
  input.value = euation;
}
// let one = "2++2";
// one = Number(one);
// // console.log(Number(one));
// if (isNaN(one)) {
//   console.log(one, " Hello");
// }
