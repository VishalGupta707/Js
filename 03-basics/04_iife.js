// Immediately invoked function Expressions (IIFE)

// (fuction defination)(Function Execution)

// IIFE
(function chai(){
    console.log(`DB CONNECTED`);
}());
// semicolon is needed to run 2 IIFE to know then to stop the function


// Un-named IIFE
(()=>{
    console.log("DB CONNECTED");
})();


// Passing parameter in unnamed iife
((name)=>{
    console.log("Hello",name);
})('Vishal');
// Hello Vishal
