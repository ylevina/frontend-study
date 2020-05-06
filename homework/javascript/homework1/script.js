let userName = prompt("Please, enter your name", '');

if (Number(userName) || !userName) userName = prompt("Please, enter your name", userName);

let userAge = prompt("Please, enter your age", '');

if (!Number(userAge)) userAge = prompt("Please, enter your age", userAge);

if (userAge < 18) alert("You are not allowed to visit this website.");

else if (userAge >= 18 && userAge <= 22)
{
    const userAnswer = confirm("Are you sure you want to continue?");
    
    if (userAnswer) alert(`Welcome, ${userName}`);

    else alert("You are not allowed to visit this website.");
}

else if (userAge > 22) alert(`Welcome, ${userName}`);

else alert("You are not allowed to visit this website.");