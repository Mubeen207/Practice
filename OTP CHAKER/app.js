let Wrong = document.createElement("p");
document.body.appendChild(Wrong);

let otpholder = "";
let otp_message = document.getElementById("otp-message");

function sentotp() {
  let otp = "";
  for (let i = 0; i < 6; i++) {
    otp += Math.floor(Math.random() * 10); // 0–9
  }
  otp_message.innerHTML = "Your OTP is " + otp;
  otpholder = otp; // string rakha
}

function checkotp() {
  let otpInput = document.getElementById("otpInput");

  if (otpholder === "") {
    Wrong.innerHTML = "Please Send OTP First";
  } else if (otpInput.value === "") {
    Wrong.innerHTML = "Please Enter OTP First";
  } else if (otpInput.value === otpholder) {
    Wrong.innerHTML = "Welcome";
    otpholder = ""; // reset OTP after success
  } else {
    Wrong.innerHTML = "OTP is wrong, Try Again";
  }

  otpInput.value = "";
}
