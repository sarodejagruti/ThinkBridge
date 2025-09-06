
// Variables in js
let name1="jagruti";
console.log(name1)

//Concating string
let firstName1 = "Jagruti";
let lastName1 = "Sarode";
let fullName1 = firstName1 + " " + lastName1;
console.log(fullName1);

// toUppercase in string
console.log(firstName1.toUpperCase());

// toLowercase in string
fName="JAGRUTI SARODE";
console.log(firstName1.toLowerCase());

//  startswith in string return true if it found the text start with the string given in " "  otherwise false
fName="JAGRUTI SARODE";
console.log(firstName1.startsWith("Ja"));


// endswith in string return true if found the text ends with the string given in " " str otherwise false
fName="JAGRUTI SARODE";
console.log(firstName1.endsWith("Ti"));
console.log(firstName1.endsWith("ti"));

// trim() Removes whitespace from both sides.
// trimStart() / trimLeft() → Removes leading spaces.
// trimEnd() / trimRight() → Removes trailing spaces.
let spaced = " hello i  ";
console.log(spaced.trim());       
console.log(spaced.trimStart());  
console.log(spaced.trimEnd());    

// Character in the string
let text = "Hello";
console.log(text.charAt(1));    
console.log(text.charCodeAt(0)); 
console.log(text.at(-1));        

// Searching the characters or strings in given strings
let str = "banana";
console.log(str.indexOf("a"));     
console.log(str.lastIndexOf("a"));  
console.log(str.includes("na")); 

//Substrings in strings
let lang = "JavaScript";
console.log(lang.slice(0, 4));      
console.log(lang.substring(4, 6)); 
console.log(lang.substr(7,9));     

// Replace and modifying in string
let sentence = "I like cats";
console.log(sentence.replace("cats", "dogs"));   
console.log("banana".replaceAll("a", "o"));      
console.log("ha".repeat(3));                     
console.log("5".padStart(3, "0"));               
console.log("5".padEnd(3, "0"));                 

// Split
let items = "j,a,g,r,u,t,i";
console.log(items.split(","));

// Conversions 
let num1 = 123;
console.log(num1.toString());                 // "123"
console.log(new String("hello").valueOf());  // "hello"


//Using template literals instring concatenation
let firstName="Jagruti";
let lastName="Sarode";
let fullName=`My full name is ${firstName} ${lastName}`;
console.log(fullName);

// To find the Length of the string
let message ="Hi from"+firstName+" "+lastName;
console.log("Length of the string is ",message.length);

// Arrays to declare an array and print a element of it 
let numbers=[10,20,30,40,60,85];
console.log("The 2nd element of array is :=",numbers[1]);

// Pushing or adding an new element to an array
let fruits=["Apple","Mango","Grapes","Banana"];
console.log("The 2nd element of array is :=",fruits[1]);
fruits.push("Pineapple");
console.log("Updated array after pushing is:= "+fruits);

//adding the elements in first position in an array
fruits.unshift("Raspberry");
console.log("Updated array after unshift is:= "+fruits);

// Removing the elements from an array
fruits.pop();
console.log("Updated array after poping is:= "+fruits);

//Removing the elements for first in an array
fruits.shift();
console.log("Updated array after shift is:= "+fruits);


// Loops in js
for (let i=1;i<=5;i++){
    console.log(i);
}

// Printing an array using for loop
for(let a=0;a<fruits.length;a++){
    console.log(fruits[a]);
}

// for of here it prints elements in the array

for(let x of numbers){
    console.log(x);
}

// for in here it prints index of the arrays


for(let x in numbers){
    console.log(x);
}

// Conditional statements in js

let num = 4;
if (num>0){
    console.log("Number is positive");
}
else if (num<0){
    console.log("Number is -ve");
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

