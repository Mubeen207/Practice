let selectionEl = document.getElementById("selection");
let overs = 0;
let oversCounnt = 0;
let currentOvers = 0;
let score = 0;
let cheakBtnFlag = false;
let out = 0;
let target = 0;
function generate() {
  let t20Btn = document.createElement("button");
  let odiBtn = document.createElement("button");
  let t20BtnTextNods = document.createTextNode("T20");
  let odiBtnTextNods = document.createTextNode("ODI");

  t20Btn.appendChild(t20BtnTextNods);
  odiBtn.appendChild(odiBtnTextNods);

  t20Btn.setAttribute("onClick", "t20()");
  odiBtn.setAttribute("onClick", "odi()");

  selectionEl.appendChild(t20Btn);
  selectionEl.appendChild(odiBtn);
}
function t20() {
  selectionEl.removeChild(selectionEl.childNodes[0]);
  selectionEl.removeChild(selectionEl.childNodes[0]);
  let battingBtn = document.createElement("button");
  let bollingBtn = document.createElement("button");
  let battingBtnTextNods = document.createTextNode("Batting");
  let bollingBtnTextNods = document.createTextNode("Bolling");

  battingBtn.appendChild(battingBtnTextNods);
  bollingBtn.appendChild(bollingBtnTextNods);

  battingBtn.setAttribute("onClick", "batting()");
  bollingBtn.setAttribute("onClick", "bolling()");

  selectionEl.appendChild(battingBtn);
  selectionEl.appendChild(bollingBtn);

  overs = 20;
}
function odi() {
  selectionEl.removeChild(selectionEl.childNodes[0]);
  selectionEl.removeChild(selectionEl.childNodes[0]);

  let battingBtn = document.createElement("button");
  let bollingBtn = document.createElement("button");
  let battingBtnTextNods = document.createTextNode("Batting");
  let bollingBtnTextNods = document.createTextNode("Bolling");

  battingBtn.appendChild(battingBtnTextNods);
  bollingBtn.appendChild(bollingBtnTextNods);

  battingBtn.setAttribute("onClick", "batting()");
  bollingBtn.setAttribute("onClick", "bolling()");

  selectionEl.appendChild(battingBtn);
  selectionEl.appendChild(bollingBtn);
  overs = 50;
}

function batting() {
  selectionEl.removeChild(selectionEl.childNodes[0]);
  selectionEl.removeChild(selectionEl.childNodes[0]);

  let scoreingEl = document.createElement("h3");
  let oversCountEl = document.createElement("h3");
  let scoreEl = document.createElement("input");
  let oversEl = document.createElement("input");
  let cheakBtn = document.createElement("button");

  let cheakBtnTextNods = document.createTextNode("Cheak");

  scoreEl.setAttribute("placeholder", "Enter Current Score");
  scoreEl.setAttribute("type", "number");
  scoreEl.setAttribute("id", "score");

  oversEl.setAttribute("placeholder", "Enter Remaining Overs");
  oversEl.setAttribute("type", "number");
  oversEl.setAttribute("id", "overs");

  cheakBtn.appendChild(cheakBtnTextNods);
  cheakBtn.setAttribute("onClick", "cheak()");

  scoreingEl.setAttribute("id", "scoreing");
  oversCountEl.setAttribute("id", "oversCount");

  selectionEl.appendChild(scoreEl);
  selectionEl.appendChild(oversEl);
  selectionEl.appendChild(cheakBtn);
  selectionEl.appendChild(scoreingEl);
  selectionEl.appendChild(oversCountEl);
}
function bolling() {
  selectionEl.removeChild(selectionEl.childNodes[0]);
  selectionEl.removeChild(selectionEl.childNodes[0]);
  let scoreingEl = document.createElement("h3");
  let oversCountEl = document.createElement("h3");
  let scoreEl = document.createElement("input");
  let oversEl = document.createElement("input");
  let cheakBtn = document.createElement("button");

  let cheakBtnTextNods = document.createTextNode("Cheak");

  scoreEl.setAttribute("placeholder", "Enter Current Score");
  scoreEl.setAttribute("type", "number");
  scoreEl.setAttribute("id", "score");

  oversEl.setAttribute("placeholder", "Enter Remaining Overs");
  oversEl.setAttribute("type", "number");
  oversEl.setAttribute("id", "overs");

  cheakBtn.appendChild(cheakBtnTextNods);
  cheakBtn.setAttribute("onClick", "cheak()");

  scoreingEl.setAttribute("id", "scoreing");
  oversCountEl.setAttribute("id", "oversCount");
  selectionEl.appendChild(scoreEl);
  selectionEl.appendChild(oversEl);
  selectionEl.appendChild(cheakBtn);
  selectionEl.appendChild(scoreingEl);
  selectionEl.appendChild(oversCountEl);
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
    let cheakBtn = selectionEl.childNodes[2];
    cheakBtn.innerHTML = "Clear";
    cheakBtn.setAttribute("onClick", "finish()");
  }
}
function finish() {
  removing();
  let oneCreate = document.createElement("button");
  let twoCreate = document.createElement("button");
  let threeCreate = document.createElement("button");
  let fourCreate = document.createElement("button");
  let sixCreate = document.createElement("button");
  let wideCreate = document.createElement("button");
  let noBallCreate = document.createElement("button");
  let resultCreate = document.createElement("h3");
  let oneLessCreate = document.createElement("button");
  let fiveLessCreate = document.createElement("button");
  let outCreate = document.createElement("button");
  let targetCreate = document.createElement("input");
  let targetAddBtnCreate = document.createElement("button");
  let targetShowCreate = document.createElement("h3");

  let oneCreateText = document.createTextNode("1");
  let twoCreateText = document.createTextNode("2");
  let threeCreateText = document.createTextNode("3");
  let fourCreateText = document.createTextNode("4");
  let sixCreateText = document.createTextNode("6");
  let oneLessCreateText = document.createTextNode("-1");
  let fiveLessCreateText = document.createTextNode("-5");
  let wideCreateText = document.createTextNode("Wide");
  let noBallCreateText = document.createTextNode("No Ball");
  let outCreateText = document.createTextNode("OUT");
  let targetAddBtnCreateText = document.createTextNode("Target");

  oneCreate.setAttribute("onClick", "update(1)");
  twoCreate.setAttribute("onClick", "update(2)");
  threeCreate.setAttribute("onClick", "update(3)");
  fourCreate.setAttribute("onClick", "update(4)");
  sixCreate.setAttribute("onClick", "update(6)");
  wideCreate.setAttribute("onClick", "update('wide')");
  noBallCreate.setAttribute("onClick", "update('noball')");
  oneLessCreate.setAttribute("onClick", "update(-1)");
  fiveLessCreate.setAttribute("onClick", "update(-5)");
  outCreate.setAttribute("onClick", "update('out')");
  resultCreate.setAttribute("id", "show");
  targetCreate.setAttribute("id", "target");
  targetAddBtnCreate.setAttribute("onClick", "add()");
  targetShowCreate.setAttribute("id", "targetShow");

  oneCreate.appendChild(oneCreateText);
  twoCreate.appendChild(twoCreateText);
  threeCreate.appendChild(threeCreateText);
  fourCreate.appendChild(fourCreateText);
  sixCreate.appendChild(sixCreateText);
  wideCreate.appendChild(wideCreateText);
  noBallCreate.appendChild(noBallCreateText);
  oneLessCreate.appendChild(oneLessCreateText);
  fiveLessCreate.appendChild(fiveLessCreateText);
  outCreate.appendChild(outCreateText);
  targetAddBtnCreate.appendChild(targetAddBtnCreateText);

  selectionEl.appendChild(oneCreate);
  selectionEl.appendChild(twoCreate);
  selectionEl.appendChild(threeCreate);
  selectionEl.appendChild(fourCreate);
  selectionEl.appendChild(sixCreate);
  selectionEl.appendChild(wideCreate);
  selectionEl.appendChild(noBallCreate);
  selectionEl.appendChild(outCreate);
  selectionEl.appendChild(oneLessCreate);
  selectionEl.appendChild(fiveLessCreate);
  selectionEl.appendChild(resultCreate);
  selectionEl.appendChild(targetCreate);
  selectionEl.appendChild(targetAddBtnCreate);
  selectionEl.appendChild(targetShowCreate);
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
        (overs * 6) - (((oversCounnt * 6) + currentOvers) - 1)
      } Balls`;
    }
  } else {
    return;
  }
}
function add() {
  target = document.getElementById("target").value;
}
