const name="Vishal"
const repoCount=5

console.log("My name is "+name+ " and repo count is "+repoCount);
//This is not good prectice to concatenate the string


console.log(`My name is ${name} and repo count is ${repoCount}`);
//This is good way and it uses back tics


const gameName="Vishal";
console.log(gameName[0]);
//Output as V -> stores string in key value pair


console.log(gameName.length);
// 6

var string="    Vishal     "
console.log(string.trim());
//Removes the white spaces from front and rear


const url="vishal.com/vishal%20gupta";
console.log(url.replace('%20','-'));
//vishal.com/vishal-gupta