let selectionEl = document.getElementById("selection");
let flag = true;
let balls = "";
let ball,
  over,
  oversCounnt,
  currentOvers,
  score,
  plus,
  targetEl = 0;

function generate() {
  let btns = `
  <button onClick="select('t20')">T20</button>
<button onClick="select('odi')">ODI</button>
  `;
  selectionEl.innerHTML = btns;
}

function select(el) {
  let items = `
 <input type="number" id="score" placeholder="Enter Current Score" />
<select name="over" id="over"></select>
<select name="over" id="ball"></select>
<button onclick="cheak()">Cheak</button>
<h3 id="scoreing"></h3>
<h3 id="oversCount"></h3>`;
  selectionEl.innerHTML = items;

  for (let i = 0; i <= 5; i++) {
    document.getElementById(
      "ball"
    ).innerHTML += `<option value="${i}">${i}</option>`;
  }
  if (el === "odi") {
    localStorage.setItem("overs", 50);
    for (let i = 0; i < 50; i++) {
      document.getElementById(
        "over"
      ).innerHTML += `<option value="${i}">${i}</option>`;
    }
  } else {
    localStorage.setItem("overs", 20);
    for (let i = 0; i < 20; i++) {
      document.getElementById(
        "over"
      ).innerHTML += `<option value="${i}">${i}</option>`;
    }
  }
}

function cheak() {
  let overs = localStorage.getItem("overs");
  let scoreingPrint = document.getElementById("scoreing");
  let oversCountPrint = document.getElementById("oversCount");

  score = Number(document.getElementById("score").value);
  over = Number(document.getElementById("over").value);
  ball = Number(document.getElementById("ball").value);
  currentOvers = Number(`${over}.${ball}`);

  if (score >= 0) {
    if (currentOvers >= 0 && currentOvers <= overs) {
      // setTimeout(function(){
      if (currentOvers >= 0) {
        oversCounnt = over;
        currentOvers = ball;
      }
      finish();
      // }, 2000)
      scoreingPrint.innerHTML = "Redirecting.....";
      scoreingPrint.style.color = "Green";
    } else if (currentOvers >= overs) {
      oversCountPrint.innerHTML = `Your overs is Greater Then ${overs}`;
    } else {
      oversCountPrint.innerHTML = "Your overs is Less Then 0";
    }
  } else {
    scoreingPrint.innerHTML = "Your Score is Less Then 0";
  }
}

function finish() {
  let items = `
  <button onclick="update(0)">Dot</button>
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
<h3 id="runRateShow"></h3>
<h3 id="need"></h3>
<input type="text" id="target">
<button onclick="target()">Target</button>
  `;
  selectionEl.innerHTML = items;
}

function update(num) {
  let overs = localStorage.getItem("overs");
  let out = 0;
  let result = document.getElementById("show");
  let runRateShowEl = document.getElementById("runRateShow");
  let needEl = document.getElementById("need");
let condition = Number(`${oversCounnt}.${currentOvers+1}`);

  if(breaking(condition)){
    

  {
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
        currentOvers++;
        result.innerHTML = `${score} - ${out} (${oversCounnt} - ${currentOvers})`;
      } else {
        if (currentOvers < 5) {
          currentOvers++;
          score += num;
        } else {
          oversCounnt++;
          currentOvers = 0;
          score += num;
        }
        result.innerHTML = `${score} - ${out} (${oversCounnt} - ${currentOvers})`;
        plus = Number(`${oversCounnt}.${currentOvers}`);
        if (plus <= overs) {
          if (flag) {
            runRateShowEl.innerHTML = `CRR ${(score / plus).toFixed(2)}`;
          } else {
            runRateShowEl.innerHTML = `CRR ${(score / plus).toFixed(2)} RRR ${(
              (targetEl - score) /
              (overs - plus)
            ).toFixed(2)}`;
            balls = overs * 6 - (oversCounnt * 6 + currentOvers);
            needEl.innerHTML = `${targetEl - score} Need Off ${balls} Balls`;
            if(balls === 0){
              runRateShowEl.innerHTML = `CRR ${(score / plus).toFixed(2)} RRR 0`;
            }
          }
        }
      }
    } else {
      return;
    }
  }
}}


function breaking(condition){
          if(!flag){
            if(score >= targetEl || condition > localStorage.getItem("overs")*6){
              return false;
            }
          } else {
            if(condition >= localStorage.getItem("overs")*6){
              return false;
             
            }
            console.log(condition);
            
            return true;
          }
}
function target() {
  let runRateShowEl = document.getElementById("runRateShow");
  let overs = localStorage.getItem("overs");
  targetEl = document.getElementById("target").value;
  if (plus <= overs) {
    if (score === 0 || oversCounnt === 0 || currentOvers === 0) {
      runRateShowEl.innerHTML = `CRR 0.00 RRR ${(
        (targetEl - score) /
        (overs - plus)
      ).toFixed(2)}`;
    } else {
      runRateShowEl.innerHTML = `CRR ${(score / plus).toFixed(2)} RRR ${(
        (targetEl - score) /
        (overs - plus)
      ).toFixed(2)}`;
    }
  }
  flag = false;
}
