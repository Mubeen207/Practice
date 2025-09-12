let otpholder = 0;
let otp_message = document.getElementById("otp-message");
function sentotp() {
  let otp = "";
  for (let i = 0; i < 6; i++) {
    otp = otp + Math.ceil(Math.random() * 9);
  }
  otp_message.innerHTML = "Your OTP is " + otp;
  //   alert("Your OTP is " + otp);
  otpholder = otp;
}
function checkotp() {
  let otpInput = document.getElementById("otpInput");
  let Wrong = document.createElement("p");
  let body = document.body;

  if (otpInput.value > 0 && otpholder <= 0) {
    body.appendChild(Wrong);
    Wrong.innerHTML = "Please Sent OTP First";
  } else if (otpInput !== "" && otpholder <= 0) {
    body.appendChild(Wrong);
    Wrong.innerHTML = "Please Enter OTP First";
  } else if (otpInput.value >= 0 && otpholder === 0) {
    body.appendChild(Wrong);
    Wrong.innerHTML = "Please Sent OTP First";
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
