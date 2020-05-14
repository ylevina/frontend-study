const f0 = 0;
const f1 = 1;
let n;

do {
    n = +prompt("Enter number of the position in the sequence:");
    if (!n) break;
} while (!Number.isInteger(n));

if (!isNaN(n)) {
    console.log(`${fibonacci(f0, f1, n)}`);
}

function fibonacci(first, second, n) {
    if (n === 0) {
        return first;
    } else if (n === -1 || n === 1) {
        return second;
    } else if (n === -2 || n === 2) { 
        return (first + second) * Math.sign(n)**(n + 1);
    }

    n = Math.sign(n) === 1 ? --n : ++n;
    return fibonacci(second, first + second, n); 
}