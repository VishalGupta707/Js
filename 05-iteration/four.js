const coding=["js", "ruby","java"]

coding.forEach( function (val){
    console.log(val);
// js
// ruby
// java
})


coding.forEach( (val) =>{
    console.log(val);
    // using arrow function
})


const myCoding=[
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "JAVA",
        languageFileName: "jar"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    // Javascript
   // JAVA
})