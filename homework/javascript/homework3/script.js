let n, m, mathOperation;

do {
    n = +prompt("Enter first number:");
    if (!n) break;
    m = +prompt("Enter second number:");
    if (!m) break;
    mathOperation = prompt("Enter operation(+, -, /, *):");
    if (!mathOperation) break;
} while (!Number(n) && !Number(m));

if (n && m && mathOperation) {
    console.log(doMath(n, m, mathOperation));
}

function doMath(n, m, mathOperation) {
    switch (mathOperation) {
        case "+": return n + m;
        case "-": return n - m;
        case "*": return n * m;
        case "/": return n / m;
        default: return "No such operation!";
    }
}