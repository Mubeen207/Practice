let input = document.getElementById("input");
let result = "";
function addinput(num) {
  result = result + num;
  input.value = result;
}
function answer() {
  result = eval(result);
  input.value = result;
}
function remove() {
  input.value = "";
  result = "";
}
function remove1() {
  result = result.slice(0, -1);
  input.value = result;
}
