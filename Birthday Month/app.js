dlet birthmonth = ["jan", "feb", "mar", "apr", "may"];

let input = prompt("Enter Your Birthmonth");

input = input.toLowerCase();
input = input.slice(0, 3);
console.log(input);

let condition = birthmonth.indexOf(input);

if (condition > -1) {
  console.log("You are eligible"); // jan - may are allow hai
} else {
// you are not eligible
  console.log("You are not eligible");
}
