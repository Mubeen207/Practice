window.onload = function () {
  let Wrong = document.getElementById("otp");
  let otpInput = document.getElementById("otpInput");

  let otpholder = "";
  let otp_message = document.getElementById("otp-message");

  function sentotp() {
    generateOtp();

    // clearInterval(otpInterval);

    otpInterval = setInterval(generateOtp, 10000);
  }

  function generateOtp() {
    let otp = "";
    for (let i = 0; i < 6; i++) {
      otp += Math.floor(Math.random() * 10);
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
      Wrong.style.color = "green";
      otpholder = "";
    } else {
      Wrong.innerHTML = "OTP is wrong, Try Again";
      Wrong.style.color = "red";
    }
    otpInput.value = "";
  }

  // make functions global so HTML buttons can use them
  window.sentotp = sentotp;
  window.checkotp = checkotp;
};
