const arr=[1,2,3,4,5]

// for in loop
for (const num of arr) {
     console.log(num);
     //1,2,3,4,5
}

const greetings="Hello World"
for (const greet of greetings) {   
    //console.log(`Each char of greeting ${greet}`);
}
// Each char of greeting H
// Each char of greeting e
// Each char of greeting l
// Each char of greeting l
// Each char of greeting o
// Each char of greeting  
// Each char of greeting W
// Each char of greeting o
// Each char of greeting r
// Each char of greeting l
// Each char of greeting d


const map=new Map();
// Map is a object
// Stores only unique and maintains the insertion order
map.set('IN', "INDIA")
map.set('USA', "AMERICA")
map.set('FR',"FRANCE")

//console.log(map);
//Map(3) { 'IN' => 'INDIA', 'USA' => 'AMERICA', 'FR' => 'FRANCE' }

for (const [key,value] of map) {
  //  console.log(key,':-',value)
}
// IN :- INDIA
// USA :- AMERICA
// FR :- FRANCE


const myobject={
    "name":'Vishal',
    "age":'Spiderman'
}

// for (const [key,value] of myobject) {
//     console.log(key, ':-', value);
// }
//   myobject is not iterable -> objects are not iterable using for in loop
