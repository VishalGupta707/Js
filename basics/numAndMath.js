const score=100
console.log(score);
//100

const balance=new Number(score)
console.log(balance);
//[Number: 100] -> excplicitly tell that it is of type Number

console.log(balance.toString());
//Converts into string

console.log(typeof balance);
//object


const otherNumber=23.4194
console.log(otherNumber.toPrecision(2));
//23


const hundreds=100000
console.log(hundreds.toLocaleString('en-IN'));
//1,00,000


// +++++++++++++++++++MATH++++++++++++++++++

console.log(Math.abs(-2));
//2

console.log(Math.round(5.6));
//6

console.log(Math.max(2,3,53,1));
//53


console.log(Math.random());
// Any value between 0 to 1