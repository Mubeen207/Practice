let selectionEl = document.getElementById("selection");
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

  selectionEl.appendChild(scoreEl);
  selectionEl.appendChild(oversEl);
  selectionEl.appendChild(cheakBtn);
}
function odi() {
  selectionEl.removeChild(selectionEl.childNodes[0]);
  selectionEl.removeChild(selectionEl.childNodes[0]);
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

  selectionEl.appendChild(scoreEl);
  selectionEl.appendChild(oversEl);
  selectionEl.appendChild(cheakBtn);
}
function cheak() {
      
}
