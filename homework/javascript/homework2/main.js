let userNumber = prompt("Enter a number:");
while(!Number.isInteger(+userNumber)) {
    userNumber = prompt("Enter a number:");
    if (userNumber === null) break;        
}

if(userNumber){
    console.log("Numbers multiple of five:");
    if(userNumber > 4) {
        for (let i = 1; i <= userNumber; i++) {
            if (i % 5 === 0) {
                console.log(`${i}`);
            }
        }
    } else {
        console.log("Sorry, no numbers");
    }      
}