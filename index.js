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



/*

Operators 👇👇👇

What are the operators in JavaScript ? ☑️

Ans: 
  1. Assignment Operators
  2. Arithmetic Operators
  3. Comparison Operators
  4. Logical Operators
  5. Bitwise Operators
  6. String Operators
  7. Ternary Operator

*/

// Assignment Operators
let x = 10;
let y = 20;
x += y; // x = x + y


// Arithmetic Operators
let a1 = 10;
let b1 = 20;
let c1 = a1 + b1; // c = 30
let d = a1 - b1; // d = -10
let e = a1 * b1; // e = 200
let f = a1 / b1; // f = 0.5


// Comparison Operators
let a2 = 10;
let b2 = 20;

// greater than
let c2 = a2 > b2; // c = false

// less than
let d2 = a2 < b2; // d = true
// greater than or equal to

let e2 = a2 >= b2; // e = false
// less than or equal to

let f2 = a2 <= b2; // f = true


// Logical Operators
let a3 = true;
let b3 = false;

// Logical AND (&&)
let c3 = a3 && b3; // c = false

// Logical OR (||)
let d3 = a3 || b3; // d = true

// Logical Not (!)
let e3 = !a3; // e = false


// Bitwise Operators
let a4 = 10;
let b4 = 20;

// Bitwise AND (&)
let c4 = a4 & b4; // c = 0

// Bitwise OR (|)
let d4 = a4 | b4; // d = 30

// Bitwise XOR (^)
let e4 = a4 ^ b4; // e = 30

// Bitwise NOT (~)
let f4 = ~a4; // f = -11

// String Operators
let a5 = "Hello";
let b5 = "World";
let c5 = a5 + b5; // c = "HelloWorld"
let d5 = a5 + " " + b5; // d = "Hello World"
let e5 = a5.concat(" ", b5); // e = "Hello World"

// Ternary Operator
let a6 = 10;
let b6 = 20;
let c6 = a6 > b6 ? "a is greater than b" : "a is less than or equal to b";


/*

Control Flow 👇👇👇

What is Control Flow ? ☑️

Ans: Control flow is the order in which a computer executes statements in a program.

What are the main types of control flow in JavaScript ? ☑️

Ans: 
  1. If-Else Statement
  2. Switch Statement
  3. While Loop
  4. For Loop
  5. For-In Loop
  6. For-Of Loop

*/

// If-Else Statement
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than or equal to b");
}

// Switch Statement
switch (a) {
  case 1:
    console.log("a is 1");
    break;
  case 2:
    console.log("a is 2");
    break;
  default:
    console.log("a is not 1 or 2");
    break;
}

// While Loop
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// For Loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// For-In Loop --> it is used to iterate over the properties of an object
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key);
}

// For-Of Loop --> it is used to iterate over the elements of an array
let arr = [1, 2, 3];
for (let value of arr) {
  console.log(value);
}


/*

Functions 👇👇👇

What is a Function ? ☑️

Ans: A function is a block of code that performs a specific task.

What are the main types of functions in JavaScript ? ☑️

Ans: 
  1. Named Function
  2. Anonymous Function
  3. Arrow Function

*/

// Named Function
function add(a, b) {
  return a + b;
}

// Anonymous Function
let subtract = function (a, b) {
  return a - b;
};

// Arrow Function
let multiply = (a, b) => a * b;

/*

Arrays 👇👇👇

What is an Array ? ☑️

Ans: An array is a collection of elements of the same type.

What are the main methods of arrays in JavaScript ? ☑️

Ans: 
  1. push()
  2. pop()
  3. shift()
  4. unshift()
  5. splice()
  6. slice()
  7. sort()
  8. reverse()
*/

// How to create an Array
let arr1 = [1, 2, 3];
let arr2 = new Array(1, 2, 3);

// How to access an element of an Array
let arr3 = [1, 2, 3];
let element = arr3[0];

// How to add an element to an Array
let arr4 = [1, 2, 3];
arr4.push(4);

// How to remove an element from an Array
let arr5 = [1, 2, 3];
arr5.pop();

// How to remove the first element from an Array
let arr6 = [1, 2, 3];
arr6.shift();

// How to add an element to the beginning of an Array
let arr7 = [1, 2, 3];
arr7.unshift(0);

// How to remove elements from an Array
let arr8 = [1, 2, 3];
arr8.splice(1, 1);

// How to copy an Array
let arr9 = [1, 2, 3];
let arr10 = arr9.slice();

// How to sort an Array
let arr11 = [4, 2, 1, 3];
arr11.sort();

// How to reverse an Array
let arr12 = [1, 2, 3];
arr12.reverse();

