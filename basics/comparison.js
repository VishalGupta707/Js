console.log(1>2);


//comparison convert null to a number treating it as 0
console.log(null>=null);

console.log(null>0);
//false

console.log(null==0);
//false

console.log(null>=0);
//true as 0>=0


console.log(undefined>=0);
console.log(undefined==0);
console.log(undefined<=0);
//In any case checking with undefined is always false

console.log("2"==2);
// performs type conversion and return true

console.log("2"===2);
// No type conversion-> It compares both value AND type.

