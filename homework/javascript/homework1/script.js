const welcomeMessage = (userName) => `Welcome, ${userName}!`;
const NOT_ALLOWED_MESSAGE = "You are not allowed to visit this website.";
const ARE_YOU_SURE_MESSAGE = "Are you sure you want to continue?";

let userName;
let userAge;

do {
    userName = prompt("Please, enter your name", userName);
    if (userName === null) break;
    userAge = prompt("Please, enter your age", userAge);
    if (userAge === null) break;
} while (!userName || Number(userName) || !Number(userAge));

if (userName && userAge) {
    if (userAge < 18) {
        alert(NOT_ALLOWED_MESSAGE);
    } else if (userAge <= 22) {
        if (confirm(ARE_YOU_SURE_MESSAGE)) alert(welcomeMessage(userName));

        else alert(NOT_ALLOWED_MESSAGE);
    }
    else {
        alert(welcomeMessage(userName));
    }
} else {
    alert(NOT_ALLOWED_MESSAGE);
}