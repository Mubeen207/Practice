let Wrong = document.createElement("p");
let otpInput = document.getElementById("otpInput");

document.body.insertBefore(Wrong, otpInput);

let otpholder = "";
let otp_message = document.getElementById("otp-message");

function sentotp() {
  let otp = "";
  for (let i = 0; i < 6; i++) {
    otp = otp + Math.floor(Math.random() * 10);
  }
  otp_message.innerHTML = "Your OTP is " + otp;
  otpholder = otp;
}

function checkotp() {
  if (otpholder === "") {
    Wrong.innerHTML = "Please Send OTP First";
  } else if (otpInput.value === "") {
    Wrong.innerHTML = "Please Enter OTP First";
  } else if (otpInput.value === otpholder) {
    Wrong.innerHTML = "Welcome";
    otpholder = ""; // reset
  } else {
    Wrong.innerHTML = "OTP is wrong, Try Again";
  }

  otpInput.value = "";
}
