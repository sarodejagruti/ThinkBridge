# 📘 JavaScript Basics – Types & Control Flow  

This document contains exercises with solutions for variables, strings, arrays, loops, and conditionals in JavaScript.  
Each section has a code snippet, explanation, and output.  

```js
// Variables in js
// let → block scoped variable
let name1 = "jagruti";
console.log(name1);

// Concatenating string using +
let firstName1 = "Jagruti";
let lastName1 = "Sarode";
let fullName1 = firstName1 + " " + lastName1;
console.log(fullName1);

// toUpperCase() → converts string to uppercase
console.log(firstName1.toUpperCase());

// toLowerCase() → converts string to lowercase
console.log(firstName1.toLowerCase());

// startsWith() → returns true if string starts with given text
console.log(firstName1.startsWith("Ja"));

// endsWith() → returns true if string ends with given text
console.log(firstName1.endsWith("ti"));

// trim() → removes whitespace from both sides
// trimStart() → removes from left
// trimEnd() → removes from right
let spaced = " hello i  ";
console.log(spaced.trim());       
console.log(spaced.trimStart());  
console.log(spaced.trimEnd());    

// Character access in string
// charAt() → character at position
// charCodeAt() → Unicode value
// at() → supports negative index
let text = "Hello";
console.log(text.charAt(1));    
console.log(text.charCodeAt(0)); 
console.log(text.at(-1));        

// Searching in strings
// indexOf() → first occurrence
// lastIndexOf() → last occurrence
// includes() → true/false if found
let str = "banana";
console.log(str.indexOf("a"));     
console.log(str.lastIndexOf("a"));  
console.log(str.includes("na")); 

// Substrings in strings
// slice(start, end)
// substring(start, end)
// substr(start, length) → (deprecated)
let lang = "JavaScript";
console.log(lang.slice(0, 4));      
console.log(lang.substring(4, 6)); 
console.log(lang.substr(7, 3));     

// Replace and modifying strings
// replace() → first match
// replaceAll() → all matches
// repeat(n) → repeat string
// padStart() → add padding at start
// padEnd() → add padding at end
let sentence = "I like cats";
console.log(sentence.replace("cats", "dogs"));   
console.log("banana".replaceAll("a", "o"));      
console.log("ha".repeat(3));                     
console.log("5".padStart(3, "0"));               
console.log("5".padEnd(3, "0"));                 

// split() → splits string into array
let items = "j,a,g,r,u,t,i";
console.log(items.split(","));

// Conversions 
// toString() → number to string
// valueOf() → primitive value
let num1 = 123;
console.log(num1.toString());                 
console.log(new String("hello").valueOf());  

// Template literals using backticks (``)
let firstName = "Jagruti";
let lastName = "Sarode";
let fullName = `My full name is ${firstName} ${lastName}`;
console.log(fullName);

// length property of string
let message = "Hi from " + firstName + " " + lastName;
console.log("Length of the string is ", message.length);

// Arrays in JS
let numbers = [10,20,30,40,60,85];
console.log("The 2nd element of array is:", numbers[1]);

// push() → add element at end
let fruits = ["Apple","Mango","Grapes","Banana"];
console.log("The 2nd element of array is:", fruits[1]);
fruits.push("Pineapple");
console.log("Updated array after pushing:", fruits);

// unshift() → add element at start
fruits.unshift("Raspberry");
console.log("Updated array after unshift:", fruits);

// pop() → remove last element
fruits.pop();
console.log("Updated array after pop:", fruits);

// shift() → remove first element
fruits.shift();
console.log("Updated array after shift:", fruits);

// Loops
// for loop
for (let i=1; i<=5; i++){
    console.log(i);
}

// printing an array using for loop
for(let a=0; a<fruits.length; a++){
    console.log(fruits[a]);
}

// for...of → prints values
for(let x of numbers){
    console.log(x);
}

// for...in → prints indexes
for(let x in numbers){
    console.log(x);
}

// Conditional statements
let num = 4;
if (num>0){
    console.log("Number is positive");
}
else if (num<0){
    console.log("Number is negative");
}
else {
    console.log("Number is Zero");
}

let age = 20;
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

jagruti
Jagruti Sarode
JAGRUTI
jagruti
true
false
hello i
hello i  
 hello i
e
72
o
1
5
true
Java
Sc
ipt
I like dogs
bonono
hahaha
005
500
["j","a","g","r","u","t","i"]
123
hello
My full name is Jagruti Sarode
Length of the string is 21
20
Mango
["Apple","Mango","Grapes","Banana","Pineapple"]
["Raspberry","Apple","Mango","Grapes","Banana","Pineapple"]
["Raspberry","Apple","Mango","Grapes","Banana"]
["Apple","Mango","Grapes","Banana"]
1
2
3
4
5
Apple
Mango
Grapes
Banana
10
20
30
40
60
85
0
1
2
3
4
5
Number is positive
Eligible to vote

