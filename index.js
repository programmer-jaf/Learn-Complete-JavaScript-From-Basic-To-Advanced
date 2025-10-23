/*
What is JavaScript ? ☑️

Ans: JavaScript is a programming language which is used to make web pages interactive and Dynamic

Is JavaScript Support Object Oriented Programming ? ☑️

Ans: Yes, JavaScript supports Object Oriented Programming

When JavaScript was created ? ☑️

Ans: JavaScript was created by Brendan Eich in 1995. JavaScript was originally called LiveScript.

What is the difference between JavaScript and Java ? ☑️

Ans: JavaScript is a programming language which is used to make web pages interactive and Dynamic. Java is a programming language which is used to develop desktop applications.
*/


/*
Basic Concept of JavaScript 👇👇👇
0. print in console
1. Variable
2. Data Types
3. Operators
4. Control Flow
5. Functions
6. Arrays
7. Objects
8. DOM Manipulation
*/

// print in console
console.log("👋 JavaScript");


/*

Variable 👇👇👇

What is a variable ? ☑️

Ans: A variable is a container for storing data values.If i want to store milk i have to store it into a milk-bottle 🍼


*/
// How to declare a variable ? ☑️
var milk = "milk";


// How to print a variable ? ☑️
console.log(milk);


// What are the main difference between var, let and const ? ☑️


/*




var let and const 👇👇👇

What is var ? ☑️

Ans: var is a global scope variable.var can be changed.

What is let ? ☑️

Ans: let is a block scope variable.let can be changed.

What is const ? ☑️

Ans: const is a block scope variable.const cannot be changed.
*/

// example code

var a = 10;
let b = 20;
const c = 30;

console.log(a); // Output: 10
console.log(b); // Output: 20
console.log(c); // Output: 30


/*

Data Types 👇👇👇


What is Data Types ? ☑️

Ans: Data types are the types of data that can be stored in a variable.





What are the common data types in JavaScript ? ☑️

Ans: 
  1. Number
  2. String
  3. Boolean
  4. Null
  5. Undefined
  6. Symbol
  7. BigInt


*/

// Number
let num1 = 10;
let num2 = 20.5;

// String
let str1 = "Hello";
let str2 = 'World';


// Boolean
let bool1 = true;
let bool2 = false;


// Null
let null1 = null;


// Undefined
let undefined1;


// BigInt
let bigInt1 = 1234567890123456789012345678901234567890n;


// Symbol
let symbol1 = Symbol("mySymbol");
let symbol2 = Symbol("mySymbol");


// typeof operator
console.log(typeof num1); // Output: "number"
console.log(typeof str1); // Output: "string"
console.log(typeof bool1); // Output: "boolean"
console.log(typeof null1); // Output: "object"
console.log(typeof undefined1); // Output: "undefined"
console.log(typeof bigInt1); // Output: "bigint"
console.log(typeof symbol1); // Output: "symbol"
