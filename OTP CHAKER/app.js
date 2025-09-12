let otpholder = 0;
let otp_message = document.getElementById("otp-message");
function sentotp() {
  let num1 = Math.ceil(Math.random() * 6);
  let num2 = Math.ceil(Math.random() * 6);
  let num3 = Math.ceil(Math.random() * 6);
  let num4 = Math.ceil(Math.random() * 6);
  let num5 = Math.ceil(Math.random() * 6);
  let num6 = Math.ceil(Math.random() * 6);

  otp = num1.toString() + num2 + num3 + num4 + num5 + num6;
  otp_message.innerHTML = "Your OTP is " + otp;
  //   alert("Your OTP is " + otp);
  otpholder = otp;
}
function checkotp() {
  let otpInput = document.getElementById("otpInput");
  let Wrong = document.createElement("p");
  let body = document.body;

  if (otpInput.value !== "") {
    body.appendChild(Wrong);
    Wrong.innerHTML = "Please Sent OTP First";
  } else if (otpInput.value >= 0 && otpholder === 0) {
    body.appendChild(Wrong);
    Wrong.innerHTML = "Please Enter OTP First";
  } else if (otpholder === otpInput.value) {
    body.appendChild(Wrong);
    Wrong.innerHTML = "Welcome";
    otpholder = 0;
  } else {
    body.appendChild(Wrong);
    Wrong.innerHTML = "Otp is wrong Try Again";
  }
  otpInput.value = "";
}
