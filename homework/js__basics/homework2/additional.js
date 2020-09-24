let numberFrom = prompt("Enter a number 'from':");
let numberTo = prompt("Enter a number 'to':");
while(!Number.isInteger(+numberFrom) && !Number.isInteger(+numberTo)) {
    numberFrom = prompt("Enter a number:");
    if (numberFrom === null) break;     
    numberTo = prompt("Enter a number:");
    if (numberTo === null) break;  
}

if (numberFrom && numberTo && numberTo > numberFrom) {
    console.log("Prime numbers:");
    for (let i = numberFrom; i <= numberTo; i++) {
        if (isPrime(i)) console.log(`${i}`);
    }
} else{
        console.log("Wrong range for prime numbers search!");
}

function isPrime(num) {
    if (num === 1) {
        return false;
    } else if (num > 3) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;            
        }
        return true;
    } else {
        return true;
    }
}