'use strict'; // treat all code as newer version

// Primitive Datatypes

// 7 Types : String, Number, Boolean, Null, undefined, Symbol, BigInt


let state = null

// String
let greeting = "Hello, World!";
console.log("String:", greeting); // Output: String: Hello, World!

// Number
let age = 25;
console.log("Number:", age); // Output: Number: 25

// Boolean
let isJavaScriptFun = true;
console.log("Boolean:", isJavaScriptFun); // Output: Boolean: true

// Null
let emptyValue = null;
console.log("Null:", emptyValue); // Output: Null: null

// Undefined
let unassignedVar;
console.log("Undefined:", unassignedVar); // Output: Undefined: undefined

// Symbol
let uniqueId = Symbol("id");
console.log("Symbol:", uniqueId); // Output: Symbol: Symbol(id)

// BigInt
let largeNumber = 123456789012345678901234567890n;
console.log("BigInt:", largeNumber); // Output: BigInt: 123456789012345678901234567890n


// Reference or Non-Primitive

// Array, objects, Functions


// Array
let colors = ["red", "green", "blue"];
console.log("Array:", colors); // Output: Array: ["red", "green", "blue"]


// Object
let person = { name: "Alice", age: 30 };
console.log("Object:", person); // Output: Object: { name: "Alice", age: 30 }


// Function can be treated as varaiable

const myFunction = function(){
    console.log('Hello World');
    
}

console.log(typeof myFunction);
