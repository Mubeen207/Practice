let img1 = document.getElementById("img-1");
let img2 = document.getElementById("img-2");
let img3 = document.getElementById("img-3");
let h1 = document.getElementById("heading");
let isFlipped = false;
let AmountEl = document.getElementById("amount");
let Input = document.getElementById("input");
let result = 0;
let inputNum = 0;
let amountNum = 0;

function flipCard(num) {
  inputNum = parseFloat(Input.value);
  amountNum = parseFloat(AmountEl.innerText);
  if (amountNum >= inputNum && inputNum !== String) {
    if (!isFlipped) {
      let kingNumber = Math.ceil(Math.random() * 3);

      img1.src = "./Images/joker.jpg";
      img2.src = "./Images/joker.jpg";
      img3.src = "./Images/joker.jpg";

      if (kingNumber === 1) img1.src = "./Images/King.jpg";
      else if (kingNumber === 2) img2.src = "./Images/King.jpg";
      else img3.src = "./Images/King.jpg";

      isFlipped = true;

      if (kingNumber === num) {
        h1.innerHTML = "🎉 You Win!";
        h1.style.color = "green";
        Add();
      } else {
        h1.innerHTML = "❌ You Loss!";
        h1.style.color = "red";
        SumTract();
      }
    }
  } else if (amountNum < inputNum) {
    h1.innerHTML = "Not enough balance to Bet!";
    h1.style.color = "red";
  } else {
    h1.innerHTML = "Please Enter Bet Amount!";
    h1.style.color = "red";
  }
}

function resetCard() {
  img1.src = "./Images/card-back.png";
  img2.src = "./Images/card-back.png";
  img3.src = "./Images/card-back.png";
  h1.innerHTML = "Pick a card!";
  h1.style.color = "blue";
  isFlipped = false;
}

function Deposit(Element) {
  if (Input.value > 0 && Input.value !== String) {
    AmountEl.innerHTML = Input.value;

    Element.innerHTML = "Reset All";
    Element.setAttribute("OnClick", "Reload(this)");
    Input.value = "";
  } else {
    h1.innerHTML = "Invalid Value Please Enter Number Only!";
    h1.style.color = "red";
  }
}
function SumTract() {
  inputNum = parseFloat(Input.value);
  amountNum = parseFloat(AmountEl.innerText);

  if (!isNaN(inputNum) && amountNum >= inputNum) {
    result = amountNum - inputNum;

    AmountEl.innerHTML = result;
  }
}
function Add() {
  inputNum = parseFloat(Input.value);
  amountNum = parseFloat(AmountEl.innerText);

  if (!isNaN(inputNum)) {
    result = amountNum + inputNum;

    AmountEl.innerHTML = result;
  }
}

function Reload(Element) {
  resetCard();
  Element.innerHTML = "Deposit";
  Element.setAttribute("OnClick", "Deposit(this)");
  Input.value = "";
  AmountEl.innerHTML = "";
}
