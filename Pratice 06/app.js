let bodyEl = document.childNodes[1].childNodes[2];
let div = document.createElement("div");
let img = document.createElement("img");
let h3 = document.createElement("h3");
let p = document.createElement("p");
let p1 = document.createElement("p1");
let p2 = document.createElement("p2");
let p3 = document.createElement("p3");
let text_h3 = document.createTextNode("Rs 16.50 Lacs");
let text_p = document.createTextNode("changhan kaghan for sale and....");
let text_p1 = document.createTextNode("25000 KM  .  2022");
let text_p2 = document.createTextNode(
  "Sheikhupora Road, Lahore, Punjab, Pakistan"
);
let text_p3 = document.createTextNode("5 Days Ago");

bodyEl.insertBefore(div, bodyEl.firstChild);

div.style.border = "1px solid black";
div.style.display = "flex";
div.style.width = "313px";
div.style.height = "315px";
div.style.flexDirection = "column";
div.style.backgroundColor = "#f2f4f5";
div.style.borderRadius = "9px";
div.style.border = "1px solid black";

div.appendChild(img);
img.src = "./Images/car_image.avif";
img.style.width = "313px";
img.style.height = "170px";

h3.appendChild(text_h3);
div.appendChild(h3);

h3.style.margin = "5px";
h3.style.fontSize = "15px";

p.appendChild(text_p);
div.appendChild(p);

p.style.margin = "5px";
p.style.fontSize = "13px";
p.style.fontWeight = "lighter";

p1.appendChild(text_p1);
div.appendChild(p1);

p1.style.margin = "5px";
p1.style.fontSize = "13px";
p1.style.fontWeight = "bold";

p2.appendChild(text_p2);
div.appendChild(p2);

p2.style.margin = "5px";
p2.style.fontSize = "13px";

p3.appendChild(text_p3);
div.appendChild(p3);

p3.style.margin = "5px";
p3.style.fontSize = "13px";


