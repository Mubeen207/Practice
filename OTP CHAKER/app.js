let Wrong = document.getElementById("otp");
let timer = document.getElementById("timer");
let otpInput = document.getElementById("otpInput");
let otp_message = document.getElementById("otp-message");
let second = 59;
let otpholder = "";
let otpInterval;
let displaySecond;

function sentotp() {
  otpInput.style.border = "0.5px solid black";

  closetimer();
  let otp = "";
  for (let i = 0; i < 6; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  otp_message.innerHTML = "Your OTP is " + otp;
  otpholder = otp;

  timer.innerHTML = "01 : " + "00";
  otpInterval = setInterval(function () {
    if (second < 10) {
      displaySecond = "0" + second;
    } else {
      displaySecond = second;
    }

    timer.innerHTML = "00 : " + displaySecond;

    if (second > 0) {
      second--;
    } else {
      otpholder = "";
      otp_message.innerHTML = "Your OTP is Expired";
      clearInterval(otpInterval);
      timer.innerHTML = "00 : 00";
      otpInput.style.border = "0.5px solid black";
    }
  }, 1000);
}

function closetimer() {
  clearInterval(otpInterval);
  second = 59;
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
    otpInput.style.border = "2px solid green";

    closetimer();
    timer.innerHTML = "00 : 00";
    otp_message.innerHTML = "";
  } else {
    Wrong.innerHTML = "OTP is wrong, Try Again";
    Wrong.style.color = "red";
    if (otpInput.value !== otpholder) {
      otpInput.style.border = "2px solid red";
    }
  }
  otpInput.value = "";
}
