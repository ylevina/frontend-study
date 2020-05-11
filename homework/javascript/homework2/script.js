let n, m;

do {
    n = +prompt("Enter a number:");
    if (!n) break;
} while (!Number.isInteger(n));

if (n) {
    console.log("Numbers multiple of five:");
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 5 === 0) {
            console.log(`${i}`);
            count++;
        }
    }
    if (!count) console.log("Sorry, no numbers");
}

do {
    m = +prompt("Enter a number (from):");
    if (!m) break;
    n = +prompt("Enter a number (to):");
    if (!n) break;
} while (!Number.isInteger(m) && !Number.isInteger(n));

if (m && n && n > m) {
    console.log("Prime numbers:");
    for (let i = m; i <= n; i++) {
        if (isPrime(i)) console.log(`${i}`);
    }
} else{
        console.log("Wrong range for prime numbers search!");
}

function isPrime(num) {
    if (num === 1) {
        return false;
    } else if (num <= 3) {
        return true;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;             
        }

        return true;
    }
}