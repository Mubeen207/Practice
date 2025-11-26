let selectionEl = document.getElementById("selection");
let overs = 0;
let oversCounnt = 0;
let currentOvers = 0;
let score = 0;
let cheakBtnFlag = false;
let out = 0;
let target = 0;
function generate() {
  let btns = `
  <button onClick="t20()">T20</button>
<button onClick="odi()">ODI</button>
  `;
  selectionEl.innerHTML = btns;
}
function t20() {
  selectionEl.removeChild(selectionEl.childNodes[1]);
  selectionEl.removeChild(selectionEl.childNodes[2]);
  let btns = `
  <button onClick="batting()">Batting</button>
  <button onClick="bolling()">Bolling</button>
  `;
  selectionEl.innerHTML = btns;
  overs = 20;
}
function odi() {
  selectionEl.removeChild(selectionEl.childNodes[1]);
  selectionEl.removeChild(selectionEl.childNodes[2]);
  let btns = `
  <button onClick="batting()">Batting</button>
  <button onClick="bolling()">Bolling</button>
  `;
  selectionEl.innerHTML = btns;
  overs = 50;
}

function batting() {
  selectionEl.removeChild(selectionEl.childNodes[1]);
  selectionEl.removeChild(selectionEl.childNodes[2]);
  let items = `
 <input type="number" id="score" placeholder="Enter Current Score" />
<input type="number" id="overs" placeholder="Enter Remaining Overs" />
<button onclick="cheak()">Cheak</button>
<h3 id="scoreing"></h3>
<h3 id="oversCount"></h3>`;
  selectionEl.innerHTML = items;
}
function bolling() {
  selectionEl.removeChild(selectionEl.childNodes[1]);
  selectionEl.removeChild(selectionEl.childNodes[2]);
  let items = `
 <input type="number" id="score" placeholder="Enter Current Score" />
<input type="number" id="overs" placeholder="Enter Remaining Overs" />
<button onclick="cheak()">Cheak</button>
<h3 id="scoreing"></h3>
<h3 id="oversCount"></h3>`;
  selectionEl.innerHTML = items;
}

function cheak() {
  let scoreingEl = document.getElementById("scoreing");
  let oversCountEl = document.getElementById("oversCount");

  score = Number(document.getElementById("score").value);
  currentOvers = Number(document.getElementById("overs").value);

  if (score >= 0) {
    scoreingEl.innerHTML = score;
    cheakBtnFlag = true;
  } else {
    scoreingEl.innerHTML = "Your Score is Less Then 0";
    cheakBtnFlag = false;
  }
  if (currentOvers >= 0 && currentOvers <= overs) {
    oversCountEl.innerHTML = currentOvers;
    cheakBtnFlag = true;
  } else if (currentOvers >= overs) {
    oversCountEl.innerHTML = `Your overs is Greater Then ${overs}`;
    cheakBtnFlag = false;
  } else {
    oversCountEl.innerHTML = "Your overs is Less Then 0";
    cheakBtnFlag = false;
  }
  if (cheakBtnFlag) {
    let cheakBtn = selectionEl.childNodes[5];
    cheakBtn.innerHTML = "Clear";
    cheakBtn.setAttribute("onClick", "finish()");
  }
}
function finish() {
  removing();
  let items = `
  <button onclick="update(1)">1</button>
<button onclick="update(2)">2</button>
<button onclick="update(3)">3</button>
<button onclick="update(4)">4</button>
<button onclick="update(6)">6</button>
<button onclick="update('wide')">Wide</button>
<button onclick="update('noball')">No Ball</button>
<button onclick="update('out')">OUT</button>
<button onclick="update('-1')">-1</button>
<button onclick="update('-5')">-5</button>
<h3 id="show"></h3>
<input type="text" id="target">
<button onclick="add()">Target</button>
<h3 id="targetShow"></h3>
  `;
  selectionEl.innerHTML = items;
}
function removing() {
  do {
    selectionEl.removeChild(selectionEl.childNodes[0]);
    if (selectionEl.childNodes.length === 0) {
      break;
    }
  } while (selectionEl.childNodes[0] !== "");
}

function update(num) {
  let result = document.getElementById("show");
  let targetShowEl = document.getElementById("targetShow");
  if (out < 10) {
    if (num == -1) {
      score--;
      result.innerHTML = `${score} - ${out} (${oversCounnt} - ${currentOvers})`;
    } else if (num == -5) {
      score -= 5;
      result.innerHTML = `${score} - ${out} (${oversCounnt} - ${currentOvers})`;
    } else if (num == "wide") {
      score++;
      result.innerHTML = `${score} - ${out} (${oversCounnt} - ${currentOvers})`;
    } else if (num == "noball") {
      score++;
      result.innerHTML = `${score} - ${out} (${oversCounnt} - ${currentOvers})`;
    } else if (num == "out") {
      out++;
      result.innerHTML = `${score} - ${out} (${oversCounnt} - ${currentOvers})`;
    } else {
      if (currentOvers < 6) {
        currentOvers++;
        score += num;
      } else {
        if (num !== "wide") {
          oversCounnt++;
          currentOvers = 1;
          score += num;
        }
      }
      result.innerHTML = `${score} - ${out} (${oversCounnt} - ${currentOvers})`;
      targetShowEl.innerHTML = `${target - score} need of ${
        overs * 6 - (oversCounnt * 6 + currentOvers - 1)
      } Balls`;
    }
  } else {
    return;
  }
}
function add() {
  target = document.getElementById("target").value;
}
