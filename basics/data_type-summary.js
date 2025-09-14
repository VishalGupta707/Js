// Js is dynamically typed lang
// In static we must declare variable types at compile time:
// int num = 5;  // Java (type is fixed)


// 2 types of data type

// 1. Primitive-> Immutable (cannot be changed)-> Stored by value

// 7 Types of primitive 
// String, Number, Boolean, null, undefined, Symbol, BigInt

// 2. Non Primitive-> Stored by reference
// Array, Object, Functions


//Arrays
const heroes=["batman","superman"];

//Object
let obj={
    name: "Vishal",
    age: 22,
}
console.log(typeof obj);
//object


//Function
const myFun=function(){
    console.log("Hello world");
}
console.log(typeof myFun);
//function -> But it is better called as function object


console.log(typeof null);
//Object

console.log(typeof undefined);
//undefined

