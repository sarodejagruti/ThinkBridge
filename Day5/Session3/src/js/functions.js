

console.log("=====Function declarations and Expression=====");

// 1. Function Declaration

function greet(name){
    return `Hello, ${name}."This is a function Declaration"`;
}
console.log(greet("Jagruti"));

// ================================================================================

// 2. Function Expression 
const Expression=function(name){
    return `Hello, ${name}. "This is fuction declaration is called function expression "`;
}
console.log(Expression("Janvi"));

// ========================================================================

// 3. Arrow Functions

const add =(a,b)=>{
    let sum=a+b;
    return sum;
}
console.log("Addition is:=" +add(2,5));

// ========================================================================

// 4. Named Function Expression

const factorial = function fact(n){
    return n<=1 ? 1:n*fact(n-1);
}
console.log("Factorial is ",factorial(5));

// ========================================================================

// 5. Default parameters and rest Parameters
function buildName(first = 'Janvi', last = 'Sarode') {
  return `${first} ${last}`;
}
console.log("This is a default parameters",buildName());
// Rest ...nums

console.log('buildName():', buildName());
function sumAll(...nums) {
  return nums.reduce((s, n) => s + n, 0);
}
console.log('sumAll(1,2,3,4):', sumAll(1,2,3,4));

// =========================================================================

// 6. Higher Order function and callback

function mapAndLog(arr,fn){
    return arr.map(fn);
}
console.log("doubled",mapAndLog([1,2,3,4],n=>n*2));

/// 7) Immediately Invoked Function Expression (IIFE)

(function() {
  console.log('IIFE ran');
})();

// 8) Hoisting examples (illustrative — don't uncomment the error lines)

console.log('Hoisting demonstration:');

// Declaration is hoisted (call before declaration works)

console.log('declaredBefore:', declaredBefore()); // works
function declaredBefore() { return 'I am hoisted'; }

// Expression is NOT hoisted the same way (this would throw if uncommented)

const exprBefore = function() { return 'I am not hoisted like declaration'; };

// 9) Block scope: var vs let/const

{
  let a = 'block-let';
  const b = 'block-const';
  var c = 'function-or-global-var';
}
try {
  console.log(a); // will throw ReferenceError
} catch (e) {
  console.log('a is not accessible outside block (let/const)');
}
try {
  console.log(b);
} catch (e) {
  console.log('b is not accessible outside block (let/const)');
}
console.log('c (var) is accessible outside block:', c);

// 10) Closure + loop scoping difference demonstration

console.log('closure with var vs let (setTimeout results may appear after script ends in Node)');
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log('var i =>', i), 10); // prints 3,3,3
}
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log('let j =>', j), 20); // prints 0,1,2
}