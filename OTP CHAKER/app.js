let Wrong = document.getElementById("otp");
let timer = document.getElementById("timer");
let otpInput = document.getElementById("otpInput");
let second = 60;
let otpholder = "";
let otp_message = document.getElementById("otp-message");
let otpInterval;

function sentotp() {
  closetimer();
  let otp = "";
  for (let i = 0; i < 6; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  otp_message.innerHTML = "Your OTP is " + otp;
  otpholder = otp;

  otpInterval = setInterval(function () {
    timer.innerHTML = "00 : " + (second < 10 ? "0" + second : second);
    if (second > 0) {
      second--;
    } else {
      otpholder = "";
      otp_message.innerHTML = "Your OTP is Expired";
      clearInterval(otpInterval);
      timer.innerHTML = "00 : 00";
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
    Wrong.style.color = "black";
  } else if (otpInput.value === "") {
    Wrong.innerHTML = "Please Enter OTP First";
    Wrong.style.color = "black";
  } else if (otpInput.value === otpholder) {
    Wrong.innerHTML = "Welcome";
    Wrong.style.color = "green";
    otpholder = "";
    closetimer();
    timer.innerHTML = "00 : 00";
  } else {
    Wrong.innerHTML = "OTP is wrong, Try Again";
    Wrong.style.color = "red";
  }
  otpInput.value = "";
}
