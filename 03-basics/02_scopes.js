// Global scope
let a=20

//Block scope
if(true){
    let a=10
    const b=20
    var c=30
}

// console.log(a); -> a is not defined error
// console.log(b); -> b is not defined
console.log(c);
// 30 *** Problem



function one(){
    const username="Vishal"

    function two(){
        const website="Google"
        console.log(username);
    }
     two()
     //Vishal
}


one()





//++++++++++++++++++++ function and expression

// Function
function addOne(num){
    return num+1;
}
addOne(5)


// Expression -> Varibles can hold any thing function ,array,object etc
// addTwo(5) -> This will give error becoz we have also declared variable later-> Hoisting
const addTwo=function addTwo(num){
    return num+2;
}
console.log(addTwo(5))
//7