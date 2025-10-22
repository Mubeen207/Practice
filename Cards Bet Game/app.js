let img1 = document.getElementById("img-1");
let img2 = document.getElementById("img-2");
let img3 = document.getElementById("img-3");
let h1 = document.getElementById("heading");
let buttonAddEl = document.getElementById("button-add");
let AmountEl = document.getElementById("amount");
let Input = document.getElementById("input");
let chanceEl = document.getElementById("chance");
let resetCardEl = document.getElementById("resetCard");
let isFlipped = false;
let result = 0;
let inputNum = 0;
let amountNum = 0;
let balance = 0;

function flipCard(num) {
  inputNum = parseFloat(Input.value);
  amountNum = parseFloat(AmountEl.innerText);
  if (amountNum >= inputNum && inputNum !== String) {
    if (!isFlipped) {
      chanceEl.innerHTML--;
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
      } else if (kingNumber !== num) {
        h1.innerHTML = "❌ You Loss!";
        h1.style.color = "red";
        SumTract();
      }
      if (chanceEl.innerHTML == 0) {
        if (AmountEl.innerHTML > balance) {
          h1.innerHTML =
            "You Win Profet $ " + (Number(AmountEl.innerHTML) - balance);
          h1.style.color = "green";
          balance = 0;
        } else {
          h1.innerHTML =
            "Your Loss is $ " + (Number(AmountEl.innerHTML) - balance);
          h1.style.color = "red";
          balance = 0;
        }
      } else if (AmountEl.innerHTML == 0) {
        if (AmountEl.innerHTML > balance) {
          h1.innerHTML =
            "You Win Profet $ " + (Number(AmountEl.innerHTML) - balance);
          h1.style.color = "green";
          balance = 0;
        } else {
          h1.innerHTML =
            "Your Loss is $ " + (Number(AmountEl.innerHTML) - balance);
          h1.style.color = "red";
          balance = 0;
        }
        chanceEl.innerHTML = 0;
      }
      if (chanceEl.innerHTML == 0) {
        resetCardEl.setAttribute("onclick", "playAgain()");
        resetCardEl.innerHTML = "Play Again";
      }
    }
  } else if (amountNum < inputNum) {
    h1.innerHTML = "Not enough balance to Bet!";
    h1.style.color = "red";
  } else {
    h1.innerHTML = "Please Enter Bet Amount!";
    h1.style.color = "red";
  }
  Input.value = "";
}
function playAgain() {
  resetCardEl.setAttribute("onclick", "resetCard()");
  resetCardEl.innerHTML = "ResetCard";
  resetCard();
  chanceEl.innerHTML = "5";
  AmountEl.innerHTML = "";
}

function resetCard() {
  img1.src = "./Images/card-back.png";
  img2.src = "./Images/card-back.png";
  img3.src = "./Images/card-back.png";
  h1.innerHTML = "Pick a card!";
  h1.style.color = "blue";
  isFlipped = false;
  resetCardEl.setAttribute("onclick", "resetCard()");
  resetCardEl.innerHTML = "ResetCard";
}

function Deposit(Element) {
  if (Input.value < 1000) {
    h1.innerHTML = "Your Deposit Amount Less Then $1000 !";
    h1.style.color = "red";
  } else if (Input.value > 0 && Input.value !== String) {
    AmountEl.innerHTML = Input.value;
    h1.innerHTML = "Pick a card!";
    h1.style.color = "blue";
    balance = Number(AmountEl.innerHTML);

    Element.innerHTML = "Reset All";
    Element.setAttribute("OnClick", "Reload(this)");
    Input.value = "";
    let hundredBtn = document.createElement("button");
    let fiveHundredBtn = document.createElement("button");
    let thousandBtn = document.createElement("button");

    let hundredBtnTextNode = document.createTextNode("100");
    let fiveHundredBtnTextNode = document.createTextNode("500");
    let thousandBtnTextNode = document.createTextNode("1000");

    hundredBtn.appendChild(hundredBtnTextNode);
    fiveHundredBtn.appendChild(fiveHundredBtnTextNode);
    thousandBtn.appendChild(thousandBtnTextNode);

    hundredBtn.setAttribute("class", "add_dep_btn");
    fiveHundredBtn.setAttribute("class", "add_dep_btn");
    thousandBtn.setAttribute("class", "add_dep_btn");

    hundredBtn.setAttribute("onClick", "bitAmountBtn(100)");
    fiveHundredBtn.setAttribute("onClick", "bitAmountBtn(500)");
    thousandBtn.setAttribute("onClick", "bitAmountBtn(1000)");

    // hundredBtn.setAttribute("id", "hello");

    buttonAddEl.appendChild(hundredBtn);
    buttonAddEl.appendChild(fiveHundredBtn);
    buttonAddEl.appendChild(thousandBtn);
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
  chanceEl.innerHTML = "5";
  buttonAddEl.removeChild(buttonAddEl.childNodes[7]);
  buttonAddEl.removeChild(buttonAddEl.childNodes[6]);
  buttonAddEl.removeChild(buttonAddEl.childNodes[5]);
}

function bitAmountBtn(num) {
  Input.value = num;
}
