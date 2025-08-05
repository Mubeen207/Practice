let userEmailEl = document.getElementById("email");
let userPasswordEl = document.getElementById("password");
let messageEl = document.getElementById("message");
let users = [];

function register () {
    let userInputMail = userEmailEl.value;
    let userInputPass = userPasswordEl.value;
    let user = {
        email: userInputMail,
        password: userInputPass
    }
    users.push(user);
    console.log(userInputMail, userInputPass);
}

function login () {
    let userInputMail = userEmailEl.value;
    let userInputPass = userPasswordEl.value;
    let message = "";
    for (let i = 0; i < users.length; i++) {
        let userObj = users[i];
        if (userInputMail === userObj.email && userInputPass === userObj.password) {
            message = "User authenticated!";
            break;
        }
        else if (userInputMail === userObj.email && userInputPass !== userObj.password) {
            message = "password incorrect!";
            break;
        }
        else if (userInputMail !== userObj.email || userInputPass !== userObj.password) {
            message = "user does not exist.";
        }
    }
    messageEl.innerHTML = message;
}