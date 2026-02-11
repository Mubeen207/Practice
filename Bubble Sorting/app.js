let numberEl = document.getElementById("number");
let resultEl = document.getElementById("result");
const bubbleSort = () => {
  if (numberEl.value.trim() === "") return;
  let arr = arrGenerator();
  resultEl.innerHTML = "";
  let length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  resultEl.innerHTML = arr.join("");
  numberEl.value = "";
};
const arrGenerator = () => {
  let arr = [];
  arr = numberEl.value.split("").map(Number);
  return arr;
};
