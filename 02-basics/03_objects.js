//singleton --A singleton is an object that is created only once
//  and is shared across the entire program.
// Object.create 


// object literal
 const user={
    name: "Vishal",
    "fullName":"Vishal Gupta",
    age: 22,
    location: "Varanasi",
    email: "vishal@gmai.com",
    isLoggedIn:false,
    lastLogInDate: ["Sunday","Monday"]
 }
// 2Methos to access the obj
 console.log(user.name);
 //Vishal


 // [] inside sq. bracket and the key as string because by default it is stored as string
 // but in case of 1st i.e using dot operator it is not required
 console.log(user["name"]);
//Vishal
 

console.log(user["fullName"]);


// To change the value of object
user.age=20
console.log(user.age);
//20


// To stop the further changes in object Object.freeze() is used
//Object.freeze(user)
// user.name="Vishalll"
// console.log(user.name);



user.greeting=function(){
   console.log("Hello Good Morning");
}

console.log(user.greeting);

user.greetingTwo=function(){
   console.log(`Hello Good Morning ${this.name} `);
   // string interpolation
}

console.log(user.greetingTwo());
// Hello Good Morning Vishal 