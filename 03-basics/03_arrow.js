const user={
    username: "Vishal",
    price:11,
    welcomeMessage:function(){
        console.log(`Welcome, ${this.username}`)
    }
}

user.welcomeMessage();
//Welcome, Vishal


console.log(user);
// {
//   username: 'Vishal',
//   price: 11,
//   welcomeMessage: [Function: welcomeMessage]
// }


user.username="Sam"
user.welcomeMessage();
//Welcome, Sam


console.log(user);
 //{
//   username: 'Sam',
//   price: 11,
//   welcomeMessage: [Function: welcomeMessage]
// }


console.log(this);
// {}
// But console.log(this) in browser gives Window

/// **Global Object in browser is Window**



const normalFunction = function(){
    let user="Vishal"
    console.log(this.user);
    // undefined
    // this inside a normal function (when called standalone)
    //  refers to the global object:
// In browsers → window
// In Node.js → global
}
normalFunction();
// Vishal



const normalFunction2 = function(){
    this.user="Vishal"
    console.log(this.user);
}
normalFunction2();
//Vishal





// Arrow function 
const arrowFunction= ()=>{
    let user="Vishal"
    console.log(this.user);
    // undefined → arrow functions don't have their own 'this';
    //  it uses outer/global 'this' which has no 'user' property

}
arrowFunction()
//undefined


const addTwo=function(num1,num2){
    return num1 + num2;
}
console.log(addTwo(3,4))
// 7



const addtwo = (num1,num2) => num1+num2;
// No need to tell explicit return 
// if num1+num2 is in {} curly braces then we need to write return
// if num1+num2 is in () or without any bracket then no need to add return

console.log(addtwo(3,4));
//7 
