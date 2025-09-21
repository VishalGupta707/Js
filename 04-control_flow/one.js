// == loose equality => Compares values only, not types.

// === Compares values AND types.

// if and else conditional


//+++++++++= Nullish Coalescing Operator (??) : null undefined++++++

//let result = value ?? defaultValue;
//If value is not null and not undefined, result = value.
// Otherwise, result = defaultValue.

let val1;
val1=5 ?? 10
console.log(val1);

val1=null ?? 10
// if the val is null or undefined then it gives 10
console.log(val1);
//10



//++++++++++++Ternary Operator++++++++++++++++
// condition ? true : false

const price=99
price >=100 ? console.log("Price is greater than 100") :
 console.log("price is less than 100");
 //price is less than 100