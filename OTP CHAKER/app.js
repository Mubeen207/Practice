let Wrong = document.getElementById("otp");
let timer = document.getElementById("timer");
let otpInput = document.getElementById("otpInput");
let second = 60;
let otpholder = "";
let otp_message = document.getElementById("otp-message");
let otpInterval; // Declare otpInterval globally

// function sentotp() {
//   generateOtp();

//   // clearInterval(otpInterval);

//   otpInterval = setInterval(generateOtp, 10000);
// }

// function generateOtp() {
//   let otp = "";
//   for (let i = 0; i < 6; i++) {
//     otp += Math.floor(Math.random() * 10);
//   }
//   otp_message.innerHTML = "Your OTP is " + otp;
//   otpholder = otp;
// }
function sentotp() {
  closetimer();
  let otp = "";
  for (let i = 0; i < 6; i++) {
    otp = otp + Math.floor(Math.random() * 10);
  }
  otp_message.innerHTML = "Your OTP is " + otp;
  otpholder = otp;

  otpInterval = setInterval(function time() {
    timer.innerHTML = "00 : " + second;
    if (second > 0) {
      second--;
    } else {
      otpholder = "";
      otp_message.innerHTML = "Your OTP is " + "Expired";
      clearInterval(otpInterval);
      second = 60;
    }
  }, 1000);
}
function closetimer() {
  clearInterval(otpInterval);
  second = 60;
}
function checkotp() {
  if (otpholder === "") {
    Wrong.innerHTML = "Please Send OTP First";
  } else if (otpInput.value === "") {
    Wrong.innerHTML = "Please Enter OTP First";
  } else if (otpInput.value === otpholder) {
    Wrong.innerHTML = "Welcome";
    Wrong.style.color = "green";
    otpholder = "";
  } else {
    Wrong.innerHTML = "OTP is wrong, Try Again";
    Wrong.style.color = "red";
  }
  otpInput.value = "";
}
