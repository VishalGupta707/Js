const marvel=["IronMan","SpiderMan","Thor"];
const dc=["batman","superman","Flash"];

// marvel.push(dc);
// console.log(marvel);
//[ 'IronMan', 'SpiderMan', 'Thor', [ 'batman', 'superman', 'Flash' ] ]



const allHeros=marvel.concat(dc);
// concat -> Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(allHeros);
//[ 'IronMan', 'SpiderMan', 'Thor', 'batman', 'superman', 'Flash' ]


const all_new_Heros=[...marvel,...dc];
// Spread Operation [...] -> Spread all the element of array 
// There is no limitaion to adding spread element[...,...,...,like_wise]
console.log(all_new_Heros);
// [ 'IronMan', 'SpiderMan', 'Thor', 'batman', 'superman', 'Flash' ]


const arr=[1,2,3,[4,5],6,[7,[8,9,10]]];
const another_arr=arr.flat(Infinity);
console.log(another_arr);
/*[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]*/
//flat -> Returns a new array with all sub-array elements
//  concatenated into it recursively up to the specified depth.
// Infinity says that we dont need add the depth it will take care of it.


console.log(Array.from("Vishal"));
// [ 'V', 'i', 's', 'h', 'a', 'l' ]


console.log(Array.from({name:"Vishal"}));
// []-> Returns the empty array as we have not specified 
// that the array if to be made from keys or values


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
// [ 100, 200, 300 ]