
function sayMyName(){
    console.log("V");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("L");
}

//sayMyName -> without parenthesis it is just a reference

//sayMyName() -> function

// value passed while function declaration-> parameter
function addTwoNumber(number1,number2){
    console.log(number1+number2);
}

addTwoNumber(3,3);
// value passed when calling the function-> argument


function addTwoNumber2(number1,number2){
    return number1+number2
}

const result=addTwoNumber2(3,4)
console.log("Result: ", result);
// Result:  7



function calculateCartPrice(...num1){
    // ... is known as rest Operator (also spread operator depending on use case)
    return num1
}
console.log(calculateCartPrice(1,2,3,4));
//[ 1, 2, 3, 4 ] -> stores in an array


const user={
    username:"Vishal",
    price:11
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)
// Username is Vishal and price is 11

//OR passing object
handleObject({
    username:"Vishal",
    price:12
})
//Username is Vishal and price is 12