// Primitive  
// 7 types: String,Number,Boolearn Null,Undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 7895463217598463157n


// Reference (Non primitive)
// Array, Object,Functions

const heros = ["shaktiman","naagraj","doga"]
let myObj ={
    name: "Janvi",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
    
}
console.log(typeof heros);

//Types of Operator Results
//types of val => Result
//Undegined => "undefined"
//Null => "object"
//Boolean => "boolean"
//Number => "number"
//String => "string"
//Object(native and does not implement[call]) => "object"
//Object(native and does implement[call]) => "function"
