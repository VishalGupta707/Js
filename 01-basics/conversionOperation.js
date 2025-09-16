let score="33aa"

// Both are same statement
console.log(typeof score);
console.log(typeof(score));


// converting it into Number
let valueInNumber=Number(score)

// gives number
console.log(typeof valueInNumber)

// Gives NaN- Not a Number
console.log(valueInNumber)

//Conversion using Number("33")=> 33
// "33abc" => NaN
// true => 1  false =>0


let isLoggedIn=1
let booleanisLoggedIn=Boolean(isLoggedIn)

//give true as output
console.log(booleanisLoggedIn);

//Conversion using Boolean 
// 1=> true  0=> false
// "" =>false  "vishal"=> true


let num=33
let stringNumber=String(num)
// 33
console.log(stringNumber);

// return string
console.log(typeof stringNumber);


// /*******************Operations*******************/

console.log(3+3);

let str1="Vishal "
let str2="Gupta"
console.log(str1+str2);


console.log(2+2);
//4

console.log("2"+2);
//22

console.log(2+"2");
//22

console.log(1+2+"2");
//32

console.log("2"+1+2);
//212

console.log(+true);
//1