let para =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

let replace = "My name is Mubeen";

// for (let i = 0; i < para.length; i++) {
//   let founded = para.slice(i, i + 18);
//   if (founded === "fact that a reader") {
//     para = para.slice(0, i) + replace + para.slice(i + 18);
//   }
// }
// console.log(para);

let text = para.replace(/fact that a reader/g, replace);

console.log(text);
