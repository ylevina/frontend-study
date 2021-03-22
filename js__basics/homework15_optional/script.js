let n;

do {
    n = +prompt("Enter a number:");
    if (!n) break;
} while (!Number.isInteger(n));

if (n) {
    console.log(`Factorial of ${n} = ${factorial(n)}`);
}

function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}    