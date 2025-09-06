function Multiplication(a, b) {
    let result = a * b; 
    return result;
}

let multi = Multiplication(8, 4);
console.log(multi);


// Factorial function
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;   // 🔴 <-- Set a breakpoint here in DevTools
    }
    return result;
}

let num = 5;


let fact = factorial(num);
console.log("Factorial of", num, "is:", fact);


